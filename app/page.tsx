import Image from "next/image";
import React from "react";
import { AiOutlinePlus, AiOutlineDownload } from "react-icons/ai";

export default function Home() {
  return (
    <main className="p-4 break-words">
      <div className="flex items-center">
        <Image src="/FVMLogo.jpeg" alt="FVM Logo" width={70} height={70} />
        <h1 className="text-4xl tracking-wide">
          fvm<span className="font-bold">agg</span>dev
        </h1>
      </div>
      <div className="text-sm flex flex-col md:mb-12">
        Upload and manage your Filecoin data with aggregators on FVM.
        <a href="https://www.example.com" className="text-blue-600 underline">
          Learn more about FVM here.
        </a>
      </div>
      <div className="flex w-fit gap-2 text-sm my-4 md:my-0 md:flex-col whitespace-nowrap md:top-3 md:right-3 md:absolute">
        <button className="rounded-lg bg-blue-400 text-white font-medium border border-black flex items-center p-3">
          <AiOutlinePlus className="text-white" />
          Add Your Aggregator
        </button>
        <button className="rounded-lg bg-slate-300 font-medium border border-black flex items-center p-3 justify-center gap-2">
          <Image src="/github.png" alt="Github Logo" width={20} height={20} />
          See codebase
        </button>
        <button className="rounded-lg bg-slate-300 font-medium border border-black flex items-center p-3 gap-2">
          <AiOutlineDownload width={20} height={20} />
          Export data as json
        </button>
      </div>
      <div className="flex flex-col space-y-12">
        <div>
          <div className="flex items-center text-lg font-bold gap-2 mb-2">
            <Image
              src="/lighthouse.jpeg"
              alt="Vercel Logo"
              width={42}
              height={16}
            />
            Lighthouse
          </div>
          <table className="table-fixed w-screen md:w-2/3">
            <tbody>
              <tr className="text-center">
                <td className="py-2 border border-black">Contract Address</td>
                <td className="border border-black">Network</td>
                <td className="border border-black">Active Deal IDs</td>
                <td className="border border-black">Piece CIDs</td>
                <td className="border border-black">Status</td>
              </tr>
              <tr>
                <td className="px-4 py-4 border border-black">
                  <a
                    href="https://www.example.com"
                    className="text-blue-600 underline"
                  >
                    0xeubfoueghohuefhofeuhoefwuheufoewuhefowuhfe
                  </a>
                </td>
                <td className="px-4 border border-black">Calib net</td>
                <td className="px-4 border border-black relative">
                  33 active deal IDs [heqiohqoihwoihehwqoewihewoqiheo]{" "}
                  <AiOutlineDownload
                    width={20}
                    height={20}
                    className="absolute bottom-0 left-0"
                  />
                </td>
                <td className="px-4 border border-black relative">
                  45 piece CIDs{" "}
                  <AiOutlineDownload
                    width={20}
                    height={20}
                    className="absolute bottom-0 left-0"
                  />
                </td>
                <td className="px-4 border border-black">
                  Last called 22 hours ago
                  <div className="flex items-center justify-center gap-2">
                    <Image
                      src="/greenactive.png"
                      alt="FVM Logo"
                      width={20}
                      height={20}
                    />
                    Actively used
                  </div>
                </td>
              </tr>
              <tr>
                <td className="px-4 py-4 border border-black">
                  <a
                    href="https://www.example.com"
                    className="text-blue-600 underline"
                  >
                    0xeubfoueghohuefhofeuhoefwuheufoewuhefowuhfe
                  </a>
                </td>
                <td className="px-4 border border-black">Calib net</td>
                <td className="px-4 border border-black relative">
                  3 active deal ids
                  <AiOutlineDownload
                    width={20}
                    height={20}
                    className="absolute bottom-0 left-0"
                  />
                </td>
                <td className="px-4  border border-black relative">
                  15 piece CIDs{" "}
                  <AiOutlineDownload
                    width={20}
                    height={20}
                    className="absolute bottom-0 left-0"
                  />
                </td>
                <td className="px-4 border border-black">
                  Last called 3 months ago
                  <div className="flex items-center justify-center gap-2">
                    <Image
                      src="/whitecircle.svg"
                      alt="FVM Logo"
                      width={20}
                      height={20}
                    />
                    Not actively used
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div>
          <div className="flex items-center text-lg font-bold gap-2 mb-2">
            <Image
              src="/lighthouse.jpeg"
              alt="Vercel Logo"
              width={42}
              height={16}
            />
            Lighthouse
          </div>
          <table className="table-fixed w-screen md:w-2/3">
            <tbody>
              <tr className="text-center">
                <td className="py-2 border border-black">Contract Address</td>
                <td className="border border-black">Network</td>
                <td className="border border-black">Active Deal IDs</td>
                <td className="border border-black ">Piece CIDs</td>
                <td className="border border-black">Status</td>
              </tr>
              <tr>
                <td className="px-4 py-8 border border-black">
                  <a
                    href="https://www.example.com"
                    className="text-blue-600 underline"
                  >
                    0xeubfoueghohuefhofeuhoefwuheufoewuhefowuhfe
                  </a>
                </td>
                <td className="px-4 border border-black">Calib net</td>
                <td className="px-4 border border-black relative">
                  33 active deal IDs [heqiohqoihwoihehwqoewihewoqiheo]{" "}
                  <AiOutlineDownload
                    width={20}
                    height={20}
                    className="absolute bottom-0 left-0"
                  />
                </td>
                <td className="px-4 border border-black relative">
                  45 piece CIDs{" "}
                  <AiOutlineDownload
                    width={20}
                    height={20}
                    className="absolute bottom-0 left-0"
                  />
                </td>
                <td className="px-4 border border-black">
                  Last called 22 hours ago
                  <div className="flex items-center justify-center gap-2">
                    <Image
                      src="/greenactive.png"
                      alt="FVM Logo"
                      width={20}
                      height={20}
                    />
                    Actively used
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}
