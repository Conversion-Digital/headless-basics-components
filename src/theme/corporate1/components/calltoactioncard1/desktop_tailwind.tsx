export function mobileTailwind(){
    // This remains the same content, verifying tailwind v4 class usage.
    return (
      <div className="w-[1920px] h-[819px] relative">
          <img className="w-[960px] h-[819px] left-[960px] top-0 absolute" src="https://placehold.co/960x819" />
          <div className="w-[960px] h-[819px] left-0 top-0 absolute bg-zinc-800" />
          <div className="left-[120px] top-[115.50px] absolute justify-start text-white text-5xl font-normal font-['Oswald'] uppercase">Creek, Creek creek</div>
          <div className="w-[648px] left-[120px] top-[208.50px] absolute justify-start text-stone-400 text-lg font-normal font-['Roboto'] leading-7">
              Creek is located in Creek’s best location, with The Creek Shopping Centre just opposite...
          </div>
          <div className="w-72 h-14 left-[120px] top-[638px] absolute rounded-[60px] border-[1.50px] border-red-400" />
          <div className="left-[150px] top-[655px] absolute justify-start text-white text-base font-normal font-['Oswald'] uppercase">visit the Creek website</div>
          <div className="w-1.5 h-3 left-[374px] top-[661.50px] absolute outline outline-2 outline-offset-[-1px] outline-red-400" />
          <div className="w-1.5 h-3 left-[368px] top-[661.50px] absolute outline outline-2 outline-offset-[-1px] outline-red-400" />
      </div>
    )
}