import Image from "https://denopkg.com/deco-sites/std@0.2.1/components/Image.tsx";
import Modals from "$store/islands/HeaderModals.tsx";

export interface NavItem {
  label: string;
  href: string;
  children?: Array<{
    label: string;
    href: string;
  }>;
}
export interface infosLinks{
  href: string;
  label:string;
}
export interface Props {
  logo?:{
    src?:string,
    alt?:string
    width: number,
    height: number
  }
  infos?: infosLinks[];
  navItems?: NavItem[];
}

function Logo({
  logo, 
  infos= [],
  navItems = []
}: Props) {
  return (
    <>
    {/* Mobile view */}
    <div class="md:hidden ">
      <div class="flex">
        <div>
            {logo?.src &&(
              <Image 
              src={logo.src}
              alt={logo.alt}
              width={logo.width}
              height={logo.height}/>
            )}
        </div>
      </div>

    </div>
    {/* Desktop View */}
    <div class="hidden md:flex justify-between ">
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
        <div class="text-right ml-auto font-bold md:ml-[80px] md:mt-[15px]">
          {infos && 
            <>
            <span class="border-r-2 border-[#c7c5c5] my-1"><a href={infos[0]?.href}>{infos[0]?.label}{" "}</a></span>
            <span class="pl-[10px]"><a href={infos[1]?.href}>{infos[1]?.label}</a></span>
            </>
          }          
        </div>
        <div class="hidden lg:flex font-bold text-[12px] lg:bock ">
            {infos && 
              <div>
                <span><a href="form-user">{infos[2]?.label}</a></span>
                <span class="pl-[40px]"><a href={infos[3]?.href}>{infos[3]?.label}</a></span>
              </div>
              }
            <div class="pl-[20px] flex items-center ">
              <input type="text" class="bg-[#ECECEC]" placeholder="Digite seu cep"/>
              <a href="#" class="bg-[#489bdf]">Ir</a>
            </div>
          </div>
      </div>
    </div>
    </>
  );
}

export default Logo;
