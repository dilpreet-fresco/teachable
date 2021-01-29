import { Spin, Space } from 'antd';

function Loading() {
  return (
    <div
      style={{
        width: '100%',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Space size="large">
        <Spin size="large" />
      </Space>
    </div>
  );
}

export default Loading;
