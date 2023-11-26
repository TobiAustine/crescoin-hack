import HowtoCard from "./HowtoCard"

const Howto = () => {
  return (
    <div>
        <h1 className="underline text-center my-5 font-bold">How To Use</h1>

        {/* HOW TO CREATE USE CRESCOIN */}
        <div className="bg-black rounded-lg w-[80%] h-[20rem] m-auto flex items-center justify-center">

            <div className=" m-auto">
                 <HowtoCard image='/createAccount.png' number='1.' text='Create an account' paragraph='Sign Up and fill the information about yourself correctly to create an account with Crescoin'/>
            <HowtoCard image='/verifyAccount.png' number='2.' text='Verify your account' paragraph='Complete your KYC to activate your account to send funds across borders'/>


            <HowtoCard image='/crossBorder.png' number='3.' text='Enjoy your cross border transactions' paragraph='Complete your KYC to activate your account to send funds across borders'/>
            </div>
           

        </div>


    </div>
  )
}

export default Howto