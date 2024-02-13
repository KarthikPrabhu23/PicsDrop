import { signOut } from "firebase/auth";
import { auth } from "../firebase/config";

const Navbar = () => {

const handleLogout = async () => {

    try {
        await signOut(auth);
    } catch (error) {
        console.log(error);
    }
}

  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="flex-none">
          <button className="btn btn-square btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-5 h-5 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
        <div className="flex-1 justify-between">
          <a className="btn btn-ghost text-xl">PicsDrop</a>
          <a onClick={handleLogout}  className="btn btn-ghost text-l">Logout</a>
          
        </div>
      </div>
    </div>
  );
};

export default Navbar;
