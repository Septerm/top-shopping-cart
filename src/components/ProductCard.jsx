export default function ProductCard({data}) {



    return (
        <div className="max-w-3xs shadow-xl rounded-2xl">

            <div className="max-w-full aspect-auto overflow-hidden rounded-t-2xl ">
                <img src={data.image} alt={data.title }  className=" object-cover rounded-t-2xl transition-transform duration-300 hover:scale-105 max-w-full" />

                
            </div>

            <div className="p-4">
                    <p className="mb-4">{data.title}</p>

                    <div className="flex justify-between">
                        <p>${data.price}</p>
                        <button><span className="material-symbols-outlined">shopping_bag</span></button>
                    </div>
            </div>

 
        </div>
    )


}