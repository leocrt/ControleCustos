import { Button, Col, Drawer, Input, Row, Select } from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addNewMovimentacao, getAllFuncionarios } from '../../../store/controleCusto/actions';
import { RootState } from '../../../store/store';
import { Funcionario } from '../../../types/models/controleCustoType';

function CadastroMovimentacao(props: any) {
  const [visible, setVisible] = useState(false);
  const [loadingTable, setLoadingTable] = useState(true);
  const [loadingPage, setLoadingPage] = useState(true);


  const [visibleSelect, setVisibleSelect] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setSelectedFuncionario(0);
    setValor(0);
    setCentavos(0);
    setDescricao('');
    setVisible(false);
  };
  
  const dispatch = useDispatch();
  const funcionarios = useSelector<RootState, Funcionario[]>(state => state.controleCustos.funcionarios);
  const [selectedFuncionario, setSelectedFuncionario] = useState<number>(0);
  const [valor, setValor] = useState<number>(0)
  const [centavos, setCentavos] = useState<number>(0)
  const [descricao, setDescricao] = useState<string>('')

  useEffect(() => {
    dispatch(getAllFuncionarios());
  }, []);

  const adicionarMovimentacao = () => {
    let formatDescricao = descricao
    let valorMontado = parseFloat(valor + "." + centavos);
    if(descricao !== ""){
      formatDescricao = descricao.toLowerCase()
    }
    const movimentacao = {
      descricao: formatDescricao,
      valor: valorMontado,
      funcionarioId: selectedFuncionario
    }
    dispatch(addNewMovimentacao(movimentacao));
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
        <Row style={{ paddingBottom: 20 }}>
          <Col span={100}>
            <h4> Funcionário que realizou a movimentação </h4>
            <Select
              showSearch
              style={{ width: 600}}
              placeholder="Selecione um funcionário"
              optionFilterProp="children"
              disabled={visibleSelect}
              onSelect={(e, l) => setSelectedFuncionario(l.value)}>
              {funcionarios?.map((i: any) => (<Option key={i.id} title={i.nome} value={i.id}>{i.nome}</Option>))}
            </Select>
          </Col>
        </Row>
        <Row style={{ paddingBottom: 20 }}>
          <Col span={100}>
            <h4> Valor da movimentação </h4>
            <Row>
            <h3>R$ </h3>
            <Input 
              type={"numeric"} 
              style={{ width: 200, marginLeft: 16 }} 
              value={valor} 
              onChange={(e) => setValor( isNaN(valor) ? 0 : parseFloat( e.target.value))}
            />
            <h3>,</h3>
            <Input 
              type={"numeric"} 
              style={{ width: 50, marginLeft:4 }} 
              value={centavos} 
              onChange={(e) => setCentavos(isNaN(centavos) ? 0 : parseFloat(e.target.value))}
              maxLength={2}
            />
            </Row>
          </Col>
        </Row>       
        <Row style={{ paddingBottom: 20 }}>
          <Col span={100}>
            <h4> Descrição da movimentação</h4>
            <TextArea 
              rows={4} 
              style={{ width: 600, paddingBottom: 20 }} 
              maxLength={500} 
              placeholder={"Faça um breve resumo da movimentação (Máx. 500 caracteres"}
              onChange={(e) => setDescricao(e.target.value)}
              value={descricao}></TextArea>
          </Col>
        </Row>
        <Row>
          <Button onClick={adicionarMovimentacao} type="primary" style={{marginTop: 20,}}> Adicionar Movimentação </Button>
        </Row>
      </Drawer>
    </>
  );
};


export default CadastroMovimentacao