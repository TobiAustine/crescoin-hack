/* eslint-disable react/prop-types */


const ProCard = ({image, head, text}) => {
  return (
    <div className="w-[15rem] h-[15rem] rounded-md bg-grey flex flex-col items-center justify-center p-4">
        <img src={image} alt="" className="w-[3rem] h-[3rem]"/>
        <h2 className="font-bold mb-1">{head}</h2>
        <small>{text}</small>

    </div>
  )
}

export default ProCard