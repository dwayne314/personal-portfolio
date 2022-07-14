import Layout from "../components/layout";
import { CurrentSectionProvider } from "../hooks/useCurrentSection";
import { ErrorProvider } from "../hooks/useError";
import { MenuProvider } from "../hooks/useMenu";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <ErrorProvider>
      <CurrentSectionProvider>
        <MenuProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </MenuProvider>
      </CurrentSectionProvider>
    </ErrorProvider>
  );
}

export default MyApp;
