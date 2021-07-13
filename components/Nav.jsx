import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

export default function Nav() {
  return (
    <nav>
      <LinkList>
        <li>
          <LinkItem href="pages/about.html">about</LinkItem>
        </li>
        <li>
          <LinkItem href="pages/recipe.html">recipes</LinkItem>
        </li>
        <li>
          <LinkItem href="pages/life.html">bits of life...</LinkItem>
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
  padding-bottom: 25px;
`

const LinkItem = styled.a`
  font-family: 'Benne', serif;
  color: #927b63;
  font-weight: 400;
  font-size: 16px;
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
