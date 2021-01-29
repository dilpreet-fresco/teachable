import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import {
  MenuUnfoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  MenuFoldOutlined,
} from '@ant-design/icons';

import './Layout.css';
import { Link } from 'react-router-dom';

const { Header, Sider, Content } = Layout;
const { SubMenu } = Menu;

function LayoutComponent() {
  const [collapsed, setCollapsed] = useState(false);

  const toggle = () => setCollapsed(!collapsed);

  return (
    <div className="layout-wrapper">
      <Layout style={{ minHeight: '100vh' }}>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className="logo-cotainer">
            {!collapsed && <h2>Teachable</h2>}
          </div>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <SubMenu key="sub1" icon={<UserOutlined />} title="Pages">
              <SubMenu
                key="product-sub"
                icon={<UserOutlined />}
                title="Product"
              >
                <Menu.Item key="examples">
                  <Link to="/admin/pages/examples">Examples Page</Link>
                </Menu.Item>
                <Menu.Item key="features">
                  <Link to="/admin/pages/features">Features Page</Link>
                </Menu.Item>
                <Menu.Item key="pricing">
                  <Link to="/admin/pages/pricing">Pricing Page</Link>
                </Menu.Item>
              </SubMenu>
              <SubMenu key="learn-sub" icon={<UserOutlined />} title="Learn">
                <Menu.Item key="knowledge">Knowledge Base Base</Menu.Item>
                <Menu.Item key="blog">Blog Page</Menu.Item>
                <Menu.Item key="podcast">Podcast Page</Menu.Item>
              </SubMenu>
              <SubMenu
                key="company-sub"
                icon={<UserOutlined />}
                title="Company"
              >
                <Menu.Item key="carrers">Carrers Page</Menu.Item>
                <Menu.Item key="experts">Experts Page</Menu.Item>
                <Menu.Item key="become-affilate">
                  Become an Affilate Page
                </Menu.Item>
                <Menu.Item key="explore-courses">
                  Explore Courses Page
                </Menu.Item>
              </SubMenu>
              <SubMenu key="legal-sub" icon={<UserOutlined />} title="Legal">
                <Menu.Item key="privacy">Privacy & Policy Page</Menu.Item>
                <Menu.Item key="terms">Terms of Use Page</Menu.Item>
                <Menu.Item key="cookie-policy">Cookie Policy Page</Menu.Item>
              </SubMenu>
              <SubMenu
                key="get-in-sub"
                icon={<UserOutlined />}
                title="Get In Touch"
              >
                <Menu.Item key="support">Contact Support</Menu.Item>
                <Menu.Item key="sales">Contact Sales</Menu.Item>
              </SubMenu>
            </SubMenu>
            <Menu.Item key="2" icon={<VideoCameraOutlined />}>
              nav 2
            </Menu.Item>
            <Menu.Item key="3" icon={<UploadOutlined />}>
              nav 3
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }}>
            {React.createElement(
              collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
              {
                className: 'trigger',
                onClick: toggle,
                style: { marginLeft: '16px' },
              },
            )}
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
            }}
          >
            Content
          </Content>
        </Layout>
      </Layout>
    </div>
  );
}

export default LayoutComponent;
