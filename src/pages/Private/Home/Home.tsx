import styles from './Home.module.scss';
import { useData } from '../../../hooks/useData'
import { KEY_AUTH } from './../../../services/auth/authSlice'


const Home = () => {
  const { user } = useData({ reducer: KEY_AUTH })

  return (
    <div className={styles.Home}>
      <div className={styles.Text}>
        <h1>Welcome -  <span>{user}</span></h1>
        <div className='col-md-3'>
          <p className='text-justify'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel
            voluptatem, quia iusto cum hic ipsam eligendi a nostrum necessitatibus
            libero reiciendis amet ullam tenetur ea perferendis itaque, expedita
            distinctio iste.
          </p>
        </div>
      </div>
    </div>

  );
};

export default Home;