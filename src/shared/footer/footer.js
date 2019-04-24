import React from 'react';
import { ModalFooter } from 'reactstrap';
import './footer.css';

export default class Footer extends React.Component {
    render() {
        return (
          <ModalFooter>
              <div className='footer-content'>
                  <div className='restaurant-name'>Restauracja TuSeZjesz</div>
                  <div>Poziomkowa 43</div>
                  <div>99-123 Uszemki</div>
                  <div className='social-icons'>
                      <a href='/' className='social-icon'><i className="fab fa-facebook-square fa-2x"></i></a>
                      <a href='/' className='social-icon'><i className="fab fa-instagram fa-2x"></i></a>
                      <a href='/' className='social-icon'><i className="fab fa-pinterest fa-2x"></i></a>
                  </div>
              </div>
          </ModalFooter>
        );
    }
}