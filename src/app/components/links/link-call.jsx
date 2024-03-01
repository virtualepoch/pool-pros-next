export const LinkCall = ({ addedClass }) => {
  return (
    <a className={`contact-link call ${addedClass}`} href="tel:+12084754344">
      <p className="contact-link-text">208-475-4344</p>
      <div className="icon call" />
    </a>
  );
};
