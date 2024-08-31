"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";

const Nav = () => {
  // for the current user
  const { data: session, status } = useSession();
  const [renderCounter, setRenderCounter] = useState(1);

  useEffect(() => {
    setRenderCounter((prevCounter) => prevCounter + 1);
    console.log(`Render count: ${renderCounter}`);
    console.log(`Session status: ${status}`);
    if (status === "loading") {
      console.log("Session is still loading...");
    } else {
      console.log("No session found or session is not authenticated");
    }
  }, [session, status]);

  const [providers, setProviders] = useState(0);
  const [toggleDropdown, setToggleDropdown] = useState(false);

  useEffect(() => {
    const fetchAndSetProviders = async () => {
      // gets the configured providers from next-auth route.js
      const response = await getProviders();
      setProviders(response);
    };
    fetchAndSetProviders();
  }, []);

  return (
    <nav
      className="flex-between w-full mb-16 mt-1
    pt-3"
    >
      {/* The Logo and homepage link */}
      <Link href="/" className="flex gap-2 flex-center">
        <Image
          src="/assets/images/logo.svg"
          alt="PromptLand logo"
          width={30}
          height={30}
          className="object-contain"
        />
        <p className="logo_text">PromptLand</p>
      </Link>

      {/* Desktop Navigation */}
      <div className="sm:flex hidden">
        {session?.user ? (
          // If user signed is in
          <div className="flex gap-3 md:gap-5 ">
            <Link href="/create-prompt" className="black_btn">
              Create Post
            </Link>
            <Link onClick={signOut} href="/sign_out" className="outline_btn">
              Sign Out
            </Link>
            <Link href="/profile">
              <Image
                src="/assets/images/logo.svg"
                width={37}
                height={37}
                className="rounded-full"
                alt="profile"
              />
            </Link>
          </div>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider) => (
                <button
                  type="button"
                  key={provider.name}
                  onClick={() => signIn(provider.id)}
                  className="black_btn"
                >
                  Sign In
                </button>
              ))}
          </>
        )}
      </div>

      {/* Mobile Navigation */}
      <div className="sm:hidden flex relative">
        {session?.user ? (
          <div className="flex">
            {/* The menu, 3 horizontal lines, icon */}
            <Image
              className="rounded-full"
              alt="profile"
              src="/assets/icons/menu.svg"
              width={37}
              height={37}
              onClick={() => setToggleDropdown((prev) => !prev)}
            />
            {toggleDropdown && (
              <div className="dropdown">
                <Link
                  href="/profile"
                  className="dropdown_link"
                  onClick={() => setToggleDropdown(false)}
                >
                  My Profile
                </Link>
                <Link
                  href="/create-prompt"
                  className="dropdown_link"
                  onClick={() => setToggleDropdown(false)}
                >
                  Create Prompt
                </Link>
                <Link
                  onClick={() => {
                    setToggleDropdown(false);
                    signOut();
                  }}
                  className="mt-5 w-full black_btn"
                >
                  Sign Out
                </Link>
              </div>
            )}
          </div>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider) => (
                <button
                  type="button"
                  key={provider.name}
                  onClick={() => signIn(provider.id)}
                  className="black_btn"
                >
                  Sign In
                </button>
              ))}
          </>
        )}
      </div>
    </nav>
  );
};

export default Nav;
