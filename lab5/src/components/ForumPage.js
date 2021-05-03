import { useState } from "react";
import { Tabs, Tab } from "react-bootstrap";
import RecordList from "./RecordList";
import GroupRecordList from "./GroupRecordList";
import SearchSpace from "./SearchSpace";

const ForumPage = ({
  recordList,
  usedTags,
  setUsedTags,
  editRecord,
  groupRecordList,
  editGroupRecord,
}) => {
  const [tagSearchInput, setTagSearchInput] = useState("");
  const [titleSearchInput, setTitleSearchInput] = useState("");
  const [shownPeople, setShownPeople] = useState(0);
  const [shownGroups, setShownGroups] = useState(0);

  const [key, setKey] = useState("people");

  return (
    <>
      <SearchSpace
        tagSearchInput={tagSearchInput}
        setTagSearchInput={setTagSearchInput}
        titleSearchInput={titleSearchInput}
        setTitleSearchInput={setTitleSearchInput}
        shownAmount={key === "people" ? shownPeople : shownGroups}
      />
      <div className="record-list">
        <Tabs
          id="controlled-tab-example"
          activeKey={key}
          onSelect={(k) => {
            setKey(k);
          }}
        >
          <Tab eventKey="people" title="People">
            <RecordList
              recordList={recordList}
              tagSearchInput={tagSearchInput}
              titleSearchInput={titleSearchInput}
              setShownPeople={setShownPeople}
              usedTags={usedTags}
              setUsedTags={setUsedTags}
              editRecord={editRecord}
            />
          </Tab>
          <Tab eventKey="group" title="Groups">
            <GroupRecordList
              groupRecordList={groupRecordList}
              tagSearchInput={tagSearchInput}
              titleSearchInput={titleSearchInput}
              setShownGroups={setShownGroups}
              usedTags={usedTags}
              setUsedTags={setUsedTags}
              editGroupRecord={editGroupRecord}
            />
          </Tab>
        </Tabs>
      </div>
    </>
  );
};

export default ForumPage;
