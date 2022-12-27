import { Container } from "./Style";
import { useState, useContext, useEffect } from "react";
import { CreateGlobalContext } from "../../Context/GlobalContext";

type ProjectTagsProps = {
  text: string;
};

const ProjectTags = ({ text }: ProjectTagsProps) => {
  const [active, setActive] = useState(false);
  const myContext = useContext(CreateGlobalContext);

  useEffect(() => {
    const handleClick = () => {
      if (active) {
        myContext?.setActiveFilters([...myContext.activeFilters, text]);
      } else {
        myContext?.setActiveFilters(
          myContext.activeFilters.filter((item) => item !== text)
        );
      }
    };

    handleClick();
  }, [active]);

  return (
    <Container
      className={
        active || myContext?.activeFilters.includes(text) ? "active" : ""
      }
      onClick={() => {
        setActive(!active);
      }}
    >
      {text}
    </Container>
  );
};

export default ProjectTags;
