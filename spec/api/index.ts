// import node_modules
import { convert } from "@agreed/typed"

// import modules
import { todoItemsGet } from "./modules/todoItems/get"

// main
const agrees = [...todoItemsGet]

module.exports = convert(...agrees)
