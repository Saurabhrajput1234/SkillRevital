// import React, { useEffect, useState } from "react";
// import { useFormik } from "formik";
// import * as Yup from "yup";
// import Image from "../../assets/welcome.png";
// import Lottie from "react-lottie";
// import * as welcomeanimation from "../../lottie/signup.json"; // Fixed import path
// import Logo from "../../assets/logo.png";
// import "./signup.css";
// import namaste from "../../assets/namaste.png";
// import GoogleSvg from "../../assets/icons8-google.svg";
// import { NavLink, Navigate } from "react-router-dom";
// import { FaEye, FaEyeSlash } from "react-icons/fa";
// import { createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
// import { firebaseAuth, signInWithGoogle } from "../../pages/authenticated/firebase-config";

const SignupForm = () => {
//   const [showPassword, setShowPassword] = useState(false);
//   const [user, setUser] = useState(null);
//   const [userAuthenticated, setUserAuthenticated] = useState(false);

//   const formik = useFormik({
//     initialValues: {
//       email: user ? user.email : "",
//       password: "",
//       name: "",
//     },
//     enableReinitialize: true,
//     validationSchema: Yup.object({
//       email: Yup.string().email("Invalid email address").required("Required"),
//       password: Yup.string()
//         .min(8, "Must be 8 characters or greater")
//         .required("Required"),
//     }),
//     onSubmit: async (values) => {
//       try {
//         const { email, password } = values;
//         await createUserWithEmailAndPassword(firebaseAuth, email, password);
//       } catch (err) {
//         console.log(err);
//       }
      
//       try {
//         const response = await fetch('/register', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify(values),
//         });

//         if (!response.ok) {
//           throw new Error('Failed to register user');
//         }

//         const data = await response.json();
//         console.log(data); // Handle successful registration response
//       } catch (error) {
//         console.error('Error:', error);
//       }
//     },
//   });

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(firebaseAuth, (currentUser) => {
//       setUser(currentUser);
//       setUserAuthenticated(!!currentUser);
//     });

//     return () => unsubscribe();
//   }, []);

//   if (userAuthenticated) {
//     return <Navigate to="/" />;
//   }

//   return (
//     <div className="login-main">
//       <div className="login-left">
//         <Lottie
//           options={{
//             loop: true,
//             autoplay: true,
//             animationData: welcomeanimation.default,
//             rendererSettings: {
//               preserveAspectRatio: "xMidYMid slice",
//             },
//           }}
//         />
//       </div>
//       <div className="login-right">
//         <div className="login-right-container">
//           <div className="login-center">
//             <div className="greetings">
//               <h2>Namaste</h2>
//               <img height={130} src={namaste} alt="" />
//             </div>
//             <p>Please Register Yourself</p>
//             <form onSubmit={formik.handleSubmit}>
//               <input
//                 type="text"
//                 placeholder="Full Name"
//                 name="name"
//                 onChange={formik.handleChange}
//                 value={formik.values.name}
//                 style={{ backgroundColor: "#feffdd" }}
//               />
//               {formik.touched.name && formik.errors.name ? (
//                 <div className="error">{formik.errors.name}</div>
//               ) : null}
//               <input
//                 type="email"
//                 placeholder="Email"
//                 name="email"
//                 onChange={formik.handleChange}
//                 value={formik.values.email}
//                 readOnly
//                 style={{ backgroundColor: "#feffdd" }}
//               />
//               {formik.touched.email && formik.errors.email ? (
//                 <div className="error">{formik.errors.email}</div>
//               ) : null}
//               <div className="pass-input-div">
//                 <input
//                   type={showPassword ? "text" : "password"}
//                   placeholder="Password"
//                   name="password"
//                   onChange={formik.handleChange}
//                   value={formik.values.password}
//                   style={{ backgroundColor: "#feffdd" }}
//                 />
//                 {showPassword ? (
//                   <FaEyeSlash onClick={() => setShowPassword(!showPassword)} />
//                 ) : (
//                   <FaEye onClick={() => setShowPassword(!showPassword)} />
//                 )}
//               </div>
//               {formik.touched.password && formik.errors.password ? (
//                 <div className="error">{formik.errors.password}</div>
//               ) : null}
//               <div className="login-center-buttons">
//                 <button type="submit">SignUp</button>
//                 <button type="button" onClick={signInWithGoogle}>
//                   <img src={GoogleSvg} alt="" />
//                   Continue with Google
//                 </button>
//               </div>
//             </form>
//           </div>
//           <p className="login-bottom-p">
//             Already have an account?
//             <NavLink to="/login">Login</NavLink>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
};

export default SignupForm;
