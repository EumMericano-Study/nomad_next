import Head from "next/head";

interface SEOIState {
    title: string;
}

export default function Seo(props: SEOIState) {
    const { title } = props;
    return (
        <Head>
            <title>{title} | Next Movies</title>
        </Head>
    );
}
