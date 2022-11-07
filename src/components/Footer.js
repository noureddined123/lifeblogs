import React from 'react'
import { Link } from 'gatsby'
import facebook from '../img/social/facebook.svg'
import instagram from '../img/social/instagram.svg'
import twitter from '../img/social/twitter.svg'
import vimeo from '../img/social/vimeo.svg'

const currentYear = new Date().getFullYear();

const Footer = class extends React.Component {
  

  render() {
    return (
      <footer className="footer has-background-black has-text-white-ter">
        {/* <div className="content has-text-centered">
          <img
            src={logo}
            alt="Kaldi"
            style={{ width: '14em', height: '10em' }}
          />
        </div> */}
        <div className="content has-text-centered has-background-black has-text-white-ter">
        
          <p style={{paddingBottom:'1em', color:'#7c7c7c'}}>Copyright © lifeblogs.nl | {currentYear} </p>
        </div>
      </footer>
    )
  }
}

export default Footer
