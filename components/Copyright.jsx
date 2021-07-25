import styled from 'styled-components'

export default function Copyright() {
  return (
    <Wrapper>© 2021-present Wuyan's little Hut. All Rights Reserved.</Wrapper>
  )
}

const Wrapper = styled.small`
  font-family: 'Benne', serif;
  font-size: ${12 / 16}rem;
  letter-spacing: 1px;
  line-height: 2;
`
