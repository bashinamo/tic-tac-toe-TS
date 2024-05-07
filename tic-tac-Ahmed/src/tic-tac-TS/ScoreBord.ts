import React from 'react';
import './ScoreBord.css';

interface ScoreBordProps {
  xScore: number;
  oScore: number;
  xPlaying: boolean;
}

const Scoreboard: React.FC<ScoreBordProps> = ({  }) => (
  <div className="Scoreboard">
    <span className={`score xScore ${!onplaying ? "inactive" : ""}`}>X - {xScore}</span>
    <span className={`score oScore ${xPlaying ? "inactive" : ""}`}>O - {oScore}</span>
  </div>
);

export default ScoreBord;

