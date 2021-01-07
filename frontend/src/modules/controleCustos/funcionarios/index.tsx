import { PlusOutlined } from '@ant-design/icons';
import { Col, Input, Layout, Row, Select, Table } from 'antd';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AppBar from '../../../components/header';
import { RootState } from '../../../store/store';
import { moleculasProdutos } from '../../../types/margenericos/margenericosType';
import CadastroFuncionario from './CadastroFuncionario';
import './styles.css';


const { Content } = Layout;

const RelatorioFuncionarios = () => {

  const dispatch = useDispatch();
  //const molecula = useSelector<RootState, moleculas[]>(state => state.margenerico.moleculas);
  const [loadingTable, setLoadingTable] = useState(true);

  const moleculaProduto = useSelector<RootState, moleculasProdutos[]>(state => state.margenerico.moleculasProdutos);

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
        <h2 className="title-page">Funcionários</h2>
        <Row style={{ padding: 10 }}>
          <Col span={24}>

            <Input placeholder="Molecula - Descrição Produto - Codigo - Fabricante" />

          </Col>

        </Row>
        <Row style={{ padding: 10 }}>
          <Col span={60}>
            <CadastroFuncionario  nameButton={"Novo Funcionário"}  tipo={"Cadastrar Novo Funcionário"} icone={<PlusOutlined/>} carregarMolecula={false} />
          </Col>
        </Row>
        <Table
          columns={columnsTable}
          loading={loadingTable}
        />
        <Row>
        </Row>
      </Content>
    </Layout>
  );
}

export default RelatorioFuncionarios;

