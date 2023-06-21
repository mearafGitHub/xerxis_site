import React from "react";
import { Card, Stack, Avatar, Typography, Button, Box } from "@mui/material";
import Image from "next/image";

interface Props {
  title: string;
  coin: string;
  value: number;
  variable: number;
}

const YieldCard: React.FC<Props> = ({ title, detail, value, variable, pic }) => {
  return (
    <Card
      sx={{
        p: 2,
        bgcolor: "rgba(26,21,49,.25)",
        border: "0.2px solid rgba(77,229,255,.08)",
        width: "100%",
        paddingTop: 0,
        backdropFilter: "blur(4px)",
        transition: "all 0.5s ease",
        backgroundImage: "none",
        "&:hover": {
          boxShadow: "0 0 40px 8px rgba(77,229,255,.05)",
          transform: "translate(0,-3px)",
        },
      }}
    >
      <Stack spacing={2}>
        {/* detail */}
          <Stack direction="row" spacing={2} alignItems="left" justifyContent="space-between">
          <Image
              src={pic}
              alt={title}
              style={{ width: "100%", pt: 0, height: "75%", objectFit: "contain"}}
            />
          </Stack>

          <Stack direction="row" spacing={2} alignItems="left" justifyContent="space-between">
            <Box>
                <Typography
                  variant="h5"
                  sx={{ fontWeight: "bold", letterSpacing: "1.2px" }}
                >
                  {title}
                </Typography>
                <Typography variant="body2" color="primary.light">
                  {detail}
                </Typography>
              </Box>
          </Stack>

          {/* Rates */}
          <Stack
            direction="row"
            spacing={2}
            alignItems="center"
            justifyContent="space-between"
          >
            <Stack direction="row" spacing={2} alignItems="left" justifyContent="space-between">
              <Box>
              <Typography variant="body2">PRICE</Typography>
              <Typography variant="h6" color="info.light">
              {value} ADA
              </Typography>
            </Box>
            </Stack>      
            
            <Button
              variant="contained"
              sx={(theme) => ({
                width: "fit-content",
                bgcolor: "secondary.main",
                border: `1px solid ${theme.palette.secondary.main}`,
                color: "#4de5ff",
                height: 30,
                px: 2.5,
                fontSize: 16,
                "&:hover": {
                  borderColor: "#4de5ff",
                  bgcolor: "secondary.main",
                },
              })}
          > BUY
          </Button>
        </Stack>

      </Stack>
    </Card>
  );
};

export default YieldCard;
