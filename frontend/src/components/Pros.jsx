
import ProCard from './ProCard'

const Pros = () => {
  return (
    <div className='flex items-center justify-around mt-[5rem]'>
        <ProCard image='/secure.png' head="Secured Funds" text="Secured Funds
Funds deposited with Crescoin are safe and secure with us. Using State-Of-Art Technology to hold funds of users accessible by the user only"/>
        <ProCard image='/user.png' head="User Friendly" text="User Friendly
Enjoy user friendly platform, easy to navigate through with no stress. Think Ease, Think Crescoin
"/>
        <ProCard image='/transactions.png' head="Fast Transactions" text="Fast Transactions
Buy Crescoin and send it to another user anywhere in the world at the speed of light."/>
    </div>
  )
}

export default Pros