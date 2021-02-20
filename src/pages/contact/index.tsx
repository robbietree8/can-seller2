import { Row, Col, Divider, Card } from 'antd';

export default function ContactPage() {
  return (
    <div>
      <p style={{fontSize: 24}}>
        Contact US
      </p>
      <Row gutter={16}>
        <Col span={8}>
          <Card title="Sales1">
            <p>Bruce Li</p>
            <p>Phone:</p>
            <p>+ 65 1234 5678</p>
            <p>E-mail：</p>
            <p>info@www.com</p>
          </Card>
        </Col>
        <Col span={8}>
          <Card title="Sales2">
            <p>Bruce Li</p>
            <p>Phone:</p>
            <p>+ 65 1234 5678</p>
            <p>E-mail：</p>
            <p>info@www.com</p>
          </Card>
        </Col>
        <Col span={8}>
          <Card title="Sales3">
            <p>Bruce Li</p>
            <p>Phone:</p>
            <p>+ 65 1234 5678</p>
            <p>E-mail：</p>
            <p>info@www.com</p>
          </Card>
        </Col>
      </Row >
    </div >
  );
}