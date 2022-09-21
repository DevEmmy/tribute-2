import React from 'react'
import { details } from './details'
import { Banner, Container, Text } from './Styled'
import img from "./images/choir.jpg"
const Header = () => {
  return (
    <Container>
        <Text align="center" fontSize="25px" padding="10px 0">
          {details.name}
        </Text>

        <Banner>
          <img src={img} alt="" />
        </Banner>

        <Text align="center" fontSize="25px" padding="20px 0 0">
          Biography
        </Text>
        <Text padding="10px">
          {details.bio}
        </Text>
    </Container>
  )
}

export default Header