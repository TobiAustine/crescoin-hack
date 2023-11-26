/* eslint-disable react/prop-types */


const HowtoCard = ({image, number,text,paragraph}) => {
  return (
    <div className="flex items-center justify-between text-white">
        <div className="flex items-center justify-center w-[20%]">
            <img src={image} alt="" className="w-[5rem] h-[5rem]" /> 
        </div>
       
        <div className="w-[60%]  flex items-center gap-3">
            <div className="font-bold">{number}</div>
            <div className="pt-5">
                <h3 className="font-bold">{text}</h3>
                <small className="text-xs">{paragraph}</small>
            </div>
        </div>
    </div>
  )
}

export default HowtoCard