import React, { useState } from "react";
import { BrowserRouter as Router, Route, NavLink, Link } from "react-router-dom";

import PlantList from "./components/PlantList";
import ShoppingCart from "./components/ShoppingCart";
import CheckoutForm from "./components/CheckoutForm";
import FilterPlantList from "./components/FilterPlantList"

import "./App.css";

export default function App() {
  // array of plants that have been added to the cart
  const [cart, setCart] = useState([]);
  const [filter, setFilter] = useState("");
  const [search, setSearch ] = useState("");
  // const [listVisible, setListVisible] = useState(" visible")

  // add a plant to the cart
  const addToCart = (plant) => {
    setCart([...cart, plant]);
  };

  // remove a plant from the cart
  const removeFromCart = (plant) => {
    setCart(cart.filter((p) => p.id !== plant.id));
  };

  const updateSearch = (event) => {
    setSearch(event.target.value)
  }

  // const toggleListVisible = () => {
  //   console.log('ToggleListVissible')
  //   console.log(listVisible)
  //   if (listVisible === ' visible') {
  //     setListVisible(' hidden') 
  //   } else {
  //     setListVisible(' visible')
  //   }
  // }

  const startFilter = () => {
    setFilter(search);
  }

  console.log(search);

  return (
    <div>
      <Router>
        <nav className="container">
          <h1>
            React Plants <span role="img" aria-label="leaf">🌿</span>
          </h1>
          <form 
            className="SearchContainer" 
            style={{"marginLeft" : "60px", "display" : "flex", "flexDirection" : "row", "justifyContent" : "space-evenly"}}>
            <input 
              value={search} 
              onChange={updateSearch}
              type="text" 
              style={{"width" : "200px", "margin" : "20px 5px 20px 20px"}} />
            <Link exact to="/search" style={{"text-decoration" : "none"}}>
              <button
                onClick={startFilter}
                style={{"width" : "100px", "margin" : "20px 30px 20px 0px"}}>
                  Search
              </button>
            </Link>
          </form>
          <ul className="steps">
            <li>
              <NavLink exact to="/" style={{"text-decoration" : "none"}}>
                Plants
              </NavLink>
            </li>
            <li>
              <NavLink to="/cart">
                Cart
                <span className="cart-badge">
                  {cart.length > 0 && cart.length}
                </span>
              </NavLink>
            </li>
          </ul>
        </nav>
        {/* <div style={{"visibility":`${listVisible}`}}> */}
        <Route
          exact
          path="/"
          render={() => <PlantList addToCart={addToCart} />}
          />
          {/* </div> */}
        <Route 
          exact
          path="/search"
          render={() => <FilterPlantList addToCard={addToCart} filter={filter} />}
        />
        <Route
          path="/cart"
          render={(props) => (
            <ShoppingCart
              {...props}
              cart={cart}
              removeFromCart={removeFromCart}
            />
          )}
        />
        <Route path="/checkout" component={CheckoutForm} />
      </Router>
    </div>
  )
}
