import { useContext, useState } from "react";
import { ShopContext } from "../../Context/ShopContext";
import './Placeorder.css'

function Placeorder() {
    const { TotalCartAmount } = useContext(ShopContext);
    const [data, setData] = useState({
        first: "",
        last: "",
        email: "",
        street: "",
        city: "",
        state: "",
        pin: "",
        country: "",
        phone: ""
    });

    const ChangeHandler = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { first, last, email, street, city, state, pin, country, phone } = data;
        if (!first || !last || !email || !street || !city || !state || !pin || !country || !phone) {
            alert("All fields are required");
        } else {
            alert("Order placed");
        }
    };

    return (
        <form className="place-order" onSubmit={handleSubmit}>
            <div className="place-order-left">
                <p className="title">Address details</p>
                <div className="multi-fields">
                    <input type="text" onChange={ChangeHandler} value={data.first} name="first" placeholder="First Name" />
                    <input type="text" onChange={ChangeHandler} value={data.last} name="last" placeholder="Last Name" />
                </div>
                <input type='email' onChange={ChangeHandler} value={data.email} name="email" placeholder="Email" />
                <input type="text" onChange={ChangeHandler} value={data.street} name="street" placeholder="Street/House no." />
                <div className="multi-fields">
                    <input type="text" onChange={ChangeHandler} value={data.city} name="city" placeholder="City" />
                    <input type="text" onChange={ChangeHandler} value={data.state} name="state" placeholder="State" />
                </div>
                <div className="multi-fields">
                    <input type="text" onChange={ChangeHandler} value={data.pin} name="pin" placeholder="Pin Code" />
                    <input type="text" onChange={ChangeHandler} value={data.country} name="country" placeholder="Country" />
                </div>
                <input type="text" onChange={ChangeHandler} value={data.phone} name="phone" placeholder="Phone no." />
            </div>
            <div className="place-order-right">
                <div className="cartitems-total">
                    <h2>Cart Totals</h2>
                    <div className='cartitems-pricing'>
                        <div className='cartitems-total-item'>
                            <p>Subtotal</p>
                            <p>INR {TotalCartAmount()}</p>
                        </div>
                        <hr />
                        <div className='cartitems-total-item'>
                            <p>Shipping fee</p>
                            <p>Free</p>
                        </div>
                        <hr />
                        <div className="cartitems-total-item">
                            <h3>Total</h3>
                            <h3>INR {TotalCartAmount()}</h3>
                        </div>
                    </div>
                    <button type="submit">Proceed</button>
                </div>
            </div>
        </form>
    );
}

export default Placeorder;
