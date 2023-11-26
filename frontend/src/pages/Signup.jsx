import { Link } from "react-router-dom"
import { useState } from "react";
// bg-signUp bg-cover
const Signup = () => {
   // const [name, setName] = useState("")


    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email:'',
        password:'',
        confirmPassword:'',
        country:'',
        phone:'',

    })

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };


  return (
    <div className="flex justify-center items-center bg-[url('/bgSignup.jpg')] bg-cover h-screen ">

            <div className="text-white w-[25rem] h-fit-content p-4 items-center bg-[url('/signUp.jpg')] bg-cover bg-no-repeat border-4 border-white rounded-lg">
                   
                   
                   {/* LOGO */}
                   <div>
                    <Link to='/'> <img src="/logo.png" alt="" className="text-center mx-auto"/></Link>
                   
                   </div>


                   <div className="text-center">
                    <h2 className='font-bold'>Create your account</h2>
                    <small>create an account to have access to use our services</small>
                   </div>


                   <form action="">
                    <div>
                        <label htmlFor="" className="block">First Name</label>
                        <input type="text" name="firstName" value={formData.firstName} onChange={handleInputChange} id="" className="w-[90%] bg-transparent border-[1px] border-white "  required/>
                    </div>
                   
                    <div>
                        <label htmlFor="" className="block">Last Name</label>
                        <input type="text"  className="w-[90%] bg-transparent border-[1px] border-white " required name="lastName" value={formData.lastName} onChange={handleInputChange}/>
                    </div>

                    <div>
                        <label htmlFor="" className="block">Country</label>
                        <input type="text"  className="w-[90%] bg-transparent border-[1px] border-white " required name="country" value={formData.country} onChange={handleInputChange}/>
                    </div>

                    <div>
                        <label htmlFor="" className="block">Phone number(Optional)</label>
                        <input type="number"  className="w-[90%] bg-transparent border-[1px] border-white " name="phone" value={formData.lastName} onChange={handleInputChange}/>
                    </div>

                    <div>
                        <label htmlFor="" className="block">Password</label>
                        <input type="password" name="password" value={formData.password} onChange={handleInputChange} className="w-[90%] bg-transparent border-[1px] border-white " required />
                    </div>

                    <div>
                        <label htmlFor="" className="block">Confirm Password</label>
                        <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleInputChange} className="w-[90%] bg-transparent border-[1px] border-white " required/>
                    </div>

                    <div className='flex items-center gap-2'>
                            <input type="checkbox" name="" id=""  required/>
                            <small>Agree to our terms and conditions</small>
                    </div>
                    
                    <div className="text-center">
                    <button className='bg-secondary rounded-lg text-white p-1 my-2 text-center w-[8rem]'>Sign Up</button>
                   </div>
                   </form>

                   <h3 className="text-center">
                    Already have an account?, 
                    <Link to="/signin" className="text-[#950055] underline">Log In Here</Link>
                   </h3>
            </div>




    </div>
  )
}

export default Signup