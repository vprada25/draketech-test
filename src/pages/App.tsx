import { HelmetProvider } from 'react-helmet-async'

import TaskProvider from '../context/TaskProvider'

import Public from '../routes/Public/RoutesPublic';
import Private from '../routes/Private/RoutesPrivate'

import { KEY_AUTH } from '../services/auth/authSlice'
import { useData } from '../hooks/useData';

function App() {
  const { authentication } = useData({ reducer: KEY_AUTH });
  console.log(authentication);
  return (
    <HelmetProvider>
      <TaskProvider>
        <div className="container-fluid">
          {authentication ? <Private /> : <Public />}
        </div>
      </TaskProvider>
    </HelmetProvider>
  )
}

export default App
