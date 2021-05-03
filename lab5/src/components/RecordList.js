import React, { useEffect, useState } from "react";
import Record from "./Record";

const RecordList = ({
  recordList,
  tagSearchInput,
  titleSearchInput,
  setShownPeople,
  usedTags,
  setUsedTags,
  editRecord,
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
        return null;
      })
    );
  }, [tagSearchInput, titleSearchInput, recordList]);

  useEffect(() => {
    setShownPeople(filteredList.length);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filteredList]);

  return (
    <>
      {filteredList.map((record) => (
        <Record
          key={record.id}
          data={record}
          usedTags={usedTags}
          setUsedTags={setUsedTags}
          editRecord={editRecord}
        />
      ))}
    </>
  );
};

export default RecordList;
