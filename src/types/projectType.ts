import type { AstroComponentFactory } from "astro/runtime/server/index.js";

export type ProjectType = {
    title: string;
    status: 'building' | 'production' | 'disabled' | 'design';
    srcImg: string;
    description: string;
    link: {
        view: {
            icon?: AstroComponentFactory;
            title: string;
            href: string;
        }
        github?: {
            href: string;
        }
    };
};

