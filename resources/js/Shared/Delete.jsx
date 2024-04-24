//import React
import React from "react";
//import inertia router
import { router } from "@inertiajs/react";
//import SweetAlert
import Swal from "sweetalert2";

export default function Delete({ URL, id }) {
    const destroy = async (id) => {
        //show sweet alert
        Swal.fire({
            title: "Apakah Anda Yakin?",
            text: "Data Tidak Akan Bisa Dikembalikan Setelah Dihapus!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Iya, Hapus Data",
        }).then((result) => {
            if (result.isConfirmed) {
                //delete
                router.delete(`${URL}/${id}`);

                Swal.fire({
                    title: "Success",
                    text: "Data Berhasil Dihapus",
                    icon: "success",
                    showConfirmButton: false,
                    timer: 1500,
                });
            }
        });
    };

    return (
        <>
            <button
                onClick={() => destroy(id)}
                className="btn btn-danger btn-sm"
            >
                <i className="fa fa-trash"></i>
            </button>
        </>
    );
}
