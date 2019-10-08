import * as React from 'react';

import * as styles from './RoomBottomAction.css';

export default class RoomBottomAction extends React.PureComponent {
    render() {
        return (
            <div className={styles.messageapp__roombottomaction}>
                <div className={styles.messagapp__roombottomaction__item}>♠</div>
                <div className={styles.messagapp__roombottomaction__item}>♣</div>
                <div className={styles.messagapp__roombottomaction__item}>♥</div>
                <div className={styles.messagapp__roombottomaction__item}>♦</div>
            </div>
        );
    }
}