import {Spacer, Text, useTheme } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";

export const Navbar = () => {
  const { theme } = useTheme();
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "start",
        padding: "0px 20px",
        backgroundColor: theme?.colors.gray900.value,
      }}
    >
      <Image
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
        alt="Pokemon"
        width={50}
        height={50}
      />
      <Link href="/" passHref>
          <Text color="white" h2>
            P
          </Text>
          <Text color="white" h3>
            okemon
          </Text>
      </Link>
      <Spacer css={{ flex: 1 }} />
      <Link href="/favorites" passHref>
          <Text color="white" h3>
            Favoritos
          </Text>
      </Link>
    </div>
  );
};
