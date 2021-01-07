import React, { useState, useLayoutEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Row, Col, Form, Input, Card, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import logo from '../../assets/logo-paguemenos.png';
import { useHistory } from 'react-router-dom';
import './login.css'
import { isAuthenticated } from '../../services/auth';
import { errorMessage } from '../../utils/utils';

const Login = () => {

    const history = useHistory();
    const dispatch = useDispatch();
    const [matricula, setMatricula] = useState<string>('');
    const [senha, setSenha] = useState<string>('');
    const [form] = Form.useForm();

    function autenticar() {        
        if (!matricula || !senha) {
            errorMessage('Por favor Preencha todos os campos');
            return;
        }
        if(matricula !== "1234" && senha !== "1234"){
            errorMessage('Usuário ou senha incorreto');
            return; 
        }else{
            history.push('/home');
        }
    }

    return (
        <>
            <Card
                bordered={false}
                className="card"
                title={
                    <>
                        <Row gutter={6}>
                            <Col span={24}>
                                <h1>Bem Vindo!</h1>
                                <h2>Login</h2>
                            </Col>
                        </Row>
                    </>}
            >
                <Form size="middle" form={form} onFinish={autenticar}>
                    <Form.Item
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: 'Por favor insira sua matrícula!',
                            },
                        ]}
                        hasFeedback
                    >
                        <Input
                            className="input"
                            prefix={<UserOutlined style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="Mátricula"
                            onChange={(e) => setMatricula(e.target.value)}
                        />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Por favor insira sua senha!',
                            },
                        ]}
                        hasFeedback
                    >
                        <Input.Password
                            className="input"
                            prefix={<LockOutlined style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="Senha"
                            type="password"
                            onChange={(e) => setSenha(e.target.value)}
                        />
                    </Form.Item>
                    <Form.Item style={{ marginTop: 70 }}>
                        <Button type="primary" htmlType="submit" style={{ width: '100%' }}>Acessar</Button>
                    </Form.Item>
                </Form>
            </Card>
        </>
    );
}

export default Login;