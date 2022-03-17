import React from "react";
import { useProductsFilters } from "../../contexts/filter-context";
import "./ProductsFilters.css";

const ProductsFilters = () => {
  const { state, dispatch } = useProductsFilters();

  const brandClickHandler = (event) => {
    let checked = event.target.checked;
    let brandValue = event.target.value;
    // console.log(brandValue);
    if (checked) {
      return { type: "ADD_BRAND", payload: brandValue };
    } else {
      return { type: "REMOVE_BRAND", payload: brandValue };
    }
  };

  return (
    <div className="filter-container">
      <div className="filter-nav">
        <h3>Filter</h3>
        <button
          className="clear-btn"
          onClick={() => dispatch({ type: "CLEAR_ALL" })}
        >
          Clear All
        </button>
      </div>
      <hr />
      <ul>
        <section className="filter-section">
          <p className="filter-title">Price</p>
          <div className="price-range">
            <span>500</span>
            <span>10000</span>
          </div>
          <input
            type="range"
            min={500}
            max={8000}
            step={200}
            defaultValue={6000}
            onChange={(e) =>
              dispatch({ type: "RANGE", payload: e.target.value })
            }
          />
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
                value="Roadster"
                onChange={(event) => dispatch(brandClickHandler(event))}
                checked={state.brands.some((item) => item === "Roadster")}
              />
              Roadster
            </label>
          </li>
          <li className="filter-list">
            <label htmlFor="levis">
              <input
                type="checkbox"
                id="levis"
                value="Levis"
                onChange={(event) => dispatch(brandClickHandler(event))}
              />
              Levis
            </label>
          </li>
          <li className="filter-list">
            <label htmlFor="hrx">
              <input
                type="checkbox"
                id="hrx"
                value="HRX"
                onChange={(event) => dispatch(brandClickHandler(event))}
              />
              HRX
            </label>
          </li>
          <li className="filter-list">
            <label htmlFor="nike">
              <input
                type="checkbox"
                id="nike"
                value="Nike"
                onChange={(event) => dispatch(brandClickHandler(event))}
              />
              Nike
            </label>
          </li>
          <li className="filter-list">
            <label htmlFor="nautica">
              <input
                type="checkbox"
                id="nautica"
                value="Nautica"
                onChange={(event) => dispatch(brandClickHandler(event))}
              />
              Nautica
            </label>
          </li>
          <li className="filter-list">
            <label htmlFor="hnm">
              <input
                type="checkbox"
                id="hnm"
                value="H&M"
                onChange={(event) => dispatch(brandClickHandler(event))}
              />
              H&M
            </label>
          </li>
        </section>
        <hr />

        <section className="filter-section">
          <p className="filter-title">Rating</p>
          <li className="filter-list">
            <label htmlFor="4star">
              <input
                type="radio"
                name="rating"
                id="4star"
                onChange={() => dispatch({ type: "RATING", payload: "4" })}
              />
              4 stars & above
            </label>
          </li>
          <li className="filter-list">
            <label htmlFor="3star">
              <input
                type="radio"
                name="rating"
                id="3star"
                onChange={() => dispatch({ type: "RATING", payload: "3" })}
              />
              3 stars & above
            </label>
          </li>
          <li className="filter-list">
            <label htmlFor="2star">
              <input
                type="radio"
                name="rating"
                id="2star"
                onChange={() => dispatch({ type: "RATING", payload: "2" })}
              />
              2 stars & above
            </label>
          </li>
          <li className="filter-list">
            <label htmlFor="1star">
              <input
                type="radio"
                name="rating"
                id="1star"
                onChange={() => dispatch({ type: "RATING", payload: "1" })}
              />
              1 stars & above
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
