
import PublicRoutes from '../routes/Public/RoutesPublic';
import PrivateRoutes from '../routes/Private/RoutesPrivate'

function App() {
  return (
    <div className="container-fluid">
      <PublicRoutes></PublicRoutes>
      {/* <PrivateRoutes></PrivateRoutes> */}
    </div>
  )
}

export default App
