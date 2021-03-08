import React from "react";

export default function Edit_panel(props) {
  console.log("--function-- Editp_anel");
  console.log(props);

  var current = props.current_cnt;
  var max = props.max_index_cnt;
  var flg = false;
  var fnc = () => {
    console.log("--can not click forward--");
    console.log("max_index:" + max);
  };

  var back_class = "";

  if (current == max) {
    flg = true;
    if (max == 0) {
      back_class = "font_block";
    }
  }

  const edit_node = (
    <div>
      <li className={back_class} onClick={() => props.click_fnc("back")}>
        back
      </li>
      {flg ? (
        <li onClick={fnc} className="font_block">
          forward
        </li>
      ) : (
        <li onClick={() => props.click_fnc("forward")}>forward</li>
      )}
      <li>reset</li>
    </div>
  );

  return edit_node;
}
