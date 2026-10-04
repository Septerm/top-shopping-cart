import { useState } from "react";
import { useOutletContext } from "react-router"

export default function ProductCard({data}) {


    const {cart, setCart} = useOutletContext();


    const isInCart = cart.some((product) => product.id === data.id);

    const addToCart = (item) => {
        setCart((prev) =>
        prev.some((p) => p.id === item.id) ? prev : [...prev, item]
        );
    };

    const removeFromCart = (id) => {
        setCart((prev) => prev.filter((p) => p.id !== id));
    };

    function addToCartButton() {

        return (

            <button type="button" onClick={() => addToCart({id: data.id, title: data.title, price: data.price, image: data.image, quantity: 1,})} className="cursor-pointer"><span className="material-symbols-outlined">shopping_bag</span></button>
        )
    }

     function removeToCartButton() {

        return (

            <button type="button" onClick={() => removeFromCart(data.id)} className=" text-red-700 cursor-pointer"><span className="material-symbols-outlined">shopping_bag</span></button>
        )
    }


    return (
        <div className="max-w-3xs shadow-xl rounded-2xl">

            <div className="max-w-full aspect-auto overflow-hidden rounded-t-2xl ">
                <img src={data.image} alt={data.title }  className=" object-cover rounded-t-2xl transition-transform duration-300 hover:scale-105 max-w-full" />

                
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