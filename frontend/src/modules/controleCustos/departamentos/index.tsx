import { DownloadOutlined, PlusOutlined } from '@ant-design/icons';
import { Badge, Button, Col, Input, Layout, Row, Table } from 'antd';
import React from 'react';
import AppBar from '../../../components/header';
import CadastroDepartamento from './CadastroDepartamento';
import './styles.css';

const { Content } = Layout;

const RelatorioDepartamentos = () => {
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

  return (
    <Layout>
      <AppBar collapsed />
      <Content style={{ padding: '0 24px', marginTop: '10px', backgroundColor: 'white', marginLeft: 50, marginRight: 50, marginBottom: 20 }}>
        <h2 className="title-page">Departamentos</h2>
        <Row style={{ padding: 10 }}>
          <Col span={24}>
            <Input placeholder="Molecula - Descrição Produto - Codigo - Fabricante"/>
          </Col>
        </Row>
        <Row style={{ padding: 10 }}>
          <Col span={60}>
            <CadastroDepartamento nameButton={"Novo Departamento"} tipo={"Cadastrar Novo Departamento"} icone={<PlusOutlined/>} carregarMolecula={true} />
            <Button type="primary" icon={<DownloadOutlined />}>
              Gerar CSV
          </Button>
          </Col>
        </Row>
        <Table
          columns={columnsTable}
          rowClassName={(record, index) => ( record.percentualAtingido < record.peso && record.foraMix == "Participante" ? "red" : record.percentualAtingido >= 0 && record.foraMix == "Participante" ? "green" :"")}
        />
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

export default RelatorioDepartamentos;

