import products from "./data";
import Product from "../../components/product";
import { Row, Col, Divider, Image } from 'antd';


export default function ProductPage() {
  return (
    <div>
      <Image src="https://can-maker.oss-cn-hangzhou.aliyuncs.com/p-0.jpg" preview={false} />
      <Row justify="start" align="top"
        gutter={[{ xs: 8, sm: 16, md: 24, lg: 32 }, { xs: 8, sm: 16, md: 24, lg: 32 }]}>
        {products.map(product => {
          return <Col key={product.id} className="gutter-row" span={6}>
            <Product key={product.id} {...product} />
          </Col>
        })}
      </Row>

    </div>
  );
}