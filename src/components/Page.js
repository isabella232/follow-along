import React, { useState } from "react";

import Explore from "./Explore/Explore";
import Live from "./Live/Live";

const Page = props => {
  const [explore, setExplore] = useState(true);

  return (
    <>
      {explore ? (
        <Explore setExplore={setExplore} />
      ) : (
        <Live setExplore={setExplore} />
      )}
    </>
  );
};

export default Page;
