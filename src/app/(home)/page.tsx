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
        { reports.map((bug, index) => {
          return(
            <Link key={index} href={bug.slug}>
              <div className="p-4 my-4 bg-white rounded-md shadow-lg">
                <h1 className="text-lg text-black font-bold mt-2">{bug.title}</h1>
                <p className="mt-2 text-xs text-gray-500">{bug.detail}</p>
              </div>
            </Link>
          );
        })}
      </Container>
    </div>
  );
}