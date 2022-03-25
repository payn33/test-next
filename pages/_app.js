import "../styles/globals.css";
import useHover from "../utils/useHover";
import Cursor from "../components/cursor";

function MyApp({ Component, pageProps }) {
  const [isHovered] = useHover();
  return (
    <div>
      <Cursor hover={isHovered} />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
