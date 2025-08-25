import { useState } from "react";
import LoadingSpinner from "./LoadingSpinner";

const ImgWithLoader = (props: React.ImgHTMLAttributes<HTMLImageElement>) => {
  const [loaded, setLoaded] = useState(false);
  return (
    <div style={{ position: "relative", minHeight: 120 }}>
      {!loaded && <LoadingSpinner />}
      <img
        {...props}
        style={{
          ...props.style,
          display: loaded ? "block" : "none",
        }}
        onLoad={() => setLoaded(true)}
      />
    </div>
  );
};

export default ImgWithLoader;
