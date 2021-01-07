import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AppBar from '../../../components/header';
import { Layout, Row, Col, Button, Select, Table, Input,Badge,Tag,  Modal  } from 'antd';
import { RootState } from '../../../store/store';
import './styles.css';
import { getMoleculas, getMoleculaProduto, getExecucaoApurador, getRelatorioCSV } from '../../../store/Margenericos/actions';
import { moleculas, moleculasProdutos, execucaoApurador } from '../../../types/margenericos/margenericosType';
import { DownloadOutlined,EditOutlined, PlusOutlined ,UpCircleTwoTone, DownCircleTwoTone} from '@ant-design/icons';
import { logout, getUserName } from '../../../services/auth';

import NewEditMolecula from './CadastroFuncionario';
import CadastroDepartamento from './CadastroDepartamento';
import CadastroFuncionario from './CadastroFuncionario';

const { Content } = Layout;

const RelatorioMargenerico = () => {

  const dispatch = useDispatch();
  //const molecula = useSelector<RootState, moleculas[]>(state => state.margenerico.moleculas);
  const [loadingTable, setLoadingTable] = useState(true);

  const moleculaProduto = useSelector<RootState, moleculasProdutos[]>(state => state.margenerico.moleculasProdutos);

  const [margenerico, setMargenerico] = useState({
    pesquisa: "",
    lista: moleculaProduto as any,
    valorAlterado: false

  });


  const _ultimaexecucao = useSelector<RootState, execucaoApurador[]>(state => state.margenerico.execucaoApurador);

  const filterMargenericos = (value: any) => {
    let listaFiltrada = moleculaProduto;

    const pesquisa = value.pesquisa.toString().toLowerCase();

    if (pesquisa) {
      listaFiltrada = listaFiltrada.filter(l => l.descricao.toLowerCase().indexOf(pesquisa) !== -1 || l.molecula.toLowerCase().indexOf(pesquisa) !== -1 || l.codigo.toLowerCase().indexOf(pesquisa) !== -1 || l.fabricante.toLowerCase().indexOf(pesquisa) !== -1 || l.fornecedor.toLowerCase().indexOf(pesquisa) !== -1);
      setLoadingTable(false);
    };
    return listaFiltrada;

  };

  /* function getMoleculasCAB() {
     dispatch(getMoleculas());
   }*/

  function getApurador() {
    dispatch(getExecucaoApurador());
  }

  function getRelatoriocsv() {
    dispatch(getRelatorioCSV());

  }

  function getMoleculasDET() {

    dispatch(getMoleculaProduto());
  }
  
  useEffect(() => {
    getApurador();
    getMoleculasDET();
  }, []);

  useEffect(() => {
    setMargenerico({ ...margenerico, pesquisa: "a", valorAlterado: true })
  }, [moleculaProduto]);

  useEffect(() => {
    setMargenerico({ ...margenerico, valorAlterado: false, lista: filterMargenericos(margenerico) });
  }, [margenerico.pesquisa]);
 

  const columnsTable = [
    {
      title: 'Molecula',
      dataIndex: 'molecula',
      key: 'molecula',
      width: '20%',
    },
    {
      title: 'Codigo',
      dataIndex: 'codigo',
      width: '8%',
    },
    {
      title: 'Descrição',
      dataIndex: 'descricao',
    },
    {
      title: 'Fabricante',
      dataIndex: 'fabricante',
    },
    {
      title: 'Fornecedor',
      dataIndex: 'fornecedor',
    },
    {
      title: 'Peso',
      dataIndex: 'peso',
      width: '5%',
    },
    {
      title: '% Atingido',
      dataIndex: 'percentualAtingido',
      width: '12%',
    },
    {
      title: 'Quantidade',
      dataIndex: 'quantidade',
    },
    {
      title: 'Fora Mix',
      dataIndex: 'foraMix',
    },         
  ];

  const hStyle = { color: 'red' };

  const { Search } = Input;

  const { Option } = Select;

  return (
    <Layout>
      <AppBar collapsed />
      <Content style={{ padding: '0 24px', marginTop: '10px', backgroundColor: 'white', marginLeft: 50, marginRight: 50, marginBottom: 20 }}>
        <h2 className="title-page">Relatório Por Moléculas</h2>
        <Row style={{ padding: 10 }}>
          <Col span={24}>

            <Input placeholder="Molecula - Descrição Produto - Codigo - Fabricante" onChange={(e) => setMargenerico({ ...margenerico, pesquisa: e.target.value, valorAlterado: true })} />

          </Col>

        </Row>
        <Row style={{ padding: 10 }}>
          <Col span={60}>
            <CadastroFuncionario  nameButton={"Novo Funcionário"}  tipo={"Cadastrar Novo Funcionário"} icone={<PlusOutlined/>} carregarMolecula={false} />
            <CadastroDepartamento nameButton={"Novo Departamento"} tipo={"Cadastrar Novo Departamento"} icone={<PlusOutlined/>} carregarMolecula={true} />
            <Button type="primary" icon={<DownloadOutlined />} onClick={getRelatoriocsv} >
              Gerar CSV
          </Button>
          </Col>
        </Row>
        <Table
          columns={columnsTable}
          dataSource={margenerico.lista}
          loading={loadingTable}
          rowClassName={(record, index) => ( record.percentualAtingido < record.peso && record.foraMix == "Participante" ? "red" : record.percentualAtingido >= 0 && record.foraMix == "Participante" ? "green" :"")}
        />

        {_ultimaexecucao?.map((i: any) => (<h3 style={hStyle} className="title-footer">Ultima Execução Apurador : {i.data}</h3>))}
        <Row>
        {/* <UpCircleTwoTone  twoToneColor="#3CB371"/> */}
        <Badge status="success" />
         <h3  style={{ paddingLeft: 10 }} >Produtos Dentro do Mix que a Meta Foi Atingida</h3>
        </Row>
        <Row>
        {/* <DownCircleTwoTone twoToneColor="#FF4500"/> */}
        <Badge status="error" />
         <h3 style={{ paddingLeft: 10 }}>Produtos Dentro do Mix que a Meta Não Foi Atingida</h3>
        </Row>
      </Content>
    </Layout>
  );
}

export default RelatorioMargenerico;

