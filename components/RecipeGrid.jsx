import styled from 'styled-components'

const RecipeGrid = ({ children }) => {
  return <Wrapper>{children}</Wrapper>
}

export default RecipeGrid

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 24px;
  padding-bottom: 60px;
`
