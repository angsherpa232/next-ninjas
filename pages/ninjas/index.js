import styles from '../../styles/Ninjas.module.css';
import Link from 'next/link';

export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    return {
        props: {
            ninjas: data
        }
    }
}

const Ninjas = ({ ninjas }) => {
    return (
        <div>
            <h1>Ninjas</h1>
            {ninjas.map(ninja => {
                return (
                        <Link href={`/ninjas/${ninja.id}`} className={styles.single} key={ninja.id}>
                            <a className={styles.single}>
                                <h3>
                                    {ninja.name}
                                </h3>
                            </a>
                        </Link>
                )
            })}
        </div>
    )
}

export default Ninjas;
