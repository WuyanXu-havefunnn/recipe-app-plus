import styled from 'styled-components'
import React, { useState } from 'react'
import { AirtableBase } from '../pages/api/airtable'
import toast from 'react-hot-toast'

export default function Newsletter() {
  const [email, setEmail] = useState('')

  const addNewEmail = () => {
    AirtableBase('signup').create(
      [
        {
          fields: { email },
        },
      ],
      function (err, records) {
        if (err) {
          toast.error(err)
          return
        }
        toast('Hi! You have successfully signed up for the newsletter!', {
          icon: '🥳',
        })
      },
    )
  }

  return (
    <Wrapper>
      <Tagline>Newsletter</Tagline>
      <Label>
        I will send out new recipes, links & inspirations about life a few times
        a month ~
      </Label>
      <EmailForm
        onSubmit={(event) => {
          event.preventDefault()
          addNewEmail()
          setEmail('')
        }}
      >
        <Input
          type="email"
          placeholder="signmeup@email.com"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value)
          }}
          required
        />
        <SubmitBtn type="submit">join</SubmitBtn>
      </EmailForm>
    </Wrapper>
  )
}

const Wrapper = styled.aside`
  width: 150px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`

const Tagline = styled.h3`
  font-family: 'Benne', serif;
  font-size: 1rem;
  margin-top: 50px;
  letter-spacing: 0.5px;
`

const Label = styled.label`
  font-family: 'Gotu', sans-serif;
  font-size: ${13 / 16}rem;
  width: 200px;
  line-height: 1.5;
`

const Input = styled.input`
  font-family: 'Gotu', sans-serif;
  font-size: ${12 / 16}rem;
  border: 1px solid #fce7f6;
  border-radius: 2px;
  padding: 5px;
  &:focus {
    outline: 1px solid #fac8da;
  }
`

const EmailForm = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const SubmitBtn = styled.button`
  font-family: 'Mansalva', cursive;
  font-size: ${12 / 16}rem;
  color: #d81159;
  background-color: #fce7f6;
  text-transform: uppercase;
  padding: 4px 6px;
  border: none;
  border-radius: 2px;
  margin-left: 5px;
  line-height: 1.5;

  &:hover {
    cursor: pointer;
  }
`
