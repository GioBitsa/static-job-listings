import { Wrapper, Container } from "./Style";

type PageLayoutProps = {
  children: React.ReactNode;
};

const PageLayout = ({ children }: PageLayoutProps) => {
  return (
    <Container>
      <Wrapper>{children}</Wrapper>
    </Container>
  );
};

export default PageLayout;
