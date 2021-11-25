import React from "react";
import * as Styles from "./styles";

function LandingPage() {
  return (
    <Styles.Wrapper>
      <Styles.Title>Complete It</Styles.Title>
      <Styles.SubHeading>Your Task Manager</Styles.SubHeading>
      <Styles.Image
        src={
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTj0VaH5_dHhdk9fWWZ381-npl7ipBErYCwbw&usqp=CAU"
        }
        alt={"todo"}
      />
    </Styles.Wrapper>
  );
}

export default LandingPage;
