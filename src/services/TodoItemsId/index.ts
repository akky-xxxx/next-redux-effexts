// import node_modules
import { Response, Request } from "@specter/specter"

// import others
import { BaseService } from "../BaseService"
import { Service } from "../../shared/const/Service"
import { Endpoints } from "../../shared/const/Endpoints"
import { AnyObject } from "../../shared/types/Common"
import { ServiceErrorResponse } from "../types"
import { removeUndefinedKeys } from "../../shared/utils/removeUndefinedKeys"

// main
const { API } = Endpoints

type ThisRequest = Partial<{
  id: string
  title: string
  description: string
  isDone: boolean
}>

export class TodoItemsId extends BaseService {
  constructor(config: AnyObject) {
    super(Service.TODO_ITEMS_ID, config)
  }

  async update(
    req: Request<Record<string, string>, unknown, ThisRequest>,
  ): Promise<Response<AnyObject, unknown>> {
    const {
      body: { id, title, description, isDone },
    } = req

    if (!id) {
      const errorData: ServiceErrorResponse = {
        status: 400,
        message: "Bad Request",
      }
      return Promise.reject(errorData)
    }

    const requestBody = removeUndefinedKeys({
      id,
      title,
      description,
      is_done: isDone,
    })

    try {
      await this.axios.put(API.TODO_ITEMS_ID.replace("{:id}", id), requestBody)
      return new Response({}, {})
    } catch (error) {
      const errorData: ServiceErrorResponse = {
        status: error.response.status || 500,
        message: error.response.statusText || "Internal server error",
      }
      return Promise.reject(errorData)
    }
  }
}
