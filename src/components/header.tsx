import { AddButton, DeleteButton } from "./button";
import { ArrowRightIcon } from "./icon";
import { SITE_CONFIG } from "@/lib/const";

export const Header = () => {
    return (
        <div className="bg-white px-6 py-2 sm:py-12 lg:px8">
            <div className="mx-auto max-w-2xl text-center">
                <h2 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl text-balance">
                    Bug Report OrionOS-Prjkt
                </h2>
                <p className="mt-6 text-lg leading-8 text-gray-600 text-balance">
                    If you feel you have a bug related to OrionOS, please provide it here, help us improve OrionOS to be even better!
                </p>

                <div className="mt-8 flex justify-center space-x-3">
                    {/* req add bug */}
                    <div className="mt-2">
                        <AddButton href={SITE_CONFIG.FORM}>Report bug</AddButton>
                    </div>
                    {/* req remove bug */}
                    <div className="mt-2">
                        <DeleteButton href="https://t.me/romiyusna">Delete bug</DeleteButton>
                    </div>
                </div>
            </div>
        </div>
    );
};
