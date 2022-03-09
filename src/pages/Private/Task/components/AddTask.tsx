import { Form, Input, Button, Select, Checkbox, Row, Col } from 'antd'
import { PlusOutlined, UpCircleTwoTone, DownCircleTwoTone, MinusCircleTwoTone } from '@ant-design/icons';

import { useContext } from 'react'
import { v4 } from 'uuid'
import { createTaskAPI } from '../../../../services/axios/index'
import { TaskContext } from '../../../../context/TaskProvider';
import { KEY_AUTH } from '../../../../services/auth/authSlice';
import { useData } from '../../../../hooks/useData';
import { currentAction } from '../../../../services/task/TaskAction';



const AddTask = () => {

  const { Option } = Select

  const { dispatch } = useContext(TaskContext);
  const { user } = useData({ reducer: KEY_AUTH });


  const onAddTask = (value: { title: string }) => {
    const task = {
      id: v4(),
      title: value.title,
      description: '',
      createAt: new Date().toISOString(),
      user: user,
      completed: false
    }
    createTaskAPI(task).then(res => {
      dispatch({
        type: currentAction.ADD,
        task: task
      })
    }
    )
  }




  return (
    <div className="row justify-content-center align-items-center">
      <Form onFinish={onAddTask}>
        <h1 className="text-center">Create Task</h1>
        <Row gutter={[16, 8]}>
          <Col span={12}>
            <Form.Item
              name="title"
              label="Title"
              rules={[
                { required: true, message: 'Please input your title!' },
                { min: 4, message: 'Min 4 characters' },
              ]}
              hasFeedback
            >
              <Input placeholder="Title" />
            </Form.Item>
          </Col>

          <Col span={12}>
            <Form.Item
              label="Priority"
              name="priority"
              rules={[{ required: true, message: 'select an option ' }]}
              hasFeedback
            >
              <Select placeholder="Select Priority">
                <Option value="Alta"><UpCircleTwoTone twoToneColor='#ff0000' /> High</Option>
                <Option value="Media"><DownCircleTwoTone twoToneColor='#e2ed0e' /> Medium</Option>
                <Option value="Baja"><MinusCircleTwoTone twoToneColor='#12ed0e' /> Drop</Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={[16, 8]}>
          <Col span={18}>
            <Form.Item
              name="description"
              label="Description"
              rules={[
                { required: true, message: 'required field' },
                { min: 4, message: 'Min 4 characters' },
              ]}
              hasFeedback
            >
              <Input placeholder="description" />
            </Form.Item>
          </Col>
        </Row>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit" shape='round' icon={<PlusOutlined />}>
            create task
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default AddTask;