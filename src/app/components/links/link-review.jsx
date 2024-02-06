export const LinkReview = ({ addedClass }) => {
  return (
    <a
      className={`contact-link leave-review  ${addedClass}`}
      href="https://g.page/r/CY961LE6yYZ1EBE/review"
      target="_blank"
      rel="noreferrer"
    >
      <p className="contact-link-text">Review</p>
      <div className="icon google" />
    </a>
  );
};
