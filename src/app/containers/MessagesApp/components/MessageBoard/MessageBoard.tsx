import * as React from 'react';

import * as styles from './MessageBoard.css';

interface IProps {
    room: any;
    currentUser: any;
}

export default class MessageBoard extends React.PureComponent<IProps> {
    refEl = null;
    componentDidMount() {
        this.scrollToBottom();
    }
    componentDidUpdate() {
        this.scrollToBottom();
    }
    scrollToBottom() {
        if (this.refEl) {
            setTimeout(() => {
                this.refEl.scrollTo(0, this.refEl.scrollHeight);
            }, 50);
        }
    }
    render() {
        const { room, currentUser } = this.props;
        if (room) {
            const { messages } = room;
            return (
                <div
                    className={styles.messageapp__messageboard}
                >
                    <div ref={el => this.refEl = el}>
                    {
                        messages.map((message, index) => {
                            return (
                                <div
                                    key={index}
                                    className={`${styles.messageapp__messageboard__message} ${currentUser.username === message.sender.username ? styles.messageapp__messageboard__sender : styles.messageapp__messageboard__receiver}`}
                                >
                                    <div className={styles.avatar}>
                                        <img src={message.sender.avatar} />
                                    </div>
                                    <div className={styles.message}>
                                        {message.message}
                                    </div>
                                </div>
                            )
                        })
                    }
                    </div>
                </div>
            );
        }
        return (
            <div
                className={styles.messageapp__messageboard}
            >
                <div ref={el => this.refEl = el} />
            </div>
        );
    }
}