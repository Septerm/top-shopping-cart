import Navbar from "../components/Navbar";

export default function Home() {

    return(
        <>
            <div className=" flex flex-col p-4 sm:p-8 max-w-7xl mr-auto ml-auto" >

                <div className="bg-black mb-8 h-64 rounded-3xl text-amber-50 p-4 sm:p-8 flex justify-center items-center">
                    <h2 className="text-3xl">Home</h2>
                </div>

                
                <section className="grid grid-cols-1   gap-8  sm:grid-cols-2 sm:grid-rows-2">
                    <div className="p-4 bg-black text-white sm:col-start-1 sm:row-span-2 rounded-2xl">
                        <p>Fast Delivery</p>
                    </div>
                    <div className="p-4 bg-black text-white sm:col-start-2 sm:row-start-1 rounded-2xl " >
                        <p>Primium Quality Materials</p>
                    </div>
                    <div className="p-4 bg-black text-white sm:col-start-2 sm:row-start-2 rounded-2xl">
                        <p>Best Deals</p>
                    </div>
                </section>

            </div>
            
        </>
    )
}