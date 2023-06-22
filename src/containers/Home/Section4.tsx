import React from "react";
import { Typography, Stack, Container, Grid } from "@mui/material";
import YieldCard from "@/src/components/cards/YieldCard";

import gold_coin from "public/GoldCoin.svg";
import silver_coin from "public/SilverCoin.png";
import copper_coin from "public/CopperCoin2.png";

const CARDS = [
  { title: "GOLD", value: 10, variable: 1.82, pic: gold_coin },
  { title: "SILVER", value: 6, variable: 0.87, pic: silver_coin },
  { title: "COPPER", value: 2, variable: 1.1, pic: copper_coin },
];

const Section4 = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 15 }}>
      <Typography variant="h4">EARN PLAYING</Typography>

      <Typography
        sx={{ letterSpacing: "1.5px", maxWidth: 720 }}
        color="text.secondary"
      >
        Successfull complition of a game has a generous reward. Rewards vary according to your performance on tasks of the game.
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

export default Section4;
