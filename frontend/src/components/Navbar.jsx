import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div className="w-[80%] m-auto flex items-center justify-between text-white pt-2" >
        
        {/* LOGO */}
        <Link to='/'> <img src="/logo.png" alt="" /></Link>
        


        {/* NAVLIST */}
        <div className="flex items-center justify-between w-[60%] "> 
         {/* LINKS */}
         <div className="flex gap-4 items-center">
         <Link to='/' className="hover:border-b-4 border-secondary">HOME</Link>
         <Link to='about' className="hover:border-b-4 border-secondary">ABOUT</Link>
        <Link to='faq' className="hover:border-b-4 border-secondary">FAQs</Link>
        </div>



        
        {/* CTA */}
        <div className="flex gap-4 items-center">
        <Link to='/signin'>Log In</Link>
        <Link to='/signup' className="bg-secondary rounded-md p-1">Sign Up</Link>
        </div>
        

        
        
        
        </div>

       


    </div>
  )
}

export default Navbar