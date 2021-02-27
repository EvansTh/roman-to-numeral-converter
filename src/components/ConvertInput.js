import React from "react";

function ConvertInput(props) {
  return (
    <input 
     onChange={props.onChange} 
     value={props.value}
     className="w-full pl-3 pr-10 py-2 border-2 border-gray-200 rounded-xl hover:border-gray-300 focus:outline-none focus:border-blue-500 transition-colors" 
     />
  );
}

export default ConvertInput;
