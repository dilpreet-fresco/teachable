import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  LeftOutlined,
  SettingOutlined,
} from '@ant-design/icons';

import './styles/sidebar.css';

const { Sider } = Layout;

function Sidebar() {
  return (
    <Sider width={300} theme="light">
      <div className="top-container">
        <Link to="/admin/dashboard">
          <LeftOutlined style={{ fontSize: '16px', cursor: 'pointer' }} />
        </Link>
        <h6>Home Page</h6>
        <SettingOutlined style={{ fontSize: '18px', cursor: 'pointer' }} />
      </div>
      <Menu theme="light" mode="inline" defaultSelectedKeys={['1']}>
        <Menu.Item key="1" icon={<UserOutlined />}>
          nav 1
        </Menu.Item>
        <Menu.Item key="2" icon={<VideoCameraOutlined />}>
          nav 2
        </Menu.Item>
        <Menu.Item key="3" icon={<UploadOutlined />}>
          nav 3
        </Menu.Item>
      </Menu>
    </Sider>
  );
}

export default Sidebar;
