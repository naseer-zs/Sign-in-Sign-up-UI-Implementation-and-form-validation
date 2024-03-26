import React from 'react';
import "./login.css";
import { Link } from 'react-router-dom';
import image from '../assets/book-square.png';
import { useFormik } from "formik";
import { ValidationSchema } from '../validation/ValidationSchema';

const initialValues = {
    name: "",
    email: "",
    password: "",
    role: ""
};
const Signup = () => {
    const { errors, values, touched, handleBlur, handleChange, handleSubmit, resetForm } = useFormik({
        initialValues: initialValues,
        validationSchema: ValidationSchema,
        onSubmit: (values) => {
            const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
            const userWithEmail = storedUsers.find(user => user.email === values.email);
            
            if (userWithEmail) {
                alert("Email is already used");
            } else {
                const updatedUsers = [...storedUsers, values];
                localStorage.setItem("users", JSON.stringify(updatedUsers));
                alert("Signup successful, Login Now");
                resetForm();

            
            }
        },
    });

    return (
        <div className='container '>
            <div className="box mt-1 mx-auto w-full max-w-sm p-4 rounded-lg sm:p-6 md:p-8 bg-[#FFFFFF] shadow-2xl border-red-300">
                <form className="space-y-6" onSubmit={handleSubmit}>
                    <div className='heading'>
                        <div className='img'> <img src={image} alt="Taska Logo" /> </div>
                        <div className='title color-[#141522] font-jakarta font-semibold'> Taska </div>
                    </div>
                    <div className='cardBody'>
                        <div className='title'> Welcome to Taska!  👋🏻</div>
                        <div>
                            <input type="text"
                                name="name"
                                id="name"
                                value={values.name}
                                onChange={handleChange}
                                onBlur={handleBlur} // Add onBlur event handler
                                placeholder="Full Name"
                                className="mt-4 bg-white border border-black-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:text-black dark:placeholder-black-400"
                            />
                            {errors.name && touched.name && <p className='text-red-500'>{errors.name}</p>}
                        </div>
                        <div>
                            <select id="role"
                                name="role"
                                value={values.role}
                                onChange={handleChange}
                                onBlur={handleBlur} // Add onBlur event handler
                                className="mt-4 bg-white border border-black-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:text-black dark:placeholder-black-400">
                                <option value="" disabled>Select Role</option>
                                <option value="Admin">Admin</option>
                                <option value="User">User</option>
                            </select>
                            {errors.role && touched.role && <p className='text-red-500'>{errors.role}</p>}
                        </div>
                        <div>
                            <input type="email"
                                name="email"
                                id="email"
                                placeholder="Email"
                                value={values.email}
                                onChange={handleChange}
                                onBlur={handleBlur} // Add onBlur event handler
                                className="mt-4 bg-white border border-black-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:text-black dark:placeholder-black-400"
                            />
                            {errors.email && touched.email && <p className='text-red-500'>{errors.email}</p>} {/* Show error only if the field is touched */}
                        </div>
                        <div>
                            <input type="password"
                                name="password"
                                id="password"
                                placeholder="Password"
                                value={values.password}
                                onChange={handleChange}
                                onBlur={handleBlur} // Add onBlur event handler
                                className="mt-4 bg-white border border-black-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:text-black dark:placeholder-black-400"
                            />
                            {errors.password && touched.password && <p className='text-red-500'>{errors.password}</p>} {/* Show error only if the field is touched */}
                        </div>
                    </div>
                    <button type="submit" id='submitButton' className="w-full text-white bg-[#666CFF] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Sign</button>
                    <div className="text-sm font-medium text-gray-500 dark:text-gray-300" id="lastPara">
                        Already Have An Account?
                        <Link className="text-blue-700 hover:underline dark:text-blue-500" to='/signup'>LogIn</Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Signup;
