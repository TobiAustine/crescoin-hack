
const Statistics = () => {
  return (
    <div className="rounded-md bg-grey flex items-center justify-between w-[60%] h-[5rem] p-2 absolute top-[22.5rem] left-[20%]">
        <div className="flex flex-col gap-1 justify-center items-center">
            <small>Current Users</small>
            <p className="font-bold">10M+</p>
        </div>

        <div className="flex flex-col gap-1  justify-center items-center">
             <small>Current Countries</small>
             <p className="font-bold">17</p>
        </div>

        <div className="flex flex-col gap-1 justify-center items-center">
        <small>Total Transactions</small>
        <p className="font-bold">120K+</p>
        </div>
    </div>
  )
}

export default Statistics