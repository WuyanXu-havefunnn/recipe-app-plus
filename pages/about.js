import styled from 'styled-components'
import Layout from '../components/Layout'


export default function AboutPage() {
  return (
    <Layout alignment='flex-start'>
      <Wrapper>
      <ImgWrapper>
        <IntroImg1 />
        <IntroImg2 />
        <IntroImg3 />
      </ImgWrapper>
      
      <IntroSection>
        <Tagline>Hi! my name is Wuyan 👩🏻‍🍳</Tagline>
        <IntroLine>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita quibusdam voluptatum odit praesentium earum ducimus corrupti perspiciatis? Praesentium, in nulla. Distinctio tempora reiciendis aperiam debitis ipsa ab quia, ratione eaque! Thanks for stopping by!</IntroLine>
      </IntroSection>
      </Wrapper>
    </Layout>
  )
}

const Wrapper=styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const ImgWrapper=styled.div`
  display:flex;
  justify-content: space-between;
  
`

const IntroImg1=styled.div`
    background-image: url("https://images.squarespace-cdn.com/content/v1/576a96f103596e7bb345d062/1505126961886-CRYLVDXAFSCDWQ9D6J62/ke17ZwdGBToddI8pDm48kNiEM88mrzHRsd1mQ3bxVct7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0s0XaMNjCqAzRibjnE_wBlkZ2axuMlPfqFLWy-3Tjp4nKScCHg1XF4aLsQJlo6oYbA/Soup1.jpg?format=1500w");
    width: 250px;
    height: 250px;
    background-repeat: no-repeat;
    background-size: contain;
`

const IntroImg2=styled.div`
    background-image: url("https://images.squarespace-cdn.com/content/v1/576a96f103596e7bb345d062/1505143108469-WPK1WVW47ZKNU7TQZDBS/Summer+rolls.jpg?format=2500w");
    background-repeat: no-repeat;
    background-size: contain;
    width: 250px;
    height: 250px;
`

const IntroImg3=styled.div`
    background-image: url("https://images.squarespace-cdn.com/content/v1/576a96f103596e7bb345d062/1507201267544-GM8Q9NBD2KHNX7O76S9R/SWEETCORNSOUP.jpg?format=1500w");
    width: 250px;
    height: 250px;
    background-repeat: no-repeat;
    background-size: contain;
`

const IntroSection=styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 30px 50px;
`

const Tagline=styled.h1`
    font-family: 'Gotu', sans-serif;
    font-size: 1rem ;
`

const IntroLine=styled.p`
    font-family: 'Gotu', sans-serif;
    color:#726953;
    font-size: 0.9rem;
    margin-top: 15px;
    line-height: 25px;
`

