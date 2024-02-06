// import { TopLinksCallText } from "./TopLinksCallText";

export const BtnNav = ({ nav, setNav }) => {
    return (
      <>
        {/* <TopLinksCallText
          styleBefore={styleBefore}
          setStyleBefore={setStyleBefore}
        /> */}
  
        <div className={nav ? "btn-nav-bg nav-open" : "btn-nav-bg"} />
  
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