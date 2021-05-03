import { useState } from "react";
import NavigationDrawer from "./components/NavigationDrawer";
import { v4 as uuidv4 } from "uuid";
import "./styles/App.scss";

function App() {
  const [recordList, setRecordList] = useState([
    {
      id: uuidv4(),
      title: "SO2",
      name: "Tomasz",
      description:
        "Please someone help me with SO, I have no idea what im doing...",
      tags: ["help", "SO"],
    },
    {
      id: uuidv4(),
      title: "VHDL",
      name: "Mark Dark",
      description: "I'm looking for someone to make VHDL project with",
      tags: ["vhdl", "digital", "circuits"],
    },
    {
      id: uuidv4(),
      title: "PIW",
      name: "Tomasz",
      description: "How you all guys doin'?",
      tags: ["react", "sampletag", "hello"],
    },
  ]);

  const [groupRecordList, setGroupRecordList] = useState([
    {
      id: uuidv4(),
      title: "KPZ",
      name: "Tomasz, Łukasz",
      description: "We're looking for people for our team project",
      tags: ["PZ", "KPZ"],
      peopleNeeded: 3,
    },
    {
      id: uuidv4(),
      title: "NiDUC",
      name: "Firstname Lastname",
      description: "Anyone wanna do simulation on project?",
      tags: ["NiDUC", "project", "python"],
      peopleNeeded: 1,
    },
    {
      id: uuidv4(),
      title: "KPZ",
      name: "Marcin, Marek",
      description: "We're also looking for people for our team project",
      tags: ["react", "sampletag", "hello"],
      peopleNeeded: 2,
    },
  ]);

  const [usedTags, setUsedTags] = useState(["react", "c++", "c#"]);

  const addRecord = (recordData) => {
    setRecordList([recordData, ...recordList]);
  };

  const addGroupRecord = (recordGroupData) => {
    setGroupRecordList([recordGroupData, ...groupRecordList]);
  };

  const editRecord = (editedData) => {
    const newData = [];

    for (let record of recordList) {
      if (record.id !== editedData.id) {
        newData.push(record);
      } else {
        newData.push(editedData);
      }
    }
    setRecordList(newData);
  };

  const editGroupRecord = (editedGroupData) => {
    const newData = [];

    for (let record of groupRecordList) {
      if (record.id !== editedGroupData.id) {
        newData.push(record);
      } else {
        newData.push(editedGroupData);
      }
    }
    setGroupRecordList(newData);
  };

  return (
    <div className="App" style={{ textAlign: "center" }}>
      <NavigationDrawer
        recordList={recordList}
        addRecord={addRecord}
        editRecord={editRecord}
        groupRecordList={groupRecordList}
        addGroupRecord={addGroupRecord}
        editGroupRecord={editGroupRecord}
        usedTags={usedTags}
        setUsedTags={setUsedTags}
      />
    </div>
  );
}

export default App;
