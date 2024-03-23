import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import image from '../assets/book-square.png';




const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('')
    const [authError, setAuthError] = useState(false);

    const handleLogin = (e) => {
        e.preventDefault();
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const user = users.find(user => user.email === email && user.password === password);
        if (user) {

            navigate('/welcome')
            // alert(`Login Successfully Welcome`);
            // alert(user.name)


    
           
            // Clear input fields
            setEmail('');
            setPassword('');
            
            setAuthError(false);

        } else {
            // Authentication failed
            setAuthError(true);
        }
    };

    return (
        <div className='container'>
            <div className="box mt-5 w-full max-w-sm p-4 rounded-lg  sm:p-6 md:p-8 bg-[#FFFFFF]  shadow-2xl border-red-300">
                <form className="space-y-6" onSubmit={handleLogin}>
                    <div className='heading'>
                        <div className='img'> <img src={image} alt="Taska Logo" /> </div>
                        <div className='title color-[#141522] font-jakarta font-semibold' > Taska </div>
                    </div>
                    <div className='cardBody'>
                        <div className='title'>  Welcome to Taska! 👋🏻</div>
                        <div>
                            <input 
                                type="email"
                                name="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Email"
                                className="mt-4 bg-white border border-black-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:text-black dark:placeholder-black-400"
                                required
                            />
                        </div>
                        <div>
                            <input 
                                type="password"
                                name="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Password"
                                className="mt-4 bg-white border border-black-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:text-black dark:placeholder-black-400"
                                required
                            />
                        </div>
                    </div>
                    <button 
                        type="submit" 
                        id='submitButton' 
                        className="w-full text-white bg-[#666CFF] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        LOGIN
                    </button>
                    <div className="text-sm font-medium text-gray-500 dark:text-gray-300" id="lastPara">
                        Don't Have An Account? 
                        <Link className="text-blue-700 hover:underline dark:text-blue-500" to='/'>Signup</Link>
                    </div>
                </form>
                {authError && <p className="text-red-500">Invalid email or password. Please try again.</p>}
            </div>
        </div>
    );
};

export default Login;
