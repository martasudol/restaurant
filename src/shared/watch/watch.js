import React from 'react';

export default class Watch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentTime: new Date().toLocaleString(),
            closingTime: null
        };
    }

    updateCurrentTime() {
        const closeHour = 23 - Number(new Date().getHours());
        const closeMinute = 60 - Number(new Date().getMinutes());
        const closeSecond = 60 - Number(new Date().getSeconds());
        this.setState(state => ({
            ...state,
            currentTime: new Date().toLocaleString(),
            closingTime: closeHour + ':' + closeMinute + ':' + closeSecond
        }));
        this.timeoutId = setTimeout(this.updateCurrentTime.bind(this), 1000);
    }

    componentWillMount() {
        this.updateCurrentTime();
        document.addEventListener('visibilitychange', () => {
            if(document.hidden) {
                clearTimeout(this.timeoutId);
            } else {
                this.updateCurrentTime();
            }
        }, false);
    }

    componentWillUnmount() {
        clearTimeout(this.timeoutId);
    }


    render() {
        return (
            <p>{this.state.closingTime}</p>
        );
    }
}