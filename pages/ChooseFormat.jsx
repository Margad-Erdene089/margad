import React from "react";

// Sample data
const tournaments = [
  {
    id: 1,
    name: "Tournament 1",
    matches: [
      { id: 1, team1: "Team A", team2: "Team B", score1: 2, score2: 1 },
      { id: 2, team1: "Team C", team2: "Team D", score1: 3, score2: 0 },
    ],
  },
  {
    id: 2,
    name: "Tournament 2",
    matches: [
      { id: 3, team1: "Team X", team2: "Team Y", score1: 1, score2: 1 },
      { id: 4, team1: "Team Z", team2: "Team W", score1: 0, score2: 2 },
    ],
  },
];

const Tournaments = () => {
  return (
    <div>
      <h1>Tournaments</h1>
      {tournaments.map((tournament) => (
        <div key={tournament.id}>
          <h2>{tournament.name}</h2>
          <ul>
            {tournament.matches.map((match) => (
              <li key={match.id}>
                {match.team1} {match.score1} - {match.score2} {match.team2}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Tournaments;
