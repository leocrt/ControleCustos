import React from 'react';
import { Layout } from 'antd';
import "antd/dist/antd.css";
import AppBar from '../../components/header';

const { Content } = Layout;

const Home = () => {
    return (
     <>
        <AppBar collapsed/>
        <Content style={{padding: '0 24px', marginTop: '10px'}}>
        </Content>
     </>
    );
}

export default Home;