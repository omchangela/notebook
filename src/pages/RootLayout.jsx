import { Outlet, useLocation } from "react-router-dom";

import Navigation from "../components/Navigation";
import styles from "./styles/RootLayout.module.css";

export default function RootLayout() {
  const location = useLocation();
  let isRootRoute;

  if (location.pathname == "/") {
    isRootRoute = true;
  }

  let hiddenOutletStyles = isRootRoute ? styles.hideElem : "";

  return (
    <div className={styles.container}>
      <Navigation isRootRoute={isRootRoute} />
      <main className={`${styles.main} ${hiddenOutletStyles}`}>
        <Outlet />
      </main>
    </div>
  );
}
