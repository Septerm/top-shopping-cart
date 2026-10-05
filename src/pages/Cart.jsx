import { useOutletContext } from "react-router";

export default function Cart() {

    const {cart, setCart} = useOutletContext();
   

    function addQuantityButton(item) {

        const newQuantity = item.quantity + 1

        setCart( (prev) => {


            return prev.map(product =>
                product._id === item._id
                ? {...product, quantity: newQuantity}
                : product
            )
         
        })
    }

    function subtractQuantityButton(item) {

        if(item.quantity > 1) {


            const newQuantity = item.quantity - 1

            setCart( (prev) => {


                return prev.map(product =>
                    product._id === item._id
                    ? {...product, quantity: newQuantity}
                    : product
                )
         
            })




        }

        
    }

    function emptyCart() {

        return(
            <div>
                <h3>Your cart is currently empty</h3>
            </div>
        )
    }

    function totalCost() {

        let total = 0;

        cart.map( (item) => {

            total = total + (item.price * item.quantity);
        })

        return total
    }

    function dummyCheckout() {

        alert("This is a demo site not checkout available!")
    }

    const removeFromCart = (_id) => {
        setCart((prev) => prev.filter((p) => p._id !== _id));
    };

    return(
        <>
        <main className="p-2 text-center sm:p-8">
            <h2 className="text-5xl mb-4 sm:mb-8">Your Cart</h2>
            { cart.length == 0 ? emptyCart() : <form className="mr-auto ml-auto  max-w-7xl">
                <table className="w-full  text-center sm:text-left">
                    <thead >
                        <tr >
                            <th className="p-4 border-b border-blue-gray-100">Item</th>
                            <th className="p-4 border-b border-blue-gray-100">Price</th>
                            <th className="p-4 border-b border-blue-gray-100">Quantity</th>
                            <th className="p-4 border-b border-blue-gray-100">total</th>
                        </tr>
                    </thead>
                    <tbody>

                        {cart.map( (item,index) => {
                            return (
                                
                                <tr key={item._id}>

                                    <td className="p-2 border-b border-blue-gray-100 ">

                                        <div className="flex flex-col-reverse sm:flex-row items-center gap-4">
                                            <img src={item.image} className="max-w-20" alt={item.title} />
                                            <p>{item.title}</p>
                                        </div>
                                    
                                    </td>

                                    <td className="p-1 border-b border-blue-gray-100"><p>$ {item.price}</p></td>

                                    <td className=" border-b border-blue-gray-100">
                                        <div className="border-2 flex max-w-10 sm:max-w-20 flex-col-reverse sm:flex-row items-center">
                                            <button type="button" aria-label={`reduce the amount of item by 1`} onClick={() => subtractQuantityButton(item)}  className=" sm:p-2 font-bold cursor-pointer">-</button>
                                            <input className="max-w-10 text-center sm:text-center " min={1} onChange={() => e.target.value} value={item.quantity} type="number" />
                                            <button type="button" aria-label={`increase the amount of item by 1`} onClick={() => addQuantityButton(item)} className="font-bold cursor-pointer">+</button>
                                        </div>
                                    </td>
                                    <td className="p-1 sm:p-2 border-b border-blue-gray-100">
                                        <div className="flex flex-col sm:flex-row items-center gap-4 justify-between">
                                            <p>$ {item.price * item.quantity}</p>
                                            <button type="button" aria-label={`removes item from cart`} onClick={() => removeFromCart(item._id)} className="p-2 bg-red-700 text-white rounded-2xl hover:bg-red-800 cursor-pointer">Remove</button>
                                        </div>
                            
                                    </td>

                                </tr>

                                

                            )

                        })}

                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td className="p-2 sm:p-4 border-b border-blue-gray-100">
                                <p className="text-md sm:text-2xl font-bold">{`SUBTOTAL: $ ${totalCost()}`}</p>
                            </td>
                        </tr>
                        
                    </tbody>
                </table>

                <div className="flex justify-end mt-4 sm:mt-8">
                    <button type="button" onClick={dummyCheckout} className="p-2 sm:p-4 cursor-pointer rounded-2xl bg-red-700 hover:bg-red-800 text-white">Checkout</button>
                </div>
                
            </form>}
        </main>
        </>
        
    )
}