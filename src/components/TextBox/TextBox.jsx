import "./TextBox.scss";

const TextBox = ({ paragraphs = [], className }) => {
  return (
    <div className={`${className}`}>
      {paragraphs.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
    </div>
  );
};
export default TextBox;
