import React from 'react';
import './ScoreBord.css';

interface ScoreBordProps {
  xScore: number;
  oScore: number;
  xPlaying: boolean;
}

const Scoreboard: React.FC<ScoreBordProps> = ({ xScore, oScore, xPlaying }) => (
  <div className="Scoreboard">
    <span className={`score xScore ${!xPlaying ? "inactive" : ""}`}>X - {xScore}</span>
    <span className={`score oScore ${xPlaying ? "inactive" : ""}`}>O - {oScore}</span>
  </div>
);

export default Scoreboard;

