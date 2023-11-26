import { useState } from "react"
import { Link } from "react-router-dom"

const Signin = () => {

    const [email, setEmail] = useState('')
   


  return (
    <div className="flex justify-center items-center bg-[url('/bgSignup.jpg')] bg-cover h-screen ">

    <div className="text-white w-[25rem] h-fit-content p-4 items-center bg-[url('/signUp.jpg')] bg-cover bg-no-repeat border-4 border-white rounded-lg">
           
           
           {/* LOGO */}
           <div className="">
           <Link to='/'> <img src="/logo.png" alt="" className="text-center mx-auto"/></Link>
           </div>


           <div className="text-center">
            <h2 className='font-bold'>Forgotten Your Password</h2>
            <small>Enter your email address to complete the process</small>
           </div>


           <form action="">
            <div  className="my-4">
                <label htmlFor="" className="block">Email</label>
                <input type="email" name="" id="" className="w-[90%] bg-transparent border-[1px] border-white " value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>
           
           

          

          
            
            <div className="text-center">
            <button className='bg-secondary rounded-lg text-white p-1 my-2 text-center w-[8rem]'>Send Pin</button>
           </div>
           </form>

           <h3 className="text-center">
           Do not have an account?, 
            <Link to="/signup" className="text-[#950055] underline">SignUp Here</Link>
           </h3>
    </div>




</div>
  )
}

export default Signin