import React from "react";
import { Typography, Container, Grid } from "@mui/material";
import YieldCard from "@/src/components/cards/YieldCard";

const CARDS = [
  { title: "GOLD", coin: "ADA", value: 10, variable: 1.82 },
  { title: "SILVER", coin: "DAI", value: 6, variable: 0.87 },
  { title: "BRONZ", coin: "DAI", value: 2, variable: 1.1 },
];

const Section4 = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 15 }}>
      <Typography variant="h4">EARN PLAYING</Typography>

      <Typography
        sx={{ letterSpacing: "1.5px", maxWidth: 720 }}
        color="text.secondary"
      >
        Successfull complition of a game has a generous reward. Rewareds vary according to your performance on tasks of the game.
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

export default Section4;
