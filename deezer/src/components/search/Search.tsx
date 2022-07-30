import React, { useState } from "react";
import axios from "axios";
import { Button, FormControl, TextField, Input } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { setArtist } from "../redux/slices/artistSlice";
import { RootState } from "../redux/store/artistStore";

const Search = () => {
  const [input, setInput] = useState("");

  const dispatch = useDispatch();
  const artistState: any = useSelector<RootState>(
    (state) => state.artist.artist
  );

  const getArtist = async () => {
    try {
      const { data } = await axios.get(`http://localhost:8002/artist/${input}`);

      const allData = data.data.filter(
        (data: any) => data.artist.name.toLowerCase() === input
      );

      dispatch(setArtist(allData));
    } catch (error) {
      console.log(error);
    }
  };

  console.log(input);

  return (
    <div>
      <FormControl>
        <TextField
          className="rounded"
          onChange={(e) => setInput(e.currentTarget.value.toLocaleLowerCase())}
          placeholder="enter your favourite artist..."
        ></TextField>

        <Button onClick={getArtist} variant="contained">
          Submit
        </Button>
        <div className="mb-10"></div>
        <h2 className="text-3xl">
          {artistState.length > 0 && artistState[0].artist.name}
        </h2>
      </FormControl>
    </div>
  );
};

export default Search;
