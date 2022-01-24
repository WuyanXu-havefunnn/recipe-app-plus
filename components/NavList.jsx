import styled from 'styled-components'
import React from 'react'
import NavItem from './NavItem'
// import SearchButton from './SearchButton'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { QUERIES } from '../lib/constants'
import { useRouter } from 'next/router'

export default function NavList() {
  //get current route the query string, next js

  function getCurrentRoute() {
    const router = useRouter()
    return router.pathname
  }
  const currentRoute = getCurrentRoute()
  // console.log(currentRoute)

  return (
    <LinkList>
      <NavItem route="/" name="home" isSelected={currentRoute === '/'} />
      <NavItem
        route="/about"
        name="about"
        isSelected={currentRoute === '/about'}
      />
      <NavItem
        route="/recipes"
        name="recipes"
        isSelected={currentRoute === '/recipes'}
      />
      {/* <RecipeSection> */}
      {/* <ArrowWrapper>
          <NavItem name={<FontAwesomeIcon icon={faAngleDown} />}>
            <DropdownMenu />
          </NavItem>
        </ArrowWrapper> */}
      {/* </RecipeSection> */}
      <NavItem
        route="/life"
        name="bits of life"
        isSelected={currentRoute === '/life'}
      />
      {/* <SearchButton /> */}
    </LinkList>
  )
}

// function DropdownItem(props) {
//   return <ItemWrapper href={props.link}>{props.children}</ItemWrapper>
// }

// function DropdownMenu() {
//   return (
//     <DropdownWrapper>
//       <DropdownItem link="/vegetarian">vegetarian</DropdownItem>
//       <DropdownItem link="/sweet">desserts</DropdownItem>
//     </DropdownWrapper>
//   )
// }

const LinkList = styled.ul`
  list-style: none;
  display: flex;
  gap: 30px;
  padding-top: 40px;
  position: relative;
`

const ArrowWrapper = styled.div`
  @media ${QUERIES.tabletAndSmaller} {
    display: none;
  } ;
`

const DropdownWrapper = styled.div`
  position: absolute;
  top: 60px;
  left: 70px;
  width: 120px;
  margin-top: 1rem;
  overflow: hidden;
  border-radius: 20px;
  border: dotted #a2d2ff;
`

const ItemWrapper = styled.a`
  font-size: ${20 / 16}rem;
  height: 40px;
  background-color: white;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  padding: ${14 / 16}rem;
  &:hover {
    color: #fa800e;
  }
`

const RecipeSection = styled.div`
  display: flex;
  gap: 10px;
`
