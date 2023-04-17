import Text from "$store/components/ui/Text.tsx";
import Button from "$store/components/ui/Button.tsx";
import { Picture, Source } from "deco-sites/std/components/Picture.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import { useId } from "preact/hooks";
import BannerGlobalColors from "../components/ui/BannerGlobalColors.tsx"

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
    connectLink?:string;
    hrefConnect?:string;
    legend2?: string;
    subTitle?: string;
    label: string;
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
    width = 800, 
    height =800
  } = image;

return (
  <>
      <div class="flex flex-col md:flex-row w-full mt-[-8px]">
        <div class="w-full md:w-1/2">
        <Picture preload={lcp}>
          <Source
            media="(max-width: 767px)"
            fetchPriority={lcp ? "high" : "auto"}
            src={mobile}
            width={660}
            height={400}
          />
          <Source
            media="(min-width: 768px)"
            fetchPriority={lcp ? "high" : "auto"}
            src={desktop}
            width={width}
            height={height}
            class="w-full"
          />
          <img 
            loading={lcp ? "eager" : "lazy"}
            src={desktop}
            alt={alt}
            class="w-full cover"
          />
        </Picture>
        </div>
        <div class="w-full md:w-1/2 flex">
          <div class="flex flex-col items-center justify-center">
              {action && (
                  <div class="flex flex-col justify-center pl-[60px]">
                    <span class="font-black text-blue-title text-5xl text-centermd:text-left pb-[15px]">
                      {action.title}
                    </span>

                  <div class="flex items-center">
                          <div class="bg-pink-title rounded-full w-2 h-2 md:w-2 md:h-2 lg:w-2 lg:h-2 mr-2"></div>
                          <span>{action.legend1}<a href={action?.hrefConnect ? action.hrefConnect : "#warn"}>{action.connectLink}</a></span>
                  </div>
                  <div class="flex items-center">
                          <div class="bg-pink-title rounded-full w-2 h-2 md:w-2 md:h-2 lg:w-2 lg:h-2 mr-2"></div>
                          <span>{action.legend2}</span>
                  </div>            
                    <Text variant="heading-3" class="pb-[10px]">
                      {action.subTitle}aa
                    </Text>
                    <div class="w-[120px] pl-[60px] md:pl-0">
                        <Button variant="primary"><a href="form-user">{action.label}</a></Button>
                    </div>
                  </div>
                  )}
            </div>
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
    width = 800, 
    height =800
  } = image;

return (
  <>
  <div class="flex flex-col items-center mx-auto md:flex-row-reverse max-w-[1200px] mt-[45px]">
    <div class="w-1/2">
      <Picture preload={lcp}>
              <Source
                media="(max-width: 767px)"
                fetchPriority={lcp ? "high" : "auto"}
                src={mobile}
                width={360}
                height={600}
              />
              <Source
                media="(min-width: 768px)"
                fetchPriority={lcp ? "high" : "auto"}
                src={desktop}
                width={width}
                height={height}
                class="w-full cover"
              />
              <img 
                loading={lcp ? "eager" : "lazy"}
                src={desktop}
                alt={alt}
              />
            </Picture>
            </div>
            <div class="md:w-1/2 md:flex md:justify-start">
              {action && (
                <div class="flex flex-col items-center justify-center md:px-[60px] md:py-[20px] md:ml-[30px] md:justify-start">
                  <span class="font-black text-blue-title text-5xl text-center pb-[15px]">
                    {action.title}
                  </span>
                  <div class="flex items-baseline mt[10px]">
                    <div class="w-[10px] mr-[5px]">
                      <div class="bg-pink-title rounded-full w-2 h-2"></div>
                    </div>
                      <span>{action.legend1}</span>
                  </div>
                <div class="flex items-baseline mt-[10px]">
                        <div class="w-[10px] mr-[5px]">
                              <div class="bg-pink-title rounded-full w-2 h-2"></div>
                        </div>
                        <span>{action.legend2}</span>
                        </div>     
                  <Text variant="heading-3" class="pb-[10px] mt-[10px]">
                    {action.subTitle}
                  </Text>
                  <Button variant="primary"><a href="form-user">{action.label}</a></Button>
                </div>
              )}
            </div>
  </div>
       
      </>
  );
}

function BannerHomeInicial({ images, preload,}: Props) {

return (
      <div>
  {images?.map((image, index) => (
    <div>
      {index === 0 ? (
        <BannerItem image={image} lcp={index === 0 && preload} />
      ) : index === 1 ? (
        <BannerItem2 image={image} lcp={index === 1 && preload} />
      ) : index === 2 ? (
        <BannerGlobalColors image={image} lcp={index === 2 && preload} />
      )  : index === 3 ?(
        <BannerGlobalColors image={image} lcp={index===3 && preload} />
      ) : (
        <BannerGlobalColors image={image} lcp={index === 4 && preload} />
      )}
    </div>
  ))}
  </div>
);
}
export default BannerHomeInicial;