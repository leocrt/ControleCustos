import React, { FC } from 'react';
import logo from '../../assets/logo-pmenos-branca.png';
import "./styles.css";
import { Layout, Menu, Popover, Avatar, } from 'antd';
import {
  InfoCircleOutlined,
  LineChartOutlined,
  LogoutOutlined,
  MedicineBoxOutlined
} from '@ant-design/icons';
import { logout, getUserName } from '../../services/auth';
import { useHistory } from 'react-router-dom';
import SubMenu from 'antd/lib/menu/SubMenu';
import config from '../../../package.json';

const { Header } = Layout;

interface Props {
  collapsed: boolean
}

const AppBar: FC<Props> = () => {

  const history = useHistory();

  function exit() {
    logout();
    history.push('/login');
  }

  const contentVersion = () => (
    <p>
      <strong>Cliente:</strong> {config.version}<br />
    </p>
  );



  const contentAvatar = () => (
    <p>
      <strong>Nome:</strong> {getUserName()?.toUpperCase()}<br />
      <br />
      <div>
        <p id="sair" onClick={exit}>Sair <LogoutOutlined /></p>
      </div>
    </p>
  );



  return (
    <>
      <Header className="header">
        <div style={{ justifyContent: 'space-between', display: 'flex', alignItems: 'baseline' }}>
          <a style={{ color: 'white', fontSize: 30 }} onClick={() => history.push('/home')}>
            Controle de custos
          </a>
          <div>
            <Popover content={contentAvatar} title="Dados de Usuário" trigger="click">
              <Avatar className="avatar" size="large">
                {getUserName() != null ? getUserName()?.substr(0, 2) : ''}
              </Avatar>
            </Popover>
          </div>
        </div>
      </Header>
      <Header className="header" style={{ backgroundColor: 'white' }}>
        <Menu mode="horizontal" defaultSelectedKeys={['2']}>
          <SubMenu key="sub1" style={{ fontSize: 17 }} icon={<LineChartOutlined />} title="Funcionários" onTitleClick={() => history.push('/relatorios/funcionarios')}></SubMenu>
          <SubMenu key="sub2" style={{ fontSize: 17 }} icon={<LineChartOutlined />} title="Movimentacoes" onTitleClick={() => history.push('/relatorios/movimentacoes')}></SubMenu>
          <SubMenu key="sub3" style={{ fontSize: 17 }} icon={<LineChartOutlined />} title="Departamentos" onTitleClick={() => history.push('/relatorios/departamentos')}></SubMenu>
        </Menu>
      </Header>
    </>
  );
}

export default AppBar;