import products from "./data";
import Product from "../../components/product";
import { Row, Col, Divider } from 'antd';


export default function ProductPage() {
  return (
    <div>
      <Row justify="center" align="top" gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        {products.map(product => {
          return <Col className="gutter-row" span={6}>
            <Product key={product.id} {...product} />
          </Col>
        })}
      </Row>

    </div>
  );
}