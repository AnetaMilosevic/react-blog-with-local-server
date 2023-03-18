import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { StyledCard, StyledP } from "./style";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}>
    •
  </Box>
);

export const SimpleCard = (props) => {
  return (
    <StyledCard sx={{ minWidth: 275, mt: 2 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {props.title}
        </Typography>
        <Typography sx={{ mb: 1.5 }}>{props.description}</Typography>
      </CardContent>
    </StyledCard>
  );
};
