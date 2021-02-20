import { Layout, Menu, Carousel, Divider, Row, Col } from 'antd';
import 'antd/dist/antd.css';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
import Product from "@/components/product";
import homeProducts from "./data";

const { Header, Footer, Content } = Layout;

export default function IndexPage() {
  return (
    <>
      <Carousel autoplay>
        <div>
          <img src="https://can-maker.oss-cn-hangzhou.aliyuncs.com/h-1.jpg" />
        </div>
        <div>
          <img src="https://can-maker.oss-cn-hangzhou.aliyuncs.com/h-1.jpg" />
        </div>
        <div>
          <img src="https://can-maker.oss-cn-hangzhou.aliyuncs.com/h-1.jpg" />
        </div>
      </Carousel>
      <Divider>Products Cover Almost Full Series of Metal Packaging Machine</Divider>
      <Row justify="center" align="top" gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        {homeProducts.map(product => {
          return <Col key={product.id} className="gutter-row" span={6}>
            <Product key={product.id} {...product} />
          </Col>
        })}
      </Row>
    </>
  );
}
