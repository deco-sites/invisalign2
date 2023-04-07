import Image from "https://denopkg.com/deco-sites/std@0.2.1/components/Image.tsx";

export interface Props {
  logo?:{
    src?:string,
    alt?:string
    width: number,
    height: number
  }
  infos?: string[]
}

function Logo({logo, infos}: Props) {
  return (
    <div class="flex justify-between p-[15px]">
      <div>
        {logo?.src &&(
          <Image 
          src={logo.src}
          alt={logo.alt}
          width={logo.width}
          height={logo.height}/>
        )}
      </div>
      <div>
        <div class="text-right ml-auto font-bold">
          {infos && 
            <>
            <span class="border-r-2 border-[#c7c5c5] my-1">{infos[0]}{" "}</span>
            <span class="pl-[10px]">{infos[1]}</span>
            </>
          }          
        </div>
        <div class="flex font-heading-2 text-heading-3">
          {infos && 
            <>
              <span>{infos[2]}</span>
              <span class="pl-[40px]">{infos[3]}</span>
            </>
            }
            <div class="pl-[20px] flex items-center">
              <input type="text" class="bg-[#ECECEC] h-full" placeholder="Digite seu cep"/>
              <a href="#" class="bg-[#489bdf]">Ir</a>
            </div>
          </div>
      </div>
    </div>
  );
}

export default Logo;
