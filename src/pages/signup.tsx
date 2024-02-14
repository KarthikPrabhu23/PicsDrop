import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { auth } from "../firebase/config";
import { useNavigate } from "react-router-dom";

const signup = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordsMatch, setPasswordsMatch] = useState(true);

  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate('/');
      
    } catch (error) {
      setError(error.message);
    }
  };

  const handleConfirmPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setConfirmPassword(e.target.value);
    setPasswordsMatch(e.target.value === password);
  };

  return (
    <form onSubmit={handleSubmit}>
      {error && error}
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col ">
          <div className="text-center lg:text-center">
            <h1 className="text-5xl font-bold">PicsDrop</h1>
            <p className="py-6 font-bold text-xl mt-3">SignUp to share your pictures</p>
          </div>
          <div className="card sm:w-[30rem] shadow-2xl bg-base-100">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter Email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter Password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={handleConfirmPasswordChange}
                  placeholder="Confirm Password"
                  className="input input-bordered"
                  required
                />
                {!passwordsMatch && <span style={{ color: 'red' }}>Passwords do not match</span>}
                <label className="label">
                  <a href="/login" className="label-text-alt link link-hover text-l">
                    Already a user? Login here
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">SignUp</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default signup;
