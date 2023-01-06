import { Container } from "./Style";
import { useState, useContext, useEffect } from "react";
import { CreateGlobalContext } from "../../Context/GlobalContext";

type ProjectTagsProps = {
  text: string;
};

const ProjectTags = ({ text }: ProjectTagsProps) => {
  const [active, setActive] = useState(false);
  const { activeFilters, setActiveFilters } = useContext(CreateGlobalContext);

  useEffect(() => {
    if (active && !activeFilters.includes(text)) {
      setActiveFilters([...activeFilters, text]);
      setActive(false);
    } else {
      setActive(false);
    }
  }, [active, activeFilters, setActiveFilters, text]);

  return (
    <Container
      className={
        activeFilters.length !== 0 && activeFilters.includes(text)
          ? "active"
          : ""
      }
      onClick={() => setActive(true)}
    >
      {text}
    </Container>
  );
};

export default ProjectTags;
