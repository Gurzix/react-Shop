import React from "react";
import "./featuredProducts.scss";
import { Card } from "../Card/Card";
import useFetch from "../../hooks/useFetch";
export const FeaturedProducts = ({ type }) => {
  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][type][$eq]=${type}`
  );
  return (
    <div className="featuredProducts">
      <div className="top">
        <h1>{type} products</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
          officiis dolorem ducimus iusto error voluptas quas quam quibusdam eius
          tempora, esse nam sed nesciunt nostrum repellat asperiores adipisci
          libero natus molestiae. Tempore perspiciatis adipisci asperiores
          consectetur maxime assumenda ad? Similique.
        </p>
      </div>
      <div className="bottom">
        {error
          ? "Something went wrong!"
          : loading
          ? "loading"
          : data?.map((item) => <Card item={item} key={item.id} />)}
      </div>
    </div>
  );
};
