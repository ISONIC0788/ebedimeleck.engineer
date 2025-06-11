import React from "react";
import { Link } from "react-router-dom";

function NoteFound() {
  return (
    <div>
      <div className="not-found container text-center d-flex flex-column justify-content-center align-items-center">
      <h1 className="display-1 text-danger">404</h1>
      <p className="lead mb-4">Oops! The page you’re looking for doesn’t exist.</p>
      <Link to="/" className="btn btn-success">
        Go Back Home
      </Link>
    </div>
    </div>
  )
}

export default NoteFound
