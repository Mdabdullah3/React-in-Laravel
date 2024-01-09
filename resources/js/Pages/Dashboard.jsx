import React from "react";
import DashboardLayout from "../layouts/DashboardLayout";

const Dashboard = () => {
    const sidebarLinks = [
        { name: "Dashboard", route: route("dashboard") },
        // Add more links as needed
    ];

    return (
        <DashboardLayout sidebarLinks={sidebarLinks}>
            <h1>Dashboard</h1>
            <p>Your dashboard content goes here.</p>
        </DashboardLayout>
    );
};

export default Dashboard;
