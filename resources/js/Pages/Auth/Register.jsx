// import hook react
import React, { useState } from "react";

// import Head, usePage, Link and Router
import { Head, usePage, Link, router } from "@inertiajs/react";

export default function Register() {
    // destruct props "errors"
    const { errors } = usePage().props;

    // state yang digunakan untuk menampung data
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");

    // function registerHandler
    const registerHandler = async (e) => {
        e.preventDefault();

        //register
        router.post("/register", {
            name: name,
            email: email,
            password: password,
            password_confirmation: passwordConfirmation,
        });
    };

    return (
        <>
            <Head>
                <title>Registrasi Akun - Geek Store</title>
            </Head>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6 mt-80">
                        <div className="text-center mb-4">
                            <img
                                src="/assets/images/logo.png"
                                alt="Logo Toko"
                                width={"60"}
                            />
                            <h4>
                                <strong>Geek</strong>Store
                            </h4>
                        </div>
                        <div className="card border-0 rounded-3 shadow-sm border-top-success">
                            <div className="card-body">
                                <div className="text-center">
                                    <h6 className="fw-bold">REGISTRASI AKUN</h6>
                                    <hr />
                                </div>
                                <form onSubmit={registerHandler}>
                                    <div className="row">
                                        {/* input nama lengkap */}
                                        <div className="col-md-6">
                                            <label className="mb-1">
                                                Nama Lengkap
                                            </label>
                                            <div className="input-group mb-3">
                                                <span className="input-group-text">
                                                    <i className="fa fa-user"></i>
                                                </span>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    value={name}
                                                    onChange={(e) =>
                                                        setName(e.target.value)
                                                    }
                                                    placeholder="Tuliksan Nama Lengkap Anda"
                                                />
                                            </div>
                                            {errors.name && (
                                                <div className="alert alert-danger fs-8">
                                                    {errors.name}
                                                </div>
                                            )}
                                        </div>

                                        {/* input alamet email */}
                                        <div className="col-md-6">
                                            <label className="mb-1">
                                                Alamat E-Mail
                                            </label>
                                            <div className="input-group mb-3">
                                                <span className="input-group-text">
                                                    <i className="fa fa-envelope"></i>
                                                </span>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    value={email}
                                                    onChange={(e) =>
                                                        setEmail(e.target.value)
                                                    }
                                                    placeholder="Tuliskan Alamat E-Mail Anda"
                                                />
                                            </div>
                                            {errors.email && (
                                                <div className="alert alert-danger">
                                                    {errors.email}
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    <div className="row">
                                        {/* input password */}
                                        <div className="col-md-6">
                                            <label className="mb-1">
                                                Password
                                            </label>
                                            <div className="input-group mb-3">
                                                <span className="input-group-text">
                                                    <i className="fa fa-lock"></i>
                                                </span>
                                                <input
                                                    type="password"
                                                    className="form-control"
                                                    value={password}
                                                    onChange={(e) =>
                                                        setPassword(
                                                            e.target.value
                                                        )
                                                    }
                                                    placeholder="********"
                                                />
                                            </div>
                                            {errors.password && (
                                                <div className="alert alert-danger">
                                                    {errors.password}
                                                </div>
                                            )}
                                        </div>

                                        {/* input konfirmasi password */}
                                        <div className="col-md-6">
                                            <label className="mb-1">
                                                Konfirmasi Password
                                            </label>
                                            <div className="input-group mb-3">
                                                <span className="input-group-text">
                                                    <i className="fa fa-lock"></i>
                                                </span>
                                                <input
                                                    type="password"
                                                    className="form-control"
                                                    value={passwordConfirmation}
                                                    onChange={(e) => {
                                                        setPasswordConfirmation(
                                                            e.target.value
                                                        );
                                                    }}
                                                    placeholder="*******"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <button
                                        className="btn btn-success shadow-sm rounded-sm px-4 w-100"
                                        type="submit"
                                    >
                                        Registrasi
                                    </button>
                                </form>
                            </div>
                        </div>
                        <div className="register text-center mt-3">
                            Sudah Punya Akun ? <Link href="/login">Login</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
