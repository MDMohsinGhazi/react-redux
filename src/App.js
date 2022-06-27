import Navbar from "./Components/Navbar";
import Model from "./Components/Modal";
import CartContainer from "./Components/CartContainer";
import { useEffect } from "react";
import { calculateTotal, getCartItems } from "./store/cart";
import {} from "./store/modal";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const { cartItems, isLoading } = useSelector((store) => store.cart);
  const { isOpen } = useSelector((store) => store.modal);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotal());
  }, [cartItems]);
  useEffect(() => {
    dispatch(getCartItems());
  }, []);

  if (isLoading) {
    return (
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <main>
      {isOpen && <Model />}
      <Navbar />
      <CartContainer />
    </main>
  );
}
export default App;
