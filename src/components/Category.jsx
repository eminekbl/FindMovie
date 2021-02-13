import React from "react";
import { useParams } from "react-router-dom";
import FetchMovie from "./FetchMovie";
function Category(props) {
  const params = useParams();
  const { query, id } = params;
  const title = `${query} MOVIES`.toUpperCase();
  return (
    <div className="mt-5 text-light text-center">
      <h1 id={query}>{title}</h1>
      <FetchMovie category={query} id={id} />
    </div>
  );
}

export default Category;
