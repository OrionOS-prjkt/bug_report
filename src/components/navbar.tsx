import { SITE_CONFIG } from "@/lib/const";
import { headers } from "next/headers";
import Image from "next/image";
import Link from "next/link";

export const Navbar = () => {
    const headerList = headers();
    const domain = headerList.get("x-reqquest-domain");

    const title = domain === "orion-bug-report.vercel.app" ? "ReportBug" : "OrionOS";

    return (
        <div className="bg-white shadow-md sticky top-0 z-50">
            <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex">
                        <div className="flex-shrink-0 flex items-center">
                            <Link href={"/"}>
                                <div className="flex items-center">
                                    <Image src="/OrionOS.svg" alt="Orion-logo" width={35} height={35}/>
                                    <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-xl text-balance">
                                        {title}
                                    </h1>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div>
                        <a href={SITE_CONFIG.REPOSITORY_URL}>
                            <Image src="/github.svg" alt="github" width={30} height={30}/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}