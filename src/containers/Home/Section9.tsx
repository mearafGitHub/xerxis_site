// import PersonImg1 from "@/src/assets/images/sec9_person1.svg";
// import PersonImg2 from "@/src/assets/images/sec9_person2.svg";
// import PersonImg3 from "@/src/assets/images/sec9_person3.svg";

import PersonImg1 from "public/Xerxs-Firce-4.jpeg";
// import PersonImg2 from "public/xerxis-logo.jpg";
import PersonImg3 from "public/characters/King3.jpeg";

import HomeTitle from "@/src/components/HomeTitle";
import MainButton from "@/src/components/buttons/MainButton";
import {
  Container,
  Hidden,
  Stack,
  Typography,
  styled,
  useTheme,
} from "@mui/material";
import Image from "next/image";

const StyledPerson = styled(Image)({
  //   position: "absolute",
  zIndex: -1,
  height: "100%",
  objectFit: "contain",
});

const Section9 = () => {
  const theme = useTheme();

  return (
    <Container maxWidth="md" sx={{ mt: { xs: 25, md: 35 }, pb: 10, bg:PersonImg1 }}>
      <Stack alignItems="center">
        <HomeTitle sx={{ mb: 1.5 }} color={theme.palette.primary.light}>
          THE FAM
        </HomeTitle>

        <Typography
          variant="h2"
          sx={{ fontWeight: "bold", mb: 3, textAlign: "center" }}
        >
          Community, AKA Zerxs.
        </Typography>

        <Typography
          sx={{
            letterSpacing: "1.5px",
            maxWidth: 720,
            mb: 4,
            textAlign: "center",
          }}
          color="text.secondary"
        >
          Meet cool people from all around the Globe.
          We are cultivating growing community of Plutus Smart Contract developers, 
          innovators and Web3 developers building on Cardano. 
          Let's make a dent in the web3 space. Be part of the family.
        </Typography>

        <MainButton sx={{ mb: 5 }}>JOIN ON DISCORD</MainButton>

        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ pb: 2, whiteSpace: "pre-line", ml: -10 }}
        > 
          {"Take inspiration to do awesome stuff.\nContribute to earn.\nGive your comments/suggestions.\nAnd more..."}
        </Typography>
      </Stack>

      <Container maxWidth="sm" sx={{ mt: 5 }}>
        <Stack direction="row" alignItems="flex-end" justifyContent="center">
          <StyledPerson src={PersonImg1} alt="Person 1" sx={{ pb: 5 }} />
          {/* <StyledPerson src={PersonImg2} alt="Person 2" sx={{ width: "60%" }} /> */}

          <Hidden mdDown>
            <StyledPerson
              src={PersonImg3}
              alt="Person 3"
              sx={{ width: "40%", ml: -5 }}
            />
          </Hidden>
        </Stack>
      </Container>
    </Container>
  );
};

export default Section9;
