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
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
                necessitatibus et labore quae nam commodi animi rerum fugiat
                dolore mollitia accusamus, enim illum aliquam, iure temporibus
                laboriosam, ullam eligendi assumenda distinctio perspiciatis
                asperiores tenetur vitae earum vero! Quam illo saepe eligendi
                repudiandae? Quia repudiandae, inventore eligendi cumque itaque
                tenetur incidunt necessitatibus molestiae, laudantium harum ipsa
                aliquid laboriosam excepturi vel eos! Ullam voluptatibus ex,
                dignissimos at sapiente ipsum harum explicabo quod magni,
                temporibus tempore doloribus. Dolor, amet libero tempora quam
                culpa harum provident et recusandae, saepe eaque facilis dolorem
                veritatis sint in id possimus quasi. Sed ab incidunt ad sit
                eaque?
            </p>
        </DashboardLayout>
    );
};

export default Dashboard;
