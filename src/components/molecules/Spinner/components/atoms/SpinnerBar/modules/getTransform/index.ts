// import
import { SpinnerBarProps } from "../../types"

// main
type GetTransform = (props: SpinnerBarProps) => number
export const getTransform: GetTransform = (props) => {
  const { index } = props
  return (index - 1) * 30
}
