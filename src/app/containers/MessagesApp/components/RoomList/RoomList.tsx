import * as React from 'react';

import * as styles from './RoomList.css';
import RoomItem from '../RoomItem/RoomItem';
import { generateRoom } from '../../shared';

export default class RoomList extends React.PureComponent {
    render() {
        return (
            <div className={styles.messageapp__roomlist}>
                {generateRoom().map(room => (
                    <RoomItem {...room}
                        avatar={room.avatar}
                        username={room.username}
                        lastMessage={room.lastMessage}
                        createdAt={room.createdAt}
                    />
                ))}
            </div>
        );
    }
}