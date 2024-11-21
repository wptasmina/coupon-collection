import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png'
import { FaFacebook, FaSquareInstagram, FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <>
      <footer className="footer bg-blue-100 text-base-content p-10 ">
        <aside className="w-11/12 mx-auto">
          <Link to="/home">
            <img className="md:w-24 w-16" src={logo} />
          </Link>
          <div className="flex gap-4 pt-4">
            <Link to="https://www.facebook.com">
              <FaFacebook className="text-2xl text-blue-600" />
            </Link>
            <Link to="https://www.twitter.com">
              <FaXTwitter className="text-2xl " />
            </Link>
            <Link to="https://www.instagram.com">
              <FaSquareInstagram className="text-2xl text-red-600" />
            </Link>
          </div>
        </aside>
        <nav>
          <h6 className="footer-title text-black">Home</h6>
          <a className="link link-hover text-black">About us</a>
          <a className="link link-hover text-black">Contact</a>
          <a className="link link-hover text-black">Jobs</a>
          <a className="link link-hover text-black">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title text-black">Company</h6>
          <a className="link link-hover text-black">Branding</a>
          <a className="link link-hover text-black">Design</a>
          <a className="link link-hover text-black">Marketing</a>
          <a className="link link-hover text-black">Advertisement</a>
        </nav>

        <nav>
          <h6 className="footer-title text-black">Legal</h6>
          <a className="link link-hover text-black">Terms of use</a>
          <a className="link link-hover text-black">Privacy policy</a>
          <a className="link link-hover text-black">Cookie policy</a>
        </nav>
      </footer>
      <footer className="footer footer-center bg-blue-950 text-white p-4">
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by ACME
            Industries Ltd
          </p>
        </aside>
      </footer>
    </>
  );
}
