interface ProdutoType {
    produtoId: number;
    nome: string;
    descricao: string;
    preco: number;
}

interface UsuarioLogadoType{
    usuarioId: number,
    nome: string,
    email: string,
    usuarioTipo: string,
    usuarioStatus: string 
}