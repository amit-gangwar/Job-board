import React from 'react';
import { Layout, Input, Space, Avatar } from 'antd';
import { SearchOutlined, BellOutlined, SettingOutlined, MenuOutlined, UserOutlined } from '@ant-design/icons';
import './AppHeader.scss'; 

const { Header } = Layout;

const AppHeader = () => {
  return (
    <Header className="app-header">
      <div className="app-name">Onefinnet</div>
      <div className="header-right">
        <Input
          className="search-input"
          placeholder="Start searching"
          prefix={<SearchOutlined />}
        />
        <Space size="large">
          <BellOutlined className="header-icon" />
          <SettingOutlined className="header-icon" />
          <MenuOutlined className="header-icon" />
          <Avatar size="small" icon={<UserOutlined />} />
        </Space>
      </div>
    </Header>
  );
};

export default AppHeader;
