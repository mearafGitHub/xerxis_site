import React from "react";
import { Typography, Stack, Container, Grid } from "@mui/material";
import YieldCard from "@/src/components/cards/YieldCard";

import ManPowerRoyal from "public/characters/Man-Power-Royal.jpeg";
import LadyArcherRoyal from "public/characters/Lady-Archer-Royal.jpeg";
import RoyalMenWarriors from "public/characters/Royal-Men-Warriors.jpeg";
import LadyArcherWierd from "public/characters/Lady-Archer-Wierd.jpeg";
import RoyalMan from "public/characters/Royal-Man.jpeg";
import GuyArcher2 from "public/characters/Guy-Archer2.jpeg";
import GuyArcher3 from "public/characters/Guy-Archer3.jpeg";
import MenWarriors from "public/characters/Men-Warriors.jpeg";
import RoyalArcher from "public/characters/Royal-Archer.jpeg";
import LadyArcher from "public/characters/Lady-Archer.jpeg";
import MenWarriors2 from "public/characters/Men-Warriors2.jpeg";
import ManArcherRoyal from "public/characters/Man-Archer-Royal.jpeg";
import LadyArcher2 from "public/characters/Lady-Archer2.jpeg";

const CARDS = [
  { title: "LadyArcherRoyal", coin: "ETH", value: 4.49, variable: 4.46, pic: LadyArcherRoyal},
  { title: "LadyArcher2", coin: "ETH", value: 4.26, variable: 4.2, pic: LadyArcher2 },
  { title: "RoyalMenWarriors", coin: "ETH", value: 4.26, variable: 4.2, pic: RoyalMenWarriors },
  { title: "ManPowerRoyal", coin: "ETH", value: 4.49, variable: 4.46, pic: ManPowerRoyal},
  { title: "LadyArcherWierd", coin: "ETH", value: 4.26, variable: 4.2, pic: LadyArcherWierd },
  { title: "ManArcherRoyal", coin: "ETH", value: 4.49, variable: 4.46, pic: ManArcherRoyal},
  { title: "RoyalMan", coin: "ETH", value: 4.26, variable: 4.2, pic: RoyalMan },
  { title: "RoyalArcher", coin: "ETH", value: 4.49, variable: 4.46, pic: RoyalArcher},
  { title: "GuyArcher3", coin: "ETH", value: 4.26, variable: 4.2, pic: GuyArcher3 },
  { title: "LadyArcher", coin: "ETH", value: 4.26, variable: 4.2, pic: LadyArcher },
  { title: "MenWarriors2", coin: "ETH", value: 4.26, variable: 4.2, pic: MenWarriors2 },
  { title: "GuyArcher3", coin: "ETH", value: 4.49, variable: 4.46, pic: GuyArcher2},
];

const Section5 = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 15 }}>
      <Typography variant="h4">CHARACTERS</Typography>

      <Typography
        sx={{ letterSpacing: "1.5px", maxWidth: 720 }}
        color="text.secondary"
      >
        You have variety of charcters to choose from. Each have unique superpowers and prices. 
        You either have to earn them or buy outright from your wallet.
      </Typography>

      <Grid container spacing={3} sx={{ mt: 3 }}>
        {CARDS.map((item, i) => (
          <Grid item xs={12} sm={6} md={4} key={i}>
            <Stack direction="column">
              <YieldCard {...item} />
            </Stack>
        </Grid>
         
        ))}
      </Grid>
    </Container>
  );
};

export default Section5;
