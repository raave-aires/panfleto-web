import Image from "next/image";
import Logo from "../../../assets/imgs/Logo.png"
import { ItemDoCabecalho } from "../ItemDoCabecalho/ItemDoCabecalho"

export function Cabecalho(){
    return(
        <header className="w-screen max-h-16 flex justify-center z-50 fixed">
            <div className="w-4/5 flex h-16 justify-between items-center">
                <Image
                src={Logo}
                alt="Logo do projeto"
                height={30}
                width={83.48}
            /> {/*Esse é um componente do Next.js que tem funções embutidas de otimização de imagens*/}

            <nav>
                <ul className="flex gap-0">
                    <ItemDoCabecalho 
                        link_do_item="#inicio"    
                        texto_do_item="Início"
                    />

                    <ItemDoCabecalho 
                        link_do_item="#inicio"    
                        texto_do_item="Objetivo"
                    />

                    <ItemDoCabecalho 
                        link_do_item="#inicio"    
                        texto_do_item="Sobre nós"
                    />
                </ul>
            </nav>
            </div>
            
        </header>
    );
}