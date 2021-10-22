import React from 'react';
import ReactDOM from 'react-dom';

const About = ({ open, onClose, isDark }) => {
    if (!open) return null

    return (
        ReactDOM.createPortal(
        <div className={`OFFSET${isDark ? ' dark' : ''}`}>
            <div className='about'>
                <h3 className='about-h'>About</h3>
                <button className='about-button' onClick={onClose}><i className="fas fa-times"></i></button>
                <p className='about-text'>This is just a simple tic-tac-toe game, but if you want to know more about this app or the author, check out these links</p>
                <ul className='about-ul'>
                    <li className='about-li about-i'>
                        <a href='https://github.com/JakubChoszcz/TicTacToe' target='_blank' className='about-link' rel="noreferrer"><i className="fab fa-github about-i"></i></a>
                    </li>
                    <li className='about-li about-i'>
                        <a href='https://www.linkedin.com/in/jakub-choszcz-0b0323213/' target='_blank' className='about-link' rel="noreferrer"><i className="fab fa-linkedin about-i"></i></a>
                    </li>
                    <li className='about-li about-i'>
                        <a href='https://www.facebook.com/kuba.choszcz.5/' target='_blank' className='about-link' rel="noreferrer"><i className="fab fa-facebook about-i"></i></a>
                    </li>
                    <li className='about-li about-i'>
                        <a href='https://www.instagram.com/j_kuboszczyk/' target='_blank' className='about-link' rel="noreferrer"><i className="fab fa-instagram about-i"></i></a>
                    </li>
                </ul>
            </div>
        </div>,
        document.getElementById('portal')
        )
    )
}

export default About