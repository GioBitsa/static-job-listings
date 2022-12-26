import { Container } from "./Style";

type TagsProps = {
  text: string;
};

const Tags = ({ text }: TagsProps) => {
  return (
    <Container className={text === "new" ? "new" : "default"}>{text}</Container>
  );
};

export default Tags;
