import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Card, Text, TributeContainer } from './Styled'
import 'swiper/css';
import { tributes } from './details';

const Tribute = () => {
  return (
    <TributeContainer id='tributes'>
      <Text align="center" fontSize='26px' fontWeight="600">
          Tributes
      </Text>
        <Swiper
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {
        tributes.map((_, i)=>{
            return(
                <SwiperSlide>
                <Card>
                    <Text fontSize="14px" color="white" align="center" family="poppins">
                       { '"' + _.tribute.trim()} 
                    </Text>

                    <Text align="center" fontSize="12px" color='white' padding="15px">
                        {"-" + _.by.trim()}
                    </Text>
                    
                    </Card>
                </SwiperSlide>
                
                
            )
        })
      }
    </Swiper>
    </TributeContainer>
  )
}

export default Tribute