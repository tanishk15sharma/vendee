import React from "react";
import { useProductsFilters } from "../../contexts/filter-context";
import "./ProductsFilters.css";

const ProductsFilters = () => {
  const { dispatch } = useProductsFilters();
  return (
    <div className="filter-container">
      <div className="filter-nav">
        <h3>Filter</h3>
        <button className="clear-btn">Clear All</button>
      </div>
      <hr />
      <ul>
        <section className="filter-section">
          <p className="filter-title">Price</p>
          <div className="price-range">
            <span>100</span>
            <span>1000</span>
          </div>
          <input type="range" />
        </section>
        <hr />

        <section className="filter-section">
          <p className="filter-title">Category</p>
          <li className="filter-list">
            <label htmlFor="">
              <input type="checkbox" />
              Regular
            </label>
          </li>
          <li className="filter-list">
            <label htmlFor="">
              <input type="checkbox" />
              Mens
            </label>
          </li>
          <li className="filter-list">
            <label htmlFor="">
              <input type="checkbox" />
              Womens
            </label>
          </li>
        </section>
        <hr />

        <section className="filter-section">
          <p className="filter-title">Brands</p>
          <li className="filter-list">
            <label htmlFor="">
              <input type="checkbox" />
              Roadster
            </label>
          </li>
          <li className="filter-list">
            <label htmlFor="">
              <input type="checkbox" />
              Levis
            </label>
          </li>
          <li className="filter-list">
            <label htmlFor="">
              <input type="checkbox" />
              HRX
            </label>
          </li>
          <li className="filter-list">
            <label htmlFor="">
              <input type="checkbox" />
              Nike
            </label>
          </li>
          <li className="filter-list">
            <label htmlFor="">
              <input type="checkbox" />
              Nautica
            </label>
          </li>
          <li className="filter-list">
            <label htmlFor="">
              <input type="checkbox" />H & M
            </label>
          </li>
        </section>
        <hr />

        <section className="filter-section">
          <p className="filter-title">Rating</p>
          <li className="filter-list">
            <label htmlFor="">
              <input type="radio" />4 stars & above
            </label>
          </li>
          <li className="filter-list">
            <label htmlFor="">
              <input type="radio" />3 stars & above
            </label>
          </li>
          <li className="filter-list">
            <label htmlFor="">
              <input type="radio" />2 stars & above
            </label>
          </li>
          <li className="filter-list">
            <label htmlFor="">
              <input type="radio" />1 stars & above
            </label>
          </li>
        </section>
        <hr />

        <section className="filter-section">
          <p className="filter-title">Sort By</p>
          <li className="filter-list">
            <label htmlFor="low">
              <input
                type="radio"
                name="sort"
                id="low"
                onChange={() =>
                  dispatch({ type: "SORT", payload: "LOW_TO_HIGH" })
                }
              />
              Price- low to high
            </label>
          </li>
          <li className="filter-list">
            <label htmlFor="high">
              <input
                type="radio"
                name="sort"
                id="high"
                onChange={() =>
                  dispatch({ type: "SORT", payload: "HIGH_TO_LOW" })
                }
              />
              Price- high to low
            </label>
          </li>
        </section>
        <hr />
      </ul>
    </div>
  );
};

export { ProductsFilters };
