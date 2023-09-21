import { memo } from "react";
import "./CTStatus.css";
const CTStatus = (Proms) => {
  const { description, files, id } = Proms;
  return (
    <div className="HCTStatus" key={id}>
      <p>{description}</p>
      {/* {files.map((element) => {
        return <img src={element.letfilePath} alt="" />;
      })} */}
    </div>
  );
};

export default memo(CTStatus);
