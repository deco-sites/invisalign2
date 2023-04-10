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
    mensagem1?:{
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
    <div class="relative flex justify-center items-center w-full mt-[60px] ">
          <Picture preload={lcp} class="w-full">
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
              width={1440}
              height={500}
            />
            <img 
              loading={lcp ? "eager" : "lazy"}
              src={desktop}
              alt={alt}
              width={width}
              height={height}
              class="w-full"
            />
          </Picture>
          <div class="inset-0 flex justify-center items-center absolute top-0 left-0">
          {action && (
            <div class="w-1/2 flex flex-col items-center">
              <span class="text-light-blue text-[26px] mb-[30px]">
                {action.title}
              </span>
            
              <span class="mb-[30px] text-[12px]">
                {action.legend1}
              </span>
              <Text variant="heading-3">
                {action.legend2}
              </Text>
              <Text variant="heading-3">
                {action.subTitle}
              </Text>
              <div class="">
                <Button variant="primary" class="w-[220px]">{action?.label}</Button>
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
      width = 800, 
      height =800
    } = image;
  
  return (
    <>
          <Picture preload={lcp} class="">
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
            <div class="flex flex-col justify-center pl-[45px] pr-[70px]">
              <span class="font-black text-blue-title text-5xl text-left pb-[15px] text-[26px]">
                {action.title}
              </span>
              <div class="flex items-baseline pb-[10px]">
                  <span>{action.legend1}</span>
              </div>   
              <div class="w-[320px]">
                 <Button variant="primary">{action.label}</Button>
              </div>
            </div>
          )}
        </>
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
    <div class="relative mt-[90px]">
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
                  <div class="flex flex-col bg-default w-1/2 justify-center pl-[45px] shadow-lg">
                    <Text variant="heading-3" class="pb-[10px]">
                      {action.title}
                    </Text>
                    <span class="text-base pb-[10px]">
                      {action.legend1}
                    </span>
                    <div class="w-[320px]">
                      <Button variant="primary">{action.label}</Button>
                    </div>
                  </div>
                )}
                 </div>
              <div class="h-64 w-64 bg-pink-title absolute z-0 bottom-0 left-0 "></div>
              <div class="h-64 w-64 bg-pink-title absolute z-0 top-0 right-0"></div>
            </div>
        </div>
      );
}

function MoreCards({ images, preload, mensagem1,}: Props) {
    const styles = [
        { width: '100%', margin: '45px 0 0 0', height: '600px'},
        { width: '1000px', margin: '120px auto 0', display: 'flex', flexDirection: 'row-reverse', boxShadow : 'rgba(0, 0, 0, 0.24) 0px 3px 8px;'},
        { width: '1100px', margin: '0 auto' },
    ]
    
return (
    <>
        <div class="flex flex-col mt-[45px] items-center">
            <div>
                <span class="text-light-blue text-[36px]">{mensagem1?.titulo1} + backup</span>
                <a href="#teste">{mensagem1?.conectLink}</a>
            </div>
            <div class="flex items-center ">
                <img src="https://images.ctfassets.net/vh25xg5i1h5l/1OJ38wIlae2AESwLTqqIGh/692c122d5fb089b13478ab50571f3f96/icon-question.svg" width={44} height={44} alt="" class="mr-[20px]"/>                
                <span class="mr-[20px]">{mensagem1?.titulo2}</span>
                    <div class="">
                        <Button variant="primary" class="w-[220px]"><a href={mensagem1?.href2}>{mensagem1?.label2}</a></Button>
                    </div>
            </div>
        </div>
        <div>
            {images?.map((image, index) => (
            <div style={styles[index]}>
                {index === 0 ? (
                <BannerFullScreen image={image} lcp={index === 0 && preload} />
                ) : index === 1 ? (
                <BannerItem2 image={image} lcp={index === 1 && preload} />
                ) : index === 2 ? (
                <BannerProduct2 image={image} lcp={index === 2 && preload} />
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