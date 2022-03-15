import React from "react";

function Message(props) {
  return (
    <div>
      {props.message.length <= 10 ? props.message : <p>Message too long</p>}
    </div>
  );
}

export default Message;
