import { useSelector } from 'react-redux';
import { selectCurrentToken, selectCurrentUser } from './authSlice';
import { Link } from "react-router-dom";

const Dashboard = () => {
    const token = useSelector(selectCurrentToken)
    const user = useSelector(selectCurrentUser);

    const showWelcome = user ? `Welcome ${user}!` : 'Welcome!'
    //show the first 10 digits of the token
    const tokenAbbr = `${token.slice( 0,9 )}...`

    const dashboardContent = (
    <section id="unblockMe--dashboard">
        <h1>{showWelcome}</h1>
        <p>Token: { tokenAbbr }</p>
        <p><Link to="/users-list">Go to the user list</Link></p>
    </section>
    );

    return dashboardContent
 }

export default Dashboard