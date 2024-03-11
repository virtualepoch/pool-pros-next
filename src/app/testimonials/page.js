import { ElfsightWidgetComponent } from "./elfsight-widget";
import { LoadingPanel } from "./loading-panel";
import styles from "./page.module.css";

export const metadata = {
  title: "Testimonials",
};

export default function Testimonials() {
  return (
    <main className="main">
      <h1 className="route-header">Testimonials</h1>

      <p style={{ padding: "24px", maxWidth: "500px", margin: "auto" }}>
        Please Note: We have recently re-branded. Our previous company name was{" "}
        <span style={{ textDecoration: "underline" }}>
          IdaHomeServ Pool & Spa
        </span>
        . We will be updating with new reviews as they come in. Thanks!
      </p>

      <LoadingPanel styles={styles} />

      <ElfsightWidgetComponent styles={styles} />
    </main>
  );
}
