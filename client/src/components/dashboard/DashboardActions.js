import React from 'react';
import { Link } from 'react-router-dom';

const DashboardActions = () => {
	return (
	  <div class="dash-buttons">
        <Link to="/edit-profile" class="btn btn-light"
          ><i class="fas fa-user-circle text-primary"></i> &nbsp;Edit Profile
        </Link>
        <Link to="/add-experience" class="btn btn-light"
          ><i class="fab fa-black-tie text-primary"></i> &nbsp;Add Experience
        </Link>
        <Link to="/add-education" class="btn btn-light"
          ><i class="fas fa-graduation-cap text-primary"></i> &nbsp;Add Education
        </Link>
      </div>
	);
}

export default DashboardActions;