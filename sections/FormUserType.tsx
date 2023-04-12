import ChangeColor from "../islands/ChangeColor.tsx";
import ImageTitleChange from '../islands/ImageTitleChange.tsx';
import {useState} from 'preact/hooks'
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";

export type BoxProps = {
  desktop: LiveImage;
  title: string;
  newTitle: string;
  newCaption: string;
};
export type ColorProps = {
  legenda: string;
}
export type Termos = {
  termos: string;
  link: string;
  href: string;
}
export interface Item {
  alternativa: string;
}
export interface FormQuestion {
  label: string;
  opcoes: Item[];
}
export type Props ={
  contentBoxes: BoxProps[];
  legendas: ColorProps[];
  mensagem: string;
  descricao: string;
  label: string;
  perguntas: FormQuestion[];
  termos: Termos;
}

export default function FormUserType({ contentBoxes, mensagem, label, legendas, descricao, perguntas, termos}: Props) {
  const [selectedBoxIndex, setSelectedBoxIndex] = useState(-1);
  
  const handleBoxClick = (index: number) => {
    setSelectedBoxIndex(index);
  };

 
  return (
    <>
    <div class="mt-[120px] w-[1100px] bg-black mx-auto">
      <form>
        <div class="flex flex-col mb-[20px]">
          <span class="text-light-blue text-[28px] font-medium">{mensagem}</span>
        </div>
        <div class="w-full mb-[15px]">
          <h1>{label}</h1>
          <div class="flex mt-[20px] justify-between">
            {legendas && legendas.map((lgd, index) => (
              <div class="text-center w-[350px]">
                <ChangeColor legenda={lgd.legenda}/>
              </div>
            ))}
          </div>
        </div>
        <div>
          <span>{descricao}</span>
        </div>
          <div class="mt-[5px] grid grid-cols-1 md:grid-cols-2 md:gap-[5px] lg:grid-cols-3 gap-[32px]  w-[1100px]">
            {contentBoxes.map((box, index) => (
              <div key={index} onClick={() => handleBoxClick(index)} class="w-[345px] h-[220px] border-1 border-blue">
                <ImageTitleChange
                  desktop={box.desktop}
                  title={box.title}
                  newTitle={box.newTitle}
                  newCaption={box.newCaption}
                  />
              </div>
            ))}
          </div>
          <div class="mt-10 mb-[5px]">
            <div>
              {perguntas &&
                perguntas.map((dado, index) => (
                  <div key={dado.label} class="w-full">
                  <div class="flex flex-col">
                      <label className="text-sm text-title">{dado.label}</label>
                      <select class="h-[50px] border-1 border-blue mt-[10px] py-[12px] px-[10px] mb-[10px]">
                        {dado.opcoes &&
                          dado.opcoes.map((item, index) => (
                            <option key={index} value={item.alternativa} required>
                              {item.alternativa}
                            </option>
                          ))}
                      </select>
                    </div>
                  </div>
                ))}
              </div>
          </div>
          <div class="flex flex-col">
            <label>Preencha suas informações a seguir e um ortodontista próximo a você entrará em contato em breve:</label>
            <div class="flex">
              <div class="flex flex-col w-1/2 mr-4">
                <input type="text" placeholder="nome" class=" h-10 border-1 border-blue px-4 mb-[5px]" required/>
                <input type="text" placeholder="data de nascimento" class="w-full h-10 border-1 border-blue px-4 mb-[5px]" required/>
                <input type="text" placeholder="e-mail" class="w-full h-10 border-1 border-blue px-4 mb-[5px]" required/>
              </div>
              <div class="flex flex-col w-1/2">
                <input type="text" placeholder="sobrenome" class=" h-10 border-1 border-blue px-4 mb-[5px]" required/>
                <input type="text" placeholder="CEP" class="w-full h-10 border-1 border-blue px-4 mb-[5px]" required/>
                <input type="text" placeholder="número do telefone" class="w-full h-10 border-1 border-blue px-4 mb-[5px]" required/>
              </div>
            </div>
          </div>
          <div>
            <label for="terms" class="flex items-start">
              <input id="terms" type="checkbox" class="accent-zinc-200 mr-2 mt-1"/>
              <small>{termos && termos.termos}<a href={termos.href} class="text-indigo-600 hover:text-indigo-500">{termos && termos.link}</a></small>
            </label>
          </div>
          <div class="flex my-[10px]">
            <input type="submit" value="enviar" class="mx-auto w-[220px] bg-blue cursor-pointer rounded-[35px] px-[10px] py-[10px] text-white text-xl" id="submit-button"/>
          </div>
        </form>
      </div>
    </>
  );
}