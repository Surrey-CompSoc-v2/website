import React from "react";
import Link from "next/link";
import Footer from "../components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 ↠ Surrey CompSoc",
};

export default function NotFound() {
    return (
        <>
            <main className=" bg-black text-white">
                <div className="mx-auto flex min-h-[75vh] max-w-4xl flex-col items-center justify-center px-6 text-center">
                    <p className="mt-3 text-sm uppercase tracking-[0.35em] text-white/60">
                        Page not found
                    </p>
                    <p className="text-[7rem] font-semibold leading-none tracking-[0.08em] sm:text-[10rem]">
                        404
                    </p>
                    <div className="mt-8 flex flex-wrap items-center justify-center">
                        <Link
                            href="/"
                            className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:scale-[1.02]"
                        >
                            Return back to home
                        </Link>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
