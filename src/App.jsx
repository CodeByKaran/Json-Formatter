import React, { useState, useCallback } from "react";
import Input from "./components/Input/Input.jsx";
import Button from "./components/Button/Button.jsx";

export default function App() {
  const [json, setJson] = useState("");
  const [style, setStyle] = useState({
    fontSize: "17px",
    color: "#181818",
    fontWeight: "400"
  });

  const handleInputChange = e => setJson(e.target.value);

  const handleStyleChange = useCallback((key, value) => {
    setStyle(prev => ({ ...prev, [key]: value }));
  }, []);

  const formatJson = () => {
    try {
      const parsedData = JSON.parse(json);
      setJson(JSON.stringify(parsedData, null, 4));
    } catch (error) {
      console.error("Invalid JSON data:", error);
    }
  };

  const clearJson = () => setJson("");

  const copyJsonToClipboard = () => {
    navigator.clipboard.writeText(json);
  };

  return (
    <center className="flex flex-col p-2 w-full justify-center items-center h-full">
      <h2
        className="font-extrabold text-[26px] text-left mx-auto w-[95%] bg-clip-text text-transparent bg-gradient-to-r from-orange-900 to-35% via-green-900 to-slate-900 tracking-tight drop-shadow-lg transform hover:scale-105 transition-transform duration-300 "
        style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial,sans-serif' }}
      >
        JSON || FORMAT
      </h2>
      <div className="mt-8 px-4 py-3 h-fit bg-white w-[95%] md:w-[80%] rounded-lg">
        <div className="flex justify-start w-full">
          <input
            type="number"
            className="w-[100px] p-2 border border-black rounded mb-2 text-center mx-2"
            placeholder="Font Size"
            onChange={e => handleStyleChange("fontSize", e.target.value + "px")}
          />
          <input
            type="text"
            className="w-[100px] p-2 border border-black rounded mb-2 text-center mx-2"
            placeholder="Font Color"
            onChange={e => handleStyleChange("color", e.target.value)}
          />
          <input
            type="number"
            className="w-[100px] p-2 border border-black rounded mb-2 text-center mx-2"
            placeholder="Font Weight"
            onChange={e => handleStyleChange("fontWeight", e.target.value)}
          />
        </div>
        <Input setRawJsonData={handleInputChange} Json={json} style={style} />
        <div className="flex justify-start w-full">
          <Button click={formatJson} text="Format" />
          <Button click={clearJson} text="Clear" />
          <Button click={copyJsonToClipboard} text="Copy" />
        </div>
      </div>
    </center>
  );
}
