import axios from 'axios'
import { useContext } from 'react'

import { Table, Space, Tooltip, Button } from 'antd'
import { DeleteOutlined, EditTwoTone } from '@ant-design/icons'

import { TaskContext } from '../../../../context/TaskProvider'
import { currentAction } from '../../../../services/task/TaskAction'
import { basicTask } from '../../../../services/task/type'
import { taskType } from '../../../../context/type'
import { URL_API } from '../../../../helpers/constants/env'


const LisTask = () => {
  const {task, dispatch} = useContext(TaskContext)

  const data = [
    {
      title: 'Titulo',
      dataIndex: 'title',
      key: 'title',
      render: (text: string) => <p>{text}</p>,
    },
    {
      title: 'Descripción',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: 'Acción',
      key: 'action',
      render: () => (
        <Space size="middle">
          <Tooltip title="Eliminar tarea">
            <Button
              icon={<DeleteOutlined />}
              shape="circle"
              
              danger
              style={{ marginLeft: '5px' }}
            />
          </Tooltip>
          <Tooltip title="Modificar tarea">
            <Button
              icon={<EditTwoTone />}
              shape="circle"
              type="primary"
              style={{ marginLeft: '5px' }}
            />
          </Tooltip>
        </Space>
      ),
    },
  ]

  return (
    <div className= 'justify-content-center align-items-center'>
      <h3 className="text-center">Listado de Tareas</h3>

      <Table
      className=""
      columns={data}
      dataSource={task}
    />
    </div>
  )
}

export default LisTask;