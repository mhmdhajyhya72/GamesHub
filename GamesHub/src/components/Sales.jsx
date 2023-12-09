import React from "react";
import { GAMES } from "../../sales";
import { Sales } from "./Sales";
import "./sales.css";

export const Sales = () => {
  return (
    <div className="sale">
      <div className="shopTitle">
        <h1>GameHub</h1>
      </div>

      <div className="sales">
        {GAMES.map((games) => (
          <Sales data={games} />
        ))}
      </div>
    </div>
  );
};
