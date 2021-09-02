import styled from 'styled-components'
import Link from 'next/link'
import { resolveHref } from 'next/dist/next-server/lib/router/router'

const colors = {
  vegetarian: {
    text: '#0b4727',
    bg: '#d0ecdd',
  },
  quick: {
    text: '#154677',
    bg: '#c6dff9',
  },
  beef: {
    text: '#8f027c',
    bg: '#fee7fe',
  },
  baking: {
    text: '#432f7e',
    bg: '#dad1f5',
  },
  healthy: {
    text: '#a03800',
    bg: '#f9e1cd',
  },
  seafood: {
    text: '#015153',
    bg: '#c5f1f3',
  },
  pork: {
    text: '#711617',
    bg: '#fae0e0',
  },
  chicken: {
    text: '#5a4a02',
    bg: '#fef3bc',
  },
  egg: {
    text: '#4f400c',
    bg: '#e8e5da',
  },
  rice: {
    text: '#01156d',
    bg: '#d5ddfe',
  },
  sweet: {
    text: '#9f1957',
    bg: '#feebf3',
  },
  // spicy: {
  //   text: '#9f1957',
  //   bg: '#feebf3',
  // },
}

export default function CategoryPills() {
  return (
    <Wrapper>
      <Tagline>Top Categories</Tagline>
      <Categories>
        <Link href="/vegetarian">
          <Button colorScheme={colors.vegetarian}>vegetarian</Button>
        </Link>
        <Button type="button" colorScheme={colors.quick}>
          quick & easy
        </Button>
        <Button type="button" colorScheme={colors.beef}>
          beef
        </Button>
        <Button type="button" colorScheme={colors.baking}>
          baking
        </Button>
        <Button type="button" colorScheme={colors.healthy}>
          healthy
        </Button>
        <Button type="button" colorScheme={colors.seafood}>
          seafood
        </Button>
        <Button type="button" colorScheme={colors.pork}>
          pork
        </Button>
        <Button type="button" colorScheme={colors.chicken}>
          chicken
        </Button>
        <Button type="button" colorScheme={colors.egg}>
          egg
        </Button>
        <Button type="button" colorScheme={colors.rice}>
          rice & noodles
        </Button>

        <Link href="/sweet">
          <Button colorScheme={colors.sweet}>sweety sweet things</Button>
        </Link>
      </Categories>
    </Wrapper>
  )
}

const Wrapper = styled.aside`
  width: 200px;
`

const Tagline = styled.h3`
  font-family: 'Benne', serif;
  font-size: 1rem;
  margin: 50px 0 10px 0;
  letter-spacing: 0.5px;
`

const Categories = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 200px;
  gap: 10px;
`

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
  color: ${(p) => p.colorScheme.text};
  background-color: ${(p) => p.colorScheme.bg};
  line-height: 1.5;
  &:hover {
    cursor: pointer;
    filter: brightness(105%);
    transition: 100ms ease-out;
  }
`
