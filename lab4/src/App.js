import { useState } from "react";
import NewEntry from "./components/NewEntry";
import RecordList from "./components/RecordList";
import SearchSpace from "./components/SearchSpace";
import "./styles/App.scss";

function App() {
  const [recordList, setRecordList] = useState([
    {
      title: "SO2",
      name: "Tomasz",
      description:
        "Please someone help me with SO, I have no idea what im doing...",
      tags: ["help", "S.O.S"],
    },
    {
      title: "VHDL",
      name: "Mark Dark",
      description: "I'm looking for someone to make VHDL project with",
      tags: ["vhdl", "digital", "circuits"],
    },
    {
      title: "PIW",
      name: "Tomasz",
      description: "How you all guys doin'?",
      tags: ["react", "sampletag", "hello"],
    },
  ]);

  const [tagSearchInput, setTagSearchInput] = useState("");
  const [titleSearchInput, setTitleSearchInput] = useState("");
  const [shownAmount, setShownAmount] = useState(0);

  const addRecord = (recordData) => {
    setRecordList([recordData, ...recordList]);
  };

  return (
    <div className="App">
      <SearchSpace
        tagSearchInput={tagSearchInput}
        setTagSearchInput={setTagSearchInput}
        titleSearchInput={titleSearchInput}
        setTitleSearchInput={setTitleSearchInput}
        shownAmount={shownAmount}
      />
      <NewEntry addRecord={addRecord} />
      <RecordList
        recordList={recordList}
        tagSearchInput={tagSearchInput}
        titleSearchInput={titleSearchInput}
        setShownAmount={setShownAmount}
      />
    </div>
  );
}

export default App;
