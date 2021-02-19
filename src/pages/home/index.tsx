import { Layout, Menu, Carousel, Divider, Row, Col } from 'antd';
import 'antd/dist/antd.css';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
import Product from "@/components/product";
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
    <>
      <Carousel autoplay>
        <div>
          <img src="https://i.loli.net/2021/02/19/kXy5tNDWluVAPEp.jpg" />
        </div>
        <div>
          <img src="https://i.loli.net/2021/02/19/kXy5tNDWluVAPEp.jpg" />
        </div>
        <div>
          <img src="https://i.loli.net/2021/02/19/kXy5tNDWluVAPEp.jpg" />
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
    </>
  );
}
