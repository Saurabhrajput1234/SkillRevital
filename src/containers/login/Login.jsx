
import React, { useEffect, useState } from "react";
import Image from "../../assets/image.png";
import Logo from "../../assets/logo.png";
import GoogleSvg from "../../assets/icons8-google.svg";
import Lottie from "react-lottie";
import * as welcomeanimation from "../../lottie/login.json"; // Fixed import path
import { useFormik } from "formik";
import * as Yup from "yup";
import "./login.css";
import { auth, googleProvider } from '../../pages/authenticated/firebase-config';
import { signInWithPopup, signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { NavLink, Navigate } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [userAuthenticated, setUserAuthenticated] = useState(false);
  const [error, setError] = useState(null); // For displaying errors

  // Function for signing in with Google
  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const token = await result.user.getIdToken();
      
      // Send token to your backend
      const response = await fetch('http://localhost:5000/api/auth/google', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ token }),
      });

      if (response.ok) {
        console.log('User authenticated successfully');
        setUserAuthenticated(true); // Redirect user after successful login
      }
    } catch (error) {
      console.error('Error during sign-in:', error);
    }
  };

  // Formik for form validation and state management
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string()
        .min(8, "Must be 8 characters or greater")
        .required("Required"),
    }),
    onSubmit: async (values) => {
      setError(null); // Clear previous errors
      try {
        const { email, password } = values;
        await signInWithEmailAndPassword(auth, email, password);
        setUserAuthenticated(true); // Redirect user after successful login
      } catch (err) {
        console.error("Error signing in with email and password:", err);
        setError("Failed to sign in. Please check your email and password.");
      }
    },
  });

  // Check if the user is already authenticated
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUserAuthenticated(!!currentUser);
    });

    return () => unsubscribe();
  }, []);

  // Redirect if the user is authenticated
  if (userAuthenticated) {
    return <Navigate to="/" />;
  }

  return (
    <div className="login-main">
      <div className="login-left">
        <Lottie
          options={{
            loop: true,
            autoplay: true,
            animationData: welcomeanimation.default,
            rendererSettings: {
              preserveAspectRatio: "xMidYMid slice",
            },
          }}
        />
      </div>
      <div className="login-right">
        <div className="login-right-container">
          <div className="login-center">
            <h2>Welcome Back!</h2>
            <p>Please Login Yourself</p>
            {/* Formik form */}
            <form onSubmit={formik.handleSubmit}>
              {error && <div className="error">{error}</div>} {/* Error display */}
              <label htmlFor="email"></label>
              <br />
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Enter valid email address"
                onChange={formik.handleChange}
                value={formik.values.email}
                style={{ backgroundColor: "#feffdd" }}
              />
              {formik.touched.email && formik.errors.email ? (
                <div className="required">{formik.errors.email}</div>
              ) : null}

              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter Password"
                onChange={formik.handleChange}
                value={formik.values.password}
                style={{ backgroundColor: "#feffdd" }}
              />
              {formik.touched.password && formik.errors.password ? (
                <div className="required">{formik.errors.password}</div>
              ) : null}
              <br />
              <div className="login-center-options">
                <div className="remember-div">
                  <input type="checkbox" id="remember-checkbox" />
                  <label htmlFor="remember-checkbox">
                    Remember for 30 days
                  </label>
                </div>
                <a href="#" className="forgot-pass-link">
                  Forgot password?
                </a>
              </div>
              <div className="login-center-buttons">
                <button type="submit">Log In</button>
                <button type="button" onClick={signInWithGoogle}>
                  <img src={GoogleSvg} alt="Google" />
                  Log In with Google
                </button>
              </div>
            </form>
          </div>

          <p className="login-bottom-p">
            Don't have an account?{" "}
            <NavLink to="/signup">Sign Up</NavLink>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
