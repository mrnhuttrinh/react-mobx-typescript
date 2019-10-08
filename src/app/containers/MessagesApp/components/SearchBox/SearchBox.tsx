import * as React from 'react';

import * as styles from './SearchBox.css';

export default class SearchBox extends React.PureComponent {
    render() {
        return (
            <div className={styles.messageapp__searchbox}>
                <input placeholder="Search" />
            </div>
        );
    }
}