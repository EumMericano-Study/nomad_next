import { NextPageContext } from "next";
import { useRouter } from "next/router";
import Seo from "../../components/Seo";

export default function Detail({ params }: { params: string[] }) {
    const [title, id] = params || [];
    return (
        <div>
            <Seo title={title} />
            <h4>{title}</h4>
        </div>
    );
}

export function getServerSideProps({ params: { params } }: any) {
    return {
        props: {
            params,
        },
    };
}
