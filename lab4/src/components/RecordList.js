import React, { useEffect, useState } from "react";
import Record from "./Record";
import { v4 as uuidv4 } from "uuid";

const RecordList = ({
  recordList,
  tagSearchInput,
  titleSearchInput,
  setShownAmount,
}) => {
  const [filteredList, setFilteredList] = useState([...recordList]);

  useEffect(() => {
    setFilteredList(
      recordList.filter((record) => {
        if (titleSearchInput === "" && tagSearchInput === "") {
          return record;
        }

        if (
          titleSearchInput !== "" &&
          record.title.toLowerCase().includes(titleSearchInput.toLowerCase())
        ) {
          return record;
        }

        if (tagSearchInput !== "") {
          for (const tag of record.tags) {
            if (tag.includes(tagSearchInput)) {
              return record;
            }
          }
        }
      })
    );
  }, [tagSearchInput, titleSearchInput, recordList]);

  useEffect(() => {
    setShownAmount(filteredList.length);
  }, [filteredList]);

  return (
    <div className="record-list">
      {filteredList.map((record) => (
        <Record key={uuidv4()} data={record} />
      ))}
    </div>
  );
};

export default RecordList;
