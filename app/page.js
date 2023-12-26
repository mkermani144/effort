import Link from "next/link";
import { Tilt_Warp } from "next/font/google";

import SignupButton from "./_components/SignupButton";
import LoginButton from "./_components/LoginButton";

import "./globals.css";

const tiltWarp = Tilt_Warp({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center h-screen gap-12">
      <div className="flex flex-col gap-2 items-center text-blue-300">
        <h1
          className={`${tiltWarp.className} text-6xl md:text-8xl extra-bold text-blue-300`}
        >
          Effort.
        </h1>
        <small className="text-sm md:text-lg">
          Try to work just{" "}
          <span className="underline decoration-2 decoration-pink-300">
            a bit
          </span>{" "}
          more.
        </small>
      </div>
      <div className="flex flex-col gap-4 items-center">
        <Link href="/signup">
          <SignupButton />
        </Link>
        <Link href="/login">
          <LoginButton />
        </Link>
      </div>
    </main>
  );
}
