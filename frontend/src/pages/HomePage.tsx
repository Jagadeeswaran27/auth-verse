import { Link } from 'react-router-dom';
import { ROUTES } from '../config/routes';

const HomePage = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to={ROUTES.serverSession}>Go to Server Session</Link>
        </li>
        <li>
          <Link to={ROUTES.jwtAuth}>Go to JWT Auth</Link>
        </li>
      </ul>
    </div>
  );
};

export default HomePage;
