import React, { useState } from "react";
import { useProductsFilters } from "../../contexts/filter-context";
import "./ProductsFilters.css";

const ProductsFilters = () => {
  const [toggleFilterBtn, setToggleFilterBtn] = useState(false);
  const { state, dispatch } = useProductsFilters();
  const brandClickHandler = (event) => {
    let checked = event.target.checked;
    let brandValue = event.target.value;

    if (checked) {
      return { type: "ADD_BRAND", payload: brandValue };
    } else {
      return { type: "REMOVE_BRAND", payload: brandValue };
    }
  };

  const categoryClickHandler = (event) => {
    let checked = event.target.checked;
    let categoryVal = event.target.value;
    console.log(checked);
    if (checked) {
      return { type: "ADD_CATEGORY", payload: categoryVal };
    } else {
      return { type: "REMOVE_CATEGORY", payload: categoryVal };
    }
  };

  return (
    <>
      <div
        className="filter-container"
        style={{
          transform: toggleFilterBtn && "translateX(0)",
        }}
      >
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
              <span> {state.range} </span>
            </div>
            <input
              type="range"
              min={500}
              max={10000}
              step={200}
              defaultValue={state.range}
              onMouseUp={(e) =>
                dispatch({ type: "RANGE", payload: e.target.value })
              }
            />
          </section>
          <hr />

          <section className="filter-section">
            <p className="filter-title">Category</p>

            <li className="filter-list">
              <label htmlFor="homedecor">
                <input
                  type="checkbox"
                  id="homedecor"
                  value="homedecor"
                  onChange={(event) => dispatch(categoryClickHandler(event))}
                  checked={state.categories.includes("homedecor")}
                />
                Home Decor
              </label>
            </li>

            <li className="filter-list">
              <label htmlFor="men">
                <input
                  type="checkbox"
                  id="men"
                  value="men"
                  onChange={(event) => dispatch(categoryClickHandler(event))}
                  checked={state.categories.includes("men")}
                />
                Men
              </label>
            </li>
            <li className="filter-list">
              <label htmlFor="women">
                <input
                  type="checkbox"
                  id="women"
                  value="women"
                  onChange={(event) => dispatch(categoryClickHandler(event))}
                  checked={state.categories.includes("women")}
                />
                Women
              </label>
            </li>
            <li className="filter-list">
              <label htmlFor="footwear">
                <input
                  type="checkbox"
                  value="footwear"
                  id="footwear"
                  onChange={(event) => dispatch(categoryClickHandler(event))}
                  checked={state.categories.includes("footwear")}
                />
                Footwear
              </label>
            </li>
            <li className="filter-list">
              <label htmlFor="jewellery">
                <input
                  type="checkbox"
                  id="jewellery"
                  value="jewellery"
                  onChange={(event) => dispatch(categoryClickHandler(event))}
                  checked={state.categories.includes("jewellery")}
                />
                Jewellery
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
              <label htmlFor="regular">
                <input
                  type="checkbox"
                  id="regular"
                  value="Regular"
                  onChange={(event) => dispatch(brandClickHandler(event))}
                  checked={state.brands.includes("Regular")}
                />
                Regular
              </label>
            </li>

            <li className="filter-list">
              <label htmlFor="levis">
                <input
                  type="checkbox"
                  id="levis"
                  value="Levis"
                  onChange={(event) => dispatch(brandClickHandler(event))}
                  checked={state.brands.includes("Levis")}
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
                  checked={state.brands.includes("HRX")}
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
                  checked={state.brands.includes("Nike")}
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
                  checked={state.brands.includes("Nautica")}
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
                  checked={state.brands.includes("H&M")}
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
                  checked={state.rating === "4"}
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
                  checked={state.rating === "3"}
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
                  checked={state.rating === "2"}
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
                  checked={state.rating === "1"}
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
                  checked={state.sortBy === "LOW_TO_HIGH"}
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
                  checked={state.sortBy === "HIGH_TO_LOW"}
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
      <button
        className="btn-filter"
        onClick={() => setToggleFilterBtn((val) => !val)}
      >
        <i className="fa-solid fa-filter"></i> FILTER
      </button>
    </>
  );
};

export { ProductsFilters };
