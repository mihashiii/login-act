import React, { useState } from 'react';
import InputField from './InputField';
import Button from './Button';


const LoginForm = () => {

    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });


    const [errors, setErrors] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [loginMessage, setLoginMessage] = useState('');


    const VALID_CREDENTIALS = {
        username: 'admin',
        password: '12345'
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));


        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    const validateForm = () => {
        const newErrors = {};


        if (!formData.username.trim()) {
            newErrors.username = 'Username is required';
        }

        if (!formData.password.trim()) {
            newErrors.password = 'Password is required';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };


    const authenticateUser = async () => {

        await new Promise(resolve => setTimeout(resolve, 1000));

        return (
            formData.username === VALID_CREDENTIALS.username &&
            formData.password === VALID_CREDENTIALS.password
        );
    };


    const handleSubmit = async (e) => {
        e.preventDefault();

  
        if (!validateForm()) {
            return;
        }

        setIsLoading(true);
        setLoginMessage('');

        try {
            const isAuthenticated = await authenticateUser();

            if (isAuthenticated) {
                setIsLoggedIn(true);
                setLoginMessage(`✅ Welcome, ${formData.username}! You have successfully logged in.`);
            } else {
                setLoginMessage('❌ Invalid username or password.');
                setErrors({
                    username: 'Invalid credentials',
                    password: 'Invalid credentials'
                });
            }
        } catch (error) {
            setLoginMessage('❌ An error occurred. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
        setFormData({ username: '', password: '' });
        setErrors({});
        setLoginMessage('');
    };


    if (isLoggedIn) {
        return (
            <div className="max-w-md mx-auto bg-white rounded-2xl shadow-2xl p-8 text-center animate-fade-in">
                <div className="mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-2">Login Successful!</h2>
                    <p className="text-gray-600">{loginMessage}</p>
                </div>

                <Button
                    text="Logout"
                    onClick={handleLogout}
                    variant="secondary"
                    fullWidth
                />
            </div>
        );
    }

    return (
        <div className="max-w-md mx-auto bg-white rounded-2xl shadow-2xl p-8 animate-slide-up">
       
            <div className="text-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                </div>
                <h1 className="text-3xl font-bold text-gray-800 mb-2">Welcome Back</h1>
                <p className="text-gray-600">Sign in to your account</p>
            </div>

   
            <form onSubmit={handleSubmit} className="space-y-6">
    
                <InputField
                    label="Username"
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleInputChange}
                    placeholder="Enter your username"
                    error={errors.username}
                    required
                />

                <InputField
                    label="Password"
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    placeholder="Enter your password"
                    error={errors.password}
                    showPasswordToggle={true}
                    required
                />


                {loginMessage && (
                    <div className={`p-4 rounded-lg text-sm font-medium ${loginMessage.includes('✅')
                        ? 'bg-green-50 text-green-800 border border-green-200'
                        : 'bg-red-50 text-red-800 border border-red-200'
                        }`}>
                        {loginMessage}
                    </div>
                )}

      
                <Button
                    text={isLoading ? 'Signing In...' : 'Sign In'}
                    type="submit"
                    onClick={handleSubmit}
                    variant="primary"
                    loading={isLoading}
                    fullWidth
                    size="lg"
                />
            </form>



        </div>
    );
};

export default LoginForm;
