"use client";

import Footer from "@/component/Footer";
import Header from "@/component/Header";
import ProjectBlog from "@/component/project/blog";
import { useParams } from "next/navigation";

export default function Project() {
    const params = useParams();
    const id = Number(params?.id);
    return (
        <div className="overflow-x-hidden">
            <Header />
            <ProjectBlog id={id} />
            <Footer />
        </div>
    );
}