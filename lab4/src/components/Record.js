import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserGraduate, faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Record = ({ data }) => {
  return (
    <div className="record">
      <div className="icon-back">
        <FontAwesomeIcon icon={faUserGraduate} className="icon" />
      </div>
      <div className="record-data">
        <h3>{`${data.title} - ${data.name}`}</h3>
        <p>{data.description}</p>
        <h6>{data.tags.map((tag) => `#${tag} `)}</h6>
      </div>
      <FontAwesomeIcon icon={faEnvelope} className="icon" />
    </div>
  );
};

export default Record;
