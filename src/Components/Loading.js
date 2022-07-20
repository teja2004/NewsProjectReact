import React from "react";

import loading from "./loading.gif";

const Loading = () => {
    return (
      <div className="text-center">
        <img className="my-4" src={loading} alt="Spinner" style={{height : "100px",width:"130px"}}/>
      </div>
    );
}

export default Loading;