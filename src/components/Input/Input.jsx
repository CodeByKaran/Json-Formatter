import React from "react";

export default function Input({ setRawJsonData, Json, style }) {
  return (
    <>
      <textarea
        className="scroll-m-10 scroll w-full min-h-[calc(100vh-40vh)] outline-none p-2 text-base transition-[color] duration-300 font-semibold leading-[1.2] resize-none border-t border-b border-t-gray-400/50 border-b-gray-400/50"
        placeholder="Enter Your Json..."
        value={Json}
        onChange={setRawJsonData}
        spellCheck="false"
        autoFocus
        style={{
          whiteSpace: "nowrap",
          overflowX: "auto",
          ...style
        }}
      />
    </>
  );
}
