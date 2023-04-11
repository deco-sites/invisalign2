import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import Text from "$store/components/ui/Text.tsx";
import Button from "$store/components/ui/Button.tsx";
import { Picture, Source } from "deco-sites/std/components/Picture.tsx";

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
      width = 800, 
      height =800
    } = image;
  
  return (
    <>
        <div>
          <Picture preload={lcp} class="w-1/2">
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
        </>
     
    );
}
function BannerProduct({ image, lcp }: { image: Banner; lcp?: boolean }) {
    const {
      alt,
      mobile,
      desktop,
      action,
      width = 600, 
      height= 400
    } = image;
  
  return (
    <div class="relative mt-[40px] mx-auto">
            <div class="box-border z-20">
              <div class="flex relative z-10 pt-12 pl-12 pb-12 pr-12">
                <Picture preload={lcp} >
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
                  />
                  <img 
                    loading={lcp ? "eager" : "lazy"}
                    src={desktop}
                    alt={alt}
                  />
                </Picture>
                {action && (
                  <div class="flex flex-col bg-default w-[362px] justify-center shadow-lg">
                    <span class="text-base text-[18px] pb-[15px] px-[15px] text-justify">
                      {action.title}
                    </span>
                    <span class="text-base text-[14px] pb-[10px] px-[15px] text-justify">
                      {action.legend1}
                    </span>
                  </div>
                )}
                 </div>
              <div class="h-64 w-64 bg-green-home absolute z-0 top-0 left-0 "></div>
              <div class="h-64 w-64 bg-green-home absolute z-0 bottom-0 right-0 mb-[100px]"></div>
            </div>
        </div>
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
        <div class="justify-end w-1/2">
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
          {action && (
            <div class="flex flex-col justify-center pl-[60px] w-1/2">
                <div>
                    <span class="font-black text-3xl text-left pb-[15px]">
                        {action.title}
                    </span>
                </div>
                  <span>{action.legend1}</span>
                  <div class="flex items-center">
                        <div class="bg-orange rounded-full w-2 h-2 mr-2"></div>
                        <span>{action.legend2}</span>
                </div>
                <div class="flex items-center">
                        <div class="bg-orange rounded-full w-2 h-2 mr-2"></div>
                        <span>{action.legend3}</span>
                </div>
                <div class="flex items-center">
                        <div class="bg-orange rounded-full w-2 h-2 mr-2"></div>
                        <span>{action.subTitle}</span>
                </div>
                <div class="flex items-center">
                        <div class="bg-orange rounded-full w-2 h-2 mr-2"></div>
                        <span class="">{action.label}</span>
                </div>
              
            </div>
          )}
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
      <div class="">
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
      </>
   
  );
}

function Contencoes({ images, preload,}: Props) {
const styles = [
        { display: 'flex', flexDirection: 'row-reverse', marginTop: '75px'},
        { width: '1200px', display: 'flex', height: '600px', margin: '60px auto'},
        { display: 'flex', flexDirection: 'row-reverse', },
        { width: '100%' , display: 'flex', },
        { width: '1200px', height: '600px', margin: '0 auto' },
        { width: '1200px', height: '600px', margin: '0 auto' }
        
];

return (
    <div>
  {images?.map((image, index) => (
  <div style={styles[index]}>
    {index === 0 ? (
      <BannerItem image={image} lcp={index === 0 && preload} />
    ) : index === 1 ? (
      <BannerProduct image={image} lcp={index === 1 && preload} />
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