import { Layout } from 'antd';

import './styles/pageEditor.css';
import Sidebar from './Sidebar';

const { Header, Content } = Layout;

function PageEditor() {
  return (
    <div className="admin-wrapper">
      <Layout style={{ minHeight: '100vh' }}>
        <Sidebar />
        <Layout className="site-layout">
          <Header
            className="site-layout-background"
            style={{ padding: 0 }}
          ></Header>
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

export default PageEditor;
