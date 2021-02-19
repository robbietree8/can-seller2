import { Layout, Menu, Carousel, Divider, Row, Col } from 'antd';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';

const { Header, Footer, Content } = Layout;

export default (props) => {
  return <Layout>
    <Header>
      <Menu mode="horizontal">
        <Menu.Item key="mail" icon={<MailOutlined />}>
          <a href="/" target="_self" rel="noopener noreferrer">
            HOME
          </a>
        </Menu.Item>
        <Menu.Item key="product" icon={<MailOutlined />}>
          <a href="/product" target="_self" rel="noopener noreferrer">
            PRODUCTS
          </a>
        </Menu.Item>
        <Menu.Item key="contact" icon={<MailOutlined />}>
          <a href="/contact" target="_self" rel="noopener noreferrer">
            CONTACT US
          </a>
        </Menu.Item>
      </Menu>
    </Header>
    <Content>
      {props.children}
    </Content>
    <Footer style={{ textAlign: 'center' }}>
      Copyright@2021 x-man Copyright Reserved
    </Footer>
  </Layout>;
}