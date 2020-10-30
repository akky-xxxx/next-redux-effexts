// import node_modules
import styled, { keyframes } from "styled-components"

// import
import { SpinnerBarProps } from "./types"
import { getAnimationDelay } from "./modules/getAnimationDelay"
import { getTransform } from "./modules/getTransform"
import { Colors } from "../../../../../../shared/const/Colors"

// main
const { COLOR_9999FF } = Colors

const animation = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`

export const SpinnerBar = styled.div<SpinnerBarProps>`
  animation-delay: ${getAnimationDelay}s;
  animation-duration: 1.2s;
  animation-iteration-count: infinite;
  animation-name: ${animation};
  animation-timing-function: linear;
  transform: rotate(${getTransform}deg);
  transform-origin: 40px 40px;

  &::after {
    background: ${COLOR_9999FF};
    border-radius: 20%;
    content: " ";
    display: block;
    height: 18px;
    left: 37px;
    position: absolute;
    top: 3px;
    width: 6px;
  }
`
