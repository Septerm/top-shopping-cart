import Navbar from "../components/Navbar";

export default function Cart() {


    const data = [
        {
            id: "jack12",
            title: "Long sleeve Jacket",
            image: "https://images.pexels.com/photos/2584269/pexels-photo-2584269.jpeg",
            price: 150,
            quantity: 1,
        },
        {
            id: "jack13",
            title: "Long sleeve Jacket",
            image: "https://images.pexels.com/photos/2584269/pexels-photo-2584269.jpeg",
            price: 150,
            quantity: 1,
        },
        {
            id: "jack14",
            title: "Long sleeve Jacket",
            image: "https://images.pexels.com/photos/2584269/pexels-photo-2584269.jpeg",
            price: 150,
            quantity: 1,
        },

    ]

    return(
        <>
        <main className="p-4 text-center sm:p-8">
            <h2 className="text-5xl mb-4 sm:mb-8">Your Cart</h2>
            <form className="mr-auto ml-auto  max-w-7xl">
                <table className="w-full  text-left">
                    <thead >
                        <tr >
                            <th className="p-4 border-b border-blue-gray-100">Item</th>
                            <th className="p-4 border-b border-blue-gray-100">Price</th>
                            <th className="p-4 border-b border-blue-gray-100">Quantity</th>
                            <th className="p-4 border-b border-blue-gray-100">total</th>
                        </tr>
                    </thead>
                    <tbody>

                        {data.map( (item) => {
                            return (
                                <>
                                    <tr key={item.id}>

                                        <td className="p-2 border-b border-blue-gray-100 ">

                                            <div className="flex items-center gap-8">
                                                <img src={item.image} className="max-w-25" alt={item.title} />
                                                <p>{item.title}</p>
                                            </div>
                                        
                                        </td>

                                        <td className="p-2 border-b border-blue-gray-100"><p>{item.price}</p></td>

                                        <td className="p-2 border-b border-blue-gray-100">
                                            <div className="border-2 flex max-w-20">
                                                <button className="p-2">-</button>
                                                <input className="max-w-10" min={1} value={item.quantity} type="number" />
                                                <button>+</button>
                                            </div>
                                        </td>
                                        <td className="p-2 border-b border-blue-gray-100">
                                            <div className="flex  items-center justify-between">
                                                <p>$ {item.price * item.quantity}</p>
                                                <button className="p-2 bg-red-700 text-white rounded-2xl hover:bg-red-800 cursor-pointer">Remove</button>
                                            </div>
                                
                                        </td>

                                    </tr>

                                </>

                            )

                        })}
                        
                    </tbody>
                </table>
            </form>
        </main>
        </>
        
    )
}