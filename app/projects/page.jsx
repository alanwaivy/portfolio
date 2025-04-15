import React, { Suspense } from "react";
import { Navigation } from "../components/nav";
import data from "../../data.json";
import ProjectsComponent from "./projects";

export const metadata = {
    title: "Projects",
};

export default function ProjectsPage({ searchParams: { customUsername } }) {
    const username = customUsername || process.env.GITHUB_USERNAME || data.githubUsername;

    return (
        <div className="relative pb-16">
            <Navigation />
            <div className="px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
                <div className="max-w-2xl mx-auto lg:mx-0">
                    <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
                        Projects
                    </h2>
                    <p className="mt-4 text-zinc-400">
                        {customUsername ? `${customUsername}'s projects` : data.description}
                        {/* <pre>{JSON.stringify(vercelProjects.projects[1], null, 4)}</pre> */}
                    </p>
                </div>

                <Suspense fallback={
                    <div className="flex items-center justify-center w-full h-32">
                        <div className="relative w-16 h-16">
                            <div className="absolute inset-0 border-t-4 border-blue-500 border-solid rounded-full animate-spin"></div>
                            <div className="absolute inset-0 border-r-4 border-purple-500 border-solid rounded-full animate-pulse opacity-75"></div>
                        </div>
                    </div>
                }>
                    <ProjectsComponent username={username} />
                </Suspense>
            </div>
        </div>
    );
}
