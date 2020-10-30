// import node_modules
import Specter from "@specter/specter"
import { Router } from "express"

// import services
import { TodoItems } from "./TodoItems"

// import others
import { ServiceInformation } from "./types"
import { createLogger } from "../shared/utils/createLogger"
import { Endpoints } from "../shared/const/Endpoints"

// main
const { XHR } = Endpoints
const services = [TodoItems]
const logger = createLogger(__filename)
const middleware = Specter.createMiddleware({})
const apiAggregation = Router()

const serviceInformation: ServiceInformation[] = []
services.forEach((Service) => {
  const service = new Service({})
  Specter.registerService(service)
  serviceInformation.push({
    serviceName: Service.name,
    endpoint: service.name,
  })
})
const serviceMessage = serviceInformation
  .map(
    ({ serviceName, endpoint }) =>
      `- ${serviceName} ( endpoint: ${XHR}/${endpoint} )`,
  )
  .join("\n")
const message = `registered the below services.
${serviceMessage}`
logger.trace(message)

apiAggregation.use(XHR, middleware)

export { apiAggregation }
