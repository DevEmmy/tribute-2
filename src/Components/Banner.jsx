import React from 'react'
import { details } from './details'
import { Container, Text } from './Styled'

const Banner = () => {
  return (
    <Container padding="10px" id="details">
        <Text align="center" weight="600" family="Dancing Script" fontSize="24px">
            {details.title}
        </Text>

        <Text padding="10px 0">
            <span>Date & Time:</span> {details.time}
        </Text>

        <Text padding="10px 0">
            <span><a href={details.link}>Zoom Link</a></span>
        </Text>

        <Text padding="10px 0">
            <span>Meeting ID:</span>{details.id}
        </Text>

        <Text padding="10px 0">
            <span>Passcode:</span>{details.passcode}
        </Text>

        <Text padding="10px 0">
            <span>Address:</span>{details.address}
        </Text>
    </Container>
  )
}

export default Banner