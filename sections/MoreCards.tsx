import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import Text from "$store/components/ui/Text.tsx";
import Button from "$store/components/ui/Button.tsx";
import { Picture, Source } from "deco-sites/std/components/Picture.tsx";
import BannerGlobalColors from "../components/ui/BannerGlobalColors.tsx";

export interface Banner {
    desktop: LiveImage;
    mobile: LiveImage;
    alt: string;
    width?: number,
    height?: number,
    cores?: "verde" | "rosa" | "azul",
    alinhamento?: "normal" | "inverso" 
    action?: {
      href: string;
      title: string;
      legend1: string;
      legend2?: string;
      subTitle?: string;
      label: string;
    };
}
export interface Props {
    images?: Banner[];
    preload?: boolean;
    mensagem?:{
        titulo1?: string;
        conectLink?: string;
        href?: string;
        titulo2?:string;
        label2?:string;
        href2?:string;
    }
}
function BannerFullScreen({ image, lcp }: { image: Banner; lcp?: boolean }) {
    const {
      alt,
      mobile,
      desktop,
      action,
      width, 
      height = 600
    } = image;
  
return (
    <>
    <div class="mt-[40px] mb-[40px] flex flex-col items-center md:flex-row md:relative md:justify-center md:items-center">
      <div>
            <Picture preload={lcp} class="">
              <Source
                media="(max-width: 767px)"
                fetchPriority={lcp ? "high" : "auto"}
                src={mobile}
                width={460}
                height={400}
              />
              <Source
                media="(min-width: 768px)"
                fetchPriority={lcp ? "high" : "auto"}
                src={desktop}
                width={1440}
                height={500}
              />
              <img 
                loading={lcp ? "eager" : "lazy"}
                src={desktop}
                alt={alt}
                width={width}
                height={height}
                class="md:w-full"
                />
            </Picture>
          </div>
          <div class="md:inset-0 md:flex md:justify-center md:items-center md:absolute md:top-0 md:left-0">
              {action && (
                <div class="flex flex-col items-center md:items-center">
                    <span class="text-light-blue ml-[45px] md:text-[16px] mb-[30px] lg:text-[26px]">
                      {action.title} 
                    </span>
                    <span class="mb-[30px] text-[12px] md:text-[16px]">
                      {action.legend1} 
                    </span>
                    <Text variant="heading-3">
                      {action.legend2}
                    </Text>
                    <Text variant="heading-3">
                      {action.subTitle}
                    </Text>
                    <div class="">
                      <Button variant="primary" class="w-[220px] mb-[30px]"><a href="contencoes">{action?.label}</a></Button>
                  </div>
                </div>
              )}
          </div>
        </div>
        </>
    );
}
function BannerItem2({ image, lcp }: { image: Banner; lcp?: boolean }) {
    const {
      alt,
      mobile,
      desktop,
      action,
      width, 
      height
    } = image;
  
  return (
    <>
      <div class="flex flex-col items-center md:flex-row-reverse shadow-md max-w-[1200px] mx-auto">
          <div>
          <Picture preload={lcp} class="">
            <Source
              media="(max-width: 767px)"
              fetchPriority={lcp ? "high" : "auto"}
              src={mobile}
              width={400}
              height={391}
            />
            <Source
              media="(min-width: 768px)"
              fetchPriority={lcp ? "high" : "auto"}
              src={desktop}
              width={849}
              height={491}
            />
            <img 
              loading={lcp ? "eager" : "lazy"}
              src={desktop}
              alt={alt}
            />
          </Picture>
          </div>
          <div>
          {action && (
            <div class="flex flex-col justify-center pl-[45px] pr-[70px]">
              <span class="font-black text-blue-title text-5xl text-left pb-[15px] text-[26px]">
                {action.title}
              </span>
              <div class="flex items-baseline pb-[10px]">
                  <span>{action.legend1}</span>
              </div>   
              <div class="w-[320px] mb-[20px]">
                 <Button variant="primary"><a href="contencoes">{action.label}</a></Button>
              </div>
            </div>
          )}
          </div>
      </div>
    </>
    );
}


function MoreCards({ images, preload, mensagem}: Props) {
    
    
return (
    <>
        <div class="flex flex-col mt-[45px] items-center">
            <div class="ml-[26px]">
                <span class="text-light-blue text-[36px] text-justify">{mensagem?.titulo1}</span>
                <a href={mensagem?.href ? mensagem.href : "#warn"}>{mensagem?.conectLink}</a>
            </div>
            <div class="flex flex-col items-center md:flex-row">
                <img src="https://images.ctfassets.net/vh25xg5i1h5l/1OJ38wIlae2AESwLTqqIGh/692c122d5fb089b13478ab50571f3f96/icon-question.svg" width={44} height={44} alt="" class="mr-[20px] mt-[20px]"/>                
                <span class="mr-[20px]">{mensagem?.titulo2}</span>
                    <div class="mt-[20px]">
                        <Button variant="primary" class="w-[220px]"><a href={mensagem?.href2}>{mensagem?.label2}</a></Button>
                    </div>
            </div>
        </div>
        <div>
            {images?.map((image, index) => (
            <div>
                {index === 0 ? (
                <BannerFullScreen image={image} lcp={index === 0 && preload} />
                ) : index === 1 ? (
                <BannerItem2 image={image} lcp={index === 1 && preload} />
                ) : index === 2 ? (
                <BannerGlobalColors image={image} lcp={index === 2 && preload} />
                )  : index === 3 ?(
                <BannerFullScreen image={image} lcp={index===3 && preload} />
                ) : (
                <BannerFullScreen image={image} lcp={index === 4 && preload} />
                )}
      </div>
    ))}
    </div>
    </>
    );
}

export default MoreCards