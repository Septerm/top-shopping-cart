import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";


export default function Shop() {

    const [products , setProducts] = useState([

        {
            id: "jack12",
            image: "https://images.pexels.com/photos/2584269/pexels-photo-2584269.jpeg",
            price: 150,
            title: "Long sleeve Jacket",

        },

        {
            id: "jack13",
            image: "https://images.pexels.com/photos/2584269/pexels-photo-2584269.jpeg",
            price: 120,
            title: "Long sleeve Jacket",

        },

        {
            id: "jack14",
            image: "https://images.pexels.com/photos/2584269/pexels-photo-2584269.jpeg",
            price: 250,
            title: "Long sleeve Jacket",

        },

        {
            id: "jack15",
            image: "https://images.pexels.com/photos/2584269/pexels-photo-2584269.jpeg",
            price: 350,
            title: "Long sleeve Jacket",

        },

        {
            id: "jack16",
            image: "https://images.pexels.com/photos/2584269/pexels-photo-2584269.jpeg",
            price: 550,
            title: "Long sleeve Jacket",

        },




    ]);

    useEffect(() => {


        async function fetchProducts() {

            try {
                const response = await fetch("https://fakestoreapi.noksha.dev/api/products");
                const productsData = await response.json();
                console.log(productsData)
                //setProducts(productsData)
                
            }

            catch (fetchError){
            
            }

        }

        fetchProducts()
        
        
    }, [])

    

    return(
        <>
            <main>

                <div className="max-w-7xl mr-auto ml-auto p-4 sm:p-8" >
                    <h2 className="mb-8 text-4xl ">Shop</h2>

                    <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,200px),1fr))] gap-4 sm:gap-8 ">
                       {products.map((product) => {
                        
                        return (

                            <ProductCard data={product} key={product.id}/>
                       )})}
                    </div>


                </div>


                
            </main>
            
    
        </>        
    )
}