import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Lottie from "react-lottie";
import * as welcomeanimation from "../../lottie/signup.json"; 
import { NavLink, Navigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../../pages/authenticated/firebase-config";
import namaste from "../../assets/namaste.png";
import GoogleSvg from "../../assets/icons8-google.svg";
import "./signup.css";

const SignupForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [userAuthenticated, setUserAuthenticated] = useState(false);
  const [error, setError] = useState(null);

  // Formik for form validation and state management
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      name: "",
      collegeName: "", // New field for college name
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string()
        .min(8, "Must be 8 characters or greater")
        .required("Required"),
      name: Yup.string().required("Required"),
      collegeName: Yup.string().required("Required"), // Validation for college name
    }),
    onSubmit: async (values) => {
      setError(null);
      try {
        const { email, password, name, collegeName } = values;
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const token = await userCredential.user.getIdToken();
        await fetch("api/auth/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ token, name, collegeName }), // Send collegeName to backend
        });
        setUserAuthenticated(true);
      } catch (err) {
        console.error("Error signing up:", err);
        setError("Failed to create account. Please try again.");
      }
    },
  });

  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const token = await result.user.getIdToken();
      await fetch("api/auth/google", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ token, collegeName: formik.values.collegeName }), // Include collegeName with Google sign-in
      });
      setUserAuthenticated(true);
    } catch (err) {
      console.error("Error signing in with Google:", err);
      setError("Failed to sign in with Google.");
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUserAuthenticated(!!currentUser);
    });
    return () => unsubscribe();
  }, []);

  if (userAuthenticated) {
    return <Navigate to="/" />;
  }

  return (
    <div className="signup-main">
      <div className="signup-left">
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
      <div className="signup-right">
        <div className="signup-right-container">
          <div className="signup-center">
            <div className="greetings">
              <h2>Namaste</h2>
              <img height={130} src={namaste} alt="Namaste" />
            </div>
            <p>Please Register Yourself</p>
            <form onSubmit={formik.handleSubmit}>
              {error && <div className="error">{error}</div>}
              <input
                type="text"
                placeholder="Full Name"
                name="name"
                onChange={formik.handleChange}
                value={formik.values.name}
                style={{ backgroundColor: "#feffdd" }}
              />
              {formik.touched.name && formik.errors.name ? (
                <div className="error">{formik.errors.name}</div>
              ) : null}
              <input
                type="email"
                placeholder="Email"
                name="email"
                onChange={formik.handleChange}
                value={formik.values.email}
                style={{ backgroundColor: "#feffdd" }}
              />
              {formik.touched.email && formik.errors.email ? (
                <div className="error">{formik.errors.email}</div>
              ) : null}
              <div className="pass-input-div">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  name="password"
                  onChange={formik.handleChange}
                  value={formik.values.password}
                  style={{ backgroundColor: "#feffdd" }}
                />
                {showPassword ? (
                  <FaEyeSlash onClick={() => setShowPassword(!showPassword)} />
                ) : (
                  <FaEye onClick={() => setShowPassword(!showPassword)} />
                )}
              </div>
              {formik.touched.password && formik.errors.password ? (
                <div className="error">{formik.errors.password}</div>
              ) : null}
              <input
                type="text"
                placeholder="College Name"
                name="collegeName"
                onChange={formik.handleChange}
                value={formik.values.collegeName}
                style={{ backgroundColor: "#feffdd" }}
              />
              {formik.touched.collegeName && formik.errors.collegeName ? (
                <div className="error">{formik.errors.collegeName}</div>
              ) : null}
              <div className="signup-center-buttons">
                <button type="submit">Sign Up</button>
                <button type="button" onClick={signInWithGoogle}>
                  <img src={GoogleSvg} alt="Google" />
                  Continue with Google
                </button>
              </div>
            </form>
          </div>
          <p className="signup-bottom-p">
            Already have an account?{" "}
            <NavLink to="/login">Login</NavLink>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
