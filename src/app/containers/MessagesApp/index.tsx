import * as React from 'react';

import BoardHeader from './components/BoardHeader/BoardHeader';
import MessageBoard from './components/MessageBoard/MessageBoard';
import RoomList from './components/RoomList/RoomList';
import SearchBox from './components/SearchBox/SearchBox';
import MessageInput from './components/MessageInput/MessageInput';
import RoomBottomAction from './components/RoomBottomAction/RoomBottomAction';

import * as style from './style.css';

export class MessagesApp extends React.PureComponent {
    render() {
        return (
            <div className={style.messageapp}>
                <div className={style.messageapp__leftside}>
                    <SearchBox />
                    <RoomList />
                    <RoomBottomAction />
                </div>
                <div className={style.messageapp__rightcontent}>
                    <BoardHeader />
                    <MessageBoard />
                    <MessageInput />
                </div>
            </div>
        );
    }
}