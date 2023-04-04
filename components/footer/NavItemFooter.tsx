
export interface INavItemFooter {
  infos: string[];
  bandeira: string;
  nationality: string;
  icons?: string[];
  infos2?: { label: string, href: string };
  contacts?: { label: string, sac: number; href: string };
  nomeEmpresa?: string;   
}

function NavItemFooter({ item }: { item: INavItemFooter }) {
  const { infos, bandeira, nationality, icons =[], infos2, contacts, nomeEmpresa} = item;
  return (
    <div class="bg-blue-50 flex flex-col">
      <div class="w-full flex justify-between mt-[30px]">
          <div class="w-[600px]">
            <ul class="flex flex-wrap">
              {infos && infos.map((info) => (
                <li class="mr-[20px]" key={info}>{info}</li>
              ))}
            </ul>
          </div>
          <div class="flex justify-between w-[400px]">
            <div class="flex">
                <p>{bandeira}</p>
                <p>{nationality}</p>
            </div>
            <div class="flex">
              {icons && icons.map((icon, index) => (
                <p class="ml-[20px]">{icon}</p>
              ))}
            </div>
          </div>
      </div>
      <div class="self-end mt-[10px]">
        <span>{contacts?.label}, {" "}{contacts?.sac}<a href={contacts?.href}>{" "}ou clique aqui.</a></span>
      </div>
      <div class="flex mt-[10px]">
        <div class="w-[300px] mr-[80px]">
          <h1 class="text-xs">{nomeEmpresa}</h1>
        </div>
        <div class="w-[880px]">
          <span class="text-xs text-justify">{infos2?.label}<a href={infos2?.href}>{infos2?.href}</a> </span>
        </div>
      </div>
      
    </div>
);

}

export default NavItemFooter;