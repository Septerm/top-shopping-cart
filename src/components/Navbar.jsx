import { NavLink } from "react-router";


export default function Navbar() {

    return(

        <header className= " bg-black text-white">

            <div className= " flex flex-col p-4 gap-2 items-center  sm:flex sm:flex-row sm:justify-between  sm:p-8 max-w-7xl mr-auto ml-auto"> 
                <h1 className="text-2xl">868 Krew</h1>

                <nav className="flex gap-4"> 
                    <NavLink to={"/"}>Home</NavLink>
                    <NavLink to={"/shop"}>Shop</NavLink>
                    <NavLink to={"/cart"}><span className="material-symbols-outlined">shopping_bag</span></NavLink>
                </nav>
            </div>


        </header>
       
    )
}


