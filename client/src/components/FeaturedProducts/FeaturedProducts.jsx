import React from "react";
import "./featuredProducts.scss";
import { Card } from "../Card/Card";
export const FeaturedProducts = ({ type }) => {
  const data = [
    {
      id: 1,
      img: "https://images.pexels.com/photos/1127000/pexels-photo-1127000.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      img2: "https://images.pexels.com/photos/794062/pexels-photo-794062.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "kurtka",
      isNew: true,
      oldPrice: 20,
      price: 15,
    },
    {
      id: 2,
      img: "https://images.pexels.com/photos/2119500/pexels-photo-2119500.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      img2: "https://images.pexels.com/photos/1906157/pexels-photo-1906157.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "czapka",
      isNew: true,
      oldPrice: 10,
      price: 8,
    },
    {
      id: 3,
      img: "https://images.pexels.com/photos/601316/pexels-photo-601316.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      img2: "https://images.pexels.com/photos/1684079/pexels-photo-1684079.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "spódnica",
      oldPrice: 17,
      price: 10,
    },
    {
      id: 4,
      img: "https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      img2: "https://images.pexels.com/photos/11209826/pexels-photo-11209826.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "buty",
      oldPrice: 50,
      price: 37,
    },
  ];
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