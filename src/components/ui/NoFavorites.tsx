import { Container, Image, Text } from '@nextui-org/react'
import React from 'react'

export const NoFavorites = () => {
  return (
    (
        <Container css={{
            display:'flex', 
            flexDirection:'column', 
            height:'calc(100vh-100)', 
            placeItems:'center',
            alignSelf:'center'
          }}
          >
            <Text h1>No hay Favoritos</Text>
            <Image
            src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/132.svg'
            alt='No hay Favoritos'
            width={250}
            height={250}
            css={{pacity:0.2}}
            />
          </Container>
    )
  )
}
