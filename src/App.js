import React, { useState } from 'react';
import MatchResult from './components/MatchResult'
import About from './components/About'
import Welcome from './components/Welcome';

const players = ['X', 'O'];

const initialBoard = {
    0: '', 1: '', 2: '',
    3: '', 4: '', 5: '',
    6: '', 7: '', 8: ''
};

const initialScoreboard = {
    'X': 0, 
    'O': 0
};

const winComb = ([
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
]);


const App = () => {
    const [isWelcomeOpen, setIsWelcomeOpen] = useState(sessionStorage.getItem('isWelcomeOpen') === null ? true : false)

    const [isMatchResultOpen, setIsMatchResultOpen] = useState(false)
    const [matchResult, setMatchResult] = useState('')

    const [isAboutOpen, setIsAboutOpen] = useState(false)

    const [currPlayer, setCurrPlayer] = useState(players[0])
    const [board, setBoard] = useState(initialBoard)
    const [scoreboard, setScoreboard] = useState(initialScoreboard)
    
    const [isAiOn, setIsAiOn] = useState(true)

    const [isDarkTheme, setIsDarkTheme] = useState(false)

    // this function is triggered when the player selects O on the first start and is responsible for the AI move
    const firstAiMove = () => {
        let n = Math.floor(Math.random() * (8 + 1))
        setBoard(prevBoard => {
            return { ...prevBoard, [n]: currPlayer }
        });

        setCurrPlayer(players[1])
    };

    // this function is triggered by the user's every move
    const handleMove = n => {
        if (board[n] === '') {
            setBoard(prevBoard => {
                return { ...prevBoard, [n]: currPlayer }
            });

            if (isAiOn) {
                let aiPlayer = currPlayer === players[0] ? players[1] : players[0]
                let aiPossi = [];
                Object.keys(board).forEach(key => {
                    if (board[key] === '' && parseInt(key, 10) !== n) {aiPossi.push(key)};
                });

                let aiMove = Math.floor(Math.random() * (aiPossi.length - 0) + 0);
                
                setBoard(prevBoard => {
                    return { ...prevBoard, [aiPossi[aiMove]]: aiPlayer }
                });
            } else {
                
                let newPlayer = currPlayer === players[0] ? players[1] : players[0]
                setCurrPlayer(newPlayer)
            };
        }
    };

    // this function checks if someone has won
    const winnerChecker = () => {
        let winner = null
        const emptyPlaces = Object.values(board).filter(value => value === '').length

        const equals = (a,b,c) => {
            return (a===b && a===c && b===c && a !== '' && b !== '' && c !== '')
        };

        for (let i = 0; i < winComb.length; i++) {
            if (equals(board[winComb[i][0]],board[winComb[i][1]],board[winComb[i][2]])) {
                winner = board[winComb[i][0]]
            };
        };
        
        if (winner !== null) {
            setIsMatchResultOpen(true);
            setMatchResult(winner + ' Won!');
            setBoard(initialBoard);
            setCurrPlayer(players[0]);
            setScoreboard(prevBoard => {
                return { ...prevBoard, [winner]: prevBoard[winner] + 1}
            });
        } else if (winner === null && emptyPlaces === 0) {
            setIsMatchResultOpen(true);
            setMatchResult('Draw!')
            setBoard(initialBoard);
            setCurrPlayer(players[0]);
        };
    };
    
    winnerChecker()

    return (
        <>
            <div className={`app${isDarkTheme ? ' dark' : ''}`}>
                <div className='board'>
                    <div className='board-field' onClick={() => handleMove(0)}>{board[0]}</div>
                    <div className='board-field' onClick={() => handleMove(1)}>{board[1]}</div>
                    <div className='board-field' onClick={() => handleMove(2)}>{board[2]}</div>

                    <div className='board-field' onClick={() => handleMove(3)}>{board[3]}</div>
                    <div className='board-field' onClick={() => handleMove(4)}>{board[4]}</div>
                    <div className='board-field' onClick={() => handleMove(5)}>{board[5]}</div>

                    <div className='board-field' onClick={() => handleMove(6)}>{board[6]}</div>
                    <div className='board-field' onClick={() => handleMove(7)}>{board[7]}</div>
                    <div className='board-field' onClick={() => handleMove(8)}>{board[8]}</div>
                </div>
                <div className='panel'>
                    <div className='scoreboard'>
                        <p className='score'>Player X: {scoreboard.X}</p>
                        <p className='score'>Player O: {scoreboard.O}</p>
                    </div>
                    <div className='controls'>
                        <button className='control-button' onClick={() => setScoreboard(initialScoreboard)}>Reset Scoreboard</button>
                        <button className='control-button' onClick={() => setIsAiOn(!isAiOn)}>Turn {isAiOn ? 'Off' : 'On'} AI</button>
                        <button className='control-button' onClick={() => setIsAboutOpen(true)}>About</button>
                        <button className='control-button' onClick={() => setIsDarkTheme(!isDarkTheme)}>Change Theme</button>
                    </div>
                </div>
                
                <Welcome open={isWelcomeOpen} onClose={() => setIsWelcomeOpen(sessionStorage.setItem('isWelcomeOpen', 'false'))} firstAiMove={() => firstAiMove()}/>

                <About open={isAboutOpen} onClose={() => setIsAboutOpen(false)} isDark={isDarkTheme}/>

                <MatchResult open={isMatchResultOpen} onClose={() => setIsMatchResultOpen(false)} matchResult={matchResult} isDark={isDarkTheme}/>
            </div>
        </>
    )
};

export default App;