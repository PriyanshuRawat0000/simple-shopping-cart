import React from 'react'
//import CartItem from "./components/cartItem.jsx"
import {FaPlus,FaTrash,FaMinus} from 'react-icons/fa'
function Cart({cart,updateToCart,removeFromCart,total}) {
  if (cart.length === 0) {
    return <div className="cart empty">Your cart is empty</div>;
  }
  return (
    <div className='cart'>
      <section>
          {
            cart.map((item)=>(
              <div className="cart-item" key={item.id}>
                    <div className="item-details" >
                      <h4>{item.name}</h4>
                      <p>{item.price}</p>
                      <div className="quantity-controls" >
                        <button onClick={() => updateToCart(item, item.quantity - 1)}>
                          <FaMinus />
                        </button>
                        <span>{item.quantity}</span>
                        <button onClick={() => updateToCart(item, item.quantity + 1)}>
                          <FaPlus />
                        </button>
                      </div>
                    </div>
                    <button className="remove-btn" onClick={() => removeFromCart(item) }>
                      <FaTrash />
                    </button>
                  </div>
              
            ))
          }
      </section>
      <h2 className='cart-total '>
        Total amount is: {total}
      </h2>
      <button className='checkout-btn'>
        CHECKOUT
      </button>
      
    </div>
  )
}

export default Cart
