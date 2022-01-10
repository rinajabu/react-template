import React from 'react';
import styles from './home.module.scss'

const Home = () => {
    return (
        <div className={styles.home}>
            <h1>React Template</h1>
            <p>
                With react-router, protected routes, context, bootstrap, and SASS.
            </p>
        </div>
    )
}

export default Home
