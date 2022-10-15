import React, { FC } from "react";
import useBaseUrl from "@docusaurus/useBaseUrl";
import Link from "@docusaurus/Link";

export const Hero: FC = () => {
  return (
    <div className="bg-white">
      <div className="relative overflow-hidden">
        <main>
          <div className="bg-gray-900 pt-10 sm:pt-16 lg:overflow-hidden lg:pt-8 lg:pb-14">
            <div className="mx-auto max-w-7xl lg:px-8">
              <div className="lg:grid lg:grid-cols-2 lg:gap-8">
                <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:flex lg:items-center lg:px-0 lg:text-left">
                  <div className="lg:py-24">
                    <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
                      <span className="block">
                        A crypto{" "}
                        <span className="bg-gradient-to-r from-teal-200 to-cyan-400 bg-clip-text pb-3 text-transparent sm:pb-5">
                          wallet
                        </span>{" "}
                        &amp;{" "}
                        <span className="bg-gradient-to-r from-teal-200 to-cyan-400 bg-clip-text pb-3 text-transparent sm:pb-5">
                          Web3
                        </span>{" "}
                        layer for the XRPL
                      </span>
                    </h1>
                    <p className="text-base text-gray-300 sm:text-xl lg:text-lg xl:text-xl">
                      GemWallet is a web extension that enables you to make fast
                      payments on the XRP Ledger via your browser. It's a safer
                      alternative to copying and pasting private keys for use
                      with web applications.
                    </p>
                    <div className="mt-10 sm:mt-12">
                      <div className="sm:flex">
                        <div className="mt-3 sm:mt-0">
                          <Link
                            className="block w-full rounded-md bg-gradient-to-r from-teal-500 to-cyan-600 py-3 px-4 font-medium text-white shadow hover:from-teal-600 hover:to-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-gray-900 text-center hover:no-underline hover:text-slate-200"
                            to="/blog/getting-started-with-gemwallet-beta#installation"
                          >
                            Download
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-12 -mb-16 sm:-mb-48 lg:relative lg:m-0">
                  <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0">
                    <img
                      className="w-full lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                      src={useBaseUrl("img/home-hero.png")}
                      alt="Home hero"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};
