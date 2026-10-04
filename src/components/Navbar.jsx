import { useEffect, useState } from "react";
import { NavLink } from "react-router";
import logo from "../assets/868_Krew_Logo-8.png"


export default function Navbar({cartData}) {

    const [quantity, setQuantity] = useState(0)

    useEffect(() => {

        const total = cartData.reduce((accumulator, current) => {
            return accumulator + current.quantity
        }, 0) 

        setQuantity(total)


    }, [cartData])

    return(

        <header className= " bg-[rgb(19,18,18)] text-white">

            <div className= " flex flex-col p-4 gap-2 items-center  sm:flex sm:flex-row sm:justify-between  sm:p-8 max-w-7xl mr-auto ml-auto"> 
                <h1 aria-label="868 Krew Logo" >
                    <img src={logo} className="block h-15 w-auto sm:h-20" alt="868 Krew" />
                </h1>

                <nav className="flex  items-center gap-4"> 
                    <NavLink to={"/"}><p className="text-xl">Home</p></NavLink>
                    <NavLink to={"/shop"}><p className="text-xl">Shop</p></NavLink>
                    <NavLink to={"/cart"}><p className="text-2xl"><span className="material-symbols-outlined ">shopping_bag</span></p></NavLink>
                    <span>{quantity}</span>
                </nav>
            </div>


        </header>
       
    )
}


