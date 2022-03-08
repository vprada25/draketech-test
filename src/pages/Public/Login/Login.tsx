import { Form, Input, Button, Checkbox } from 'antd';
import styles from './Login.module.scss';

const { Item } = Form;

const Login = () => {
  return (
    <div className={styles.login}>
      <div className='m-0 justify-content-center align-items-center vh-100 row'>
        <div className={`${styles.for} d-flex flex-column text-center px-5  pt-4`}>
          <Form className=''
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            initialValues={{ remember: true }}
            /*  onFinish=
            onFinishFailed={onFinishFailed} */
            autoComplete="off"
          >
            <h1>Bienvenido</h1>
            <Item
              label="Email"
              name="username"
              rules={[{ required: true, type: 'email' },]}
            >
              <Input />
            </Item>

            <Item
              label="Contraseña"
              name="password"
              rules={[{ required: true, message: 'Please input your password!' }]}
            >
              <Input.Password />
            </Item>

            <Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
              <Checkbox>Remember me</Checkbox>
            </Item>

            <Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Item>
          </Form>
        </div>
      </div>
    </div >
  )
}

export default Login