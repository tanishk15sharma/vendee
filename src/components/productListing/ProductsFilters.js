import React from "react";
import { useProductsFilters } from "../../contexts/filter-context";
import "./ProductsFilters.css";

const ProductsFilters = () => {
  const { state, dispatch } = useProductsFilters();
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
              <input
                checked={state.category.men}
                type="checkbox"
                onChange={() => dispatch({ type: "CATEGORY", payload: "men" })}
              />
              Men
            </label>
          </li>
          <li className="filter-list">
            <label htmlFor="">
              <input
                checked={state.category.women}
                type="checkbox"
                onChange={() =>
                  dispatch({ type: "CATEGORY", payload: "women" })
                }
              />
              Women
            </label>
          </li>
          <li className="filter-list">
            <label htmlFor="">
              <input
                checked={state.category.kids}
                type="checkbox"
                onChange={() => dispatch({ type: "CATEGORY", payload: "kids" })}
              />
              Kids
            </label>
          </li>
        </section>
        <hr />
        <section className="filter-section">
          <p className="filter-title">Availability</p>
          <li className="filter-list">
            <label htmlFor="stock">
              <input
                type="checkbox"
                id="stock"
                checked={state.includeOutOfStock}
                onChange={() => dispatch({ type: "TOGGLE_STOCK" })}
              />
              Include Out of Stock
            </label>
          </li>
          <li className="filter-list">
            <label htmlFor="delivery">
              <input
                type="checkbox"
                id="delivery"
                checked={state.fastDelivery}
                onChange={() => dispatch({ type: "TOGGLE_DELIVERY" })}
              />
              Fast Delivery Only
            </label>
          </li>
        </section>
        <hr />
        <section className="filter-section">
          <p className="filter-title">Brands</p>
          <li className="filter-list">
            <label htmlFor="roadster">
              <input
                type="checkbox"
                id="roadster"
                onChange={() =>
                  dispatch({ type: "BRANDS", payload: "roadster" })
                }
              />
              Roadster
            </label>
          </li>
          <li className="filter-list">
            <label htmlFor="levis">
              <input
                type="checkbox"
                id="levis"
                onChange={() => dispatch({ type: "BRANDS", payload: "levis" })}
              />
              Levis
            </label>
          </li>
          <li className="filter-list">
            <label htmlFor="hrx">
              <input
                type="checkbox"
                id="hrx"
                onChange={() => dispatch({ type: "BRANDS", payload: "hrx" })}
              />
              HRX
            </label>
          </li>
          <li className="filter-list">
            <label htmlFor="nike">
              <input
                type="checkbox"
                id="nike"
                onChange={() => dispatch({ type: "BRANDS", payload: "nike" })}
              />
              Nike
            </label>
          </li>
          <li className="filter-list">
            <label htmlFor="nautica">
              <input
                type="checkbox"
                id="nautica"
                onChange={() =>
                  dispatch({ type: "BRANDS", payload: "nautica" })
                }
              />
              Nautica
            </label>
          </li>
          <li className="filter-list">
            <label htmlFor="hnm">
              <input
                type="checkbox"
                id="hnm"
                onChange={() => dispatch({ type: "BRANDS", payload: "hnm" })}
              />
              H&M
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
