// import CartItems from "../cartItems";
// function PaymentSummery() {
//   return (
//     <>
//       <div className="p-4">
//         <CartItems size={"checkoutPage"} />
//         <div className="flex mt-4 gap-3">
//           <input
//             type="text"
//             className="grow p-2 border border-white"
//             placeholder="code"
//           />
//           <button className="mx-3">APPLY</button>
//         </div>

//         <div className="border-t mt-3 border-gray-200 pt-4">
//           <div className="flex justify-between mb-2">
//             <span className="text-gray-700">Subtotal</span>
//             <span className="font-medium">€16.80</span>
//           </div>

//           <div className="flex justify-between mb-4">
//             <span className="text-gray-700">Shipping</span>
//             <span className="text-gray-500 text-sm">
//               Enter shipping address
//             </span>
//           </div>

//           <div className="flex justify-between pt-2 border-t border-gray-200">
//             <div>
//               <span className="font-bold text-lg">Total</span>
//               <p className="text-gray-500 text-xs">Including €2.92 in taxes</p>
//             </div>
//             <span className="font-bold text-lg">EUR €16.80</span>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default PaymentSummery;
import CartItems from "../cartItems";
import "./paySum.css"; // Add this line

function PaymentSummery() {
  return (
    <>
      <div className="payment-summary-container">
        <CartItems size={"checkoutPage"} />
        <div className="code-section">
          <input
            type="text"
            className="code-input"
            placeholder="code"
          />
          <button className="apply-button">APPLY</button>
        </div>

        <div className="summary-details">
          <div className="summary-row">
            <span className="text-muted">Subtotal</span>
            <span className="text-medium">€16.80</span>
          </div>

          <div className="summary-row">
            <span className="text-muted">Shipping</span>
            <span className="text-note">Enter shipping address</span>
          </div>

          <div className="summary-total">
            <div>
              <span className="total-label">Total</span>
              <p className="tax-info">Including €2.92 in taxes</p>
            </div>
            <span className="total-amount">EUR €16.80</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default PaymentSummery;

