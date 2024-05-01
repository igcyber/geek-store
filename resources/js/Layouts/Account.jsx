//import react
import React, { useState } from "react";

//import component bootstrap
import { Nav, NavDropdown } from "react-bootstrap";

//import usePage and router
import { usePage, router } from "@inertiajs/react";

//import sidebar
import Sidebar from "../Components/Sidebar";

export default function LayoutAccount({ children }) {
    //get props auth
    const { auth } = usePage().props;

    //state toggle with default false
    const [sidebarToggle, setSidebarToggle] = useState(false);

    //function toggleHandler
    const sidebarToggleHandler = (e) => {
        e.preventDefault();

        if (!sidebarToggle) {
            //add class on body
            document.body.classList.add("sb-sidenav-toggled");

            //set state "sidebarToggle" to true
            setSidebarToggle(true);
        } else {
            //remove class on body
            document.body.classList.remove("sb-sidenav-toggled");

            //set state "sidebarToggle" to false
            setSidebarToggle(false);
        }
    };

    const logoutHandler = async (e) => {
        e.preventDefault();

        router.post("/logout");
    };

    return (
        <>
            <div className="d-flex sb-sidenav-toggled" id="wrapper">
                <div className="bg-sidebar" id="sidebar-wrapper">
                    <div className="sidebar-heading bg-light text-center">
                        <img src="/assets/images/logo.png" width={"23"} />
                        <strong>Geek</strong> <small>Store</small>
                    </div>
                    {/* Component Sidebar Here */}
                    <Sidebar />
                </div>
                <div id="page-content-wrapper">
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <div className="container-fluid">
                            <button
                                className="btn btn-success-dark"
                                onClick={sidebarToggleHandler}
                            >
                                <i className="fa fa-list-ul"></i>
                            </button>
                            <div
                                className="collapse navbar-collapse"
                                id="navbarSupportedContent"
                            >
                                <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
                                    <NavDropdown
                                        title={auth.user.name}
                                        className="fw-bold"
                                        id="basic-nav-dropdown"
                                    >
                                        <NavDropdown.Item
                                            onClick={logoutHandler}
                                        >
                                            <i className="fa fa-sign-out-alt me-2"></i>
                                            Logout
                                        </NavDropdown.Item>
                                    </NavDropdown>
                                </ul>
                            </div>
                        </div>
                    </nav>
                    <div className="container-fluid">{children}</div>
                </div>
            </div>
        </>
    );
}
