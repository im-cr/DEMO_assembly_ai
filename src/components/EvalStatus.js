import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import EvalItem from "./EvalItem";
import NotFound from "./NotFound";

const EvalStatus = () => {
  let text;
  let icon;
  let show = false;
  let location = useLocation();
  const [txt, SetText] = useState(text);
  const [emoji, SetEmoji] = useState(icon);
  const [status, SetStatus] = useState(show);

  useEffect(() => {
    if (location.state) {
      SetStatus(true);
      SetText(location.state.text);
      SetEmoji(location.state.icon);
    }
  }, []);

  return <>{!status ? <NotFound /> : <EvalItem msg={txt} image={emoji} />}</>;
};

export default EvalStatus;
