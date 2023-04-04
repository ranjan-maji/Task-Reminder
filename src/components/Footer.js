import { Link } from 'react-router-dom'
import { FaFacebook ,FaTwitter} from 'react-icons/fa'


const Footer = () => {
  return (
    <footer>
      <p>By Ranjan &copy; 2023</p>
      <Link to='/about'>About</Link>
      <br />
        <span>
          <FaFacebook />
        </span>
        <span>
        <FaTwitter />
        </span>
    </footer>
  )
}

export default Footer