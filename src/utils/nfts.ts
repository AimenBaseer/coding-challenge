import { NftType } from "../types";

export const getRowItemsCount = (width: number) => {
  let rowItems = 0;
  if (width < 450) {
    rowItems = 1;
  } else if (width >= 450 && width <= 780) {
    rowItems = 2;
  } else if (width >= 780 && width <= 1060) {
    rowItems = 3;
  } else {
    rowItems = 4;
  }
  return rowItems;
};

export const getNFTColumnCount = (totalItems: number, rowItems: number) => {
  return Math.ceil(totalItems / rowItems);
};

export const search = (value: string, nfts: NftType[]) => {
  const searchTerm = value.toLowerCase();
  return nfts.filter(({ title }) => title.toLowerCase().includes(searchTerm));
};
