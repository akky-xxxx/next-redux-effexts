// import node_modules
import { Response } from "@specter/specter"

// import others
import { BaseService } from "../BaseService"
import { Service } from "../../shared/const/Service"
import { Endpoints } from "../../shared/const/Endpoints"
import { AnyObject } from "../../shared/types/Common"
import { ApiResponse, ServiceResponse } from "./types"
import { api2client } from "./modules/api2client"

// main
const { API } = Endpoints

export class TodoItems extends BaseService {
  constructor(config: AnyObject) {
    super(Service.TODO_ITEMS, config)
  }

  async read(): Promise<Response<AnyObject, ServiceResponse>> {
    try {
      const { data: responseData } = await this.axios.get<ApiResponse>(
        API.TODO_ITEMS,
      )
      return new Response({}, api2client(responseData))
    } catch (error) {
      return Promise.reject(error)
    }
  }
}
