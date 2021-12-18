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
  fullName = prompt("Vậy thì bạn đang ở đây tên gì nhỉ?");
  time = prompt("Tôi có thể đón bạn lúc mấy giờ? (hh:mm)");
  answer = prompt(
    "'YES' OR 'No' - Bạn đã chắc chắn chưaa? Trả lời rồi là không có được rút lại đó nha! Mình báo cảnh sát thiệt đó 👉👈 🥺"
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
      alert("Mình sẽ đón bạn " + fullName + " vào lúc " + time + " đó nha! CAN'T WAIT TO SEE YOU 😊");
      location.assign(
        "https://www.youtube.com/watch?v=Q_yuO8UNGmY"
      );
    }
  } else {
    alert("BẠN ĐỪNG NHƯ VẬY MÀ 😣 MÌNH BUỒN LẮM Á 😢");
  }
}
