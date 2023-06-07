const listItems = document.querySelectorAll('#left li');

setInterval(() => {
  listItems.forEach((item) => {
    let randomColor = getRandomDarkColor();
    item.style.color = randomColor;
  });
}, 1000); 

function getRandomDarkColor() {
  let letters = '0123456789ABCDEF';
  let color = '#';
  let isFluorescent = true;

  while (isFluorescent) {
    color = '#';

    for (let i = 0; i < 6; i++) {
      let randomIndex = Math.floor(Math.random() * letters.length);
      let randomDigit = letters[randomIndex];
      color += randomDigit;
    }

    isFluorescent = checkFluorescentColor(color);
  }

  return color;
}

function checkFluorescentColor(color) {
  let fluorescentColors = ['#FFFF00', '#FF00FF', '#00FFFF'];

  return fluorescentColors.includes(color);
}

document.getElementById("submitButton").addEventListener("click", function(event) {
  event.preventDefault(); 
  
  
  var appetizer = document.querySelector('input[name="appetizer"]:checked').value;
  var salad = document.querySelector('input[name="salad"]:checked').value;
  var soup = document.querySelector('input[name="soup"]:checked').value;
  var main = document.querySelector('input[name="main"]:checked').value;
  var steak = document.querySelector('input[name="steak"]:checked').value;
  var dessert = document.querySelector('input[name="dessert"]:checked').value;
  var drink = document.querySelector('input[name="drink"]:checked').value;
  var tableNumber = document.querySelector('input[name="tableNumber"]').value;
  
  
  var result = "您的點餐如下：<br>"
    + "餐前面包：" + "法式麵包佐松露奶油" + "<br>"
    + "開胃菜：" + appetizer + "<br>"
    + "沙拉：" + salad + "<br>"
    + "湯品：" + soup + "<br>"
    + "主餐：" + main + "<br>"
    + "牛排熟度：" + steak + "<br>"
    + "甜點：" + dessert + "<br>"
    + "餐後飲品：" + drink + "<br>"
    + "桌號：" + tableNumber + "<br>";
  
 
  document.getElementById("resultContainer").innerHTML = result;
  document.getElementById("orderForm").style.display = "none";
  document.getElementById("backButton").style.display = "inline-block";
});


document.getElementById("backButton").addEventListener("click", function() {
  document.getElementById("orderForm").style.display = "block";
  document.getElementById("backButton").style.display = "none";
  document.getElementById("resultContainer").innerHTML = "";
});