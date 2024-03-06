import { Link } from 'react-router-dom';

function Public() {
    const publicContent = (
        <header>
            <h1>Welcome to UnblockMe!</h1>
            <Link to="/login">Click here to Login!</Link>
        </header>
    )
    return publicContent
  }
  
  export default Public;