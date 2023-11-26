import Navbar from "../components/Navbar"


const About = () => {
  return (
    <div>
        <div className="bg-black h-fit w-screen flex justify-center items-center">
             <Navbar/>
        </div>
       

        {/* TITLE */}
        <div className="text-center mt-4">
            <h1 className="font-bold">About Us</h1>
            <p>Welcome to Crescoin – where innovation meets global connectivity in financial transactions.</p>
        </div>


        {/* BODY */}
        <div className="flex">


            {/* TEXT */}
            <div>
                <div>
                      <p>At Crescoin, we are passionate about revolutionizing the way people send money across borders. Our platform was born from the vision of creating a seamless solution for individuals worldwide to connect and transfer funds securely and effortlessly.</p>

                </div>

                <div>
                     <h1 className="font-bold">Our Mission </h1>
           <p> Empower individuals globally by providing a reliable, accessible, and user-friendly platform for token-based transactions. We aim to break down financial barriers and foster a world where sending money internationally is as simple as a click.</p>
                </div>

                <div>
                     <h1 className="font-bold">What we offer </h1>
           <p> Token Creation: We facilitate the creation of tokens that serve as a universal medium for international transactions.
            Global Accessibility: Our platform welcomes users from all corners of the world, enabling anyone, anywhere, to participate in a borderless financial ecosystem.
            Secure Transactions: Ensuring the highest level of security is our priority. We employ cutting-edge technology to safeguard your transactions and information.</p>
                </div>
            
           
            </div>
           





            {/* IMAGE */}
            <div>
                <img src="/About.png" alt="" />
            </div>

        </div>
    </div>
  )
}

export default About