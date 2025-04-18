

import React from 'react'
import "../styles/navbar.css"
function Footer() {
  const FooteLink = [
    {name:"About",href:"#about"},
    {name:"Articles", href:"#Articles"},
    {name:"Projects", href:"#Projects"}
  ];

  const currentYear = new Date().getFullYear();
  const developerName = "ITUZE AGACYO Ebed Meleck";
  return (
    <div>
      <footer className='footer border-top'>
        <div className='container d-flex justify-content-between align-item-center flex-wrap py-3'>

          {/* left links */}
            <div>
              {
                FooteLink.map((link)=>(
                  <a key={link.name} href={link.href}>
                  {link.name}
                   </a>
                ))
              }
            </div>
            {/* right */}
            <div  className=' text-end  mt-2 mt-md-0 text-muted '>

              {/* text-muted */}
              &copy; {currentYear} {developerName} All rights reserved
            </div>
        </div>

      </footer>
     
    </div>
  )
}

export default Footer
