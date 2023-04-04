import { Link } from 'react-router-dom'
import { FaFacebook ,FaTwitter} from 'react-icons/fa'


const Footer = () => {
  return (
    <footer>
      <p>By Ranjan &copy; 2023</p>
      <Link to='/about'>About</Link>
      <br />
        <span>
          <FaFacebook style={{ color:'blue', cursor: 'pointer'}} />
        </span>
        <span>
        <FaTwitter style={{ color:'skyblue', cursor: 'pointer'}} />
        </span>
    </footer>
  )
}

export default Footer