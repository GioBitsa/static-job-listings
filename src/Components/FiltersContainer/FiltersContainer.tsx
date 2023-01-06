import { Container } from "./Style";
import { CreateGlobalContext } from "../../Context/GlobalContext";
import { useContext } from "react";
import { SingleProjectTag, ClearButton } from "./Style";

const FiltersContainer = () => {
  const { activeFilters, deleteSingleTag, deleteAllList } =
    useContext(CreateGlobalContext);

  const handleDelete = (value: string) => {
    deleteSingleTag(value);
  };

  const deleteAll = () => {
    deleteAllList();
  };

  return (
    <Container className={activeFilters.length !== 0 ? "active" : ""}>
      <div>
        {activeFilters?.map((item, index) => (
          <SingleProjectTag key={index}>
            {item}
            <button onClick={() => handleDelete(item)}>X</button>
          </SingleProjectTag>
        ))}
      </div>
      <ClearButton onClick={() => deleteAll()}>Clear</ClearButton>
    </Container>
  );
};

export default FiltersContainer;
