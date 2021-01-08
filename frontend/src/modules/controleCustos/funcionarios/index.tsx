import { PlusOutlined } from '@ant-design/icons';
import { Button, Col, Input, Layout, Row, Select, Table } from 'antd';
import React, { useEffect, useState } from 'react';
import { findDOMNode } from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';
import AppBar from '../../../components/header';
import { getAllFuncionarios } from '../../../store/controleCusto/actions';
import { RootState } from '../../../store/store';
import { moleculasProdutos } from '../../../types/margenericos/margenericosType';
import { Funcionario } from '../../../types/models/controleCustoType';
import CadastroFuncionario from './CadastroFuncionario';
import './styles.css';


const { Content } = Layout;

const RelatorioFuncionarios = () => {

  const dispatch = useDispatch();
  //const molecula = useSelector<RootState, moleculas[]>(state => state.margenerico.moleculas);
  const [loadingTable, setLoadingTable] = useState(true);
  const funcionarios = useSelector<RootState, Funcionario[]>(state => state.controleCustos.funcionarios);


  useEffect(() => {
    dispatch(getAllFuncionarios());
  }, []);

  useEffect(() => {
    dispatch(getAllFuncionarios());
  }, [funcionarios]);

  return (
    <Layout>
      <AppBar collapsed />
      <Content style={{ padding: '0 24px', marginTop: '10px', backgroundColor: 'white', marginLeft: 50, marginRight: 50, marginBottom: 20 }}>
        <h2 className="title-page">Funcionários</h2>
        <Row style={{ padding: 10 }}>
          <Col span={24}>

            <Input placeholder="Buscar pelo nome do funcionario"/>

          </Col>

        </Row>
        <Row style={{ padding: 10 }}>
          <Col span={60}>
            <CadastroFuncionario  nameButton={"Novo Funcionário"}  tipo={"Cadastrar Novo Funcionário"} icone={<PlusOutlined/>} carregarMolecula={false} />
          </Col>
        </Row>
        <table >
            <thead className="ant-table-thead">
              <tr>
                <th id='codigo' className="ant-table-cell" style={{ width: "20%" }} >Id</th>
                <th id='codigo' className="ant-table-cell" style={{ width: "70%" }} >Nome</th>
                <th className="ant-table-cell" style={{ width: "30%" }} >Excluir</th>
              </tr>
            </thead>
            <tbody className="ant-table-tbody">
              {funcionarios.map((i: Funcionario) => (<tr className="ant-table-row ant-table-row-level-0 editable-row">
                <td className="ant-table-cell">{i.id}</td>
                <td className="ant-table-cell">{i.nome}</td>
                <td><Button type="primary" style={{ borderRadius: "4px" }} danger > X </Button></td></tr>))}
            </tbody>
          </table>
        <Row>
        </Row>
      </Content>
    </Layout>
  );
}

export default RelatorioFuncionarios;

