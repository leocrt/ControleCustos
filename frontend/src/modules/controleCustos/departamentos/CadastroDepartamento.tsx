import { Button, Col, Drawer, Input, Row } from 'antd';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addNewDepartamento } from '../../../store/controleCusto/actions';

function CadastroDepartamento(props: any) {
  const [visible, setVisible] = useState(false);
  const [loadingTable, setLoadingTable] = useState(true);
  const [loadingPage, setLoadingPage] = useState(true);
  const [visibleSelect, setVisibleSelect] = useState(false);

  const [nomeDepartamento, setNomeDepartamento] = useState<string>('');

  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setNomeDepartamento('');
    setVisible(false);
  };
  const dispatch = useDispatch();
  
  function AddDepartamento() {
    let dep = {nome: nomeDepartamento}
    dispatch(addNewDepartamento(dep));
  }

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
            <h4> Nome Departamento</h4>
            <Input style={{ width: 530 }} value={nomeDepartamento} onChange={(e) => setNomeDepartamento(e.target.value)} placeholder="Máx: 100 Caracteres" />
          </Col>
        </Row>
        <Button onClick={AddDepartamento} type="primary" style={{marginBottom: 16,}}>
            Adicionar Departamento
        </Button>
      </Drawer>
    </>
  );
};


export default CadastroDepartamento