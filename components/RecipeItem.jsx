import styled from 'styled-components'
import React from 'react'

// const RecipeItem = React.forwardRef(({ href, imgSrc, name }, ref) => {
//   return (
//     <a href={href} ref={ref}>
//       <Wrapper>
//         <DishPic imgSrc={imgSrc}></DishPic>
//         <DishName>{name}</DishName>
//       </Wrapper>
//     </a>
//   )
// })

// const RecipeItem = React.forwardRef(({ href, imgSrc, name }, ref) => {
//   return (
//     <a href={href} ref={ref}>
//       <Wrapper>
//         <DishPic imgSrc={imgSrc}></DishPic>
//         <DishName>{name}</DishName>
//       </Wrapper>
//     </a>
//   )
// })

export default function RecipeItem({ imgSrc, name }) {
  return (
    <Wrapper>
      <DishPic imgSrc={imgSrc}></DishPic>
      <DishName>{name}</DishName>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 300px;
`

const DishPic = styled.div`
  background-image: url('${(p) => p.imgSrc}');
  background-position: bottom;
  flex: 1;
  background-size: cover;
  background-repeat: no-repeat;
  /* border-radius: 5px; */
  &:hover {
    cursor: pointer;
  }
`

const DishName = styled.h3`
  font-family: 'Alegreya Sans SC', sans-serif;
  font-size: ${18 / 16}rem;
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
  line-height: 1.5;
  &:hover {
    cursor: pointer;
    /* color: #e049fe; */
    color: #e91e6b;
  }
`

// export default RecipeItem
