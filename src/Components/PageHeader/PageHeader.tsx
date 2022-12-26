import { Container } from "./Style";
import { DesktopHeader, MobileHeader } from "../../Shared/localFiles";
import { useEffect, useState } from "react";

const PageHeader = () => {
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth < 600) {
        setMobile(true);
      } else {
        setMobile(false);
      }
    });
  }, []);

  return (
    <Container>
      {mobile ? (
        <img src={MobileHeader} alt="mobile header" />
      ) : (
        <img src={DesktopHeader} alt="desktop header" />
      )}
    </Container>
  );
};

export default PageHeader;
