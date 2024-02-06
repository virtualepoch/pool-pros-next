import { ElfsightWidgetComponent } from "./elfsight-widget";
import { LoadingPanel } from "./loading-panel";
import styles from "./page.module.css";

export default function Testimonials() {
  return (
    <main className="main">
      <h3 className="route-header">Testimonials</h3>

      <LoadingPanel styles={styles}/>

      <ElfsightWidgetComponent styles={styles} />
    </main>
  );
}
