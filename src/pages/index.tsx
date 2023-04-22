import { Layout } from "@/components/layouts/Layout";
import { GetStaticProps, NextPage } from "next";
import pokeApi from "../../api/pokeApi";
import { PokemonListResponse, SmallPokemon } from "../../interfaces";
import { Card, Grid, Row, Text } from "@nextui-org/react";
import { PokemonCard } from "@/components/pokemon/PokemonCard";

interface Props {
  pokemons: SmallPokemon[];
}

const HomePage: NextPage<Props> = (props) => {
  return (
    <Layout title="Listado de Pokemons">
      <Grid.Container gap={2} justify="flex-start">
        {props.pokemons.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </Grid.Container>
    </Layout>
  );
};

export default HomePage;

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data } = await pokeApi.get<PokemonListResponse>("/pokemon?limit=151");

  const pokemons: SmallPokemon[] = data.results.map((item, id) => {
    return {
      ...item,
      id: id + 1,
      img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
        id + 1
      }.svg`,
    };
  });
  return {
    props: {
      pokemons,
    },
  };
};
