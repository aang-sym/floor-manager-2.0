import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="text-center my-2">
      <p>Copyright &copy; 2021</p>
      <Link to="/about">About</Link>
    </footer>
  );
};

export default Footer;

// import Link from router means page doesn't reload when naming container 'Link' and using to=''
