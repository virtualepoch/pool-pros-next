export const LinkCall = ({ addedClass }) => {
  return (
    <a className={`contact-link call ${addedClass}`} href="tel:+12084754344">
      <p className="contact-link-text">Call</p>
      <div className="icon call" />
    </a>
  );
};
