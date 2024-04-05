import React from "react";
import './style.scss';
import { AdminCategory } from "../../components/AdminCategory";

export const Adminka = () =>{

    return <section className="G-container">
        <div className="adminka G-flex">
            <div className="left-panel"></div>
            <div className="admin-panel">
                <div className="admin-title">
                    <h1>Test Title</h1>
                </div>
                <div className="admin-category">
                    <div>
                        <button>Add category</button>
                    </div>
                    <div className="admins-category G-flex G-flex-column">
                        <AdminCategory/>
                        <AdminCategory/>
                        <AdminCategory/>
                    </div>
                </div>
            </div>
        </div>
    </section>
}