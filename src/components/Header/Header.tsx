import { ReactNode } from 'react'
import { Layout, Menu, Tooltip } from 'antd'
import { Link } from 'react-router-dom'
import { LogoutOutlined } from '@ant-design/icons'

import { useDispatch } from 'react-redux'
import { logout } from '../../services/auth/authSlice'


export const Header = ({ children }: { children: ReactNode }) => {
  const dispatch = useDispatch()

  const handleLogout = () => {
    dispatch(logout())
  }


  return (
    <Layout >
      <Layout.Header>
        <div className="col">
          <Menu mode="horizontal" theme="dark">
            <Menu.Item key={0}>
              <Link to="/home">Start</Link>
            </Menu.Item>
            <Menu.Item key={1}>
              <Link to="/task">Task</Link>
            </Menu.Item>
            <Menu.Item key={2} >
              <Tooltip title="Close Session">
                <LogoutOutlined  onClick={handleLogout} />
              </Tooltip>
            </Menu.Item>
          </Menu>
        </div>
      </Layout.Header>
      <Layout.Content style={{ bottom: 0 }}>{children}</Layout.Content>
    </Layout>
  )
}

