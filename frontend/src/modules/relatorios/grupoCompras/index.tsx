import { Col, Layout, Row, Table } from 'antd';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AppBar from '../../../components/header';
import SelectionTable from '../../../components/selectionTable';
import { clearFornecedorGrupoCompra, getFornecedorGrupoCompra, getGruposCompra } from '../../../store/relatorios/actions';
import { RootState } from '../../../store/store';
import { FornecedorGrupoCompra, GrupoCompra } from '../../../types/relatorios/relatoriosType';
import './styles.css';

const { Content } = Layout;

const RelatorioGrupoCompra = () => {
    const dispatch = useDispatch();

    const grupoCompra = useSelector<RootState, GrupoCompra[]>(state => state.relatorios.gruposCompra);
    const fornecedorGrupoCompra = useSelector<RootState, FornecedorGrupoCompra[]>(state => state.relatorios.fornecedorGrupoCompra);
    

    function getGrupoCompra() {
        dispatch(getGruposCompra());
    }
    useEffect(() => {
        getGrupoCompra();
    }, []);

    const columnsGrupoCompras = [
        {
            title: 'Código grupo',
            dataIndex: 'codigoGrupo',
            render: (text: any) => <a>{text}</a>,
        },
        {
            title: 'Nome',
            dataIndex: 'nomeGrupo',
        }
    ];

    const columnsFornecedores = [
        {
            title: 'Código Fornecedor',
            dataIndex: 'codigoFornecedor',
        },
        {
            title: 'Digito',
            dataIndex: 'digitoFornecedor',
        },
        {
            title: 'Nome Fantasia',
            dataIndex: 'nomeFantasiaFornecedor',
        },
        {
            title: 'Nome Comprador',
            dataIndex: 'nomeGrupoCompra',
        }
    ];

    const dataGrupoCompra = grupoCompra.map((e, index) =>{ 
        return {
            key: index,
            codigoGrupo: e.codigoGrupo,
            nomeGrupo: e.nomeGrupo
        };
    });
    
    const dataFornecedorGrupoCompra = fornecedorGrupoCompra.map((e, index) =>{ 
        return {
            key: index,
            codigoFornecedor: e.codigoFornecedor,
            digitoFornecedor: e.digitoFornecedor,
            nomeFantasiaFornecedor: e.nomeFantasia,
            nomeGrupoCompra: e.nomeGrupoCompra
        };
    }); 

    const handleSelectedGruposCompra = (selectedRows: any[]) => {
        if(selectedRows.length > 0){
            const ids = selectedRows.map(row => row.codigoGrupo)
            dispatch(getFornecedorGrupoCompra(ids))
        }
        else{
            dispatch(clearFornecedorGrupoCompra())
        }
    }

    return (
        <Layout>
            <AppBar collapsed />
            <Content style={{ padding: '0 24px', marginTop: '10px', backgroundColor: 'white', marginLeft: 50, marginRight: 50, marginBottom: 20 }}>
                <h2 className="title-page">Relatório Grupo Compra</h2>
                <Row>
                    <Col span={8}>
                        <SelectionTable data={dataGrupoCompra} columns={columnsGrupoCompras}  handleSelection={handleSelectedGruposCompra}/>            
                    </Col>
                    <Col span={16}>
                        <Table dataSource={dataFornecedorGrupoCompra} columns={columnsFornecedores} scroll={{y: 500}} pagination={false}
                            style={{ marginTop: 50 }}/>
                    </Col>
                </Row>,
            </Content>
        </Layout>

    );
}

export default RelatorioGrupoCompra;