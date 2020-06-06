import React, { useState, useEffect } from "react";

const UserList = () => {
  const [users, setUsers] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://ergonauts.zajdzik.com/ranking");
      const data = await response.json();
      setUsers(data);
    };

    fetchData();
  }, []);

  return (
    <>
      {users && (
        <ul>
          {users.map((user, index) => {
            return (
              <li key={index}>
                <span>{index + 1}.</span>
                <span>{user.playerName}</span>
                <span>{user.score}</span>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};

const Ranking = () => {
  return (
    <div className="ranking">
      <h2>Hall of fame</h2>

      <UserList />
    </div>
  );
};

export default Ranking;
