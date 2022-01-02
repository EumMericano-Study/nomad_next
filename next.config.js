/** @type {import('next').NextConfig} */
module.exports = {
    reactStrictMode: true,
    async redirects() {
        return [
            {
                source: "/contact",
                destination: "https://youtube.com",
                permanent: false,
            },
            {
                source: "/old-blog/:path*",
                destination: "/new-sexy-blog/:path*",
                permanent: false,
            },
        ];
    },
};
