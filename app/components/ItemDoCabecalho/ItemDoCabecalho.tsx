import { Button } from "@nextui-org/react";

interface Props {
    link_do_item: string,
    texto_do_item: string,
}

export function ItemDoCabecalho({link_do_item, texto_do_item}: Props){
    return(
        <a href={link_do_item}>
            <Button
                variant="light"
                radius="full"
            >
                {texto_do_item}
            </Button>
        </a>
    );
}