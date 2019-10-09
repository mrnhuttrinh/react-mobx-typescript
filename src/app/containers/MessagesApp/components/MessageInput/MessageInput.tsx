import * as React from 'react';

import * as styles from './MessageInput.css';

interface IProps {
    handleSendMessage(text: string): void;
}

export default class MessageInput extends React.PureComponent<IProps> {
    render() {
        return (
            <div
                className={styles.messageapp__messageinput}
                contentEditable
                onKeyPress={(e: any) => {
                    if (e.which === 13 || e.key === 'Enter') {
                        if (e.target.innerText.trim() !== '') {
                            this.props.handleSendMessage(e.target.innerText);
                            e.target.innerHTML = '';
                        }
                    }
                }}
            />
        );
    }
}