import styled from 'styled-components'

// const dishItem = {
//   dish1: {
//     bgImg:
//       'https://images.unsplash.com/photo-1523905330026-b8bd1f5f320e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1358&q=80',
//     text: 'homestyle dumplings',
//   },
// }

export default function RecipeItem({ imgSrc, name }) {
  return (
    <Wrapper>
      <DishPic imgSrc={imgSrc}>
        <a href="#"></a>
      </DishPic>
      <DishName>{name}</DishName>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const DishPic = styled.div`
  background-image: url('${(p) => p.imgSrc}');
  background-position: bottom;
  width: 200px;
  height: 230px;
  background-size: cover;
  background-repeat: no-repeat;
  &:hover {
    cursor: pointer;
  }
`

const DishName = styled.h3`
  font-family: 'Alegreya Sans SC', sans-serif;
  font-size: 1rem;
  font-weight: 400;
  width: 200px;
  padding: 5px 10px 0 10px;
  text-align: center;
  margin-bottom: 15px;
  text-transform: capitalize;
  letter-spacing: 1px;
  &:hover {
    cursor: pointer;
  }
`
