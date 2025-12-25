import React from 'react'

function product({product,onAddToCart}) {
  return (
    <div className="product-card">
      
        <h3>{product.name}</h3>
        <p>{product.price}</p>
        <button onClick={onAddToCart(product.id)}>ADD</button>

    </div>
  )
}

export default product
