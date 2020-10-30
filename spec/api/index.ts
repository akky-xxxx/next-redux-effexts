// import node_modules
import { convert } from "@agreed/typed"

// import modules
import { todoItemsGet } from "./modules/todoItems/get"
import { todoItemsIdPut } from "./modules/todoItems/:id/put"

// main
const agrees = [...todoItemsGet, ...todoItemsIdPut]

module.exports = convert(...agrees)
