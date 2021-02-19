import { Row, Col, Divider, Card } from 'antd';

export default function ContactPage() {
  return (
    <div>
      <Divider orientation="left">
        Contact Us
      </Divider>
      <Row gutter={16}>
        <Col span={8}>
          <Card title="Sales">
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