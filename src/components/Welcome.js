import React from 'react';
import ReactDOM from 'react-dom';

const Welcome = ({ open, onClose, firstAiMove }) => {
    if (!open) return null

    return (
        ReactDOM.createPortal(
        <div className='OFFSET'>
            <div className='welcome'>
                <h3 className='welcome-h'>Welcome to TicTacToe Game</h3>
                <p className='welcome-title'>Choose team:</p>
                <div className='welcome-buttons'>
                        <button className='welcome-button' onClick={onClose}>X</button>
                        <button className='welcome-button' onClick={() => {
                            firstAiMove();
                            onClose();
                        }}>O</button>
                </div>
            </div>
        </div>,
        document.getElementById('portal')
        )
    )
}

export default Welcome