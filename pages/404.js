import { useEffect } from "react";
import Link from "next/link";
import useError from "../hooks/useError";

export default function Custom404() {
  const { setError } = useError();

  useEffect(() => {
    setError(true);
  });

  return (
    <div className="h-[calc(100vh_-_80px)] flex justify-center items-center flex-col -my-28">
      <h1 className="text-6xl xs:text-9xl text-header">404</h1>
      <span className="text-xl xs:text-2xl">This page could not be found</span>
      <div className="mt-12">
        <Link href="/">
          <a>
            <div className="flex items-center justify-center w-32 h-12 mx-auto border rounded cursor-pointer border-header text-header hover:bg-cta">
              Go Home
            </div>
          </a>
        </Link>
      </div>
    </div>
  );
}
