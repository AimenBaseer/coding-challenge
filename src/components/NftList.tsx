import { ChangeEvent, FunctionComponent, useEffect, useState } from "react";
import { Stack } from "@mui/material";
import AutoSizer from "react-virtualized-auto-sizer";
import { FixedSizeGrid as List } from "react-window";

import { NftType } from "../types";
import { getRowItemsCount, getNFTColumnCount, search } from "../utils/nfts";
import { getNFts } from "../repositories/nft-repository";
import Loader from "./Loader";
import { NftCell } from "./NftCell";
import SearchBar from "./SearchBar";

const limit = 20;
const itemHeight = 300;
const gridGapRow = 20;
const RETRY_DELAY = 1000;

const NftList: FunctionComponent = () => {
  const [nfts, setNfts] = useState<NftType[]>([]);
  const [loading, setLoading] = useState(true);
  const [offset, setOffset] = useState(0);
  const [itemsPerRow, setItemsPerRow] = useState(4);
  const [searchText, setSearchText] = useState("");

  const fetchNfts = async () => {
    setLoading(true);
    const {
      data: { results },
    } = await getNFts(limit, offset);
    setOffset(offset + limit);
    setNfts((prevData) => [...prevData, ...results]);
    setLoading(false);
  };

  const getData = () => {
    try {
      fetchNfts();
    } catch (e) {
      setLoading(false);
      setTimeout(fetchNfts, RETRY_DELAY);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const loadMoreItems = () => {
    fetchNfts();
  };

  const getColumnCount = (width: number) => {
    let rowItems = getRowItemsCount(width);
    setItemsPerRow(rowItems);
    return getNFTColumnCount(nfts.length, rowItems);
  };

  const handleChangeSearch = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (e.target.value === "") {
      setOffset(0);
      loadMoreItems();
    }
    setSearchText(e.target.value);
  };

  const handleSearchClick = () => {
    const result = search(searchText, nfts);
    setNfts(result);
  };

  return (
    <Stack sx={{ height: "100vh" }} spacing={2} className="m-2">
      <SearchBar
        handleChangeSearch={handleChangeSearch}
        handleSearchClick={handleSearchClick}
      />

      <AutoSizer>
        {({ width, height }: any) => (
          <Stack>
            <List
              columnCount={itemsPerRow}
              columnWidth={width / itemsPerRow}
              height={height}
              rowCount={getColumnCount(width)}
              rowHeight={itemHeight + gridGapRow}
              width={width}
              onItemsRendered={({ visibleRowStopIndex }) => {
                if (
                  visibleRowStopIndex === getColumnCount(width) - 1 &&
                  searchText === ""
                ) {
                  loadMoreItems();
                }
              }}
            >
              {(e) => NftCell(e, nfts, itemsPerRow)}
            </List>
            {loading ? <Loader /> : null}
          </Stack>
        )}
      </AutoSizer>
    </Stack>
  );
};
export default NftList;
