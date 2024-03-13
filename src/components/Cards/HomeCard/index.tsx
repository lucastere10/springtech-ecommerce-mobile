import { Card, Heading, Text } from '@gluestack-ui/themed';

interface HomeCardProps{
    produto: ProdutoType
}

export const HomeCard = ({ produto }: HomeCardProps) => {
    return (
        <Card size="md" variant="elevated" m="$3">
            <Heading mb="$1" size="md">
                {produto.nome}
            </Heading>
            <Text size="sm">{produto.preco}</Text>
        </Card>
    )
}