import { useState } from "react";

const Navbar = ({ setLines, setIsDrawing, setColorPicked }) => {

    const [style, setStyle] = useState("")

    const reset = () => {
        setLines([]);
        setIsDrawing(false); 
    }

    const colorPicked = (color) => {
        setColorPicked(color);
        setStyle("opacity")
    }

    return (
        <div className="flex justify-between bg-slate-100 py-4 px-10" >
            <div className=" text-2xl font-black ">DRAW SOMETHING</div>
            <div className="flex items-center justify-center gap-4">
                <div className={` bg-black rounded-full h-8 w-8 cursor-pointer ${style} `} onClick={() => colorPicked("#000")}></div>
                <div className={` bg-gray-500 rounded-full h-8 w-8 cursor-pointer ${style} `} onClick={() => colorPicked("#6A7280")}></div>
                <div className={` bg-purple-500 rounded-full h-8 w-8 cursor-pointer ${style} `} onClick={() => colorPicked("#A854F7")}></div>
                <div className={` bg-blue-600 rounded-full h-8 w-8 cursor-pointer ${style} `} onClick={() => colorPicked("#2463EB")}></div>
                <div className={` bg-green-500 rounded-full h-8 w-8 cursor-pointer ${style} `} onClick={() => colorPicked("#21C55D")}></div>
                <div className={` bg-red-600 rounded-full h-8 w-8 cursor-pointer ${style} `} onClick={() => colorPicked("#DC2625")}></div>
                <div className={` bg-orange-500 rounded-full h-8 w-8 cursor-pointer ${style} `} onClick={() => colorPicked("#F87315")}></div>
                <div className={` bg-yellow-500 rounded-full h-8 w-8 cursor-pointer ${style} ` }onClick={() => colorPicked("#E9B305")}></div>
                <div className={` bg-white rounded-full h-8 w-8 cursor-pointer ${style} `} onClick={() => colorPicked("#fff")}></div>
                <div className=" rounded-full h-8 w-8 cursor-pointer flex items-center justify-center border border-gray-500 "> + </div>

            </div>
            <div className="flex gap-2">
                <button className="px-4 bg-black  text-white rounded " onClick={reset}> RESET </button>
            </div>
        </div>
    )
}

export default Navbar;