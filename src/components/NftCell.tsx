import { GridChildComponentProps } from "react-window";
import { Box } from "@mui/material";

import NftCard from "./NftCard";
import { NftType } from "../types";

export const NftCell = (
  { columnIndex, rowIndex, style }: GridChildComponentProps,
  nfts: NftType[],
  itemsPerRow: number
) => {
  const index: number = rowIndex * itemsPerRow + columnIndex;

  if (index >= nfts.length) {
    return null;
  }

  return (
    <Box sx={style}>
      <NftCard {...nfts[index]} />
    </Box>
  );
};
