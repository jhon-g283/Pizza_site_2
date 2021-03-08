import React from "react";

export default class Input_OrderInfo extends React.Component {
  constructor(props) {
    super(props);
    console.log("const PreviewCanvas");
    //close_fnc
    this.state = {
      flg: false,
      mail: "",
      name: "",
      address: "",
      tel: "",
      info_obj: []
    };

    this.getforminfo = this.getforminfo.bind(this);
    this.Backbutton_function = this.Backbutton_function.bind(this);
  }

  componentDidMount() {
    console.log("--componentDidMount PreviewCanvas--");
    var rev_canvas = document.getElementById("review_wcanvas");
    var rev_width = rev_canvas.width;
    var rev_height = rev_canvas.height;
    //     var rev_context = rev_canvas.getContext("2d");

    //     console.log(rev_width);
    //     console.log(rev_height);

    //     var rev_imgdata = rev_context.getImageData(0,0,rev_width,rev_height);
    // // canvas_order_info
    // // review_wcanvas
    console.log(this.props);

    // var canvas = document.getElementById("order_canvas");
    // var context = canvas.getContext("2d");
    // context.scale(0.5, 0.5);
    // canvas.width = rev_width;
    // canvas.height = rev_height;

    // var range_obj2 = this.props.range;
    // var img_x = parseInt(range_obj2.d_img_x, 10); //
    // var img_y = parseInt(range_obj2.d_img_y, 10); //

    // var all_topping = this.props.topping;
    // console.log(all_topping);

    // for (const i of all_topping.values()) {
    //   let x = i.style.left;
    //   // 横情報計算
    //   x = x.replace("px", "");
    //   x = parseInt(x, 10);

    //   x = x - img_x;
    //   // console.log("x:" + x);
    //   // 縦情報取得
    //   let y = i.style.top;
    //   y = y.replace("px", "");
    //   y = parseInt(y, 10);

    //   y = y - img_y;

    //   // console.log("y:" + y);
    //   // 描画実施
    //   context.drawImage(i, x, y, i.width / 2, i.height);
    // }

    // // topping
    //     context.putImageData(rev_imgdata,0,0)
    // review_wcanvas
    // console.log(rev_imgdata);
    // console.log(canvas);
  }

  getforminfo() {
    console.log("--getforminfo--");
    var form_val = document.forms["input_info"];
    var mail_info = "mail:" + form_val["mail"].value;
    var tel_info = "tel:" + form_val["tel"].value;
    var address_info = "address:" + form_val["address"].value;
    var name_info = "name:" + form_val["name"].value;

    var tmp = {
      mail: mail_info,
      tel: tel_info,
      address: address_info,
      name: name_info
    };

    console.log(tmp);
    // console.log("mail:" + mail);

    this.setState({
      // mail: mail_info,
      // tel: tel_info,
      // address: address_info,
      // name: name_info,
      flg: true,
      info_obj: tmp
    });

    console.log(this.state);
  }

  Backbutton_function() {
    console.log("--Backbutton_function--");
    this.setState({ flg: false });
  }

  render() {
    console.log("--render PreviewCanvas--");

    var info = [];
    var tmp_obj = this.state.info_obj;
    console.log(tmp_obj);
    var len = Object.keys(tmp_obj).length;
    console.log(len);

    for (const [key, value] of Object.entries(tmp_obj)) {
      // console.log(value);
      let tag = (
        <div>
          <p>{value}</p>
        </div>
      );
      info.push(tag);
    }

    info = this.state.flg ? <div>{info}</div> : "";

    // var rev_canvas = document.getElementById("review_wcanvas");
    // var clone_canvas = rev_canvas.cloneNode()

    var input_button = (
      <div>
        <b>OK</b>
        <button onClick={this.getforminfo}>send</button>
      </div>
    );

    var back_button = (
      <button className="check_buttons" onClick={this.Backbutton_function}>
        内容を修正する
      </button>
    );
    var order_button = (
      <button className="check_buttons" onClick={this.props.close_fnc}>
        注文する
      </button>
    );

    // var style = {
    //   display: "inline-block"
    // };

    var order_check = (
      <div className="test_border_1">
        <p>注文確認</p>
        <div className="test_border_1">{info}</div>
        <div className="check_buttons test_border_1">
          {back_button}
          {order_button}
        </div>
      </div>
    );

    var test = <input type="text" name="test"></input>;

    var input_elements = (
      <div className="">
        <form name="input_info">
          <div></div>
          <div>
            <b>name:</b>
            <input type="text" name="name"></input>
          </div>
          <div>
            <b>mail:</b>
            <input type="text" name="mail"></input>
          </div>
          <div>
            <b>tel:</b>
            <input type="text" name="tel"></input>
          </div>
          <b>address:</b>
          <input type="text" name="address"></input>
        </form>
      </div>
    );

    // className !!
    const result = (
      <div className="input_order test_border_1">
        {/* <canvas id="order_canvas"></canvas> */}
        <div>{input_elements}</div>
        <div>{input_button}</div>
        {/* <div>{info}</div> */}
      </div>
    );

    if (this.state.flg === false) {
      return result;
    } else {
      return order_check;
    }
  }
}
