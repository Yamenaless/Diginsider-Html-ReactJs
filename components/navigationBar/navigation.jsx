const Nav = () => {
  return (
    <div className="navbar-logo-left">
      <div
        data-animation="default"
        data-collapse="medium"
        data-duration="400"
        data-easing="ease"
        data-easing2="ease"
        role="banner"
        className="navbar-logo-left-container shadow-three w-nav"
      >
        <div className="insider-nav-container">
          <div className="navbar-wrapper">
            <div className="nav-col">
              <a href="#" className="navbar-brand w-nav-brand">
                <img
                  src="images/icon.svg"
                  loading="lazy"
                  width="50"
                  alt=""
                  className="image"
                />
              </a>
            </div>
            <div className="nav-col links">
              <nav role="navigation" className="nav-menu-wrapper w-nav-menu">
                <ul role="list" className="nav-menu-two w-list-unstyled">
                  <li>
                    <a
                      href="index.html"
                      aria-current="page"
                      className="mobile-navlink w--current"
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="case-studies.html" className="mobile-navlink">
                      Case Studies
                    </a>
                  </li>
                  <li>
                    <a href="#" className="mobile-navlink">
                      Services
                    </a>
                  </li>
                  <li>
                    <a href="#" className="mobile-navlink">
                      Articles
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="nav-col right">
              <a href="#" className="navbar-button w-inline-block">
                <div className="insider-button nav-button">START A PROJECT</div>
              </a>
              <div className="menu-button w-nav-button">
                <div className="icon w-icon-nav-menu"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const domContainer = document.querySelector("#navigation");
const root = ReactDOM.createRoot(domContainer);
root.render(React.createElement(Nav));
