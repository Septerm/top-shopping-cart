import Navbar from "../components/Navbar";


export default function Home() {

    return(
        <>
            <div className=" flex flex-col p-4 sm:p-8 max-w-7xl mr-auto ml-auto" >

                <div className="hero mb-8 h-64 rounded-3xl text-white p-4 sm:p-8 flex justify-center items-center">
                    <h2 className="text-3xl">Home</h2>
                </div>

                
                <section className="grid grid-cols-1   gap-8  sm:grid-cols-2 sm:grid-rows-2">
                    <div className=" delivery p-4 sm:p-8 flex flex-col justify-center items-center text-center gap-4 bg-black text-white sm:col-start-1 sm:row-span-2 rounded-2xl">
                        <div>
                            <span className=" top material-symbols-outlined">local_shipping</span>
                        </div>
                        <h3 className="text-3xl">Fast Delivery</h3>
                        <p>
                            Place your order an get it ship to you in 2-3 days, we offer the quickest delivery service in the industry and its completely free!
                        </p>
                    </div>
                    <div className=" material p-4 sm:p-8 flex flex-col justify-center items-center text-center gap-4 bg-black text-white sm:col-start-2 sm:row-start-1 rounded-2xl " >

                        <div>
                            <span className=" top material-symbols-outlined">workspace_premium</span>
                        </div>
                        
                        <h3 className=" text-3xl">Premium Quality Materials</h3>
                        <p>All our clothing materials are made completely from the finest quality fabrics and leathers, ensuring that any item you buy from us will be with you for years</p>
                    </div>
                    <div className="deal p-4 sm:p-8 flex flex-col justify-center items-center text-center gap-4 bg-black text-white sm:col-start-2 sm:row-start-2 rounded-2xl">
                        <div>
                            <span className=" top material-symbols-outlined">sell</span>
                        </div>
                        <h3 className=" text-3xl">Best Deals</h3>
                        <p>All Our items not only have a premium feel, but at the affordable prices compare to other clothing brands, we also offer monthly and seasonal sales</p>
                    </div>
                </section>

            </div>
            
        </>
    )
}