import { Layout, Menu, Carousel, Divider, Row, Col } from 'antd';
import { MailOutlined, HomeOutlined, ContactsOutlined, AppstoreOutlined  } from '@ant-design/icons';

const { Header, Footer, Content } = Layout;

export default (props) => {
  return <Layout>
    <Header>
      <Menu mode="horizontal">
        <Menu.Item key="mail" icon={<HomeOutlined />}>
          <a href="/" target="_self" rel="noopener noreferrer">
            HOME
          </a>
        </Menu.Item>
        <Menu.Item key="product" icon={<AppstoreOutlined />}>
          <a href="/product" target="_self" rel="noopener noreferrer">
            PRODUCTS
          </a>
        </Menu.Item>
        <Menu.Item key="contact" icon={<ContactsOutlined />}>
          <a href="/contact" target="_self" rel="noopener noreferrer">
            CONTACT US
          </a>
        </Menu.Item>
      </Menu>
    </Header>
    <Content style={{ margin: '24px 16px 0' }}>
      {props.children}
    </Content>
    <Footer style={{ textAlign: 'center', position: 'fixed', bottom: 0, width: '100%', paddingTop: 0 }}>
      Copyright@2021 x-man Copyright Reserved
    </Footer>
  </Layout>;
}