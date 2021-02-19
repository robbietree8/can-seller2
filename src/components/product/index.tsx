import { Card } from 'antd';


export default function Product(props) {
  const { Meta } = Card;
  console.log(props.image);

  return (
    <Card
      style={{ width: 240 }}
      cover={<img alt="example" src={props.image} />}
    >
      <Meta title={props.name} />
    </Card>
  );
}