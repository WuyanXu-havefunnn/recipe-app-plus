import styled from 'styled-components'
import React, { useState } from 'react'
import { QUERIES } from '../lib/constants'

export default function NavItem(props) {
  const [open, setOpen] = useState(false) // call the useState() function, returns an array, we can destructure the array; the first value is a boolean value (state); the second value is a function used to change the state

  // // using setState (can only be used in class component´)
  // this.state = {
  //   name: '',
  //   age: 0,
  // }
  // setState({
  //   name: 'wuyan',
  //   age: 25,
  // })

  // // using useState hook (can only used in functional components)
  // const [name, setName] = useState('')
  // const [age, setAge] = useState(0)
  // setName('wuyan')
  // setAge(25)

  // false is a default value of state
  return (
    //   when clicked, it will envoke the setOpen() function we got from useState, and it will flip the open value to the opposite of whatever it currently is (the user can toggle the state on and off)

    //

    <ListItem>
      <ItemName href={props.filename} onClick={() => setOpen((open) => !open)}>
        {props.name}
      </ItemName>
      {open && props.children}
      {/* if the open state is true, we will show its children; if not, nothing will be showed here */}
    </ListItem>
  )
}

const ListItem = styled.li`
  font-family: 'Benne', serif;
  color: #6b5b48;
  font-weight: 400;
  font-size: ${22 / 16}rem;
  letter-spacing: 1px;
  text-decoration: none;

  @media ${QUERIES.phoneAndSmaller} {
    font-size: 1rem;
  }
`

const ItemName = styled.a`
  cursor: pointer;
  &:hover {
    color: #f89c46;
  }
`
