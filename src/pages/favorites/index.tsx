import { Layout } from '@/components/layouts/Layout'
import { NoFavorites } from '@/components/ui/NoFavorites'
import { Container, Text, Image, Grid, Card } from '@nextui-org/react'
import { useEffect, useState } from 'react'
import { localFaforites } from '../../../utils'
import { FavoritePokemons } from '@/components/pokemon/FavoritePokemons'

const FavoritePage = () => {

  const [favoritePokemons, setFavoritePokemons] = useState<number[]>([])

  useEffect(() => {

    setFavoritePokemons(localFaforites.pokemons);
    
  }, [])
  
  return (
    <Layout>
        {favoritePokemons.length===0? <NoFavorites/>:(
          <FavoritePokemons favoritePokemons={favoritePokemons}/>
        )}
    </Layout>
  )
}

export default FavoritePage