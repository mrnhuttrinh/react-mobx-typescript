import * as React from 'react';
import * as moment from 'moment';

import * as styles from './RoomItem.css';

interface IProps {
    avatar: string;
    username: string;
    lastMessage: string;
    createdAt: number;
}

export default class RoomItem extends React.PureComponent<IProps> {
    render() {
        const { avatar, username, lastMessage, createdAt } = this.props;
        return (
            <div className={styles.roomitem}>
                <div className={styles.roomitem__avatar}>
                    <img src={avatar} />
                </div>
                <div className={styles.roomitem__user}>
                    <div className={styles.roomitem__username}>
                        {username}
                    </div>
                    <div className={styles.roomitem__lastmessage || ''}>
                        {lastMessage}
                    </div>
                </div>
                <div className={styles.roomitem__createdAt}>
                    {moment(createdAt).fromNow(true)}
                </div>
            </div>
        );
    }
}