import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";

function Contacts() {
  return (
    <div className="container flex flex-col items-center font-serif">
      <h1 className="text-3xl font-bold text-center">Want to talk?</h1>
      <h1 className="text-xl font-bold text-center">Here are some ways to contact me!</h1>
      <div className="flex items-center pt-5">
        <div className="flex">
            <a
              href="https://github.com/tfu2003"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillGithub size="40px" />
            </a>
            <a
              href="https://www.linkedin.com/in/tony-fu-837922218/"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillLinkedin size="40px" />
            </a>
            <ButtonMailto
              label={<MdEmail size="43px" />}
              mailto="mailto:officialtonyfu@gmail.com"
            />
        </div>
      </div>
    </div>
  );
}

const ButtonMailto = ({ mailto, label }) => {
  return (
      <Link
        to="#"
        onClick={(e) => {
          window.location.href = mailto;
          e.preventDefault();
        }}
      >
        {label}
      </Link>
  );
};

export default Contacts;
