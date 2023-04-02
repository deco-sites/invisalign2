export interface Props{
    mensagem?: string[];
}

function Warns({mensagem}: Props ) {
   return (
        <div>
            <ul>
                {mensagem && mensagem.map((msg, index) =>(
                     <li key={index}>{msg}</li>
                  ))}
              </ul>
          </div>
        )
    
}

export default Warns