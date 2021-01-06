import { GET_MOLECULAS, GET_MOLECULAS_PRODUTOS,moleculas,GET_MOLECULAS_EXECUCAO, GET_MOLECULAS_RELATORIOCSV,GET_MOLECULAS_PRODUTOS_IDMOLECULA,GET_MOLECULAS_CADASTRO_PRODUTOS,
    GET_MOLECULAS_CADASTRO_MOLECULA,DELETE_MOLECULAS_SUCCESS,DELETE_MOLECULAS } from "../../types/margenericos/margenericosType"

export const getMoleculas = () => {
    return ({ type: GET_MOLECULAS });
}


export const getMoleculaProduto = () => {
    return ({ type: GET_MOLECULAS_PRODUTOS });
}

export const getProdutosIDMoleculas = (data:any) => {
    return ({ type: GET_MOLECULAS_PRODUTOS_IDMOLECULA,payload:data });
}

export const getCadastroProdutosMargenerico = (data:any) => {
    return ({ type: GET_MOLECULAS_CADASTRO_PRODUTOS,payload:data });
}

export const getCadastroMolecula = (data:any) => {
    return ({ type: GET_MOLECULAS_CADASTRO_MOLECULA,payload:data });
}

export const DeleteMolecula = (data:any) => {
    return ({ type: DELETE_MOLECULAS,payload:data });
}

export const getExecucaoApurador = () => {
    return ({ type: GET_MOLECULAS_EXECUCAO });
}


export const getRelatorioCSV = () => {
    return ({ type: GET_MOLECULAS_RELATORIOCSV });
}
 