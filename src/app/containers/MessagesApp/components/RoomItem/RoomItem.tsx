import * as React from 'react';
import * as moment from 'moment';

import * as styles from './RoomItem.css';

interface IProps {
    receivers: Array<{
        username: string,
        avatar: string;
    }>;
    lastMessage: string;
    createdAt: number;
    isActive: boolean;
    handleRoomChange(): void;
}

export default class RoomItem extends React.PureComponent<IProps> {
    render() {
        const { receivers, lastMessage, createdAt, isActive, handleRoomChange } = this.props;
        return (
            <div
                className={`${styles.roomitem} ${isActive ? styles.roomitem__active: ''}`}
                onClick={handleRoomChange}
            >
                <div className={styles.roomitem__avatar}>
                    <img src={receivers[0].avatar} />
                </div>
                <div className={styles.roomitem__user}>
                    <div className={styles.roomitem__username}>
                        {receivers[0].username}
                    </div>
                    <div className={styles.roomitem__lastmessage || ''}>
                        {lastMessage || ''}
                    </div>
                </div>
                <div className={styles.roomitem__createdAt}>
                    {moment(createdAt).fromNow(true)}
                </div>
            </div>
        );
    }
}