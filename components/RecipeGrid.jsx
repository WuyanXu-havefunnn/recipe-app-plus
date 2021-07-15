import styled from 'styled-components'

const RecipeGrid = ({ children }) => {
  return <Wrapper>{children}</Wrapper>
}

export default RecipeGrid

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  margin-bottom: 60px;
`
