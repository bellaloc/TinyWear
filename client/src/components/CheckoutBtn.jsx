// lazy query = a query that doesnt get ran right away
import { useLazyQuery } from '@apollo/client';
import { CHECKOUT } from '../utils/queries';


function checkoutButton() {

    const [startCheckout, { loading, error, data }] = useLazyQuery(CHECKOUT, {
        
        onCompleted: (queryData) => {
            console.log(queryData)
            let data = JSON.parse(queryData.createCheckoutSession) //the url for stripe url 
            console.log(data);
            let checkoutUrl = data
            window.location.assign(checkoutUrl); // pushed to stripe url
        }
    });
    if (loading) return null;
    if (error) return `Error! ${error}`;
    console.log(data);
    return (
        <button onClick={() => startCheckout()}>
            Checkout!
        </button>
    )
}

export default checkoutButton