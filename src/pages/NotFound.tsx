import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/notFound.module.scss";
function NotFound() {
  return (
    <div className={styles.notFoundContainer}>
      <div className={styles.notFound}>
        <h2>
          <span>404 - Not Found</span>
        </h2>
        <p>
          <span>"Wubba Lubba Dub Dub!"</span>
        </p>
        <p>
          <span>
            Looks like you're in an alternate dimension. Go back{" "}
            <Link to="/">home</Link>!
          </span>
        </p>
      </div>
    </div>
  );
}

export default NotFound;
