import RouteComp from '../components/routeComp/RouteComp';
import styles from './Page.module.css';

const Pages = ()=>{
    return(
        <div >
            <h1 className={styles.entry}>Component Life Cycle</h1>
            <RouteComp />
        </div>
    )
}

export default Pages;