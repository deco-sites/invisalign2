export interface Props{
    mensagem?: string[];
}

function Warns({mensagem}: Props ) {
   return (
        <div class="mx-auto w-[1200px] py-48 px-20 mt-[-100px] mb-[-100px]">
            <ul class="list-decimal">
                {mensagem && mensagem.map((msg, index) =>(
                     <li key={index} class="heading-4 leading-relaxed warn">{msg}</li>
                  ))}
              </ul>
          </div>
        )
    
}

export default Warns