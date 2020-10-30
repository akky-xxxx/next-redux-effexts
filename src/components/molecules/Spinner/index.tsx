// import node_modules
import React, { FC, Fragment } from "react"

// import components
import { SpinnerWrapper } from "./components/atoms/SpinnerWrapper"
import { SpinnerIcon } from "./components/atoms/SpinnerIcon"
import { SpinnerBar } from "./components/atoms/SpinnerBar"

// main
const BAR_NUM = 12
const arr = [...Array(BAR_NUM)].fill("").map((_, index) => index + 1)

type SpinnerProps = {
  isShow?: boolean
}
export const Spinner: FC<SpinnerProps> = (props) => {
  const { isShow, children } = props

  if (!isShow) return <Fragment>{children}</Fragment>

  return (
    <SpinnerWrapper>
      <SpinnerIcon>
        {arr.map((value) => (
          <SpinnerBar key={value} index={value} />
        ))}
      </SpinnerIcon>
      {children}
    </SpinnerWrapper>
  )
}
