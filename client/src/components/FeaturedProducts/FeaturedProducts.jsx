import React, { useEffect, useState } from "react";
import "./featuredProducts.scss";
import axios from "axios";
import { Card } from "../Card/Card";
export const FeaturedProducts = ({ type }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          process.env.REACT_APP_API_URL + "/products",
          {
            headers: {
              Authorization: "bearer " + process.env.REACT_APP_API_TOKEN,
            },
          }
        );
        setData(res.data.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);
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
        {data.map((item) => (
          <Card item={item} key={data.id} />
        ))}
      </div>
    </div>
  );
};
