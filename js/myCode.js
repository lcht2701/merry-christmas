const btn = document.querySelector("button");
const height = document.documentElement.clientHeight;
const width = document.documentElement.clientWidth;

btn.addEventListener("click", () => {
  let randY = Math.floor(Math.random() * height);
  let randX = Math.floor(Math.random() * width);
  btn.style.transform = `translate(${randX}px, ${randY}px)`;
});

var fullName;s
var answer;
var time;
var text = "Bạn điền thiếu";
function agree() {
  fullName = prompt("Họ và tên của bạn đáng iuuu đây là gì?");
  time = prompt("Bạn muốn đi cùng tôi lúc mấy giờ?");
  answer = prompt(
    "Bạn đã chắc chắn với câu trả lời của bạn chưa? (YES/NO - T chỉ muốn chắc chắn lại thuiii đóooooooo!!!"
  );
  if (
    answer.search("YE") >= 0 ||
    answer.search("ye") >= 0 ||
    answer.search("Ye") >= 0
  ) {
    if (fullName == null || fullName == "") {
      alert("Bạn nhập thiếu tên rùiii :<");
    } else if (time == null || time == "") {
      alert("Bạn nhập thiếu thời gian rùiii :<");
    } else {
      alert("Bạn hứa rùiii đó ngheeee :3");
      location.assign(
        "https://www.youtube.com/watch?v=2AfaQ6qsLbw&ab_channel=FORESTSTUDIO"
      );
    }
  } else {
    alert("Bạn thực sự hỏng múnn đi với tuiii saoo :<<");
  }
}
