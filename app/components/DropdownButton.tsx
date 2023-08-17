import { Form, Link, NavLink } from "@remix-run/react";
import { useState } from "react";

interface Props {
  buttonName: string;
  options: string[];
}

const DropdownButton: React.FC<Props> = ({ buttonName, options }) => {
  const [dropdownVisible, setDropdownVisible] = useState<boolean>(false);

  const handleButtonClick = () => {
    setDropdownVisible(!dropdownVisible);
  };

  return (
    <>
      <button
        className="btn btn-link nav-link dropdown-toggle"
        id="userDropdown"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
        onClick={handleButtonClick}
      >
        {buttonName}
      </button>

      {dropdownVisible && (
        <div className="dropdown-menu dropdown-menu-right show">
          <a className="dropdown-item" href="/settings">
            <i className="fa fa-cog"></i> Settings
          </a>
          <a className="dropdown-item" href="/starcards">
            <i className="fa fa-envelope"></i> StarCards
          </a>
          <a className="dropdown-item" href="/tag">
            <i className="fa fa-tags"></i> Tags
          </a>
          <a className="dropdown-item" href="/import">
            <i className="fa fa-upload"></i> Import
          </a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="/integration">
            <i className="fa fa-handshake"></i> Integration
          </a>
          <div className="dropdown-divider"></div>

          <a className="dropdown-item" href="/exports/list">
            <i className="fa fa-file"></i> Data Exports
          </a>
          <a className="dropdown-item" href="/documentation">
            <i className="fa fa-book"></i> Documentation
          </a>

          <div className="dropdown-divider"></div>

          <a className="dropdown-item" href="/my-account">
            <i className="fa fa-pen"></i> User Details
          </a>

          <a className="dropdown-item" href="/my-account/notifications">
            <i className="fa fa-bell"></i> Notifications
          </a>

          <a className="dropdown-item" href="/my-account/change-password">
            <i className="fa fa-lock"></i> Change password
          </a>

          <div className="dropdown-divider"></div>
          <Form action="/sign-out" method="post">
            <button className="btn btn-link dropdown-item">
              <i className="fa fa-sign-out"></i> Sign out
            </button>
          </Form>
        </div>
      )}
    </>
  );
};

export default DropdownButton;
