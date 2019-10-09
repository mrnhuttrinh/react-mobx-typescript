import * as React from 'react';

import BoardHeader from './components/BoardHeader/BoardHeader';
import MessageBoard from './components/MessageBoard/MessageBoard';
import RoomList from './components/RoomList/RoomList';
import SearchBox from './components/SearchBox/SearchBox';
import MessageInput from './components/MessageInput/MessageInput';
import RoomBottomAction from './components/RoomBottomAction/RoomBottomAction';

import * as style from './style.css';
import { generateRoom, generateUser } from './shared';

interface IState {
    rooms: Array<any>,
    selectedRoom: any;
    currentUser: any;
}

export class MessagesApp extends React.PureComponent<any, IState> {
    constructor(props) {
        super(props);
        const currentUser = generateUser();
        const rooms = generateRoom(currentUser);
        this.state = {
            currentUser,
            rooms,
            selectedRoom: rooms[0],
        };
    }
    handleRoomChange(room) {
        this.setState({
            selectedRoom: room,
        });
    }
    render() {
        return (
            <div className={style.messageapp}>
                <div className={style.messageapp__leftside}>
                    <SearchBox />
                    <RoomList
                        rooms={this.state.rooms}
                        selectedRoom={this.state.selectedRoom}
                        handleRoomChange={this.handleRoomChange.bind(this)}
                    />
                    <RoomBottomAction />
                </div>
                <div className={style.messageapp__rightcontent}>
                    <BoardHeader room={this.state.selectedRoom} />
                    <MessageBoard
                        room={this.state.selectedRoom}
                        currentUser={this.state.currentUser}
                    />
                    <MessageInput />
                </div>
            </div>
        );
    }
}