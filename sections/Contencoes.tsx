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
      width , 
      height
    } = image;
  
  return (
    <>
        <div>
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
      width , 
      height
    } = image;
  
  return (
    <div class="relative mt-[40px] mx-auto max-w-[1200px]">
            <div class="box-border z-20">
              <div class="flex flex-col relative z-10 pt-12 pl-12 pb-12 pr-12 md:flex-row">
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
                  {action && (
                    <div class="flex flex-col bg-default justify-center shadow-lg md:w-[400px]">
                      <span class="text-base text-[18px] pb-[15px] px-[15px] text-justify">
                        {action.title}
                      </span>
                      <span class="text-base text-[14px] pb-[10px] px-[15px] text-justify">
                        {action.legend1}
                      </span>
                    </div>
                  )}
              </div>
              <div class="h-[150px] w-[300px] bg-green-home absolute z-0 top-0 left-0 md:w-64 h-64"></div>
              <div class="h-[150px] w-[300px] bg-green-home absolute z-0 bottom-0 right-0 md:w-64 h-64"></div>
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
const styles = [
        { display: 'flex', flexDirection: 'row-reverse', marginTop: '75px'},
        { backgroundColor: 'white'},
        { backgroundColor: 'white'},
        { backgroundColor: 'white' },
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