import React, { useState } from 'react'
import { details } from './details'
import { Banner, Container, Icon, NavBarContainer, Text } from './Styled'
import img from "./images/assets/last.jpg"
import { HiMenuAlt2, HiX } from 'react-icons/hi'
const Header = () => {
  const [showNav, setShowNav] = useState(false)

  const items = [

    {
      title: "Home",
      link: "#home"
    },
    {
      title: "Biography",
      link: "#biography"
    },
    {
      title: "Gallery",
      link: "#gallery"
    },
    {
      title: "Details",
      link: "#details"
    },
    {
      title: "Tributes",
      link: "#tributes"
    }
  ]


  const Nav = ()=>{
    return(
      <NavBarContainer>
        <Icon>
          <HiX color='white' size={20} onClick={()=> setShowNav(false)}/>
        </Icon>
          {
            items.map((_, i)=>{
              return(
                
                  <Text
                color='white'
                align="center"
                fontSize="20px"
                padding="20px 0"
                onClick={()=>{setShowNav(false)}}>
                  <a href={_.link}>
                    {_.title}
                  </a>
                  
                </Text>
                
              )
            })
          }
      </NavBarContainer>
    )
  }

  return (
    <Container margin="80px auto 0" id="home">
      <Icon>
        <HiMenuAlt2 size={30} color="white"
        onClick={()=> setShowNav(!showNav)}
        />
      </Icon>

        <Text align="center" fontSize="25px" padding="10px 0">
          {details.name}
        </Text>

        <Banner>
          <img src={img} alt="" />
        </Banner>

        <Text align="center" fontSize="25px" padding="20px 0 0" id="biography">
          Biography
        </Text>
        <Text padding="10px">
          {details.bio}
        </Text>

        {showNav && <Nav />}
    </Container>
  )
}

export default Header