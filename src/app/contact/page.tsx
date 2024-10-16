"use client";

import ContactForm from "@/component/contact/form";
import Footer from "@/component/Footer";
import Header from "@/component/Header";

export default function Contact() {
    return (
        <div className="overflow-x-hidden">
            <Header />
            <ContactForm />
            <Footer />
    </div>
    );
}
