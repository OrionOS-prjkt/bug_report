export const SITE_CONFIG = {
    REPOSITORY_URL: "https://github.com/OrionOS-prjkt/bug_report",
    CREATE_ISSUE: (title: string) =>
        `https://github.com/OrionOS-prjkt/bug_report/issues/new?title=${title}&labels=feedback`,
    FORM: "https://forms.gle/GWi7Dt8b3K6rToy6A",
    DELETE_FORM: "https://github.com/OrionOS-prjkt/bug_report/delete",
} as const;