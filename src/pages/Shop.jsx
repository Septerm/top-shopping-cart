import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";


export default function Shop() {

    const [products , setProducts] = useState([

    ]);

    const [isloading, setIsLoading] = useState(true);


    function loadingPlaceholder() {


        return(
            <section>
                <p>Loading...</p>
            </section>
        )
    }


    function productCards() {

        return(
            <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,200px),256px))] justify-center gap-4 sm:gap-8">
                {products.map((product) => {
                
                return (

                    <ProductCard data={product} key={product._id}/>
                )})}
            </div>
        )
    }

    useEffect(() => {


        async function fetchProducts() {

            try {
                const response = await fetch("https://fakestoreapi.noksha.dev/api/products");
                const productsData = await response.json();
                setProducts(productsData.data)
                
            }

            catch (fetchError){
            
            }

            finally{

                setIsLoading(false)
            }

        }

        fetchProducts()
        
        
    }, [])

    

    return(
        <>
            <main>

                <div className="max-w-7xl mr-auto ml-auto p-4 sm:p-8" >
                    <h2 className="mb-8 text-4xl ">Shop</h2>


                    {isloading? loadingPlaceholder() : productCards()}

                    


                </div>


                
            </main>
            
    
        </>        
    )
}