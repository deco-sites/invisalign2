import Image from "https://denopkg.com/deco-sites/std@0.2.1/components/Image.tsx";

export interface Props {
  image?:{
    src?:string,
    alt?:string
    width: number,
    height: number
  }

}

function Logo({image}: Props) {
  return (
    <div class="flex justify-between p-[15px]">
      <div>
        {image?.src &&(
          <Image 
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}/>
        )}
      </div>
      <div>
        <div class="text-right ml-auto font-bold">
          <span class="border-r-2 border-[#c7c5c5] my-1">Portal do Paciente </span>
          <span class="pl-[10px]">Para Doutores</span>
        </div>
        <div class="flex font-heading-2 text-heading-3">
          <span>O InvisAlign é indicado para mim ?</span>
            <span class="pl-[40px]">Enconte um ortodontista: </span>
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
