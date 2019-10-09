import * as React from 'react';

import BoardHeader from './components/BoardHeader/BoardHeader';
import MessageBoard from './components/MessageBoard/MessageBoard';
import RoomList from './components/RoomList/RoomList';
import SearchBox from './components/SearchBox/SearchBox';
import MessageInput from './components/MessageInput/MessageInput';
// import RoomBottomAction from './components/RoomBottomAction/RoomBottomAction';

import * as style from './style.css';
import { generateRoom, generateUser } from './shared';

interface IState {
    rooms: Array<any>,
    selectedRoom: any;
    currentUser: any;
    screenWidth: number;
}
const MINIMUM_WIDTH = 768;

export class MessagesApp extends React.PureComponent<any, IState> {
    constructor(props) {
        super(props);
        const currentUser = generateUser();
        const rooms = generateRoom(currentUser);
        this.state = {
            currentUser,
            rooms,
            selectedRoom: rooms[0],
            screenWidth: window.innerWidth,
        };
    }
    componentDidMount() {
        window.addEventListener("resize", this.updateWindowDimensions.bind(this));
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updateWindowDimensions.bind(this));
    }

    updateWindowDimensions() {
        this.setState({ screenWidth: window.innerWidth });
     }

    handleRoomChange(room) {
        this.setState({
            selectedRoom: room,
        });
    }

    handleSendMessage(message) {
        const messages = [...this.state.selectedRoom.messages];
        const createdAt = (new Date()).getTime();
        messages.push({
            sender: this.state.currentUser,
            message,
            createdAt,
        });
        const updateSelectedRoom = {
            ...this.state.selectedRoom,
            lastMessage: message,
            createdAt,
            messages,
        };
        this.setState({
            selectedRoom:updateSelectedRoom,
        });

        const rooms = [...this.state.rooms].filter(room => room.id !== this.state.selectedRoom.id);

        this.setState({
            rooms: [updateSelectedRoom, ...rooms],
        })
    }

    getSmallScreenClass(classCSS) {
        return this.state.screenWidth < MINIMUM_WIDTH ? classCSS : '';
    }

    getSmallLeftSectionShow(classCSS) {
        return (!Boolean(this.state.selectedRoom) && this.state.screenWidth < MINIMUM_WIDTH) ? classCSS : '';
    }

    getSmallRightSectionShow(classCSS) {
        return (Boolean(this.state.selectedRoom) && this.state.screenWidth < MINIMUM_WIDTH) ? classCSS : '';
    }

    handleGoBack() {
        this.setState({ selectedRoom: null });
    }
    render() {
        return (
            <div
                className={`${style.messageapp} ${this.getSmallScreenClass(style.smallwindow)}`}
            >
                <div className={`${style.messageapp__leftside} ${this.getSmallLeftSectionShow(style.isShow)}`}>
                    <SearchBox />
                    <RoomList
                        rooms={this.state.rooms}
                        selectedRoom={this.state.selectedRoom}
                        handleRoomChange={this.handleRoomChange.bind(this)}
                    />
                    {/* <RoomBottomAction /> */}
                </div>
                <div className={`${style.messageapp__rightcontent} ${this.getSmallRightSectionShow(style.isShow)}`}>
                    <BoardHeader
                        room={this.state.selectedRoom}
                        handleGoBack={this.handleGoBack.bind(this)}
                    />
                    <MessageBoard
                        room={this.state.selectedRoom}
                        currentUser={this.state.currentUser}
                    />
                    <MessageInput
                        handleSendMessage={this.handleSendMessage.bind(this)}
                    />
                </div>
            </div>
        );
    }
}