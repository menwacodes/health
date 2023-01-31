import './styles/main.css';
import Head from "next/head.js";
import SiteLayout from "../components/layout/SiteLayout.js";

export default function App({Component, pageProps}) {
    return (
        <SiteLayout>
            <Head>
                <title>Health</title>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <Component {...pageProps} />
        </SiteLayout>
    );
}
