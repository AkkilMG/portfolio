"use client";

import Footer from "@/component/Footer";
import Header from "@/component/Header";
import ProjectList from "@/component/project/list";

export default function Projects() {
    return (
        <div className="overflow-x-hidden">
            <Header />
            <ProjectList />
            <Footer />
        </div>
    );
}
