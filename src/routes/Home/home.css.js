import { style } from "@vanilla-extract/css";
import OpenColor from "open-color";
const styles = {
  hi: style({ fontsize: 100, fontWeight: 900, color: "tomato" , ":hover":{color:'blue'

  }
}),
input :{
    div:style({
        display:'flex'  
        ,
        flexDirection:'column',

    })
    input:style({
        outline:'none'  ,
        backgroundColor:'transparent',
        border:`1px solid ${OpenColor.green[2]}`,
        color : OpenColor.gray[2]
    })
}
};
export default styles;
