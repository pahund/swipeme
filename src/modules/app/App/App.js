import React, { Component } from 'react';
import logo from './logo.svg';
import styles from './app.css';
import { LargePic } from '../../large-pic';

export default class App extends Component {
    constructor() {
        super();
        this.state = {
            isOpen: false
        };
        this.open = this.open.bind(this);
    }

    open() {
        this.setState({
            isOpen: true
        });
    }

    render() {
        const { isOpen } = this.state;
        return (
            <div className={styles.app}>
                <header className={styles.header}>
                    <img src={logo} className={styles.logo} alt="logo" />
                    <h1 className={styles.title}>Welcome to React</h1>
                </header>
                <p className={styles.intro}>
                    This is a demo for using <a href="https://github.com/minhtranite/react-photoswipe">react-photoswipe</a>
                </p>
                <p>
                    <button className={styles.openButton} onClick={this.open}>Open up!</button>
                </p>
                <LargePic isOpen={isOpen} />
            </div>
        );
    }
}

