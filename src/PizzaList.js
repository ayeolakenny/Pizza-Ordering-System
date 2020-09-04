import React from "react"

const PizzaList = ({ pizzas }) => {

    const pizzaList = pizzas.length ? (
      pizzas.map(pizza => {
        return(
          <div className="col s12 m6">
            <div className="card">
              <div className="card-image">
                <img src="https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60" alt="pizza"/>
                <span className="card-title">{ pizza.type }</span>
              </div>
              <div className="card-content">
                <p>{ pizza.ingredient }</p>
              </div>
              <a href="/" className="waves-effect waves-light btn indigo darken-1">Order</a>
            </div>
          </div>
        )
      })
    ) : (
      <h4 className="center">Theres no Pizza right now</h4>
    )

    return(
      <>
        <div>
        <div className="row">
          <p>{ pizzaList }</p>
        </div>
        </div>
      </>
    )
  }

export default PizzaList