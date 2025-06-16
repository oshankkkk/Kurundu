// import { useCallback, useContext } from "react";
// import { cartContext } from "./App";
// function CartItems({ size }) {


//   size === "checkoutPage" ? "w-[100px] h-[100px] " : "w-[170px] h-[170px]";
//   let itemDetailStyle =
//     size === "checkoutPage"
//       ? "grow m-3 mx-4 flex justify-between p-2"
//       : " text-xl grow mx-3";
//   let compName = "cartItems";
//   let { cart, changeCart } = useContext(cartContext);

//   const cmd = `${compName} happened as well`;
//   const increaseItemAmount = useCallback(
//     (product) => {
//       changeCart((prevData) => {
//         return prevData.map((item) => {
//           if (item.productId == product.productId) {
//             let copy = { ...item, amount: item.amount + 1 };
//             return copy;
//           } else {
//             return item;
//           }
//         });
//       });
//     },
//     [cart]
//   );

//   const reduceItemAmount = useCallback(
//     (product) => {

//       console.log(product, "produvt")
//       changeCart((prevData) => {
//         return prevData.map((item) => {
//           console.log(product.productId);
//           if (item.productId == product.productId) {
//             let copy = { ...item, amount: item.amount - 1 };
//             return copy;
//           } else {
//             return item;
//           }
//         });
//       });
//     },
//     [cart]
//   );

//   const removeItem = useCallback(
//     (product) => {
//       changeCart((prevData) => {
//         return prevData.filter(
//           (cartProduct) => cartProduct.name != product.name
//         );
//       });
//     },
//     [cart]
//   );

//   return (
//     <div className="flex gap-3 border-3 border-red-600 flex-col ">
//       {cart.map((item, key) => {
//         let itemColor = `bg-${item.color} p-25`;
//         return (
//           <div className="flex relative " key={key}>
//             <div className={itemColor}></div>
//             <div className={itemDetailStyle}>
//               <div>{item.name}</div>
//               <div className={size === "small" ? "text-sm" : "text-lg"}>
//                 {item.price}
//               </div>
//             </div>
//             {size != "checkoutPage" ? (
//               <div>
//                 <div className="absolute top-2 right-3">
//                   <button
//                     onClick={() => {
//                       removeItem(item, compName);

//                     }}
//                   >
//                     X
//                   </button>
//                 </div>
//                 <div className="absolute flex gap-2 bottom-2 right-3">
//                   {console.log(item, "jhff")}
//                   <button
//                     onClick={() => {
//                       increaseItemAmount(item, compName);

//                     }}
//                   >
//                     +
//                   </button>
//                   <div>{item.amount}</div>
//                   <button
//                     onClick={() => {
//                       item.amount > 1
//                         ?reduceItemAmount(item, compName)
//                         : removeItem(item, compName);
//                     }}
//                   >
//                     -
//                   </button>
//                 </div>
//               </div>
//             ) : null}
//           </div>
//         );
//       })}
//     </div>
//   );
// }
// export default CartItems;
import { useCallback, useContext } from "react";
import { cartContext } from "./App";
import "./cartitems.css"; // Add this line

function CartItems({ size }) {
  let imageSizeClass = size === "checkoutPage" ? "small-image" : "large-image";
  let itemDetailStyle =
    size === "checkoutPage" ? "item-details-checkout" : "item-details";

  let { cart, changeCart } = useContext(cartContext);

  const increaseItemAmount = useCallback(
    (product) => {
      changeCart((prevData) => {
        return prevData.map((item) => {
          if (item.productId == product.productId) {
            return { ...item, amount: item.amount + 1 };
          } else {
            return item;
          }
        });
      });
    },
    [cart]
  );

  const reduceItemAmount = useCallback(
    (product) => {
      changeCart((prevData) => {
        return prevData.map((item) => {
          if (item.productId == product.productId) {
            return { ...item, amount: item.amount - 1 };
          } else {
            return item;
          }
        });
      });
    },
    [cart]
  );

  const removeItem = useCallback(
    (product) => {
      changeCart((prevData) => {
        return prevData.filter(
          (cartProduct) => cartProduct.name !== product.name
        );
      });
    },
    [cart]
  );

  return (
    <div className="cart-items-container">
      {cart.map((item, key) => {
        return (
          <div className="cart-item" key={key}>
            <div
              className="item-color-box"
              style={{ backgroundColor: item.color }}
            ></div>
            <div className={itemDetailStyle}>
              <div>{item.name}</div>
              <div className={size === "small" ? "price-sm" : "price-lg"}>
                {item.price}
              </div>
            </div>
            {size !== "checkoutPage" && (
              <div>
                <div className="remove-button-wrapper">
                  <button
                    className="remove-button"
                    onClick={() => removeItem(item)}
                  >
                    X
                  </button>
                </div>
                <div className="amount-controls">
                  <button onClick={() => increaseItemAmount(item)}>+</button>
                  <div>{item.amount}</div>
                  <button
                    onClick={() =>
                      item.amount > 1
                        ? reduceItemAmount(item)
                        : removeItem(item)
                    }
                  >
                    -
                  </button>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default CartItems;

