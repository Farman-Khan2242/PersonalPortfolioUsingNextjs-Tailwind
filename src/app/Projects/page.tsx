import Link from "next/link"
export default function Projects(){
    return (
        <div className="pt-[100px] md:px-[10px] gap-4 flex flex-col justify-center items-center pb-[50px]">
            <h1 className="text-[40px] font-bold tracking-[5px] mb-[20px] md:text-[55px]">Projects</h1>
            <div className="w-[100%] md:w-[90%] xl:w-[70%] xl:h-[90%] sm:w-[80%] lg:w-[70%]  grid grid-cols-1 md:grid-cols-2 p-[20px] gap-x-[30px] gap-y-[30px]">

                <div>
                    <Link href='https://todo-list-wine-zeta.vercel.app/' target="_blank" className="w-[100%] hover:w-[99.70%] transition-all flex  border-2 border-transparent flex-col gap-2 justify-center items-center hover:border-white p-[15px]"  style={{transition:'all 0.2s linear' }}>
                        <h2 className="font-bold text-[25px] md:text-[25px] text-[#FF8C00] tracking-[2px]">Todo List</h2>
                        <div className="shadowWhite  h-[250px]  w-[100%] bg-cover bg-center" style={{backgroundImage: "url('/TodoList.png')"}}>
                        </div> 
                    </Link>
                </div>

                <div>
                    <Link href='/' target="_blank" className="w-[100%] hover:w-[99.70%] transition-all flex  border-2 border-transparent flex-col gap-2 justify-center items-center hover:border-white p-[20px]" style={{transition:'all 0.2s linear' }}>
                        <h2 className="font-bold text-[25px] md:text-[30px] tracking-[2px] text-[#FF8C00]">Portfolio</h2>
                        <div className="shadowBlack  h-[250px] w-[100%] bg-cover shadow-white" style={{backgroundImage: "url('/PersonalPortfolio.png')"}}>
                            
                        </div>
                    </Link>
                </div>
                <div>
                    <Link href='https://github.com/Farman-Khan2242/CLI_NumberGuessingGame' target="_blank" className="w-[100%] hover:w-[99.70%] transition-all flex  border-2 border-transparent flex-col gap-2 justify-center items-center hover:border-white p-[20px]" style={{transition:'all 0.2s linear' }}>
                        <h2 className="font-bold text-[20px] md:text-[22px] tracking-[2px] text-[#FF8C00]">CLI Number Quessing Game</h2>
                        <div   className=" shadowBlack  h-[250px] w-[100%] bg-cover shadow-white " style={{backgroundImage: "url('/NumberGuessingGame.png')"}}>
                            
                        </div>
                    </Link>
                </div>
                <div>
                    <Link href='https://github.com/Farman-Khan2242/CLI_Number_Cutting_Game' target="_blank" className="w-[100%] hover:w-[99.70%] transition-all flex  border-2 border-transparent flex-col gap-2 justify-center items-center hover:border-white p-[20px]" style={{transition:'all 0.2s linear' }}>
                        <h2 className="font-bold text-[25px] md:text-[25px] tracking-[2px] text-[#FF8C00]">CLI Number Cut Game</h2>
                        <div className="shadowBlack  h-[250px] w-[100%] bg-cover shadow-white" style={{backgroundImage: "url('/NumberCutGame.png')"}}>
                            
                        </div>
                    </Link>
                </div>
              
            </div>  
        </div>
    )
}