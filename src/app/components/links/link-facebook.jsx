export const LinkFacebook = ({ addedClass, content = "Facebook" }) => {
  return (
    <a
      className={`contact-link facebook ${addedClass}`}
      href="https://www.facebook.com/IdaHomeServllC/"
      target="_blank"
      rel="noreferrer"
    >
      <p className="contact-link-text">{content}</p>
      <div className="icon facebook" />
    </a>
  );
};
