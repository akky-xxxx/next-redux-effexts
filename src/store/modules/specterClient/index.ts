// import node_modules
import Client from "@specter/client"

// import others
import { Endpoints } from "../../../shared/const/Endpoints"

// main
const { XHR } = Endpoints
export const specterClient = new Client({
  base: XHR,
  validateStatus: (status: number) => status < 400,
})
