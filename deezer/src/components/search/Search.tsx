import React, { FC, useState, useRef } from "react";
import axios from "axios";
import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { setArtist } from "../redux/slices/artistSlice";
import { RootState } from "../redux/store/artistStore";

const Search: FC = () => {
  const [input, setInput] = useState("");

  const formRef = useRef<HTMLFormElement>(null);

  const dispatch = useDispatch();
  const artistState: any = useSelector<RootState>(
    (state) => state.artist.artist
  );

  const getArtist = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const { data } = await axios.get(`http://localhost:8002/artist/${input}`);

      const allData = data?.data.filter(
        (data: any) => data.artist.name.toLowerCase() === input
      );

      dispatch(setArtist(allData));
      formRef.current?.reset();
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.currentTarget.value);
  };

  return (
    <div>
      <form ref={formRef} onSubmit={(e) => getArtist(e)}>
        <input
          className="rounded"
          onChange={(e) => handleChange(e)}
          placeholder="enter your favourite artist..."
        ></input>

        <Button type="submit" variant="contained">
          Submit
        </Button>
        <div className="mb-10"></div>
        <h2 className="text-3xl">
          {artistState.length > 0 && artistState[0].artist.name}
        </h2>
      </form>
    </div>
  );
};

export default Search;
