//import react
import React from "react";

//import layout
import LayoutAccount from "../../../Layouts/Account";

//import component Head & usePage
import { Head, usePage } from "@inertiajs/react";

//import permissions
import hasAnyPermission from "../../../Utils/Permissions";

//import library chartjs
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend,
} from "chart.js";

//import Line react-chart
import { Line } from "react-chartjs-2";

//register ChartJS component
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend
);

export default function Dashboard() {
    //destruct props
    //props used by this component listed here
    const { auth, count, chart } = usePage().props;

    //custom chart configurations
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: "top",
            },
            title: {
                display: true,
                text: `STATISTIC REVENUE : ${new Date().getFullYear()}`,
            },
        },
    };

    //data chart
    const data = {
        labels: chart.month_name,
        datasets: [
            {
                fill: true,
                label: "REVENUE",
                backgroundColor: "#bccad8",
                data: chart.grand_total,
            },
        ],
    };

    return (
        <>
            <Head>
                <title>Dashboard - Geek Store</title>
            </Head>
            <LayoutAccount>
                <div className="row mt-4">
                    <div className="col-12 col-md-12 col-lg-12 mb-4">
                        <div className="alert alert-success border-0 shadow-sm mb-0">
                            Selamat Datang, <strong>{auth.user.name}</strong>
                        </div>
                    </div>
                </div>

                {/* dashboard statistics data */}
                {hasAnyPermission(["dashboard.statistics"]) && (
                    <div className="row mt-2">
                        <div className="col-12 col-lg-3 mb-4">
                            <div className="card border-0 shadow-sm overflow-hidden">
                                <div className="card-body p-0 d-flex align-items-center">
                                    <div
                                        className="bg-primary py-4 px-5 mfe-3"
                                        style={{ width: "130px" }}
                                    >
                                        <i className="fas fa-circle-notch fa-spin fa-2x text-white"></i>
                                    </div>
                                    <div>
                                        <div className="text-value text-primary">
                                            {count.unpaid}
                                        </div>
                                        <div className="text-muted text-uppercase font-weight-bold small">
                                            Belum Dibayar
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-3 mb-4">
                            <div className="card border-0 shadow-sm overflow-hidden">
                                <div className="card-body p-0 d-flex align-items-center">
                                    <div
                                        className="bg-success py-4 px-5 mfe-3"
                                        style={{ width: "130px" }}
                                    >
                                        <i className="fas fa-check-circle fa-2x text-white"></i>
                                    </div>
                                    <div>
                                        <div className="text-value text-success">
                                            {count.paid}
                                        </div>
                                        <div className="text-muted text-uppercase font-weight-bold small">
                                            Sudah Dibayar
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-3 mb-4">
                            <div className="card border-0 shadow-sm overflow-hidden">
                                <div className="card-body p-0 d-flex align-items-center">
                                    <div
                                        className="bg-warning py-4 px-5 mfe-3"
                                        style={{ width: "130px" }}
                                    >
                                        <i className="fas fa-exclamation-triangle fa-2x text-white"></i>
                                    </div>
                                    <div>
                                        <div className="text-value text-expired">
                                            {count.expired}
                                        </div>
                                        <div className="text-muted text-uppercase font-weight-bold small">
                                            Kadaluarsa
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-3 mb-4">
                            <div className="card border-0 shadow-sm overflow-hidden">
                                <div className="card-body p-0 d-flex align-items-center">
                                    <div
                                        className="bg-danger py-4 px-5 mfe-3"
                                        style={{ width: "130px" }}
                                    >
                                        <i className="fas fa-times fa-2x text-white"></i>
                                    </div>
                                    <div>
                                        <div className="text-value text-danger">
                                            {count.cancelled}
                                        </div>
                                        <div className="text-muted text-uppercase font-weight-bold small">
                                            Dibatalkan
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* dashboard chart data */}
                {hasAnyPermission(["dashboard.chart"]) && (
                    <div className="row mt-2">
                        <div className="col-12 col-md-12 col-lg-12 mb-4">
                            <div className="card border-0 border-top-success shadow-sm">
                                <div className="card-header fw-bold">
                                    <i className="fa fa-chart-bar"></i>
                                    Chart Revenue {new Date().getFullYear()}
                                </div>
                                <div className="card-body">
                                    <Line options={options} data={data} />
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </LayoutAccount>
        </>
    );
}
