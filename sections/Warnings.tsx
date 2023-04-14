export interface Props{
    mensagem?: string[];
}

function Warns({mensagem}: Props ) {
   return (
        <div class="mx-auto max-w-[1200px] py-48 px-20 mt-[10px] mb-[-100px]" id="teste">
            <ul class="list-decimal">
                {mensagem && mensagem.map((msg, index) =>(
                     <li key={index} class="heading-4 leading-relaxed warn mt-[10px]">{msg}</li>
                  ))}
              </ul>
          </div>
        )
    
}

export default Warns