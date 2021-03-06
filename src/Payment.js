// import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
// import React, { useEffect, useState } from "react";
// import CurrencyFormat from "react-currency-format";
// import { Link, useNavigate } from "react-router-dom";
// import CheckoutProduct from "./CheckoutProduct";
// import "./Payment.css";
// import { getBasketTotal } from "./reducer";
// import { useStateValue } from "./StateProvider";
// import axios from "axios";

// const Payment = () => {
//   const [{ basket, user }, dispatch] = useStateValue();
//   const navigate = useNavigate();

//   const stripe = useStripe();
//   const elements = useElements();

//   const [succeeded, setSucceeded] = useState(false);
//   const [processing, setProcessing] = useState("");
//   const [error, setError] = useState(null);
//   const [disabled, setDisabled] = useState(true);
//   const [clientSecret, setClientSecret] = useState(true);

//   useEffect(() => {
//     // generate the special stripe secret which allows us to change a customer.
//     const getClientSecret = async () => {
//       try {
//         const response = await axios({
//           method: "post",
//           // stripe expects the total in a currencies subunits
//           url: `/payments/create?total=${getBasketTotal(basket) * 100}`,
//         });
//         console.log(response);
//         setClientSecret(response.data.clientSecret);
//       } catch (err) {
//         console.log(err);
//       }
//     };

//     getClientSecret();
//   }, [basket]);

//   console.log("the secret is >>>", clientSecret);

//   const handleSubmit = async (e) => {
//     // do all fancy stripe stuff
//     e.preventDefault();
//     setProcessing(true);

//     const payload = await stripe
//       .confirmCardPayment(clientSecret, {
//         payment_method: {
//           card: elements.getElement(CardElement),
//         },
//       })
//       .then(({ paymentIntent }) => {
//         //paymentIntent = payment confirmation

//         setSucceeded(true);
//         setError(null);
//         setProcessing(false);

//         navigate("/orders");
//       });
//   };

//   const handleChange = (e) => {
//     // listen the changes in the cardelement
//     // display any errors as the customer types their card details
//     setDisabled(e.empty);
//     setError(e.error ? e.error.message : "");
//   };

//   return (
//     <div className="payment">
//       <div className="payment-container">
//         <h1>Checkout {<Link to="/checkout">{basket?.length} items</Link>}</h1>

//         {/* payment section- delivery address */}
//         <div className="payment-section">
//           <div className="payment-title">
//             <h3>Delivery Address</h3>
//           </div>
//           <div className="payment-address">
//             <p>{user?.email}</p>
//             <p>123 React Lane</p>
//             <p>Los Angles, CA</p>
//           </div>
//         </div>

//         {/* payment section- Review items  */}
//         <div className="payment-section">
//           <div className="payment-title">
//             <h3>Review items and delivery</h3>
//           </div>
//           <div className="payment-items">
//             {basket.map((item) => (
//               <CheckoutProduct
//                 id={item.id}
//                 title={item.title}
//                 image={item.image}
//                 price={item.price}
//                 rating={item.rating}
//               />
//             ))}
//           </div>
//         </div>

//         {/* payment section- Payment method */}
//         <div className="payment-section">
//           <div className="payment-title">
//             <h3>Payment Method</h3>
//           </div>
//           <div className="payment-details">
//             {/* stripe magic will go */}

//             <form onSubmit={handleSubmit}>
//               <CardElement onChange={handleChange} />
//               <div className="payment-priceContainer">
//                 <CurrencyFormat
//                   renderText={(value) => (
//                     <>
//                       <h3>Order Total : {value}</h3>
//                     </>
//                   )}
//                   decimalScale={2}
//                   value={getBasketTotal(basket)}
//                   displayType={"text"}
//                   thousandSeparator={true}
//                   prefix={"$"}
//                 />
//                 <button disabled={processing || disabled || succeeded}>
//                   <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
//                 </button>
//               </div>

//               {/* errors */}
//               {error && <div>{error}</div>}
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Payment;
