import "./App.css"

import {products} from "./data/productitems.js"
import Cart from "./components/cart.jsx"
import Product from "./components/product.jsx"
import usecart from "./hooks/usecart.js"


function App() {
  
  const {addItem,updateItem,removeItem,cart,total}=usecart();

  return (
    <div className="app">
      <header>
        <h1>Simple Shopping Cart</h1>
      </header>
      <main className="products">
        <section>
         {
          products.map((item)=>(
            <Product 
            key={item.id} 
            product={item}
            onAddToCart={addItem}
            />
          ))
         }
        </section>
        <Cart
          cart={cart}
          updateToCart={updateItem}
          removeFromCart={removeItem}
          total={total}
        />
        
      </main>


    </div>
  )
}

export default App
