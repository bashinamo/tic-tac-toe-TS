import React from 'react';
import './Scoreboard.css';

interface ScoreboardProps {
  xScore: number;
  oScore: number;
  xPlaying: boolean;
}

const Scoreboard: React.FC<ScoreboardProps> = ({ xScore, oScore, xPlaying }) => (
  <div className="Scoreboard">
    <span className={`score xScore ${!xPlaying ? "inactive" : ""}`}>X - {xScore}</span>
    <span className={`score oScore ${xPlaying ? "inactive" : ""}`}>O - {oScore}</span>
  </div>
);

export default Scoreboard;

