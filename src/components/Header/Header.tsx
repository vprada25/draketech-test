import { ReactNode } from 'react'
import { Layout, Menu, Tooltip } from 'antd'
import { Link } from 'react-router-dom'
import { LogoutOutlined } from '@ant-design/icons'

const Header = ({ children }: { children: ReactNode }) => {
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
                <LogoutOutlined  /* onClick={handleClickLogout} */ />
              </Tooltip>
            </Menu.Item>
          </Menu>
        </div>
      </Layout.Header>
      <Layout.Content style={{ bottom: 0 }}>{children}</Layout.Content>
    </Layout>
  )
}

export default Header;