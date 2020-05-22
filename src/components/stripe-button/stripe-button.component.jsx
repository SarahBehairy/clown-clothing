import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeButton = ({price}) =>{
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_vBdEKqZX9kPtamRYFj2j9WbN00ZGmeQqhI';

    const onToken = token => {
        alert("PAYMENT SUCCESSFUL");   
    }

    return(
        <StripeCheckout 
            label='Pay Now'
            name='CROWN CLOTHING'
            billingAddress
            shippingAddress
            image='https://sendeyo.com/up/d/f3eb2117da'
            description={`Your total is: $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
        />
    );
}

export default StripeButton;