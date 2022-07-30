import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store/artistStore";
import ArtistTable from "./ArtistTable";

const Artist = () => {
  const artist: any = useSelector<RootState>((state) => state.artist.artist);
  console.log(artist);

  const artistImage = artist[0]?.artist.picture_big;

  return (
    <div className="flex gap justify-center flex-wrap mt-10 ">
      {artist.length > 0 && (
        <img
          className="rounded-full shadow-2xl relative xl: w-3/5	2xl:rounded-l-full w-2/5"
          src={artistImage}
          alt="artistimage"
        ></img>
      )}

      {artist?.map((item: any, idx: number) => {
        return <div key={idx}></div>;
      })}
      <ArtistTable />
    </div>
  );
};

export default Artist;
