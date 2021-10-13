import React from "react";
import { useState, useEffect } from "react";
import TinderCard from "react-tinder-card";
import "./tindercard.css";
import database from "./Firebase";
export default function TinderCards() {
  const [people, setpeople] = useState([]);
  useEffect(() => {
    database
      .collection("people")
      .onSnapshot((snapshot) =>
        setpeople(snapshot.docs.map((doc) => doc.data()))
      );
  }, [people]);
  return (
    <div>
      <div className="container">
        {people.map((person) => (
          <TinderCard
            className="swipe"
            key={person.name}
            preventSwipe={["up", "down"]}
          >
            <div
              style={{ backgroundImage: `url(${person.url}) ` }}
              className="card"
            >
              <h3>{person.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
}
