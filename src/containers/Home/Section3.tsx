import HomeTitle from "@/src/components/HomeTitle";
import React from "react";
import { Stack, Container, Typography } from "@mui/material";
import Image from "next/image";
import Logo from "public/Xerxis-Logo-v1.svg";

type StatProps = {
  title: string;
  subtitle: string;
};

const Stat: React.FC<StatProps> = ({ title, subtitle }) => (
  <Stack alignItems="center">
    <Typography variant="h3">{title}</Typography>
    <Typography color="primary.light" variant="body2">
      {subtitle}
    </Typography>
  </Stack>
);

const Section3 = () => {
  return (
    <Container maxWidth="md">
      <Stack alignItems="center" sx={{ textAlign: "center" }}>
        <HomeTitle sx={{ mb: 1.5 }}>THE GAME</HomeTitle>

        <Typography variant="h2" sx={{ fontWeight: "bold", mb: 2 }}>
          Decentralized. Profitable. Immersive.
        </Typography>

        <Typography sx={{ letterSpacing: "1.5px" }} color="text.secondary">
          Xexis is Web 3 game platform, leveraging the Ethereum and Cardano blockchain.
          The game is set on a planet called Xerxis, where a mysterious event has unleashed a wave of cosmic energy 
          that transformed the landscape and the inhabitants. Some people gained superpowers, some became mutated monsters, 
          and some remained normal. Thousand years ago a brave cross-planetary travler who discovered the planet, 
          who brought his people, started a civilization and became a king. The planet got it’s name after that king, XEXiS. 
          After the catastrophe, the planet is now divided into factions that fight for survival, resources, and dominance.
        </Typography>
      </Stack>

      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-evenly"
        spacing={2}
        sx={{ mt: 3 }}
      >
        <Stack direction="column">
          <Stat title="Quest for Oasis" subtitle="SURVIVERS SEEKING REST" />
          <Image
            src={Logo}
            alt="Xerxis Logo"
            style={{ width: "20%", height: 50, objectFit: "contain" }}
          />
        </Stack>

        <Stack direction="column">
          <Stat title="Rise of the Dynasty" subtitle="SUCCEDING OFFSPRINGS OF XERXIS" />
          <Image
            src={Logo}
            alt="Xerxis Logo"
            style={{ width: "20%", height: 50, objectFit: "contain" }}
          />
        </Stack>

      </Stack>
    </Container>
  );
};

export default Section3;
