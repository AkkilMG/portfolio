"use client";

import Footer from "@/component/Footer";
import Header from "@/component/Header";
import { useParams } from "next/navigation";

export default function Hackathon() {
    const params = useParams();
    const id = Number(params?.id);
    return (
        <div className="overflow-x-hidden">
            <Header />
            {/* <AchievementBlog id={id} /> */}
            <Footer />
        </div>
    );
}