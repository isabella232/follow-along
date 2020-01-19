import React, { useState } from "react";

import Explore from "./Explore/Explore";
import Live from "./Live/Live";

const Page = props => {
  const [explore, setExplore] = useState(true);
  const [currentDetail, setCurrentDetail] = useState(null); // media, index

  return (
    <>
      {explore ? (
        <Explore setExplore={setExplore} setCurrentDetail={setCurrentDetail} />
      ) : (
        <Live setExplore={setExplore} currentDetail={currentDetail} />
      )}
    </>
  );
};

export default Page;
