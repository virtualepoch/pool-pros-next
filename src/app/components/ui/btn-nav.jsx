export const BtnNav = ({ nav, setNav }) => {
  return (
    <>
      <div className={nav ? "btn-nav-bg nav-open" : "btn-nav-bg"} />

      <button
        className={nav ? "btn-nav-bg-underlay nav-open" : "btn-nav-bg-underlay"}
        aria-label="Background underlay to close the navigation menu"
        onClick={() => setNav(false)}
      />

      <button
        className="btn-nav flex-center"
        aria-label="Button to open the navigation menu"
        onClick={() => setNav(!nav)}
      >
        <div className={nav ? "bar open scale-x" : "bar open"}></div>
        <div className={nav ? "bar open scale-x" : "bar open"}></div>

        <div className={nav ? "bar close" : "bar close scale-x"}></div>
        <div className={nav ? "bar close" : "bar close scale-x"}></div>
      </button>
    </>
  );
};
