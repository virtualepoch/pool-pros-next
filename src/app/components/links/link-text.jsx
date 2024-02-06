export const LinkText = ({ addedClass }) => {
  return (
    <a
      className={`contact-link text ${addedClass}`}
      href="sms:+12084754344?body=Hi, Can you help me with "
    >
      <p className="contact-link-text">Text</p>
      <div className="icon text" />
    </a>
  );
};
