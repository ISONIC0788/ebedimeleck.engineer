import '../styles/navbar.css'
import React from 'react'
import { FiLink } from 'react-icons/fi';
import { Container, Row, Col, Card, Badge } from 'react-bootstrap';
import LoadingDots from './LoadingDots';

const projects = [
  {
    title: 'Driver Trip Log',
    description: ' the purpose of this project is  that will be used to manage and organize the records of the driver trip information. ',
    tags: ['Web App', 'Author','core Team'],
    link: 'https://github.com/ISONIC0788/DRIVER_TRIP_LOG_V2.git',
    icon: '🧠',
    linkName:'Driver Trip Log',
  },
  {
    title: 'Net_Tracker',
    description: " command-line tool written in C that allows users to track network ports on their PC.",
    tags: ['CLI', 'Author'],
    link: 'https://github.com/ISONIC0788/Net_Tracker.git',
    icon: '💻',
    linkName:'NetTracker',
  },
  {
    title: 'Car Washiing MS',
    description: 'The system will allow customers to book services online, track service status, and enable admins to manage staff and bookings dashbord',
    tags: [ 'Web App','Author'],
    link: 'https://github.com/ISONIC0788/CAR_WASHING_M_S',
    icon: '🚍',
    linkName:'Car Washing M S ',
  },
//   {
//     title:'',
//     description: '',
//     tags: [],
//     link: '',
//     icon:'',
//     linkName:'Driver Trip Log',
//   },
];


function ProjectsSection() {
  return (
    <section className="projects-section py-5">
      <Container>
      <div className="text-center mb-5">
           <h2 className="fw-bold display-5">
        Crafting Code, Sparking Change: <br />
        
           </h2>
           <h2 className='fw-bold display-8'>
           My mission is to leave the world better than I found it
           </h2>
      <p className="lead  mx-auto" style={{ maxWidth: '720px' }}>
         I'm building many  projects  every days , but these are the ones I’m most proud of.
         I’m not just coding for fun or money — I want my work to matter.
         Someday, I hope to add something big to this list (like Linus Torvalds' Linux! 👀) 
       </p>
     </div>

        <Row className="g-4 justify-content-center">
          {projects.map((project, idx) => (
            <Col md={6} lg={4} key={idx}>
              <Card className="sidebar-card h-100 shadow-sm p-3 border-0.5">
                <div className="mb-3 fs-3">{project.icon}</div>
                <Card.Title>{project.title}</Card.Title>
                <Card.Text className="text-muted small">{project.description}</Card.Text>
                <div className="mb-2">
                  {project.tags.map((tag, i) => (
                    <Badge key={i} bg="dark" className="me-1">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-decoration-none">
                  {/* {project.link.replace('https://', '')} */}
                  <FiLink style={{ marginLeft: '5px' }} /> {project.linkName}
                </a>
              </Card>
            </Col>
          ))}
        </Row>
       <LoadingDots/>
      </Container>
    </section>
  )
}

export default ProjectsSection
