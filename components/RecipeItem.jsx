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

export default function RecipeItem({ imgSrc, name, tagline }) {
  return (
    <Wrapper>
      <DishPic imgSrc={imgSrc}></DishPic>
      <DishName>{name}</DishName>
      <Tagline>{tagline || 'This will blow your mind.'}</Tagline>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 400px;
  padding: 24px;
  border-radius: 4px;
  overflow: hidden;
  box-shadow: 2px 4px 8px hsl(0deg 0% 0% / 0.15);
`

const DishPic = styled.div`
  background-image: url('${(p) => p.imgSrc}');
  background-position: bottom;
  flex: 1;
  background-size: cover;
  background-repeat: no-repeat;
  margin-left: -24px;
  margin-right: -24px;
  margin-top: -24px;
  /* border-radius: 5px; */
  &:hover {
    cursor: pointer;
  }
`

const DishName = styled.h3`
  /* font-family: 'Alegreya Sans SC', sans-serif; */
  font-family: 'Gotu', sans-serif;
  font-size: ${20 / 16}rem;
  font-weight: 700;
  margin-top: 24px;
  /* text-align: center; */
  overflow-wrap: break-word;
  hyphens: auto;
  text-transform: capitalize;
  /* text-transform: uppercase; */
  letter-spacing: 1px;
  line-height: 1.5;
  &:hover {
    cursor: pointer;
    /* color: #e049fe; */
    color: #e91e6b;
  }
`

const Tagline = styled.p`
  margin-top: 6px;
  /* font-family: 'Karla', sans-serif; */
  color: gray;
  font-weight: 300;
  line-height: 1.5;
`

// export default RecipeItem
