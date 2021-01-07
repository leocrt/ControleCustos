import { Button, Col, Drawer, Input, message, Row, Select } from 'antd';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addNewFuncionario, getAllDepartamentos } from '../../../store/controleCusto/actions';
import { DeleteMolecula, getCadastroMolecula, getCadastroProdutosMargenerico } from '../../../store/Margenericos/actions';
import { RootState } from '../../../store/store';
import { moleculasProdutosID } from '../../../types/margenericos/margenericosType';
import { Departamento, Funcionario } from '../../../types/models/controleCustoType';

function CadastroFuncionario(props: any) {
  const [visible, setVisible] = useState(false);
  const [loadingTable, setLoadingTable] = useState(true);
  const [loadingPage, setLoadingPage] = useState(true);


  const [visibleSelect, setVisibleSelect] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setNovoFuncionario({ ...novoFuncionario, nome:"", departamentos:[{nome:"", id:0}]});
    setVisible(false);
  };
  
  const dispatch = useDispatch();
  const departamentos = useSelector<RootState, Departamento[]>(state => state.controleCustos.departamentos);
  const [novoFuncionario, setNovoFuncionario] = useState<Funcionario>({nome:"", departamentos:[{id:0, nome:""}]});
  const [departamentoSelected, setdepartamentoSelected] = useState({id: 0,nome:""});

  useEffect(() => {
    dispatch(getAllDepartamentos());
  }, []);

  const  delDepartamento = (id: any) => {
    let listaNova = novoFuncionario.departamentos.filter((item: Departamento) => item.id !== id)
    setNovoFuncionario({ ...novoFuncionario, departamentos: listaNova })
    message.success('Departamento removido!');
  }

  const adicionarNovoFuncionario = () => {
    debugger;
    let depIds = novoFuncionario.departamentos.map(e =>{ return e.id})
    const funcionario = {
      nome: novoFuncionario.nome,
      departamentosIds: depIds
    };
    dispatch(addNewFuncionario(funcionario));
  }

  const updateDepartamentoArray = (id: number, nome: string): Departamento[] => {
    let departamentos = [...novoFuncionario.departamentos]
    let filteredDeps = departamentos.filter(c => c.id !== 0)
    filteredDeps.push({id: id, nome: nome})
    return filteredDeps
  } 

  const adicionarDepartamento = () => {
    debugger;
    let updatedDeps = updateDepartamentoArray(departamentoSelected.id, departamentoSelected.nome);
    setNovoFuncionario({...novoFuncionario, departamentos: updatedDeps});
  }

  const { Option } = Select;

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
          </div>
        }
      >
        <Row >
          <Col span={100}>
            <h4> Nome Completo </h4>
            <Input 
              style={{ width: 530 }} 
              value={novoFuncionario.nome} 
              onChange={(e) =>  setNovoFuncionario({ ...novoFuncionario, nome: e.target.value})} 
              maxLength={200}
              placeholder="Máx: 200 Caracteres" />
          </Col>
        </Row>
        <Row style={{ paddingBottom: 20 }}>
          <Col span={100}>
            <h4> Departamentos</h4>
            <Select
              showSearch
              style={{ width: 600, paddingBottom: 20 }}
              placeholder="Selecione pelo menos um departamento"
              optionFilterProp="children"
              disabled={visibleSelect}
              onSelect={(e, l) => setdepartamentoSelected({id: l.value, nome: l.title})}>
              {departamentos?.map((i: any) => (<Option key={i.id} title={i.nome} value={i.id}>{i.nome}</Option>))}
            </Select>
            <Button onClick={adicionarDepartamento} type="primary" style={{marginLeft: 16,}}> + </Button>
          </Col>
        </Row>
        <Row>
          <table >
            <thead className="ant-table-thead">
              <tr>
                <th id='codigo' className="ant-table-cell" style={{ width: "20%" }} >Id</th>
                <th id='codigo' className="ant-table-cell" style={{ width: "70%" }} >Nome</th>
                <th className="ant-table-cell" style={{ width: "30%" }} >Excluir</th>
              </tr>
            </thead>
            <tbody className="ant-table-tbody">
              {novoFuncionario.departamentos.map((i: Departamento) => (<tr className="ant-table-row ant-table-row-level-0 editable-row">
                <td className="ant-table-cell">{i.id}</td>
                <td className="ant-table-cell">{i.nome}</td>
                <td><Button onClick={() => delDepartamento(i.id)} type="primary" style={{ borderRadius: "4px" }} danger > X </Button></td></tr>))}
            </tbody>
          </table>
        </Row>
        <Row>
          <Button onClick={adicionarNovoFuncionario} type="primary" style={{marginTop: 20,}}> Adicionar Funcionário </Button>
        </Row>
      </Drawer>
    </>
  );
};


export default CadastroFuncionario