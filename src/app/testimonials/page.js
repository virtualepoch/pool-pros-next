import { Footer } from "../components/footer";
import { Header } from "../components/header";
import { BtnToTop } from "../components/ui/btn-to-top";
import { ElfsightWidgetComponent } from "./elfsight-widget";
import { LoadingPanel } from "./loading-panel";
import styles from "./page.module.css";

export const viewport = {
  themeColor: "#f0f",
};

export default function Testimonials() {
  return (
    <main className="main">
      <h1 className="route-header">Testimonials</h1>

      <LoadingPanel styles={styles} />

      <ElfsightWidgetComponent styles={styles} />
    </main>
  );
}
