import React, { useState } from 'react'
import Carousel from 'react-multi-carousel'
import { Banner, Container, DIContainer, Icon, Text } from './Styled'
import "react-multi-carousel/lib/styles.css";
import { gallery } from './images/gallery';
import {HiArrowLeft} from "react-icons/hi"
const Gallery = () => {
  const [image, setImage] = useState()
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const DisplayImage = ()=>{
    return(
        <DIContainer>
            <Icon>
                <HiArrowLeft color="white" size={20} onClick={()=> setImage(null)}/>
            </Icon>
            <img src={image} alt="" />
        </DIContainer>
    )
}

  return (
    <Container id="gallery">
      <Text align="center" fontSize="24px" weight="600" padding="10px">
        Gallery
      </Text>
        <Carousel responsive={responsive}>
            {
              gallery.map((img, i)=>{
                return(
                  <Banner key={i} onClick={()=> setImage(img.img)}>
                    <img className='tribute' src={img.img} alt="" />
                  </Banner>
                )
              })
            }
        </Carousel>

        {image && <DisplayImage />}
    </Container>
  )
}

export default Gallery