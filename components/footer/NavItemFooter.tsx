import { IconItem } from "./Footer.tsx";
import Icon from "$store/components/ui/Icon.tsx";
import Text from "$store/components/ui/Text.tsx";

export interface INavItemFooter {
  infos: string[];
  nationality: string;
  icons?: IconItem[];
  infos2?: { label: string, href: string };
  juridico?:{label: string, href: string};
  contacts?: { label: string, sac: number; href: string };
  nomeEmpresa?: string;   
}

function NavItemFooter({ item }: { item: INavItemFooter },) {
  const { infos, juridico, nationality, icons =[], infos2, contacts, nomeEmpresa} = item;
  return (
    <div class="flex flex-col">
      <div class="w-full flex flex-col justify-between mt-[30px] md:flex-row">
          <div class="items-center md:w-7/10">
            <ul class="flex flex-wrap pl-[50px]">
              {infos && infos.map((info) => (
                <li class="mr-[20px] text-xs" key={info}>{info}</li>
              ))}
            </ul> 
          </div> 
          <div class="flex flex-col mt-[10px] md:pl-[200px] md:w-[300px] md:mt-[-4px]">
            <div class="flex items-center mb-[15px]">
                <img src="https://images.ctfassets.net/vh25xg5i1h5l/3fK5H87yiK3ZFANw5HZ9ws/8d18cdf54f68601ceef5b25d5a19e61d/brazil-national-flag.png" width={30} alt="bandeira-do-Brasil" />
                <p class="ml-[5px]">{nationality}</p>
            </div>
            <div class="flex">
                {icons && icons.map((icon, index) => (
                  <div class="mr-[10px]">
                    <Icon
                    id={icon?.icon}
                    width={25}
                    height={20}
                    strokeWidth={0.01}
                    color={"#1d93dd"}
                    />
                  </div>
                ))}
              </div>
          </div>
      </div>
      <div class="mt-[10px] md:self-end">
        <span class="text-light-blue"><a href={juridico?.href}>{juridico?.label}</a></span>
      </div>
      <div class="mt-[10px] md:self-end">
        <span>{contacts?.label}, {" "}{contacts?.sac}<> ou </><a href={contacts?.href} class="text-light-blue">{" "}clique aqui.</a></span>
      </div>
      <div class="flex flex-col mt-[15px] md:flex-row">
        <div class="md:w-1/2">
          <h1 class="text-xs md:pt-[5px]">{nomeEmpresa}</h1>
        </div>
        <div class="mt-[15]px]">
          <span class="text-xs text-justify">{infos2?.label}<br><a href={infos2?.href} class="text-light-blue">{infos2?.href}</a></br></span>
        </div>
      </div>
      
    </div>
);

}

export default NavItemFooter;