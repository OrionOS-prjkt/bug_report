export type Reports = {
    title: string;
    slug: string;
    device: string;
    detail: string;
}[];

export const reports : Reports = [
    {
        title: "Bug when trying to open setting",
        slug: "bug-when-open-setting",
        device: "sweet",
        detail: "force close when i tried to open setings"
    },
    {
        title: "Bug when rotating phone",
        slug: "bug-when-rotatingg",
        device: "tissot",
        detail: "this is dump data, so just test string not a real bug"
    },
]