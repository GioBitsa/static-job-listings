import dataArrayProps from "../../Models/dataArray.model";
import Tags from "../Tags/Tags";
import ProjectTags from "../ProjectTags/ProjectTags";
import { Container, Details, ProjectTagsContainer } from "./Style";

const SingleProject = (props: dataArrayProps) => {
  return (
    <Container>
      <img src={props.logo} alt="" />
      <Details>
        <div>
          <h3>{props.role}</h3>
          {props.new && <Tags text="new" />}
          {props.featured && <Tags text="featured" />}
        </div>
        <h2>{props.position}</h2>
        <div>
          <span>{props.postedAt}</span>
          <span>{props.contract}</span>
          <span>{props.location}</span>
        </div>
      </Details>
      <ProjectTagsContainer>
        {props.tools.concat(props.languages)?.map((item, index) => (
          <ProjectTags key={index} text={item} />
        ))}
      </ProjectTagsContainer>
    </Container>
  );
};

export default SingleProject;
