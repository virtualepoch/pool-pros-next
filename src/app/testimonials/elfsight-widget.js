"use client";
import { ElfsightWidget } from "next-elfsight-widget";

export const ElfsightWidgetComponent = ({ styles }) => {
  return (
    <div className={styles.wrapperWidget}>
      <ElfsightWidget
        className={styles.widget}
        widgetId="14bbd675-742a-4a71-b036-f68fe00f0abb"
      />
    </div>
  );
};
