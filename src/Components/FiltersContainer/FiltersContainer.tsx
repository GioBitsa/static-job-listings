import { Container } from "./Style";
import { CreateGlobalContext } from "../../Context/GlobalContext";
import { useContext } from "react";

const FiltersContainer = () => {
  const myContext = useContext(CreateGlobalContext);

  return <Container>{myContext?.activeFilters}</Container>;
};

export default FiltersContainer;
