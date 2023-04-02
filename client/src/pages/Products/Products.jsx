import React, { useState } from "react";
import "./products.scss";
import { List } from "../../components/List/List";
import { useParams } from "react-router-dom";

export default function Products() {
  const catId = parseInt(useParams().id);
  const [maxPrice, setMaxPrice] = useState(1000);
  const [sort, setSort] = useState(null);
  return (
    <div className="products">
      <div className="left">
        <div className="filterItems">
          <h2>Filter Products</h2>
          <div className="inputItem">
            {" "}
            <input type="checkbox" id="1" value={1} />
            <label htmlFor="1">Shoes</label>
          </div>
          <div className="inputItem">
            {" "}
            <input type="checkbox" id="2" value={2} />
            <label htmlFor="2">Jeans</label>
          </div>
          <div className="inputItem">
            {" "}
            <input type="checkbox" id="3" value={3} />
            <label htmlFor="3">T-shirts</label>
          </div>
        </div>
        <div className="filterItems">
          <h2>Filter by Price</h2>
          <div className="inputItem">
            <span>0</span>
            <input
              type="range"
              min={0}
              max={1000}
              onChange={(e) => setMaxPrice(e.target.value)}
            />
            <span>{maxPrice}</span>
          </div>
        </div>
        <div className="filterItems">
          <h2>Sort by</h2>
          <div className="inputItem">
            <input
              type="radio"
              id="asc"
              value="asc"
              name="price"
              onChange={(e) => setSort("asc")}
            />
            <label htmlFor="asc">Price (Lower First)</label>
          </div>
          <div className="inputItem">
            <input
              type="radio"
              id="desc"
              value="desc"
              name="price"
              onChange={(e) => setSort("desc")}
            />
            <label htmlFor="desc">Price (Highest First)</label>
          </div>
        </div>
      </div>
      <div className="right">
        <img
          src="https://images.pexels.com/photos/6272161/pexels-photo-6272161.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          className="catImg"
        />
        <List catId={catId} sort={sort} maxPrice={maxPrice} />
      </div>
    </div>
  );
}
