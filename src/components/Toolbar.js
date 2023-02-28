


const Toolbar = () => {
    return (
        <div className='bg-white p-4 flex flex-col gap-4' style={{ height: "100vh", width: "20%" }}> 
            <p className="text-center text-sm">PENCIL WEIGHT</p>
            <div className="w-full h-10 bg-slate-100  rounded cursor-pointer p-4 flex items-center justify-center">
                <div className=" bg-black w-full h-1 rounded "></div>
            </div>
            <div className="w-full h-10 bg-slate-100  rounded cursor-pointer p-4 flex items-center justify-center">
                <div className=" bg-black w-full h-2 rounded "></div>
            </div>
            <div className="w-full h-10 bg-slate-100  rounded cursor-pointer p-4 flex items-center justify-center">
                <div className=" bg-black w-full h-3 rounded "></div>
            </div>
            <div className="w-full h-10 bg-slate-100  rounded cursor-pointer p-4 flex items-center justify-center">
                <div className=" bg-black w-full h-4 rounded "></div>
            </div>
        </div>
    )
}

export default Toolbar;