import { FunctionComponent } from "react";
import { Card, CardContent, CardMedia, Stack, Typography } from "@mui/material";

import { NftType } from "../types";

const NftCard: FunctionComponent<NftType> = ({ id, title, price, img }) => {
  return (
    <Card
      key={id}
      variant="outlined"
      sx={{ maxWidth: 260, display: "inline-block" }}
    >
      <CardContent className="pb-8">
        <CardMedia component="img" height="260" image={img} alt="Chevrolet" />

        <Stack
          direction="row"
          justifyContent={"space-between"}
          className="mt-2"
        >
          <Typography variant="body2">{title}</Typography>
          <Typography variant="body2">{price}</Typography>
        </Stack>
      </CardContent>
    </Card>
  );
};

NftCard.propTypes = {};

export default NftCard;
