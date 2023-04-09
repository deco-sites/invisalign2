import Text from "$store/components/ui/Text.tsx";
import Button from "$store/components/ui/Button.tsx";
import { Picture, Source } from "deco-sites/std/components/Picture.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import { useId } from "preact/hooks";


export interface Banner {
  desktop: LiveImage;
  mobile: LiveImage;
  alt: string;
  width?: number,
  height?: number, 
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
          <div class="w-1/2 flex flex-col justify-center pl-[60px]">
            <span class="font-black text-blue-title text-5xl text-left pb-[15px]">
              {action.title}
            </span>
           <div class="flex items-center">
                  <div class="bg-pink-title rounded-full w-2 h-2 mr-2"></div>
                  <span>{action.legend1}</span>
           </div>
           <div class="flex items-center">
                  <div class="bg-pink-title rounded-full w-2 h-2 mr-2"></div>
                  <span>{action.legend2}</span>
           </div>            
            <Text variant="heading-3" class="pb-[10px]">
              {action.subTitle}
            </Text>
            <div class="w-[320px]">
               <Button variant="primary">{action.label}</Button>
            </div>
          </div>
        )}
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
          <div class="w-1/2 flex flex-col justify-center">
            <span class="font-black text-blue-title text-5xl text-left pb-[15px]">
              {action.title}
            </span>
            <div class="flex items-baseline">
              <div class="w-[10px] mr-[5px]">
                <div class="bg-pink-title rounded-full w-2 h-2"></div>
              </div>
                <span>{action.legend1}</span>
            </div>
           <div class="flex items-baseline">
                  <div class="w-[10px] mr-[5px]">
                        <div class="bg-pink-title rounded-full w-2 h-2"></div>
                  </div>
                  <span>{action.legend2}</span>
           </div>     
            <Text variant="heading-3" class="pb-[10px]">
              {action.subTitle}
            </Text>
            <div class="w-[320px]">
               <Button variant="primary">{action.label}</Button>
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
  <div class="relative mt-[30px]">
          <div class="box-border z-20">
            <div class="flex flex-row-reverse relative z-10 pt-12 pl-12 pb-12 pr-12">
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
                <div class="flex flex-col bg-default w-1/2 h-[368px] justify-center pl-[45px] shadow-lg">
                  <Text variant="heading-3" class="pb-[10px]">
                    {action.title}
                  </Text>
                  <span class="text-base pb-[10px]">
                    {action.legend1}
                  </span>
                  <Text variant="heading-3" class="pb-[10px]">
                    {action.legend2}
                  </Text>
                  <Text variant="heading-3" class="pb-[10px]">
                    {action.subTitle}
                  </Text>
                  <div class="w-[320px]">
                    <Button variant="primary">{action.label}</Button>
                  </div>
                </div>
              )}
               </div>
            <div class="h-64 w-64 bg-green-home absolute z-0 top-0 left-0 "></div>
            <div class="h-64 w-64 bg-green-home absolute z-0 bottom-0 right-0"></div>
          </div>
      </div>
    );
}
function BannerProduct2({ image, lcp }: { image: Banner; lcp?: boolean }) {
  const {
    alt,
    mobile,
    desktop,
    action,
    width = 600, 
    height= 400
  } = image;

return (
  <div class="relative mt-[-90px]">
          <div class="box-border z-20">
            <div class="flex relative z-10 pt-12 pl-12 pb-12 pr-12">
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
                <div class="flex flex-col bg-default w-1/2 h-[368px] justify-center pl-[45px] shadow-lg">
                  <Text variant="heading-3" class="pb-[10px]">
                    {action.title}
                  </Text>
                  <span class="text-base pb-[10px]">
                    {action.legend1}
                  </span>
                  <Text variant="heading-3" class="pb-[10px]">
                    {action.legend2}
                  </Text>
                  <Text variant="heading-3" class="pb-[10px]">
                    {action.subTitle}
                  </Text>
                  <div class="w-[320px]">
                    <Button variant="primary">{action.label}</Button>
                  </div>
                </div>
              )}
               </div>
            <div class="h-64 w-64 bg-blue-title absolute z-0 top-0 left-0 "></div>
            <div class="h-64 w-64 bg-blue-title absolute z-0 bottom-0 right-0"></div>
          </div>
      </div>
    );
}




function BannerCarousel({ images, preload,}: Props) {
const styles = [
    { display: 'flex', margin: '45px 0 0 0'},
    { width: '1200px', margin: '75px auto 0', display: 'flex', flexDirection: 'row-reverse', height: '600px'},
    { width: '1200px', height: '600px', margin: '0 auto' },
    { width: '1200px', margin: '0 auto',},
    { width: '1200px', height: '600px', margin: '0 auto' },
    { width: '1200px', height: '600px', margin: '0 auto' },
    { width: '1200px', height: '600px', margin: '0 auto' },
    { width: '1200px', height: '600px', margin: '0 auto' },
];
    return (
      <div>
  {images?.map((image, index) => (
    <div style={styles[index]}>
      {index === 0 ? (
        <BannerItem image={image} lcp={index === 0 && preload} />
      ) : index === 1 ? (
        <BannerItem2 image={image} lcp={index === 1 && preload} />
      ) : index === 2 ? (
        <BannerProduct image={image} lcp={index === 2 && preload} />
      )  : index === 3 ?(
        <BannerProduct2 image={image} lcp={index===3 && preload} />
      ) : (
        <BannerProduct image={image} lcp={index === 4 && preload} />
      )}
    </div>
  ))}
  </div>
    
  );
}

export default BannerCarousel;