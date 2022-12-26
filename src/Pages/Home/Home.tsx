import PageLayout from "../../Components/PageLayout/PageLayout";
import SingleProject from "../../Components/SingleProject/SingleProject";
import dataArray from "../../dataArray";
import dataArrayProps from "../../Models/dataArray.model";
import { List } from "./Style";

const Home = () => {
  return (
    <PageLayout>
      <List>
        {dataArray?.map((item: dataArrayProps, index: number) => (
          <SingleProject key={index} {...item} />
        ))}
      </List>
    </PageLayout>
  );
};

export default Home;
