import Header from "./Header";
import Footer from "./Footer";

import styles from "./Layout.module.css"

function Layout({ children }) {
  
  return (
    <>
      <Header />
      <div className={styles.children}>{children}</div>
      <Footer />
      <div dir="ltr" className={styles.afshin}>
        <p>Afshin Sahrae</p>Next.js | Real Estate Site Project &copy;
      </div>
    
    </>
  );
}

export default Layout;
