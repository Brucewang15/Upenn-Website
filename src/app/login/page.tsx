'use client'
import { signIn } from 'next-auth/react';

export default function Login() {
    console.log("login page")
    return <>
        <button onClick={() => signIn('github')}>Sign in with GitHub</button>;
    </>
}