import styled from 'styled-components'
import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'
import { QUERIES } from '../lib/constants'
import NavList from './NavList'

export default function Nav() {
  return <NavList />
}

// const ListItem = styled.a`
//   font-family: 'Benne', serif;
//   color: #6b5b48;
//   font-weight: 400;
//   font-size: ${20 / 16}rem;
//   letter-spacing: 1px;
//   text-decoration: none;
//   cursor: pointer;
//   &:hover {
//     /* color: #76877d; */
//     color: #f89c46;
//   }

//   @media ${QUERIES.phoneAndSmaller} {
//     font-size: 1rem;
//   }
// `

// const SearchButton = styled.button`
//   background-color: #f5f5f5;
//   /* color: #76877d; */
//   color: #7fe206;
//   border: none;
//   font-size: 18px;
//   &:hover {
//     cursor: pointer;
//     transform: translateY(-5px);
//     transition: 100ms ease-out;
//   }
// `
