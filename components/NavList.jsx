import styled from 'styled-components'
import React, { useState } from 'react'
import NavItem from './NavItem'
import SearchButton from './SearchButton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'

export default function NavList() {
  return (
    <LinkList>
      <NavItem filename="/about" name="about" />

      <RecipeSection>
        <NavItem filename="/recipes" name="recipes" />
        <NavItem name={<FontAwesomeIcon icon={faAngleDown} />}>
          <DropdownMenu />
        </NavItem>
      </RecipeSection>

      <NavItem filename="/life" name="bits of life" />
      <SearchButton />
    </LinkList>
  )
}

function DropdownItem(props) {
  return <ItemWrapper href={props.link}>{props.children}</ItemWrapper>
}

function DropdownMenu() {
  return (
    <DropdownWrapper>
      <DropdownItem link="/vegetarian">vegetarian</DropdownItem>
      <DropdownItem link="/sweet">desserts</DropdownItem>
    </DropdownWrapper>
  )
}

const LinkList = styled.ul`
  list-style: none;
  display: flex;
  gap: 30px;
  padding-top: 40px;
  position: relative;
`

const DropdownWrapper = styled.div`
  position: absolute;
  top: 60px;
  width: 120px;
  padding: 1rem 0;
  overflow: hidden;
`

const ItemWrapper = styled.a`
  font-size: ${20 / 16}rem;
  height: 40px;
  background-color: yellow;
  border-bottom: 1px solid black;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  padding: ${14 / 16}rem;
  &:hover {
    color: blue;
  }
`

const RecipeSection = styled.div`
  display: flex;
  gap: 10px;
`
