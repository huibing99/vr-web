import { Table, Space, Row, Col, Card, Button} from 'antd';
import { PageContainer } from '@ant-design/pro-layout';
import styles from './index.less';
import { useRequest } from 'umi';
import { getUserList } from '@/services/userlist';
const Index = () => {
  const init = useRequest(getUserList);
  console.log(init)
  const searchLayout = () => {};
  const beforeTableLayout = () => {
    return (
      <Row>
        <Col xs={24} sm={12}>
          ...
        </Col>
        <Col xs={24} sm={12} className={styles.tableToolbar}>
          <Space>
            <Button type="primary">Add</Button>
            <Button type="primary">Delete</Button>
          </Space>
        </Col>
      </Row>
    );
  };

  const columnBuilder = () => {
    return [
      {
        title: '工号',
        dataIndex: 'jobNumber',
        key: 'jobNumber',
      },
      {
        title: '密码',
        dataIndex: 'password',
        key: 'password',
      },
    ];
  };

  return (
    <PageContainer>
      {searchLayout()}
      <Card>
        {beforeTableLayout()}
        <Table dataSource={init?.data} columns={columnBuilder()} />
      </Card>
    </PageContainer>
  );
};

export default Index;
