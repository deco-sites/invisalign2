import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import { Picture, Source } from "deco-sites/std/components/Picture.tsx";
import Button from "$store/components/ui/Button.tsx";
import { useEffect } from "preact/hooks";
export interface Banner {
    desktop: LiveImage;
    mobile: LiveImage;
    alt: string;
    width?: number,
    height?: number, 
    action?: {
      href?: string;
      title: string;
      legend1: string;
      legend2?: string;
      subTitle?: string;
      label?: string;
    };
}
export interface MensagemProps {
    title: string;
    cards:{
        image: LiveImage;
        title: string;
        subtitle: string;
    }[];
    images: Banner;

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
    <div class="flex flex-row-reverse">
        <div class="w-1/2">
          <Picture preload={lcp} class="mb-[60px]">
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
              width={849}
              height={800}
            />
            <img 
              loading={lcp ? "eager" : "lazy"}
              src={desktop}
              alt={alt}
            />
          </Picture>
        </div>
          {action && (
            <div class="w-1/2 flex flex-col justify-center pl-[60px]">
              <span class="font-black font-bold text-3xl text-left pb-[15px]">{action.title}</span>                                
              <span class="pb-[15px]">{action.legend1}</span>
              <div class="w-[320px]">
               <Button variant="secondary">{action.label}</Button>
            </div>
            </div>
          )}
        </div>
    </>
     
    );
}
function Mensagem({ title, cards, images }: MensagemProps) {
    return (
      <>
      <div class="w-full">
        <div class="flex flex-col items-center mt-[40px] mb-[45px]">
              <div>
                  <h2 class="text-[28px] font-medium">{title}</h2>
              </div>
              <div class="flex mt-[30px]">
              {cards.map((card) => (
                  <div class="w-[350px] mr-[10px]">
                      <div class="flex flex-col items-center">
                          <img src={card.image} alt={card.title} width={100} height={100}/>
                          <div class=" flex flex-col items-center">
                              <h3 class="font-bold text-[22px]">{card.title}</h3>
                              <p class="text-center">{card.subtitle}</p>
                          </div>
                      </div>
                  </div>
              ))}
              </div>
        </div>
        <div>
              <BannerItem3 image={images} />
        </div>
      </div>
    
      </>
    );
}
export default Mensagem