// import { useState } from "react"
import styled from "styled-components"

const HomeContainer = styled.div`
      width: 100%;
      display: flex;
      align-items: center;
      flex-direction: column;
`
const Balloon = styled.div`
      height: 100px;
      width: 100px;
      border-radius: 50px;
      background-color: #20202;
`

function Home() {

  return (
    <HomeContainer>
      <h1>Page d'accueil 🏡</h1>
      <Balloon />
    </HomeContainer>
  )
}



export default Home
