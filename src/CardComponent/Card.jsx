import React from "react";

function Card({ data }) {
  const repoType = data.private === false ? "Public" : "Private";
  return (
    
      <div className="card">
        <section className="card-section-name">
          <span className="repo-name">{data.name}</span>
          <span className="repo-type">{repoType}</span>
        </section>
        <section className="repo-desc">{data.description}</section>
        <section className="card-section-language">{data.language}</section>
      </div>
  );
}

export default Card;
