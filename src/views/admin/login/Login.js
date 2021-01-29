import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Form, Input, Button } from 'antd';

import './Login.css';
import { signinWithEmailAndPassword } from '../../../modules/admin/auth/authActions';

function AdminLogin() {
  const dispatch = useDispatch();
  const { currentUser, loading } = useSelector(state => state.auth);

  useEffect(() => {}, [dispatch]);

  const login = ({ email, password }) => {
    dispatch(signinWithEmailAndPassword({ email, password }));
  };

  return currentUser ? (
    <Redirect to="/admin/dashboard" />
  ) : (
    <div className="wrapper">
      <div className="content">
        <div className="logo_wrapper">
          <h1>Login</h1>
        </div>

        <div className="form_container">
          <Form onFinish={login}>
            <Form.Item
              name="email"
              rules={[
                { required: true, message: 'Required!' },
                { type: 'email' },
              ]}
            >
              <Input placeholder="Email" size="large" />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: 'Required!',
                },
              ]}
            >
              <Input
                // prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
                size="large"
              />
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
                size="large"
                block
                loading={loading}
              >
                Log in
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default AdminLogin;
