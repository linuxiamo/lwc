import { useRouter } from 'next/router';
import styles from '../../styles/Home.module.css'

export default function Person(){
    const router = useRouter();
    console.log(router.query);
    return <h2 className={styles.title}>{router.query.person}'s {router.query.vehicle}</h2>
}

// http://localhost:3000/car/bruno?query1=monica&query1=john
// router conterrà un array per query1