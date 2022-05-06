import { useState } from 'react';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import CartProvider from './store/CartProvider';
import Cart from './components/Cart/Cart';

function App() {
const [cartIsshown,setcartIsShown] = useState(false)
function showCartHandler(){
  setcartIsShown(true)
}
function hideCartHandler(){
  setcartIsShown(false)
}
  return (
    <CartProvider>
    {cartIsshown && <Cart onClose = {hideCartHandler} />}
      <Header onShowCart={showCartHandler}/>
      
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
