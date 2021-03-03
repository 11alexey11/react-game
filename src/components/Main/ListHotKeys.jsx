import React from 'react';
import styles from './ListHotKeys.module.css';

const ListHotKeys = () => {
    return (
        <div className={styles.hotKeysContainer}>
            <h4>List of Hot Keys</h4>
            <div className={styles.content}>
                <div className={styles.item}>
                    <div className='material-icons'>
                        keyboard_arrow_up
                    </div>
                    <div>
                        up button
                    </div>
                </div>
                <div className={styles.item}>
                    <div className='material-icons'>
                        keyboard_arrow_down
                    </div>
                    <div>
                        down button
                    </div>
                </div>
                <div className={styles.item}>
                    <div className='material-icons'>
                        keyboard_arrow_left
                    </div>
                    <div>
                        left button
                    </div>
                </div>
                <div className={styles.item}>
                    <div className='material-icons'>
                        keyboard_arrow_right
                    </div>
                    <div>
                        right button
                    </div>
                </div>
                <div className={styles.item}>
                    <div className='material-icons'>
                        keyboard_return
                    </div>
                    <div>
                        enter button
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ListHotKeys;