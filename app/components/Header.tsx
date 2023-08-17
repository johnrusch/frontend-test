import DropdownButton from "./DropdownButton";

const userOptions = [
  { label: "Settings", url: "/settings", icon: "fa fa-cog"},
  { label: "StarCards", url: "/starcards", icon: "fa fa-envelope-o"},
  { label: "Tags", url: "/tag", icon: "fa fa-tags"},
  { label: "Import", url: "/settings", icon: "fa fa-cog"},
  { label: "Settings", url: "/settings", icon: "fa fa-cog"},
  { label: "Settings", url: "/settings", icon: "fa fa-cog"},

]

function Header(props) {
  const {
    logo,
    imgDir,
    theme,
    user,
    controllerElapsedStr,
    hostname,
    fSearch,
    q,
  } = props;

  const isAuthenticated: Boolean = user;
  const isProfileUser: Boolean = user?.role === "PROFILE_USER" || false;
  const isVpsUser: Boolean = user?.role === "VPS_USER" || false;
  const isSysAdmin: Boolean = user?.role === "SYS_ADMIN" || false;
  const searchAction =
    isAuthenticated && !(isProfileUser || isVpsUser)
      ? "/manage-profile/list"
      : "/search";

  const themeNav = "navbar-dark bg-nrc-orange";
  const themeSearchBtn = "btn-outline-light";
  const themeSearchInput = "form-control-light";
  const themeLogoText = "Transparency";


  return (
    <header>
      <nav
        className={`navbar navbar-expand-md ${themeNav} fixed-top justify-content-between`}
      >
        <a className="navbar-brand py-0" href="/">
          <img className="logo" src="/images/logo/nrc-logo-white.svg" />
          {themeLogoText}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav mr-auto">
            {theme === "docscores" && (!isAuthenticated || isProfileUser) && (
              <li className="nav-item">
                <a className="nav-link" href="/find">
                  Find a Doctor
                </a>
              </li>
            )}
          </ul>
          <ul className="navbar-nav">
            {isAuthenticated && isSysAdmin && (
              <li className="nav-item">
                <span className="navbar-text badge badge-secondary text-white mr-2 mt-2 p-2 admin-topnav-elapsed">
                  {controllerElapsedStr}
                </span>
              </li>
            )}
            {(!isAuthenticated && theme === "docscores") || isAuthenticated ? (
              <li className="nav-item" id="search-button">
                <a className="nav-link" href="#" role="button">
                  <i className="fa fa-search"></i>
                </a>
              </li>
            ) : null}
            <li className="nav-item" style={{ display: "none" }} id="search">
              <div itemScope itemType="http://schema.org/WebSite">
                <meta itemProp="url" content={`https://${hostname}/`} />
                <form
                  itemProp="potentialAction"
                  itemScope
                  itemType="http://schema.org/SearchAction"
                  className="form-inline search collapsed mr-2"
                  method="get"
                  action={searchAction}
                >
                  <meta
                    itemProp="target"
                    content={`https://${hostname}/search?q={q}`}
                  />
                  <div className="input-group">
                    {isAuthenticated && !(isProfileUser || isVpsUser) ? (
                      <>
                        <input
                          className="form-control"
                          type="search"
                          placeholder="Search"
                          aria-label="Search"
                          name="fSearch"
                          value={fSearch}
                          autoComplete="off"
                        />
                        <input type="hidden" name="fDest" value="org" />
                      </>
                    ) : (
                      <input
                        itemProp="query-input"
                        className="form-control"
                        type="search"
                        placeholder="Search"
                        aria-label="Search"
                        name="q"
                        value={q}
                        autoComplete="off"
                      />
                    )}
                    <span className="input-group-btn">
                      <button
                        className={`btn ${themeSearchBtn}`}
                        type="submit"
                        style={{ borderRadius: "2.4px" }}
                      >
                        <i className="fa fa-search"></i>
                      </button>
                    </span>
                  </div>
                </form>
              </div>
            </li>
            <li className="nav-item">
              {isAuthenticated ? (
                <DropdownButton
                  buttonName={user?.name}
                  options={['dog', 'cat', 'meow']}
                />
              ) : (
                <a className="nav-link" href="/sign-in">
                  Sign In
                </a>
              )}
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
