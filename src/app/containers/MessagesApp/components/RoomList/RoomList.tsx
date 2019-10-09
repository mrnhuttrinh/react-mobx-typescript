import * as React from 'react';

import * as styles from './RoomList.css';
import RoomItem from '../RoomItem/RoomItem';

interface IProps {
    rooms: Array<any>,
    selectedRoom: any;
    handleRoomChange(room: any): void;
}

export default class RoomList extends React.PureComponent<IProps> {
    render() {
        return (
            <div className={styles.messageapp__roomlist}>
                {this.props.rooms.map(room => (
                    <RoomItem {...room}
                        key={room.id}
                        handleRoomChange={() => this.props.handleRoomChange(room)}
                        receivers={room.receivers}
                        username={room.username}
                        lastMessage={room.lastMessage}
                        createdAt={room.createdAt}
                        isActive={this.props.selectedRoom.id === room.id}
                    />
                ))}
            </div>
        );
    }
}