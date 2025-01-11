import { loadStripe } from "@stripe/stripe-js";
import SharedTitle from "../../Shared/SharedTitle/SharedTitle";
// import {loadStripe} from '@stripe/stripe-js';
// import {Elements} from '@stripe/react-stripe-js';
import CheckoutForm from "./CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK)

const Payment = () => {
    return (
        <div>
            <SharedTitle heading={"Play The Amount your bill please"}></SharedTitle>

            <div>
                <Elements stripe={stripePromise}>
                    <CheckoutForm></CheckoutForm>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;