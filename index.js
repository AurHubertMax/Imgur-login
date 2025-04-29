import React, { Component } from 'react';

import { openWindow, observeWindow } from './utils/window.ts';

class ImgurLogin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isCompleted: false
        };
    }

    buildCodeRequestURL = () => {
        const { clientId } = this.props;
        const url = `https://api.imgur.com/oauth2/authorize?client_id=${clientId}&response_type=token`;
        return url;
    }

    handleLoginClick = () => {
        const popup = openWindow({
            url: this.buildCodeRequestURL(),
            title: 'Imgur Login'
        });

        if (popup) {
            observeWindow({ popup, onClose: this.handleClosingPopup});
            this.setState({
                popup
            })
        }
    }

    handleClosingPopup = () => {
        const { authCallback } = this.props;
        const { isCompleted } = this.state;

    }
}

// How do I make this component display a button, when on click, a small window to the url appears, then after the user clicks allow, reads the code