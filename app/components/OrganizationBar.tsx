import React from 'react';

const OrganizationBar = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement your form submission logic here
  };

  return (
    <section className="row">
      <div className="container d-flex flex-row justify-content-between">
        <div className="top-nav-org-dd mb-3 w-25">
          <form className="org-switcher-form" id="org-switcher-form" method="post" action="/dashboard/switch-org?r=/admin" onSubmit={handleSubmit}>
            <input className="org-switcher form-control" id="org-switcher-input" name="orgname" defaultValue="" type="text" autoComplete="off" placeholder="Switch organization" tabIndex={1}/>
          </form>
        </div>
        <nav className="navbar navbar-expand-lg navbar-primary bg-white top-nav-right mb-3 p-0 d-block text-right ml-auto">
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSubnav" aria-controls="navbarSubnav" aria-expanded="false" aria-label="Toggle Navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSubnav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="/review/list?fHasBody=true&amp;fMaturity=FRESH&amp;fMaturity=STALE&amp;fProType=PUB&amp;fProType=PRV">Reviews</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/manage-profile/list">Profiles</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/group/list">Groups</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </section>
  );
};

export default OrganizationBar;
