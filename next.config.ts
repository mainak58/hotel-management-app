import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "i.sstatic.net",
            },
            {
                protocol: "https",
                hostname: "cdn.pixabay.com",
            },
        ],
    },
};

export default nextConfig;
