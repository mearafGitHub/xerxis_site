import React from "react";
import { Typography, Container, Grid } from "@mui/material";
import YieldCard from "@/src/components/cards/YieldCard";

import Dagger1 from "public/characters/Dagger1.jpeg";
import Dagger2Big from "public/characters/Dagger2-big.jpeg";
import Dagger3 from "public/characters/Dagger3.jpeg";
import FanckyGun from "public/characters/Fancky-Gun.jpeg";
import WeaponOne from "public/characters/Pl.jpeg";
import SnipperGun from "public/characters/Snipper-Gun.jpeg";
import SnipperGun2 from "public/characters/Snipper-Gun-2.jpeg";
import SnipperGun3 from "public/characters/Sniper-Gun-3.jpeg";
import NightGun from "public/characters/Night-Gun.jpeg";

import WarDrone from "public/characters/WarDrone.jpeg";
import WariorJets from "public/characters/Warior-Jets.jpeg";
import Tank1 from "public/characters/Tank1.jpeg";
import SecretWeapon from "public/characters/SecretWeapon.jpeg";
import Sword1 from "public/characters/Snipper-Gun.jpeg";
import TankDesert from "public/characters/Sword1.jpeg";
import WarJets2 from "public/characters/War-Jets2.jpeg";
import WarJets from "public/characters/War-Jets.jpeg";


const CARDS = [
  { title: "Tank1", value: 4.26, variable: 4.2, pic: Tank1 },
  { title: "WarDrone", value: 4.26, variable: 4.2, pic: WarDrone },
  { title: "SecretWeapon", value: 4.49, variable: 4.46, pic: SecretWeapon},
  { title: "WariorJets", value: 4.26, variable: 4.2, pic: WariorJets },
  { title: "SecretWeapon", value: 4.49, variable: 4.46, pic: SecretWeapon},
  { title: "Sword1", value: 4.26, variable: 4.2, pic: Sword1 },
  { title: "TankDesert",  value: 4.49, variable: 4.46, pic: TankDesert},
  { title: "WarJets2", value: 4.26, variable: 4.2, pic: WarJets2 },
  { title: "WarJets", value: 4.26, variable: 4.2, pic: WarJets },
  { title: "WeaponOne", value: 4.49, variable: 4.46, pic: WeaponOne},
  { title: "SnipperGun3", value: 4.26, variable: 4.2, pic: SnipperGun3 },
  { title: "Dagger1", value: 4.26, variable: 4.2, pic: Dagger1 },
  { title: "SnipperGun", value: 4.49, variable: 4.46, pic: SnipperGun},
  { title: "FancyGun",  value: 4.26, variable: 4.2, pic: FanckyGun },
  { title: "SnipperGun2",  value: 4.49, variable: 4.46, pic: SnipperGun2},
  { title: "NightGun",  value: 4.26, variable: 4.2, pic: NightGun },
  { title: "Dagger3",  value: 4.49, variable: 4.46, pic: Dagger3},
  { title: "Dagger2Big",  value: 4.26, variable: 4.2, pic: Dagger2Big },
];


const Section6 = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 15 }}>
      <Typography variant="h4">
        <Typography variant="h4" component="span" color="primary.light">
          MONEYTISE WEAPONS
        </Typography>{" "}
        - Make your Expereince Productive
      </Typography>

      <Typography
        sx={{ letterSpacing: "1.5px", maxWidth: 720 }}
        color="text.secondary"
      >
        Game Weapons can be sold at in-game transaction as well as on the market section of the official game website: "https://www.xerxis.io/game/markets/" 
      </Typography>

      <Grid container spacing={3} sx={{ mt: 3 }}>
        {CARDS.map((item, i) => (
          <Grid item xs={12} sm={6} md={4} key={i}>
            <YieldCard {...item} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Section6;
