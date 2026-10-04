import { useOutletContext } from "react-router";
import Navbar from "../components/Navbar";

export default function Cart() {

    const {cart, setCart} = useOutletContext();
    // const data = [
    //     {
    //         id: "jack12",
    //         title: "Long sleeve Jacket",
    //         image: "https://images.pexels.com/photos/2584269/pexels-photo-2584269.jpeg",
    //         price: 150,
    //         quantity: 1,
    //     },
    //     {
    //         id: "jack13",
    //         title: "Long sleeve Jacket",
    //         image: "https://images.pexels.com/photos/2584269/pexels-photo-2584269.jpeg",
    //         price: 150,
    //         quantity: 1,
    //     },
    //     {
    //         id: "jack14",
    //         title: "Long sleeve Jacket",
    //         image: "https://images.pexels.com/photos/2584269/pexels-photo-2584269.jpeg",
    //         price: 150,
    //         quantity: 1,
    //     },

    // ]

    function addQuantityButton(item) {

        const newQuantity = item.quantity + 1

        setCart( (prev) => {


            return prev.map(product =>
                product.id === item.id
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
                    product.id === item.id
                    ? {...product, quantity: newQuantity}
                    : product
                )
         
            })




        }

        
    }

    const removeFromCart = (id) => {
        setCart((prev) => prev.filter((p) => p.id !== id));
    };

    return(
        <>
        <main className="p-2 text-center sm:p-8">
            <h2 className="text-5xl mb-4 sm:mb-8">Your Cart</h2>
            <form className="mr-auto ml-auto  max-w-7xl">
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
                                
                                <tr key={item.id}>

                                    <td className="p-2 border-b border-blue-gray-100 ">

                                        <div className="flex flex-col-reverse sm:flex-row items-center gap-4">
                                            <img src={item.image} className="max-w-20" alt={item.title} />
                                            <p>{item.title}</p>
                                        </div>
                                    
                                    </td>

                                    <td className="p-1 border-b border-blue-gray-100"><p>$ {item.price}</p></td>

                                    <td className=" border-b border-blue-gray-100">
                                        <div className="border-2 flex max-w-10 sm:max-w-20 flex-col-reverse sm:flex-row items-center">
                                            <button type="button" onClick={() => subtractQuantityButton(item)}  className=" sm:p-2 font-bold">-</button>
                                            <input className="max-w-10 " min={1} onChange={() => e.target.value} value={item.quantity} type="number" />
                                            <button type="button" onClick={() => addQuantityButton(item)} className="font-bold">+</button>
                                        </div>
                                    </td>
                                    <td className="p-1 sm:p-2 border-b border-blue-gray-100">
                                        <div className="flex flex-col sm:flex-row items-center gap-4 justify-between">
                                            <p>$ {item.price * item.quantity}</p>
                                            <button type="button" onClick={() => removeFromCart(item.id)} className="p-2 bg-red-700 text-white rounded-2xl hover:bg-red-800 cursor-pointer">Remove</button>
                                        </div>
                            
                                    </td>

                                </tr>

                                

                            )

                        })}
                        
                    </tbody>
                </table>
            </form>
        </main>
        </>
        
    )
}