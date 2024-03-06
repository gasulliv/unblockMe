import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Public from './components/Public';
import Login from './features/auth/Login';
import Dashboard from './features/auth/Dashboard';
import RequireAuth from './features/auth/RequireAuth';


function App() {
  return (
    <Routes>
      <Route path="/" element={ <Layout/> }></Route>
        { /*public routes*/ }
        <Route index element = { <Public/> }></Route>
        <Route path="login" element = { <Login/> }></Route>

        { /*private routes */ }
        <Route element = { <RequireAuth/> }>
            <Route path="dashboard" element={ <Dashboard/> } />
        </Route>
    </Routes>
  );
}

export default App;
