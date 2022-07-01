import { useState } from "react";
import { v4 } from "uuid";

const Edit = ({ add }) => {
  const [note, setNote] = useState("");

  function noteChanged(e) {
    setNote(e.target.value);
  }

  const [date, setDate] = useState("");

  function dateChanged(e) {
    setDate(e.target.value);
  }

  const [time, setTime] = useState("");

  function timeChanged(e) {
    setTime(e.target.value);
  }

  function addItem() {
    add(function (prevData) {
      return [
        {
          id: v4(),
          note,
          date,
          time,
        },
        ...prevData,
      ];
    });
  }
  return (
    <div>
      <h1>備忘錄</h1>
      <p>記事：</p>
      <input type="text" value={note} onChange={noteChanged} />
      <p>日期：</p>
      <input type="date" value={date} onChange={dateChanged} />
      <p>時間：</p>
      <input type="time" value={time} onChange={timeChanged} />
      <button onClick={addItem} className="add">
        新增
      </button>
    </div>
  );
};

export default Edit;
