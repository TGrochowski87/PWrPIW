import React, { useEffect, useState } from "react";
import GroupRecord from "./GroupRecord";

const GroupRecordList = ({
  groupRecordList,
  tagSearchInput,
  titleSearchInput,
  setShownGroups,
  usedTags,
  setUsedTags,
  editGroupRecord,
}) => {
  const [filteredList, setFilteredList] = useState([...groupRecordList]);

  useEffect(() => {
    setFilteredList(
      groupRecordList.filter((record) => {
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
  }, [tagSearchInput, titleSearchInput, groupRecordList]);

  useEffect(() => {
    setShownGroups(filteredList.length);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filteredList]);

  return (
    <>
      {filteredList.map((record) => (
        <GroupRecord
          key={record.id}
          data={record}
          usedTags={usedTags}
          setUsedTags={setUsedTags}
          editGroupRecord={editGroupRecord}
        />
      ))}
    </>
  );
};

export default GroupRecordList;
