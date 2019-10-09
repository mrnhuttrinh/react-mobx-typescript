import * as React from 'react';

import * as styles from './BoardHeader.css';

interface IProps {
    room: any;
    handleGoBack(): void;
}

export default class BoardHeader extends React.PureComponent<IProps> {
    render() {
        const { room } = this.props;
        return (
            <div className={styles.messageapp__boardheader}>
                <div className={styles.goback} onClick={this.props.handleGoBack}>←</div>
                <div className={styles.messageapp__boardheader__username}>{room && room.receivers[0].username}</div>
            </div>
        );
    }
}