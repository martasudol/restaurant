import React from 'react';
import Person1 from '../../assets/person1.jpg';
import Person2 from '../../assets/person2.jpg';
import Person3 from '../../assets/person3.jpg';
import Person4 from '../../assets/person4.jpg';
import Person5 from '../../assets/person5.jpg';
import Person6 from '../../assets/person6.jpg';
import Person7 from '../../assets/person7.jpg';
import Person8 from '../../assets/person8.jpg';
import Person9 from '../../assets/person9.jpg';
import Person10 from '../../assets/person10.jpg';
import './abous_us.css';

export default class AboutUs extends React.Component {
    render() {
        return (
            <div>
                <div className='container'>
                    <div className='row stuff'>
                        <img src={Person1} alt='stuff' />
                        <img src={Person2} alt='stuff' />
                        <img src={Person3} alt='stuff' />
                        <img src={Person4} alt='stuff' />
                        <img src={Person5} alt='stuff' />
                        <img src={Person6} alt='stuff' />
                        <img src={Person7} alt='stuff' />
                        <img src={Person8} alt='stuff' />
                        <img src={Person9} alt='stuff' />
                        <img src={Person10} alt='stuff' />
                    </div>
                </div>
            </div>
        );
    }
}