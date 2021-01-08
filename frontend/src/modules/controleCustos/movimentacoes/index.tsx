import { PlusOutlined } from '@ant-design/icons';
import { Button, Col, Input, Layout, Row } from 'antd';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AppBar from '../../../components/header';
import { deleteMovimentacaoById, getAllFuncionarios, getAllMovimentacoes, getMovimentacaoByDescricao, getMovimentacaoByIdFuncionario } from '../../../store/controleCusto/actions';
import { RootState } from '../../../store/store';
import { Funcionario, Movimentacao } from '../../../types/models/controleCustoType';
import CadastroMovimentacao from './CadastroMovimentacao';
import './styles.css';


const { Content } = Layout;

const RelatorioMovimentacoes = () => {
  const dispatch = useDispatch();
  const movimentacoes = useSelector<RootState, Movimentacao[]>(state => state.controleCustos.movimentacoes);
  const funcionarios = useSelector<RootState, Funcionario[]>(state => state.controleCustos.funcionarios);
  const [selectedFuncionario, setSelectedFuncionario] = useState<number>(0);
  const [selectedDescricao, setSelectedDescricao] = useState<string>('');
  const [visibleSelect, setVisibleSelect] = useState(false);

  useEffect(() => {
    dispatch(getAllMovimentacoes());
    dispatch(getAllFuncionarios());
  }, []);

  const buscarMovimentacaoPorIdFuncionario = (id: any) => {
    if(isNaN(id) || id === 0 || id == ""){
      dispatch(getAllMovimentacoes());
      return;
    }
    dispatch(getMovimentacaoByIdFuncionario(id));
  }

  const buscarMovimentacaoDescricao = (descricao: any) => {
    if(descricao === ""){
      dispatch(getAllMovimentacoes());
      return;
    }
    dispatch(getMovimentacaoByDescricao(descricao));
  }
  
  const deleteMovimentacao = (id: any) => {
    dispatch(deleteMovimentacaoById(id));
  };
  
  return (
    <Layout>
      <AppBar collapsed />
      <Content style={{ padding: '0 24px', marginTop: '10px', backgroundColor: 'white', marginLeft: 50, marginRight: 50, marginBottom: 20 }}>
        <h2 className="title-page">Departamentos</h2>
        <Row style={{ padding: 10 }}>
        <h3 className="title-page">Filtrar por ID do funcionário</h3>
          <Col span={24}>
            <Input
              style={{ width: 200 }}
              type={"number"} 
              onChange={e => setSelectedFuncionario(parseInt(e.target.value))}
              value={selectedFuncionario}/>
            <Button onClick={() => buscarMovimentacaoPorIdFuncionario(selectedFuncionario)} type="primary" style={{marginBottom: 16, marginLeft: 16,}}>Buscar</Button>
          </Col>
          {/* <h3 className="title-page">Filtrar por uma palavra chave da descrição</h3>
          <Col span={24}>
            <Input
              style={{ width: 400 }}
              placeholder={"Favor buscar apenas uma palavra por vez"}
              onChange={e => setSelectedDescricao(e.target.value)}
              value={selectedDescricao}/>
            <Button onClick={() => buscarMovimentacaoDescricao(selectedDescricao)} type="primary" style={{marginBottom: 16, marginLeft: 16,}}>Buscar</Button>
          </Col> */}
        </Row>
        <Row style={{ padding: 10 }}>
          <Col span={60}>
            <CadastroMovimentacao 
              nameButton={"Nova Movimentação"} 
              tipo={"Cadastrar Nova Movimentação"} icone={<PlusOutlined/>} />  
          </Col>
        </Row>
        <table >
            <thead className="ant-table-thead">
              <tr>
                <th id='codigo' className="ant-table-cell" style={{ width: "10%" }} >Id</th>
                <th id='codigo' className="ant-table-cell" style={{ width: "10%" }} >Id Funcionario</th>
                <th id='codigo' className="ant-table-cell" style={{ width: "20%" }} >Valor da movimentação</th>
                <th id='codigo' className="ant-table-cell" style={{ width: "50%" }} >Descrição</th>
                <th className="ant-table-cell" style={{ width: "10%" }} >Excluir</th>
              </tr>
            </thead>
            <tbody className="ant-table-tbody">
              {movimentacoes.map((i: Movimentacao) => (<tr className="ant-table-row ant-table-row-level-0 editable-row">
                <td className="ant-table-cell">{i.id}</td>
                <td className="ant-table-cell">{i.funcionarioId}</td>
                <td className="ant-table-cell">{i.valor}</td>
                <td className="ant-table-cell">{i.descricao}</td>
                <td> <Button onClick={() => deleteMovimentacao(i.id)} type="primary" style={{ borderRadius: "4px" }} danger > X </Button></td></tr>))}
            </tbody>
          </table>
      </Content>
    </Layout>
  );
}

export default RelatorioMovimentacoes;

