import Product from "../../components/product";
import { Row, Col, Divider, Image, Table } from 'antd';
import detailProduct from "./data";

const columns = [
  {
    title: "name",
    dataIndex: "name",
    key: "name"
  },
  {
    title: "value",
    dataIndex: "value",
    key: "value"
  }
]

const data = [
  {
    key: '1',
    name: 'Length of Heater',
    value: '2 meter',
  },
  {
    key: '2',
    name: 'Max. No. of Heater',
    value: '12',
  },
  {
    key: '3',
    name: 'Heater Coil',
    value: 'Multi-coil',
  }
]

export default function ProductDetailPage() {
  return (
    <div>
      <Row justify="start" align="top" gutter={16}>
        <Col key={detailProduct.id} className="gutter-row" span={12}>
          <img src={detailProduct.image} width='90%' />
        </Col>
        <Col span={12}>
          <p>
            Induction Curing Oven
            Modular induction curing oven can heat and solidify coated welding seam rapidly.
            It works based on the SPWM technology, generating vortex heating by A/C on the welding seam to get curing. It can be designed to linear or U type according to workshop space.
          </p>
        </Col>
      </Row>

      <br />

      <Row justify="start" align="top" gutter={16}>
        <Col key={detailProduct.id} className="gutter-row" span={12}>
          <p style={{ fontSize: 24 }}>Technical Parameters:</p>
          <Table columns={columns} dataSource={data} showHeader={false} bordered={true} pagination={false} />
        </Col>
      </Row>

    </div>
  );
}