import React from "react"
import Navbar from "./Navbar"
import { BrowserRouter, Route, Link } from "react-router-dom"
import PizzaList from "./PizzaList"

class App extends React.Component{

  state = {
    pizzas : [
      {id: 1, type: "Mushroom Pizza", ingredient: "Pepper, Onion, Mushroom"},
      {id: 2, type: "Pepperoni Pizza", ingredient: "Garlic, Beef, Peperoni"}
    ]
  }

  render(){
    return(
      <>
        <div>
        <BrowserRouter>
          <Navbar />
          <div className="center">
            <h3>Welcome To Pizzeria</h3>
            <Link to="/pizzas" className="waves-effect waves-light btn indigo lighten-1">Pizzas</Link>
          </div>
          <Route exact path="/pizzas" component="PizzaList" />
          <PizzaList pizzas={ this.state.pizzas } />
        </BrowserRouter>
        </div>
      </>
    )
  }

}

export default App;