import styled from 'styled-components'
import Link from 'next/dist/client/link'

export default function PillButton({ color, children, src }) {
  return (
    <Link href={src}>
      <Button colorScheme={color}>{children}</Button>
    </Link>
  )
}

const Button = styled.button`
  font-family: 'Karla', sans-serif;
  border: none;
  font-size: 0.8rem;
  font-weight: 600;
  width: auto;
  height: auto;
  padding: 7px;
  border-radius: 3px;
  text-align: centers;
  color: ${({ colorScheme }) => colorScheme.text};
  background-color: ${({ colorScheme }) => colorScheme.bg};
  line-height: 1.5;
  &:hover {
    cursor: pointer;
    filter: brightness(105%);
    transition: 100ms ease-out;
  }
`
