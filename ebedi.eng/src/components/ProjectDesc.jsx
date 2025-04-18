

import React from 'react'

import '../styles/navbar.css'
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FaCode, FaLightbulb, FaHeart } from "react-icons/fa";

function ProjectDesc() {
  return (
    <section className="hello-section container py-5 text-center">
     <h1 className="display-7 fw-bold mb-3">
        Crafting Code, Sparking Change: <br className="d-none d-md-block" />
        My Mission to Leave a Mark on the World
      </h1>

      <p className="container fs-7 mb-4">
        I’ve built many small projects over the years, but these are the ones I’m most proud of.
        Most are <strong>open-source</strong>—feel free to dive in and contribute.
        <br />
        I’m not just coding for fun or money — I want my work to matter.
        Someday, I hope to add something big to this list (like Linus Torvalds' Linux! 👀).
      </p>

      <div className="d-flex justify-content-center gap-3">
        <button className="btn btn-outline-success px-4 py-2">
          <FaLightbulb className="me-2" />
          Explore My Projects
        </button>
        <button className="btn btn-success px-4 py-2">
          <FaHeart className="me-2" />
          Support the Mission
        </button>
      </div>
    </section>
  )
}

export default ProjectDesc
