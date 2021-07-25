import styled from 'styled-components'

const RecipeGrid = ({ children }) => {
  return <Wrapper>{children}</Wrapper>
}

export default RecipeGrid

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  gap: 20px;
  padding-bottom: 60px;
`
