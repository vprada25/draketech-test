import { Form, Input, Button, Checkbox } from 'antd';
import styles from './Login.module.scss';
import { useDispatch } from 'react-redux'
import { loginPending } from './../../../services/auth/authSlice'
import { FormData } from './types'


const { Item } = Form;


const Login = () => {


    const dispath = useDispatch()

    const handleFormClick = (values: FormData) => {
      dispath(loginPending({ ...values }))
    }
  

  return (
    <div className={styles.login}>
      <div className='m-0 justify-content-center align-items-center vh-100 row'>
        <div className={`${styles.for} d-flex flex-column text-center px-5  pt-4`}>
          <Form onFinish={handleFormClick}
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            initialValues={{ remember: true }}

            autoComplete="off"
          >
            <h1>Bienvenido</h1>
            <Item
              label="email"
              name="email"
              rules={[{ required: true, type: 'email' },]}
              hasFeedback
            >
              <Input />
            </Item>

            <Item
              label="Contraseña"
              name="password"
              rules={[{ required: true, message: 'Please input your password!' }]}
              hasFeedback
            >
              <Input.Password />
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