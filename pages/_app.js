import "@/styles/globals.css";
import "../styles/tailwind.css";
import Layout from "./components/Layout";
import { UserProvider } from "@auth0/nextjs-auth0";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
