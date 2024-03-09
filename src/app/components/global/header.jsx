import { SiteLogo } from "./site-logo";

export const Header = () => {
  return (
    <header className="header">
      <SiteLogo priority={true} />

      <p className="header-phone-number">(208)475-4344</p>
    </header>
  );
};
