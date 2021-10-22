import React from 'react';
import ReactDOM from 'react-dom';

const MatchResult = ({ open, onClose, matchResult, isDark }) => {
    if (!open) return null

    return (
        ReactDOM.createPortal(
        <div className={`OFFSET${isDark ? ' dark' : ''}`} onClick={onClose}>
            <div className='matchResult'>
                <h3 className='matchResult-h'>{matchResult}</h3>
            </div>
        </div>,
        document.getElementById('portal')
        )
    )
}

export default MatchResult