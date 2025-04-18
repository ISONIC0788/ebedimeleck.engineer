import React from "react";
import { Card } from "react-bootstrap";
import '../styles/navbar.css'

const ArticleCard = ({ title, date, excerpt, link }) => {
  return (
    <Card className="mb-3 shadow-sm article-card bg-light text-dark dark-mode-card">
      <Card.Body>
        <small className="text-muted">{date}</small>
        <Card.Title className="mt-2">{title}</Card.Title>
        <Card.Text className="text-muted">{excerpt}</Card.Text>
        <a href={link} className="text-success fw-medium">Read article →</a>
      </Card.Body>
    </Card>
  );
};

export default ArticleCard;