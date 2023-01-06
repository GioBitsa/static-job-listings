import { Container } from "./Style";
import { useState, useContext } from "react";
import { CreateGlobalContext } from "../../Context/GlobalContext";

type ProjectTagsProps = {
  text: string;
};

const ProjectTags = ({ text }: ProjectTagsProps) => {
  const [active, setActive] = useState(false);
  const { activeFilters, setActiveFilters } = useContext(CreateGlobalContext);

  const handleClick = () => {
    if (!active) {
      setActiveFilters([...activeFilters, text]);
    } else {
      setActiveFilters(activeFilters.filter((item) => item !== text));
    }
  };

  return (
    <Container
      className={
        activeFilters.length !== 0 && activeFilters.includes(text)
          ? "active"
          : ""
      }
      onClick={() => {
        handleClick();
        setActive(!active);
      }}
    >
      {text}
    </Container>
  );
};

export default ProjectTags;
