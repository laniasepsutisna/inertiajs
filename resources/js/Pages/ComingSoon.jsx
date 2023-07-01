//import React
import React from "react";

//import layout
import Layout from "../Layouts/Default.jsx";

import Plane from "../../../public/assets/images/comingsoon.png";

export default function PostIndex() {
    return (
        <Layout>
            <div className="auth-page-wrapper">
                <div
                    className="auth-one-bg-position auth-one-bg"
                    id="auth-particles"
                >
                    <div className="bg-overlay"></div>

                    <div className="shape">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            version="1.1"
                            xmlns:xlink="http://www.w3.org/1999/xlink"
                            viewBox="0 0 1440 120"
                        >
                            <path d="M 0,36 C 144,53.6 432,123.2 720,124 C 1008,124.8 1296,56.8 1440,40L1440 140L0 140z"></path>
                        </svg>
                    </div>
                </div>

                <div className="auth-page-content">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="text-center mt-sm-5 pt-4 mb-4">
                                    <div className="mb-sm-5 pb-sm-4 pb-5">
                                        <img
                                            src={Plane}
                                            alt=""
                                            height="120"
                                            className="move-animation"
                                        />
                                    </div>
                                    <div>
                                        <h1 className="display-2 coming-soon-text">
                                            Coming Soon
                                        </h1>
                                    </div>
                                    <div>
                                        <div>
                                            <h5>
                                                Buah Semangka Buah Kedondong
                                            </h5>
                                            <p className="text-muted">
                                                Jangan Buru buru dong 😊
                                            </p>
                                        </div>

                                        {/* <div className="input-group countdown-input-group mx-auto my-4">
                            <input
                                type="email"
                                className="form-control border-light shadow"
                                placeholder="Enter your email address"
                                aria-label="search result"
                                aria-describedby="button-email"
                            />
                            <button
                                className="btn btn-success"
                                type="button"
                                id="button-email"
                            >
                                Send
                                <i className="ri-send-plane-2-fill align-bottom ms-2"></i>
                            </button>
                        </div> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <footer className="footer">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-sm-6">
                                <script>
                                    document.write(new Date().getFullYear())
                                </script>{" "}
                                © PT. Kimia Farma Tbk. All Rights Reserved.
                            </div>
                            <div className="col-sm-6">
                                <div className="text-sm-end d-none d-sm-block">
                                    Develop by Tim IT Development KFHO
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </Layout>
    );
}
