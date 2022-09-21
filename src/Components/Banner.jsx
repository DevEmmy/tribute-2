import React from 'react'
import { details } from './details'
import { Container, Text } from './Styled'

const Banner = () => {
  return (
    <Container>
        <Text align="center" weight="600" fontSize="24px">
            {details.title}
        </Text>

        <Text>
            <span>Date & Time:</span> {details.time}
        </Text>

        <Text>
            <span><a href={details.link}>Zoom Link</a></span>
        </Text>

        <Text>
            <span>Meeting ID:</span>{details.id}
        </Text>

        <Text>
            <span>Passcode:</span>{details.passcode}
        </Text>

        <Text>
            <span>Address:</span>{details.address}
        </Text>
    </Container>
  )
}

export default Banner