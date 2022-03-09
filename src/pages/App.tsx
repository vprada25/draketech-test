
import Public from '../routes/Public/RoutesPublic';
import Private from '../routes/Private/RoutesPrivate'
import { useSelector } from 'react-redux'

import { KEY_AUTH } from '../services/auth/authSlice'

function App() {
  const auth = useSelector((state: any) => state[KEY_AUTH])
  return (
    <div className="container-fluid">
      { auth ? <Private /> : <Public />}
    </div>
  )
}

export default App
