import React from 'react'
import CartItem from "./components/cartItem.jsx"
function cart(cart,updateToCart,removeFromCart,total) {
  return (
    <div>
      <section>
          {
            cart.map((product)=>(
              <div>
                <h3>{product.name}</h3>
                <p>{product.price}</p>
                <button onClick={onAddToCart(product.id)}>ADD</button>
              </div>
              
            ))
          }
      </section>
      <h2>
        Total amount is: {total}
      </h2>
      <button>
        CHECKOUT
      </button>
      
    </div>
  )
}

export default cart
