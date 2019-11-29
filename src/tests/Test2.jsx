import React from "react";
import Cookies from "universal-cookie";
import {TiHeartFullOutline} from "react-icons/ti";
const cookies = new Cookies();

let likesTotal = cookies.get("likesTotal");
if(likesTotal === undefined || isNaN(likesTotal)) {
    likesTotal = 0;
}
console.log("likes total 2: ", likesTotal);
function handleLikeAdd() {
    likesTotal++;
    cookies.set("likesTotal", likesTotal, { path: "/" });
    console.log("likes total: "+likesTotal);
    document.querySelector("#like-counter").innerText = likesTotal;
}

const Test2 = () => {
  return (
    <div>
      <div className={"description"}>
        Ülesanne 2:
        <p>
          Rakendus peab arvet pidama mitu korda on südame ikooni klikitud ning vastava numbri <code>likes:</code> järel kuvama.
        </p>
      </div>

      <div style={{display:"flex", alignItems: "center"}}>
        <div>
            Likes: <span id={"like-counter"}>{likesTotal}</span>
        </div>
        <TiHeartFullOutline onClick={handleLikeAdd} />
        <div>Click me</div>
      </div>
    </div>
  );
};

export default Test2;
