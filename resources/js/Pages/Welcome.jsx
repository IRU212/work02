import React from 'react';
import { Link, Head } from '@inertiajs/inertia-react';

export default function Welcome(props) {
    return (
        <>
            <div>
                    {props.auth?.user ? (
                        <Link href={route('dashboard')}>
                            Dashboard
                        </Link>
                    ) : (
                        <>
                            <Link href={route('login')}>
                                Log in
                            </Link>

                            <Link href={route('register')}>
                                Register
                            </Link>
                        </>
                    )}
            </div>
        </>
    );
}
