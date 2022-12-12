import React, { useState } from 'react'

import { FieldValues, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { auth } from '../config/firebaseConfig';


enum State {
    initial, loading, success, error
}
export const Authentication = () => {
    const { register, handleSubmit } = useForm();
    const [state, setState] = useState(State.initial)

    const navigate = useNavigate();

    const onSubmit = async (data: FieldValues) => {
        try {
            let userCredential = await auth.signInWithEmailAndPassword(data.email, data.password);
            const user = await userCredential.user?.getIdToken;
            console.log(user)
            navigate('/dashboard')
        } catch (error) {
            console.log(error)
            alert("Username/Password anda salah")
        }
    };

    return (
     
        <div className="text-center mt-5 pt-5">
            <div className="mb-5">
                <h1 className="mb-5">Login</h1>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>Email</label>
                <br />
                <input {...register("email", { required: true })} />
                <br />
                <br />
                <label>Password</label>
                <br />
                <input type="password" {...register("password", { required: true })} />
                <br />
                <br />
                <input type="submit" />
            </form>
        </div>
    )
}
