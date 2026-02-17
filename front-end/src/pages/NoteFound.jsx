import React from "react";
import { Link } from "react-router-dom";

function NoteFound() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-light-bg dark:bg-dark-bg text-center px-4">
      <h1 className="text-9xl font-bold text-red-500 mb-4">404</h1>
      <p className="text-2xl text-light-muted dark:text-dark-muted mb-8">Oops! The page you’re looking for doesn’t exist.</p>
      <Link to="/" className="px-6 py-3 bg-green-600 text-white rounded-full font-medium hover:bg-green-700 transition-colors shadow-lg">
        Go Back Home
      </Link>
    </div>
  )
}

export default NoteFound;