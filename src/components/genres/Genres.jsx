import React from "react";
import "./style.scss";
import { useSelector } from "react-redux";

const Genres = ({ data }) => {
  const { genres } = useSelector((state) => state.home);

  return (
    <div className="genres">
      {data?.map((genre_id) => {
        if (!genres[genre_id]?.name) return; // If value is not present
        return (
          <div key={genre_id} className="genre">
            {genres[genre_id]?.name}
          </div>
        );
      })}
    </div>
  );
};

export default Genres;
