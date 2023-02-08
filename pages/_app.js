import './styles/main.css';
// import {SessionProvider} from "next-auth/react";
import Head from "next/head.js";
import SiteLayout from "../components/layout/SiteLayout.js";
// import Wrapper from "../components/session/Wrapper.js";

export default function App({Component, pageProps}) {
    return (
        <SiteLayout>
            <Head>
                <title>Health</title>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
             {/*<SessionProvider options={{clientMaxAge: 0}} session={pageProps.session}>*/}
                {/*<Wrapper>*/}
                    <Component {...pageProps} />
                {/*</Wrapper>*/}
             {/*</SessionProvider>*/}

        </SiteLayout>
    );
}
