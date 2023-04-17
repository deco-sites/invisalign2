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
    botao?: "sim" | "nao",
    cores?: "verde" | "rosa" | "azul",
    alinhamento?: "normal" | "inverso" 
    action?: {
      href?: string;
      title?: string;
      legend1?: string;
      legend2?: string;
      connectLink?:string;
      hrefConnect?:string;
      legend3?:string;
      subTitle?: string;
      label?: string;
    };
}
export interface Props {
    images?: Banner[];
    preload?: boolean;
    interval?: number;
}
function BannerItem({ image, lcp }: { image: Banner; lcp?: boolean }) {
    const {
      alt,
      mobile,
      desktop,
      action,
      width = 1600, 
      height
    } = image;
  
  return (
    <>
    <div class="flex flex-col w-full items-center pl-[30px] md:flex-row-reverse justify-beetween w-full md:mt-[5px]" id="contencoes" >
        <div class="md:w-1/2 md:mt-[-12px]">
          <Picture preload={lcp}>
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
                        width={width}
                        height={800}
                      />
                      <img 
                        loading={lcp ? "eager" : "lazy"}
                        src={desktop}
                        alt={alt}
                      />
            </Picture>
            {action && (
                <div>
                    <small>
                    {action.label}
                    </small>
                </div>
            )}
        </div>
          <div class="md:w-1/2">
            {action && (
              <div class="w-1/2 flex flex-col justify-center pl-[60px]">
                  <div class="flex flex-col">
                      <span class="font-black text-6xl text-left pb-[15px]">
                          {action.title}
                      </span>
                      <span class="text-orange text-4xl">{action.legend1}</span>
                      <span class="text-3xl">{action.legend2}</span>
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
    <div class="mt-[100px] flex flex-col items-center md:flex-row-reverse justify-between">
        <div class="md-w[1/2]">
          <Picture preload={lcp}>
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
          <div class="w-[391px] md:w-[700px] ">
            {action && (
              <div class="flex flex-col md:pl-[50px]">
                  <div class="mt-[15px]">
                      <span class="font-black text-3xl pb-[15px]">
                          {action.title}
                      </span>
                  </div>
                  <div class="flex-items-center mt-[10px]">
                    <span class="mt-[10px]">{action.legend1}</span>
                  </div>
                    <div class="flex items-center">
                          <div class="bg-orange rounded-full mr-4 md:max-w-[8px] max-h-[8px]"></div>
                          <span class="">{action.legend2}</span>
                  </div>
                  <div class="flex items-center">
                          <div class="bg-orange rounded-full w-[20px] h-[10px] mr-4  md:max-w-[8px] max-h-[8px]"></div>
                          <span class="mt-[45px] md:mt-[20px]">{action.label}</span>
                  </div>
                  <div class="flex items-center">
                          <div class="bg-orange rounded-full w-[20px] h-[10px] mr-4  md:max-w-[8px] max-h-[8px]"></div>
                          <span class="mt-[45px] md:mt-[20px]">{action.label}</span>
                  </div>
                  <div class="flex items-center">
                          <div class="bg-orange rounded-full w-[20px] h-[10px] mr-4  md:max-w-[8px] max-h-[8px]"></div>
                          <span class="mt-[45px] md:mt-[20px]">{action.label}</span>
                  </div>
                
              </div>
            )}
            </div>
          </div>
        </>
     
    );
}
function BannerItem3({ image, lcp }: { image: Banner; lcp?: boolean }) {
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
      <div class="flex flex-col mt-[20px] items-center md:flex-row w-full">
        <div class="md:w-1/2">
          <Picture preload={lcp}>
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
      <div class="md:w-1/2"> 
            {action && (
              <div class="flex flex-col justify-center pl-[60px]">
                  <div class="flex flex-col">
                      <span class="font-black text-orange text-4xl text-left pb-[15px]">
                          {action.title}
                      </span>
                      <span class="font-black font-bold text-3xl text-left pb-[15px]">{action.legend1}</span>
                      <span class="text-2xl text-left pb-[15px]">{action.legend2}</span>
                  </div>
              
              </div>
            )}
          </div>
        </div>
      </>
   
  );
}

function Contencoes({ images, preload,}: Props) {

return (
    <div>
        {images?.map((image, index) => (
        <div>
          {index === 0 ? (
            <BannerItem image={image} lcp={index === 0 && preload} />
          ) : index === 1 ? (
            <BannerGlobalColors image={image} lcp={index === 1 && preload} />
          ) : index === 2 ? (
            <BannerItem2 image={image} lcp={index === 2 && preload} />
          )  : index === 3 ?(
            <BannerItem3 image={image} lcp={index===3 && preload} />
          ) : (
            <BannerItem image={image} lcp={index === 4 && preload} />
          )}
        </div>
      ))}
</div>
);
}

export default Contencoes