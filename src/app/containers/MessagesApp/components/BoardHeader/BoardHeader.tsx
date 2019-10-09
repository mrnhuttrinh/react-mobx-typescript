import * as React from 'react';

import * as styles from './BoardHeader.css';

interface IProps {
    room: any;
}

export default class BoardHeader extends React.PureComponent<IProps> {
    render() {
        const { room } = this.props;
        return (
            <div className={styles.messageapp__boardheader}>
                <div className={styles.messageapp__boardheader__username}>{room.receivers[0].username}</div>
            </div>
        );
    }
}