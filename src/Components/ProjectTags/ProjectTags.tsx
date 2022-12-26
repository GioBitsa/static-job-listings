import { Container } from "./Style";

type ProjectTagsProps = {
  text: string;
  value: boolean;
};

const ProjectTags = ({ text, value }: ProjectTagsProps) => {
  return <Container className={value ? "active" : ""}>{text}</Container>;
};

export default ProjectTags;
