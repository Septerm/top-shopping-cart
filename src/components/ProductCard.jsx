import { useState } from "react";
import { useOutletContext } from "react-router"

export default function ProductCard({data}) {


    const {cart, setCart} = useOutletContext();


    const isInCart = cart.some((product) => product._id === data._id);

    const addToCart = (item) => {
        setCart((prev) =>
        prev.some((p) => p._id === item._id) ? prev : [...prev, item]
        );
    };

    const removeFromCart = (_id) => {
        setCart((prev) => prev.filter((p) => p._id !== _id));
    };

    function addToCartButton() {

        return (

            <button type="button" onClick={() => addToCart({_id: data._id, title: data.title, price: data.price, image: data.image, quantity: 1,})} className="cursor-pointer"><span className="material-symbols-outlined">shopping_bag</span></button>
        )
    }

     function removeToCartButton() {

        return (

            <button type="button" onClick={() => removeFromCart(data._id)} className=" text-red-700 cursor-pointer"><span className="material-symbols-outlined">shopping_bag</span></button>
        )
    }


    return (
        <div className="max-w-3xs shadow-xl bg-[rgb(255,255,255)] rounded-2xl">

            <div className="aspect-4/5 w-full overflow-hidden rounded-t-2xl bg-gray-100 ">
                <img src={data.image} alt={data.title } loading="lazy"  decoding="async"  className="h-full w-full object-cover transition-transform duration-300 hover:scale-105" />

                
            </div>

            <div className="p-4">
                    <p className="mb-4">{data.title}</p>

                    <div className="flex justify-between">
                        <p>${data.price}</p>


                        {isInCart ? removeToCartButton() : addToCartButton()}
                    </div>
            </div>

 
        </div>
    )


}