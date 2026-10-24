import { useState } from "react";
import { NavLink } from "react-router-dom";

export type SignUpFormData = {
    name: string;
    email: string;
    phone_number: string;
    password: string;
};

const Signup = () => {
    const [form, setForm] = useState<SignUpFormData>({
        name: "",
        email: "",
        phone_number: "",
        password: "",
    });

    const handleFormChange = (
        event: any
    ) => {
        const { name, value } = event.target;

        setForm((prevForm) => ({
            ...prevForm,
            [name]: value,
        }));
    };

    const handleSignup = (event:any) => {
        event.preventDefault();

        console.log("Sign up form submitted");
        console.log({
            ...form,
            password: "[hidden]",
        });


    };

    return (
        <div className="signup-page">
            <h1>Join TeddyShop! 🧸</h1>
            <p>Create your account and find your perfect teddy.</p>

            <form onSubmit={handleSignup}>
                <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    value={form.name}
                    onChange={handleFormChange}
                    autoComplete="name"
                    required
                />

                <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={form.email}
                    onChange={handleFormChange}
                    autoComplete="email"
                    required
                />

                <input
                    type="tel"
                    name="phone_number"
                    placeholder="Phone Number"
                    value={form.phone_number}
                    onChange={handleFormChange}
                    autoComplete="tel"
                    required
                />

                <input
                    type="password"
                    name="password"
                    placeholder="Create Password"
                    value={form.password}
                    onChange={handleFormChange}
                    autoComplete="new-password"
                    required
                />

                <button type="submit">Create Account</button>
            </form>

            <p>Already have an account?</p>
            <NavLink to="/login">Login</NavLink>
        </div>
    );
};

export default Signup;
