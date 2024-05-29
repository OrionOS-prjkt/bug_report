import { AddButton } from "@/components/button";
import { Container } from "@/components/container";
import { Header } from "@/components/header";

import { reports } from "@/lib/tweets";

import Link from "next/link";

export default function Page () {

  return (
    <div>
      <Header />
      <Container>
        <div className="flex justify-center items-center">
          <h1 className="font-bold trxt-xl">No bug reported</h1>
        </div>
        {/* { reports.map((bug, id) => {
          return(
            <Link key={id} href={`/bug/${bug.slug}`}>
              <div className="p-4 my-4 bg-white rounded-md shadow-lg">
                <h1 className="text-lg text-black font-bold mt-2">{bug.title}</h1>
                <p className="mt-2 text-xs text-gray-500">Device: {bug.device}</p>
              </div>
            </Link>
          );
        })} */}
      </Container>
    </div>
  );
}