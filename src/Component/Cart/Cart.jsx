import React from "react";
import { toast } from "react-toastify";
import ShopingCart from '../../assets/products/shopping-cart.png'

const Cart = ({ carts, setCarts }) => {
  const totalPrice = carts.reduce((sum, item) => sum + item.price, 0);

  const handlePayment = () => {
    setCarts([]);
    toast.success('Proceed to Checkout Successfully')
  };

  const handleRemove = (id) => {
    const updated = carts.filter((item) => item.id !== id);
    setCarts(updated);
    toast.error('Item removed from cart!!')
  };

  

  return (
    <div className="w-11/12 mx-auto border border-gray-200 p-7 rounded-xl mb-24 space-y-3">
      <h2 className="text-2xl font-bold">Your Cart</h2>

      {carts.length === 0 && (
        <div className="text-center space-y-1">
            
          <p>Cart is Empty</p>
          <p className="text-[#627382]">Please buy a thing</p>
        </div>
      )}

      {carts.map((item) => (
        <div
          key={item.id}
          className="flex justify-between items-center bg-[#f9fafc] p-2 rounded-xl"
        >
          <div className="flex items-center gap-4">
            <div className="p-2.5 inline-flex rounded-[50px] shadow">
              {item.icon}
            </div>
            <div>
              <h2 className="text-xl font-semibold">{item.name}</h2>
              <p className="text-[#627382]">${item.price}</p>
            </div>
          </div>

          <h3
            onClick={() => handleRemove(item.id)}
            className="text-red-500 font-bold cursor-pointer"
          >
            Remove
          </h3>
        </div>
      ))}

      <div className="flex justify-between items-center p-2 mb-6">
        <div className="text-[#627382]">Total</div>
        <div className="text-2xl font-bold">${totalPrice}</div>
      </div>

      <button
        onClick={handlePayment}
        disabled={carts.length === 0}
        className={`w-full py-2.5 rounded-[50px] text-white font-bold 
        bg-linear-to-r ${
          carts.length > 0
            ? "from-[#4f39f6] to-[#9514fa]"
            : "from-gray-400 to-gray-500 cursor-not-allowed"
        }`}
      >
        Proceed to Checkout
      </button>
    </div>
  );
};

export default Cart;
