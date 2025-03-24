export function mobileTailwind(){
    // Confirming classes are aligned with tailwind v4
    return (
      <div className="w-96 h-[911px] relative">
          <img className="w-96 h-96 left-0 top-0 absolute" src="https://placehold.co/414x414" />
          <div className="w-96 h-[497px] left-0 top-[414px] absolute bg-zinc-800" />
          <div className="w-96 left-[25px] top-[449px] absolute justify-start text-white text-4xl font-normal font-['Oswald'] uppercase">
            creek, creek creek
          </div>
          <div className="w-80 left-[25px] top-[565px] absolute justify-start text-stone-400 text-base font-normal font-['Roboto'] leading-relaxed">
            Creek is located in Creek’s best location...
          </div>
          <div className="w-60 h-11 left-[25px] top-[827px] absolute rounded-[60px] border-[1.50px] border-red-400" />
          <div className="left-[49.50px] top-[838px] absolute justify-start text-white text-sm font-medium font-['Oswald'] uppercase">
            VISIT THE creek WEBSITE
          </div>
          <div className="w-1 h-2 left-[231px] top-[845.50px] absolute outline outline-[1.50px] outline-offset-[-0.75px] outline-red-400" />
          <div className="w-1 h-2 left-[226.50px] top-[845.50px] absolute outline outline-[1.50px] outline-offset-[-0.75px] outline-red-400" />
      </div>
    )
}