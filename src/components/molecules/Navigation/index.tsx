// import node_modules
import React, { FC } from "react"
import Link from "next/link"
import styled from "styled-components"

// main
const menu = [
  {
    href: "/",
    label: "home",
  },
  {
    href: "/list",
    label: "list",
  },
] as const

export const Navigation: FC = () => {
  return (
    <nav>
      <StyledUl>
        {menu.map((menuItem) => {
          const { href, label } = menuItem
          return (
            <StyledLi>
              <Link href={href}>{label}</Link>
            </StyledLi>
          )
        })}
      </StyledUl>
    </nav>
  )
}

const StyledUl = styled.ul`
  border-bottom: 1px solid #ccc;
  border-top: 1px solid #ccc;
  display: flex;
  list-style: none;
  padding: 10px 0;
`

const StyledLi = styled.li`
  & + & {
    margin-left: 10px;
  }
`
