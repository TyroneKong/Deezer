import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store/artistStore";

const ArtistTable = () => {
  const artistData: any = useSelector<RootState>(
    (state) => state.artist.artist
  );

  return (
    <div className="mt-10">
      {artistData.length > 0 ? (
        <table>
          <tbody>
            <tr>
              <th>Album Cover</th>
              <th>Album</th>
              <th>Song</th>
              <th>Preview</th>
            </tr>
            {artistData?.map((artist: any, idx: number) => {
              return (
                <tr key={idx}>
                  <td>
                    <img src={artist.album.cover_small} alt="albumart"></img>
                  </td>
                  <td>{artist.album.title}</td>
                  <td> {artist.title}</td>
                  <td>
                    <audio controls src={artist.preview}>
                      Your browser does not support the
                      <code>audio</code> element.
                    </audio>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : (
        <h1>No results available</h1>
      )}
    </div>
  );
};

export default ArtistTable;
