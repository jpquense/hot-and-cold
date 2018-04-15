import React from 'react';
import './game.css'

export default function Game() {
    return (
        <form className="form">
            <fieldset>
                <legend>Make your Guess</legend>
                <input type="text" placeholder="Enter your Guess" required></input>
                <button type="submit">Guess</button>
                <p>Guess #{0}!</p>
            </fieldset>
        </form>
    );
};