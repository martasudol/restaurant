import React from 'react';
import Watch from '../../shared/watch/watch';

export default class HomePage extends React.Component {
    render() {
        return (
            <div>
                <p className='title'>TuSeZjesz</p>
                <p className='opening-time'>
                    Do zamknięcia
                    <Watch />
                </p>
            </div>
        );
    }
}