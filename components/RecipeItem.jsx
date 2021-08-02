import styled from 'styled-components'

export default function RecipeItem({ link, imgSrc, name }) {
  return (
    <a href={link}>
      <Wrapper>
        <DishPic imgSrc={imgSrc}></DishPic>
        <DishName>{name}</DishName>
      </Wrapper>
    </a>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  /* background-color: lightblue; */
  height: 300px;
`

const DishPic = styled.div`
  background-image: url('${(p) => p.imgSrc}');
  background-position: bottom;
  flex: 1;
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
  text-align: center;
  overflow-wrap: break-word;
  hyphens: auto;
  padding-top: 10px;
  padding-left: 5px;
  padding-right: 5px;
  height: 48px;
  text-transform: capitalize;
  letter-spacing: 1px;
  &:hover {
    cursor: pointer;
    color: #e049fe;
  }
`
