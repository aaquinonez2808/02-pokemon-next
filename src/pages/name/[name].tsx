import { GetStaticProps, GetStaticPaths, NextPage } from "next";
import React, { useEffect, useState } from "react";
import pokeApi from "../../../api/pokeApi";
import { Pokemon } from "../../../interfaces/pokem-full";
import { Layout } from "@/components/layouts/Layout";
import { Button, Card, Container, Grid, Image, Text } from "@nextui-org/react";
import localFavorites from "../../../utils/localFavorites";

import confetti from "canvas-confetti";
import { PokemonListResponse } from "../../../interfaces";
import { getPokemonInfo } from "../../../utils/getPokemonInfo";

interface Props {
  pokemon: Pokemon;
}
const PokemonByNamePage: NextPage<Props> = ({ pokemon }) => {
  const [isInFavorites, setIsInFavorites] = useState(false);

  //   useEffect(()=>{
  //     setIsInFavorites(localFavorites.existFavorites(pokemon.id));
  //   }, [pokemon.id])

  const handleToogleFavorite = () => {
    localFavorites.toggleFavorite(pokemon.id);
    setIsInFavorites(!isInFavorites);
    if (isInFavorites) return;

    confetti({
      zIndex: 999,
      particleCount: 100,
      spread: 160,
      angle: -100,
      origin: { y: 0, x: 1 },
    });
  };

  return (
    <Layout title="Agun Pokemon">
      <Grid.Container css={{ marginTop: "5px" }} gap={2}>
        <Grid xs={12} sm={4}>
          <Card hoverable css={{ padding: "20px" }}>
            <Card.Body>
              <Card.Image
                src={
                  pokemon.sprites.other?.dream_world.front_default ||
                  "/not-image.png"
                }
                alt={pokemon.name}
                width={"100%"}
                height={200}
              />
            </Card.Body>
          </Card>
        </Grid>
        <Grid xs={12} sm={8}>
          <Card>
            <Card.Header
              css={{ display: "flex", justifyContent: "space-between" }}
            >
              <Text h1 transform="capitalize">
                {pokemon.name}
              </Text>
              <Button
                color={"gradient"}
                ghost={!isInFavorites}
                onClick={handleToogleFavorite}
              >
                {isInFavorites ? "En Favoritos" : " Guardar en Favoritos"}
              </Button>
            </Card.Header>
            <Card.Body>
              <Text size={30}>Sprintes:</Text>
              <Container direction="row" display="flex">
                <Image
                  src={pokemon.sprites.front_default}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
                <Image
                  src={pokemon.sprites.back_default}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
                <Image
                  src={pokemon.sprites.front_shiny}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
                <Image
                  src={pokemon.sprites.back_shiny}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
              </Container>
            </Card.Body>
          </Card>
        </Grid>
      </Grid.Container>
    </Layout>
  );
};

export default PokemonByNamePage;

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const { data } = await pokeApi.get<PokemonListResponse>("/pokemon?limit=151");
  const pokemonsName: string[] = data.results.map((pokemon) => pokemon.name);
  return {
    paths: pokemonsName.map((name) => ({
      params: { name },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { name } = params as { name: string };

  return {
    props: {
      pokemon: await getPokemonInfo(name),
    },
  };
};
