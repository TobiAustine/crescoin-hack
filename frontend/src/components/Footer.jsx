import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <div className=" bg-black flex items-center justify-between p-8 text-white mt-5">
        
        {/* LOGO */}
        <Link to='/'><img src="/logo.png" alt="" /></Link>
        


        {/* COMPANY */}
        <div className="flex flex-col gap-3">
            <h2 className="font-bold">Company</h2>
        <Link to='/about' className="hover:underline"> About Us</Link>
        <Link to='/blog' className="hover:underline">Blog</Link>
        </div>


        {/* LEGAL */}
        <div className="flex flex-col justify-center items-center gap-3">
        <h2 className="font-bold">Legal</h2>
        <Link to='/about' className="hover:underline"> Privacy Policy</Link>
        <Link to='/blog' className="hover:underline">Terms of Use</Link>
        <Link to='/faq' className="hover:underline">FAQs</Link>
        </div>
        

        {/* CONTACT US */}
        <div className="flex flex-col gap-3">
        <h2 className="font-bold">Contact Us</h2>
        <Link to='/' className="hover:underline"> Support</Link>
        <Link to='/' className="hover:underline">Twitter</Link>
        <Link to='/' className="hover:underline">LinkedIn</Link>
        <Link to='/' className="hover:underline">Instagram</Link>
        </div>
    </div>
  )
}

export default Footer