import { AddButton, BackButton } from "@/components/button";
import { Container } from "@/components/container";
import { ChevronLeftIcon } from "@/components/icon";
import { SITE_CONFIG } from "@/lib/const";
import { reports } from "@/lib/tweets";
import clsx from "clsx";
import Link from "next/link";
import { notFound } from "next/navigation";

interface Props {
    params: {
        id: string;
    };
}

export async function generateStaticParams() {
    return reports.map((item) => ({
        id: item.slug
    }));
}

export default function Page ({ params } : Props) {
    const report = reports.find((report) => report.slug === params.id);

    if (!report) {
        notFound();
    }

    return (
        <Container className="py-10 relative">
            <div className="flex justify-between items-center">
                <BackButton href="/"/>
                <AddButton href={SITE_CONFIG.FORM}>Report bug</AddButton>
            </div>

            <div>
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 text-balance">
                    {report.title}
                </h2>
            </div>

            <div>
                <p className="mt-2 leading-8 text-gray-600 text-balance text-md">
                    Device: {report.device}
                </p>

                <p className="mt-2 leading-8 text-gray-600 text-balance text-md">
                    Details: {report.detail}
                </p>
            </div>
        </Container>
    )
}