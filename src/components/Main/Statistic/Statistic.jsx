import React from 'react';
import styles from './Statistic.module.css';

const Statistic = (props) => {
    let iKey = 1;
    let iNumber = 1;
    const sortedStatistic = (statistic = props.statistic) => {
        const statisticCopy = JSON.parse(JSON.stringify(statistic));
        statisticCopy.sort((a, b) => a.moves > b.moves ? 1 : -1);
        return statisticCopy;
    }

    return (
        <div className={styles.statisticContainer}>
            <table className={styles.content}>
                <thead align="center">
                    <tr className={styles.contentRow}>
                        <td className={styles.contentItem}>Number</td>
                        <td className={styles.contentItem}>Moves</td>
                        <td className={styles.contentItem}>Time</td>
                        <td className={styles.contentItem}>Winner</td>
                    </tr>
                </thead>
                <tbody align="center">
                    {
                        sortedStatistic().map((value) => {
                            return (
                                <tr className={styles.contentRow} key={iKey++}>
                                    <td className={styles.contentItem}>{iNumber++}</td>
                                    <td className={styles.contentItem}>{value.moves}</td>
                                    <td className={styles.contentItem}>{value.time}</td>
                                    <td className={styles.contentItem}>{value.winner}</td>
                                </tr>
                            );
                        })
                    }
                </tbody>
            </table>
        </div>
    );
}

export default Statistic;