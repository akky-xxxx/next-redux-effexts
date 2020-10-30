// import node_modules
import React, { FC } from "react"

import { AnyObject } from "../../../shared/types/Common"

const data: AnyObject[] = [
  {
    id: "1",
    text: "text1",
  },
  {
    id: "2",
    text: "text2",
  },
]

// main
export const Home: FC = () => {
  return (
    <div>
      <h1>Home</h1>
      <div>
        {data.map((item) => {
          const { id, text } = item
          if (typeof id !== "string" || typeof text !== "string") return null
          return <div key={id}>{text}</div>
        })}
      </div>
    </div>
  )
}
