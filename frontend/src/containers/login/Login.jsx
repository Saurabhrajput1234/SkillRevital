import React, { useEffect, useState } from "react";
import Lottie from "react-lottie";
import * as welcomeanimation from "../../lottie/login.json"; 
import { useFormik } from "formik";
import * as Yup from "yup";
import "./login.css";
import { auth, googleProvider } from '../../pages/authenticated/firebase-config';
import { signInWithPopup, signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { NavLink, Navigate } from "react-router-dom";
import GoogleSvg from "../../assets/icons8-google.svg";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [userAuthenticated, setUserAuthenticated] = useState(false);
  const [error, setError] = useState(null);

  // Function to handle Google sign-in
  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const token = await result.user.getIdToken();
      
      // Send token to your backend
      const response = await fetch('api/auth/google', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ token }),
      });

      if (response.ok) {
        console.log('User authenticated successfully');
        setUserAuthenticated(true);
      } else {
        const data = await response.json();
        console.error('Failed to authenticate:', data.message);
        setError(data.message);
      }
    } catch (error) {
      console.error('Error during sign-in:', error);
      setError('Failed to sign in with Google. Please try again.');
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
      setError(null);
      try {
        const { email, password } = values;

        // Firebase authentication with email and password
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const token = await userCredential.user.getIdToken();

        // Send token to your backend for verification
        const response = await fetch('api/auth/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ token }),
        });

        if (response.ok) {
          console.log('User authenticated successfully');
          setUserAuthenticated(true);
        } else {
          const data = await response.json();
          console.error('Failed to authenticate:', data.message);
          setError(data.message);
        }
      } catch (err) {
        console.error("Error during sign-in:", err);
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
