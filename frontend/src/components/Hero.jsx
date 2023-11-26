import Navbar from "./Navbar"


const Hero = () => {
  return (
    <div className='bg-black h-[25rem] text-white'>
        <Navbar/>

        {/* HERO BODY */}
        <div className="w-[80%] m-auto flex justify-between pt-4">
            {/* TEXT */}
            <div className="w-[60%] pt-6">
                <h1  className="text-6xl">Send Money</h1>
                <h1 className="text-6xl">Instantly, Anywhere</h1>
                <p className="my-3">Convert your local currency into Crescoins and experience a world of seamless cross-border transfers</p>
                <button className="bg-secondary rounded-lg p-2 mt-4">Get Started</button>
            </div>



            {/* IMAGE */}
            <img src="/world.png" alt="" className="w-[20rem] h-[20rem]"/>

        </div>
    </div>
  )
}

export default Hero