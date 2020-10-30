// import
import { SpinnerBarProps } from "../../types"

// main
type GetAnimationDelay = (props: SpinnerBarProps) => number
export const getAnimationDelay: GetAnimationDelay = (props) => {
  const { index } = props
  return (1.1 - index / 10) * -1
}
