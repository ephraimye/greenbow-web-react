import { Card, Form, Input, Button, Checkbox, Row, Col } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

import styles from './login.less';

export default function loginPage() {
  return (
    <div className={styles.loginPage}>
      <div className={styles.loginBox}>
        <div className={styles.loginLogo}>
          <b>Greenbow</b>
        </div>
        <Card className={styles.card}>
          <Form name="loginForm">
            <Form.Item name="username">
              <Input
                size="large"
                placeholder="用户名"
                prefix={<UserOutlined />}
              />
            </Form.Item>
            <Form.Item name="password">
              <Input.Password
                size="large"
                placeholder="密码"
                prefix={<LockOutlined />}
              />
            </Form.Item>
            <Form.Item>
              <Row>
                <Col span={12} className={styles.rememberCol}>
                  <Checkbox>记住我</Checkbox>
                </Col>
                <Col span={12} className={styles.loginBtnCol}>
                  <Button type="primary" htmlType="submit">
                    登录
                  </Button>
                </Col>
              </Row>
            </Form.Item>
          </Form>
        </Card>
      </div>
    </div>
  );
}
