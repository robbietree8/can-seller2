import { Layout, Menu, Carousel, Divider, Row, Col } from 'antd';
import 'antd/dist/antd.css';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
import Product from "../components/product";
import homeProducts from "./data";

const { Header, Footer, Content } = Layout;

const contentStyle = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

export default function IndexPage() {
  return (
    <Layout>
      <Header>
        <Menu mode="horizontal">
          <Menu.Item key="mail" icon={<MailOutlined />}>
            HOME
          </Menu.Item>
          <Menu.Item key="contact" icon={<MailOutlined />}>
            <a href="/contact" target="_self" rel="noopener noreferrer">
              CONTACT US
            </a>
          </Menu.Item>
          <Menu.Item key="product" icon={<MailOutlined />}>
            <a href="/product" target="_self" rel="noopener noreferrer">
              PRODUCTS
            </a>
          </Menu.Item>
        </Menu>
      </Header>
      <Content>
        <Carousel autoplay>
          <div>
            <img src="/image/home/h-1.jpg" />
          </div>
          <div>
            <img src="/image/home/h-2.jpg" />
          </div>
          <div>
            <img src="/image/home/h-3.jpg" />
          </div>
        </Carousel>
        <Divider>Products Cover Almost Full Series of Metal Packaging Machine</Divider>
        <Row justify="center" align="top" gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          {homeProducts.map(product => {
            return <Col className="gutter-row" span={6}>
              <Product key={product.id} {...product} />
            </Col>
          })}
        </Row>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Copyright@2021 x-man Copyright Reserved</Footer>
    </Layout>
  );
}
