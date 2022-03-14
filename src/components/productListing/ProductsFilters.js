import React from "react";
import "./ProductsFilters.css";

const ProductsFilters = () => {
  return (
    <div class="filter-container">
      <div class="filter-nav">
        <h3>Filter</h3>
        <button class="clear-btn">Clear All</button>
      </div>
      <hr />
      <ul>
        <section class="filter-section">
          <p class="filter-title">Price</p>
          <div class="price-range">
            <span>100</span>
            <span>1000</span>
          </div>
          <input type="range" />
        </section>
        <hr />

        <section class="filter-section">
          <p class="filter-title">Category</p>
          <li class="filter-list">
            <label for="">
              <input type="checkbox" />
              Regular
            </label>
          </li>
          <li class="filter-list">
            <label for="">
              <input type="checkbox" />
              Mens
            </label>
          </li>
          <li class="filter-list">
            <label for="">
              <input type="checkbox" />
              Womens
            </label>
          </li>
        </section>
        <hr />

        <section class="filter-section">
          <p class="filter-title">Brands</p>
          <li class="filter-list">
            <label for="">
              <input type="checkbox" />
              Roadster
            </label>
          </li>
          <li class="filter-list">
            <label for="">
              <input type="checkbox" />
              Levis
            </label>
          </li>
          <li class="filter-list">
            <label for="">
              <input type="checkbox" />
              HRX
            </label>
          </li>
          <li class="filter-list">
            <label for="">
              <input type="checkbox" />
              Nike
            </label>
          </li>
          <li class="filter-list">
            <label for="">
              <input type="checkbox" />
              Nautica
            </label>
          </li>
          <li class="filter-list">
            <label for="">
              <input type="checkbox" />H & M
            </label>
          </li>
        </section>
        <hr />

        <section class="filter-section">
          <p class="filter-title">Rating</p>
          <li class="filter-list">
            <label for="">
              <input type="radio" />4 stars & above
            </label>
          </li>
          <li class="filter-list">
            <label for="">
              <input type="radio" />3 stars & above
            </label>
          </li>
          <li class="filter-list">
            <label for="">
              <input type="radio" />2 stars & above
            </label>
          </li>
          <li class="filter-list">
            <label for="">
              <input type="radio" />1 stars & above
            </label>
          </li>
        </section>
        <hr />

        <section class="filter-section">
          <p class="filter-title">Sort By</p>
          <li class="filter-list">
            <label for="">
              <input type="radio" />
              Price- low to high
            </label>
          </li>
          <li class="filter-list">
            <label for="">
              <input type="radio" />
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
