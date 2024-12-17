
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Importing components
import Landing from './components/Landing';
import Login from './components/Login';
import CreateAccount from './components/CreateAccount';
import Landing2 from './components/Landing2';
import Landing3 from './components/Landing3';

const App = () => {
  return (
    <Router>
        <div className='bg-lightStroke m-auto'>
      <Routes>
        {/* Define the routes for each component */}

        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/create-account" element={<CreateAccount />} />
        <Route path="/landing2" element={<Landing2 />} />
        <Route path="/landing3" element={<Landing3 />} />

      </Routes>
        </div>
    </Router>
  );
};

export default App;

