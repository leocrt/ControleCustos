import { DownloadOutlined, PlusOutlined } from '@ant-design/icons';
import { Badge, Button, Col, Input, Layout, Row, Table } from 'antd';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AppBar from '../../../components/header';
import { getAllDepartamentos } from '../../../store/controleCusto/actions';
import { RootState } from '../../../store/store';
import { Departamento } from '../../../types/models/controleCustoType';
import CadastroDepartamento from './CadastroDepartamento';
import './styles.css';

const { Content } = Layout;

const RelatorioDepartamentos = () => {
  const dispatch = useDispatch();
  const departamentos = useSelector<RootState, Departamento[]>(state => state.controleCustos.funcionarios);

  useEffect(() => {
    dispatch(getAllDepartamentos());
  }, []);

  useEffect(() => {
    dispatch(getAllDepartamentos());
  }, [departamentos]);

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
              {departamentos.map((i: Departamento) => (<tr className="ant-table-row ant-table-row-level-0 editable-row">
                <td className="ant-table-cell">{i.id}</td>
                <td className="ant-table-cell">{i.nome}</td>
                <td><Button type="primary" style={{ borderRadius: "4px" }} danger > X </Button></td></tr>))}
            </tbody>
          </table>
      </Content>
    </Layout>
  );
}

export default RelatorioDepartamentos;

