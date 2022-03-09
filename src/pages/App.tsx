
import Public from '../routes/Public/RoutesPublic';
import Private from '../routes/Private/RoutesPrivate'

import { KEY_AUTH } from '../services/auth/authSlice'
import { useData } from '../hooks/useData';

function App() {
  const { authentication } = useData({ reducer: KEY_AUTH });
  return (
    <div className="container-fluid">
      {authentication ? <Private /> : <Public />}
    </div>
  )
}

export default App
