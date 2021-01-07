import { Button, Col, Drawer, Input, message, Popconfirm, Row, Select } from 'antd';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserMatricula } from '../../../services/auth';
import { addNewDepartamento } from '../../../store/controleCusto/actions';
import { DeleteMolecula, getCadastroMolecula, getCadastroProdutosMargenerico, getMoleculas, getProdutosIDMoleculas } from '../../../store/Margenericos/actions';
import { RootState } from '../../../store/store';
import { CadastroProdutos, moleculas, moleculasProdutosID } from '../../../types/margenericos/margenericosType';

function CadastroDepartamento(props: any) {
  const [visible, setVisible] = useState(false);
  const [loadingTable, setLoadingTable] = useState(true);
  const [loadingPage, setLoadingPage] = useState(true);
  const [addProd, setAddProd] = useState({
    codigo: "",
    peso: "",
    descricao: "" as any
  });
  const text = 'Deseja Excluir Permanentemente essa Molécula?';
  const matricula = getUserMatricula()?.toString();
  const [detcadastro, setdetcadastro] = useState([] as any);

  const [visibleSelect, setVisibleSelect] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setMoleculaSelected({ ...moleculaSelected, id: 0, descricao: "", Produtos: [] as any })
    setVisible(false);
  };

  function saveMolecula() {
    if ((moleculaSelected.Produtos.reduce((a: any, v: any) => a = a + parseInt(v.peso), 0)) !== 100) {
      message.error('Soma de Pesos dos Produtos Deve Ser 100!!');
    } else {
      //setMoleculaSelected({ ...moleculaSelected,  usuario: (parseInt(matricula ? matricula : "0")) })
      postCadastroMolecula(moleculaSelected);
      message.success('Cadastro Efetuado com Sucesso!!');
      onClose();
      window.location.reload();
    }
  }
  
  useEffect(() => {
    if (props.carregarMolecula == true) {
      getMoleculasCAB();
    }
  }, []);

  const dispatch = useDispatch();
  const molecula = useSelector<RootState, moleculas[]>(state => state.margenerico.moleculas);
  const moleculasProdutosID = useSelector<RootState, moleculasProdutosID[]>(state => state.margenerico.moleculasProdutosID);
  const cadastroProdutos = useSelector<RootState, CadastroProdutos[]>(state => state.margenerico.cadastroProdutos);

  const [moleculaSelected, setMoleculaSelected] = useState({
    usuario: "0" as any,
    id: 0,
    descricao: "",
    Produtos: moleculasProdutosID as any,
  });

  function getMoleculasCAB() {
    dispatch(getMoleculas());
  }


  useEffect(() => {
    if (cadastroProdutos.length > 0) {
      setdetcadastro(cadastroProdutos)
    }
  }, [cadastroProdutos]);


  useEffect(() => {
    setMoleculaSelected({ ...moleculaSelected, Produtos: moleculasProdutosID })
  }, [moleculasProdutosID]);



  function DelProduto(codigo: any) {
    let listaNova = moleculaSelected.Produtos.filter((item: any) => item.codigo !== codigo)
    setMoleculaSelected({ ...moleculaSelected, Produtos: listaNova })
    message.success('Produto ' + codigo + ' Deletado da Molécula!!');
    return codigo
  }

  function LimparCampos() {
    setMoleculaSelected({ ...moleculaSelected, id: 0, descricao: "", Produtos: [] as any })
  }

  function getCadastroProduto(value: any) {
    dispatch(getCadastroProdutosMargenerico(value));
  }

  function getProdutoMolecula(value: any) {
    dispatch(getProdutosIDMoleculas(value));
  }

  function PostdeleteMolecula(value: any) {
    dispatch(DeleteMolecula(value));
  }

  function postCadastroMolecula(value: any) {
    dispatch(getCadastroMolecula(value));
  }

  function AddDepartamento() {
    let dep = {nome: "compras"}
    dispatch(addNewDepartamento(dep));
  }

  function onChange(value: any) {
    getProdutoMolecula(value);
    setLoadingTable(false);
  }

  function onChangeProduto(value: any) {
    if (value.length > 0) {

      getCadastroProduto(value)
      setAddProd({ ...addProd, codigo: value })

    } else {
      setAddProd({ ...addProd, codigo: "" })
      setdetcadastro(null)
    }
  }

  useEffect(() => {
    if (props.nameButton == "Criar Molécula")
      setVisibleSelect(true);
  }, [molecula]);



  function deleteMolecula() {
    if(moleculaSelected.id>0){
      PostdeleteMolecula(moleculaSelected.id)
      message.info('Molécula Deletada com Sucesso');
      window.location.reload();
    }else{
      message.error('Favor Selecionar uma Molécula');
    }
  }

  const { Option } = Select;

  const departamentos = [
    {
      id: 1,
      nome: "compras"
    },
    {
      id: 2,
      nome: "marketing"
    },
    {
      id: 3,
      nome: "Ops"
    },
    {
      id: 4,
      nome: "eng"
    },
  ]

  return (
    <>
      <Button type="primary" onClick={showDrawer} icon={props.icone} style={{ marginRight: 10 }}  >
        {props.nameButton}
      </Button>
      <Drawer
        title={props.tipo}
        width={720}
        visible={visible}
        onClose={onClose}
        footer={
          <div style={{textAlign: 'right'}}>
            <Button onClick={onClose} style={{ marginRight: 8 }}>
              Sair
            </Button>
            <Button onClick={saveMolecula} type="primary">
              Confirmar
            </Button>
          </div>
        }
      >
        <Row style={{ paddingBottom: 20 }}>
          <Col span={100}>
            <h4> Nome Departamento</h4>
            <Input style={{ width: 530 }} value={moleculaSelected.descricao} onChange={(e) => setMoleculaSelected({ ...moleculaSelected, descricao: e.target.value, usuario: (parseInt(matricula ? matricula : "0"))  })} placeholder="Máx: 100 Caracteres" />
          </Col>
        </Row>
        <Button onClick={AddDepartamento} type="primary" style={{marginBottom: 16,}}>
            Adicionar Departamento
        </Button>
        <Row>
          <Col>
            <Button onClick={LimparCampos} type="default" style={{ marginTop: 16,}}>
              Limpar Campos
            </Button>
          </Col>
          <Col>
            <Popconfirm
              placement="bottomRight"
              title={text}
              onConfirm={deleteMolecula}
              okText="Sim"
              cancelText="Não"
              disabled={visibleSelect}
            >
              <Button type="primary" danger style={{marginTop: 16, marginLeft:16}} disabled={visibleSelect} >Apagar Molécula</Button>
            </Popconfirm>
          </Col>
        </Row>
      </Drawer>
    </>
  );
};


export default CadastroDepartamento