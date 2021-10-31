var ClearScoreButton = document.querySelector("#clear-score");
var ScoreL = document.getElementById("score-list");
var ScoreLi = [];
var num;
var temp;
var temp2;

//sort score from high to low
for(var j=1; j <= localStorage.getItem("numQtaker"); j++){
    for(var k=j-1; k >= 0; k--){
        num = k+1;
        temp = parseInt(localStorage.getItem("score"+k));
        temp2 = parseInt(localStorage.getItem("score"+num));
        if(temp < temp2) {
            temp = localStorage.getItem("score"+num);
            temp2 = localStorage.getItem("name"+num);
            localStorage.setItem(("score"+num), localStorage.getItem("score"+k));
            localStorage.setItem(("name"+num), localStorage.getItem("name"+k));
            localStorage.setItem(("score"+k), temp);
            localStorage.setItem(("name"+k), temp2);
        }
    }
}

//display score board
for(var i=0; i <= localStorage.getItem("numQtaker"); i++){
    ScoreLi[i] = document.createElement("h4");
    ScoreL.appendChild(ScoreLi[i]);
    ScoreLi[i].textContent = "Name: " + localStorage.getItem("name"+i) + " Score: " + localStorage.getItem("score"+i);
};


ClearScoreButton.addEventListener("click", function() {
    localStorage.clear();
    location.reload();
});