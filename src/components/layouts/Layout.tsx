import Head from "next/head";
import { FC } from "react";
import { Navbar } from "../ui/Navbar";

type Props = {
  children: React.ReactNode;
  title?: string;
};

export const Layout: FC<Props> = ({ children, title }: Props) => {
  return (
    <>
      <Head>
        <title>{title || "Pokemon App"}</title>
        <meta name="author" content="Alexander Arboleda" />
        <meta name="description" content="Informacion sobre el pokemon xxxxx" />
        <meta name="keywords" content="pokemon, pokedex, pokeapi" />
      </Head>
      <Navbar/>

      <main style={{
        padding: '0px 20px',
      }}>{children}</main>
    </>
  );
};
