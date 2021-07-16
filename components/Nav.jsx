import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'

export default function Nav() {
  return (
    <nav>
      <LinkList>
        <li>
          <Link href="/about">
            <LinkItem>about</LinkItem>
          </Link>
        </li>
        <li>
          <Link href="/recipes">
            <LinkItem>recipes</LinkItem>
          </Link>
        </li>
        <li>
          <Link href="/life">
            <LinkItem>bits of life</LinkItem>
          </Link>
        </li>

        <li>
          <SearchButton>
            <FontAwesomeIcon icon={faSearch} />
          </SearchButton>
        </li>
      </LinkList>
    </nav>
  )
}

const LinkList = styled.ul`
  list-style: none;
  display: flex;
  gap: 30px;
  padding-top: 40px;
`

const LinkItem = styled.a`
  font-family: 'Benne', serif;
  color: #6b5b48;
  font-weight: 400;
  font-size: ${20 / 16}rem;
  letter-spacing: 1px;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    color: #76877d;
  }
`

const SearchButton = styled.button`
  background-color: #f5f5f5;
  color: #76877d;
  border: none;
  font-size: 15px;
  &:hover {
    cursor: pointer;
  }
`
