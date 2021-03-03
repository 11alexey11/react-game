import React from 'react';
import styles from './Home.module.css';

const Home = (props) => {
    console.log(props);
    return (
        <main className={styles.homeContainer}>
            <div className={styles.content}>
                <div className={styles.statistic}>
                    <div>Turn: {props.xTurn ? 'X': '0'}</div>
                    <div>Time: {props.minutes}:{props.seconds}</div>
                    <div>Moves: {props.moves}</div>
                </div>
                <div className={`${styles.field} ${!props.isLightField ? styles.darkField : styles.lightField}`}>
                    {
                        props.cells.map((item) => {
                            return (
                                <div
                                    tabIndex={0}
                                    onClick={(event) => {
                                        props.clickElement(props.soundValue, props.isSound)
                                        props.onCellClick(event);
                                    }}
                                    data-id={item.id} key={item.id}
                                    className={`${styles.fieldItem} ${!props.isLightItem ? styles.darkFieldItem : styles.lightFieldItem}`}> {item.value === null ? '' : item.value}
                                </div>);
                        })
                    }
                </div>
                <div className={styles.errors}>{props.message}</div>
                <div className={styles.btnContainer}>
                    <button onClick={ () => {
                        props.clickElement(props.soundValue, props.isSound);
                        props.startNewGame(true);
                        clearInterval(props.timerInterval);
                        props.setTimerInterval();
                        props.clickTurn(true);
                        props.showMessage(null);
                        props.setMinutes(0);
                        props.setSeconds(0);
                        props.setMoves(0);
                        }} >New Game
                    </button>
                    <button onClick={(event) => {
                        props.startNewGame(true);
                        clearInterval(props.timerInterval)
                        props.setTimerInterval();
                        props.setAutoplayInterval();
                        props.showMessage(null);
                        props.setMinutes(0);
                        props.setSeconds(0);
                        props.setMoves(0);
                        props.createComputerMode(event);
                        }}>Autoplay
                    </button>
                </div>
            </div>
        </main>
    );
}

export default Home;