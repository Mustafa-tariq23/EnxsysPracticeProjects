import "../CSS/nav/nav.css";

const NavBar = () => {
  return (
    <>
      <nav>
        {/* title */}
        <div className="title">
          <h3>QuillSphere</h3>
        </div>
        {/* list */}
        <ul className="ListView">
          <li className="listItem">Home</li>
          <li className="listItem">About</li>
          <li className="listItem">Services</li>
          <li className="listItem">Contact</li>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
