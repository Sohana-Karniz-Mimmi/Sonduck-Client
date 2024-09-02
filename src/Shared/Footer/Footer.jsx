import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import logo from "../../../public/Logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 ">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2 lg:col-span-2 space-y-4">
            <img src={logo} alt="SonduckFilm Logo" className="mb-4" />
            <p className="text-lg text-gray-100 ">
              Market design is the process of designing markets to achieve
              specific goals.
            </p>
          </div>

          {/* Products */}
          <div className="col-span-1">
            <h4 className="font-semibold mb-4 text-gray-400">Products</h4>
            <ul>
              <li className="mb-2">
                <a href="#" className="hover:underline">
                  After Effect
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:underline">
                  Premier Pro
                </a>
              </li>
            </ul>
          </div>

          {/* Links */}
          <div className="col-span-1">
            <h4 className="font-semibold mb-4 text-gray-400">Link</h4>
            <ul>
              <li className="mb-2">
                <Link to="/store" clLinkssName="hover:underline">
                  Store
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/blogs" className="hover:underline">
                  Tutorials
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/faqs" className="hover:underline">
                  FAQs
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/" className="hover:underline">
                  Affiliate
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/" className="hover:underline">
                  Returns & Refunds
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/" className="hover:underline">
                  Licenses
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="col-span-1 md:col-span-2 lg:col-span-2">
            <h4 className="font-semibold mb-4 text-gray-400">Newsletter</h4>
            <div className="flex gap-4">
              <input
                type="email"
                placeholder="Enter your email address"
                className="px-4 py-2 w-full bg-white text-black rounded-md focus:outline-none placeholder:text-sm placeholder:font-semibold placeholder:text-gray-500 tracking-wide"
              />
              <button className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-md">
                Submit
              </button>
            </div>
          </div>
        </div>

        <div className="flex justify-between flex-col md:flex-row md:items-center mt-14">
          <p className="text-sm mt-4">
            &copy; 2024 SonduckFilm, LLC | All Rights Reserved
          </p>
          {/* Social Media Icons */}
          <div className="mt-8 flex md:justify-center lgz:justify-start space-x-6">
            <a href="#" className="hover:text-primary text-xl">
              <FaFacebook></FaFacebook>
            </a>
            <a href="#" className="hover:text-primary text-xl">
              <FaLinkedin></FaLinkedin>
            </a>
            <a href="#" className="hover:text-primary text-xl">
              <FaTwitter></FaTwitter>
            </a>
            <a href="#" className="hover:text-primary text-xl">
              <FaYoutube></FaYoutube>
            </a>
            <a href="#" className="hover:text-primary text-xl">
              <FaInstagram></FaInstagram>
            </a>
          </div>

          {/* Terms and Privacy */}
          <div className="mt-4 flex md:justify-center lg:justify-start space-x-6">
            <a href="#" className="hover:underline">
              Terms of Service
            </a>
            <a href="#" className="hover:underline">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
