import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AppBar from '../../../components/header';
import { Layout, Row, Col, Button } from 'antd';
import DataTable from '../../../components/table';
import { RootState } from '../../../store/store';
import { GrupoFornecedores } from '../../../types/relatorios/relatoriosType';
import {
    DownloadOutlined
} from '@ant-design/icons';
import './styles.css';
import { getRelatorioGrupoFornecedores, popularTabelaGrupoFornecedores } from '../../../store/relatorios/actions';

const { Content } = Layout;

const RelatorioGrupoFornecedores = () => {

    const [, setFilteredInfo] = useState(null);
    const [, setsortedInfo] = useState(null);

    const dispatch = useDispatch();

    const grupoFornecedores = useSelector<RootState, GrupoFornecedores[]>(state => state.relatorios.grupoFornecedores);

    const handleChange = (pagination: any, filters: any, sorter: any) => {
        setFilteredInfo(filters);
        setsortedInfo(sorter);
    }

    function getRelatorio() {
        dispatch(getRelatorioGrupoFornecedores());
    }

    function getGupoFornecedores() {
        dispatch(popularTabelaGrupoFornecedores());
    }
    useEffect(() => {
        getGupoFornecedores();
    }, []);

    


    return (
        <Layout>
            <AppBar collapsed />
            <Content style={{ padding: '0 24px', marginTop: '10px', backgroundColor: 'white', marginLeft: 50, marginRight: 50, marginBottom: 20 }}>
                <h2 className="title-page">Relatório Grupo Fornecedores</h2>
                <Row style={{ padding: 10 }}>
                    <Col span={24}>
                        <Button type="primary" icon={<DownloadOutlined />} onClick={getRelatorio}>
                            Gerar CSV
        </Button>
                    </Col>
                </Row>
                <DataTable data={grupoFornecedores} change={() => handleChange} />
            </Content>
        </Layout>

    );
}

export default RelatorioGrupoFornecedores;