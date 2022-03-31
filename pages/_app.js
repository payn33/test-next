import "../styles/globals.css";
import useHover from "../utils/useHover";
import Cursor from "../components/cursor";
import Layout from "../layouts/defaultLayout";

function MyApp({ Component, pageProps }) {
  const [isHovered] = useHover();
  return (
    <Layout>
      {/* <Cursor hover={isHovered} /> */}
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
