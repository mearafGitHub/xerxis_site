import React from "react";
import { Typography, Stack, Container, Grid } from "@mui/material";
import YieldCard from "@/src/components/cards/YieldCard";

import img1 from "@public/OIG-1.jpeg";
import img2 from "@public/OIG-1.jpeg";


const CARDS = [
  { title: "LIDO", coin: "ETH", fixed: 4.49, variable: 4.46 },
  { title: "ROCKET", coin: "ETH", fixed: 4.26, variable: 4.2 },
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
