var array = ['', '', '', ''];
let ansBtn = document.getElementById("ansBtn");
let startBtn = document.getElementById("startGame");
let input1 = document.getElementById("inp1").disabled;
let input2 = document.getElementById('inp2').disabled;
let input3 = document.getElementById('inp3').disabled;
let input4 = document.getElementById('inp4').disabled;
let lifeLine = 5;
var dis = true;

function clearValue() {
    document.getElementById("inp1").value = '';
    document.getElementById("inp2").value = '';
    document.getElementById("inp3").value = '';
    document.getElementById("inp4").value = '';
}

function inpDisTrue() {
    document.getElementById("inp1").disabled = true;
    document.getElementById("inp2").disabled = true;
    document.getElementById("inp3").disabled = true;
    document.getElementById("inp4").disabled = true;
}

function inpDisFalse() {
    document.getElementById("inp1").disabled = false;
    document.getElementById("inp2").disabled = false;
    document.getElementById("inp3").disabled = false;
    document.getElementById("inp4").disabled = false;
}
inpDisTrue()

setInterval(() => {
        let inp1 = document.getElementById("inp1");
        let inp2 = document.getElementById('inp2');
        let inp3 = document.getElementById('inp3');
        let inp4 = document.getElementById('inp4');
        array[0] = inp1.value;
        array[1] = inp2.value;
        array[2] = inp3.value;
        array[3] = inp4.value;
}, 1000);

document.getElementById('startGame').onclick = function () {
    var disabled = document.getElementById("inp1").disabled;
    if (disabled) {
        inpDisFalse()
        dis = false;
        alert('A word similar to main character in a movie?');
        startBtn.value = "Stop Game";
    }
    else {
        inpDisTrue()
        ansBtn.style.display = 'none';
        winLog.style.display = 'none';
        document.getElementById("answer").style.display = "none";
        clearValue()
        dis = true;
        lifeLine = 5;
        startBtn.value = "Start Game";
    }
}


document.onkeydown = function(e) {
    if (e.keyCode === 13 && dis === false) {
        if ((array[0] === 'H' || array[0] === 'h') && array[1] === 'e' && array[2] === 'r' && array[3] === 'o') {
            let winLog = document.getElementById('winLog');
            winLog.style.display = 'block';
        } else {
            if (lifeLine > 1) {
                lifeLine = lifeLine - 1;
            } else {
                inpDisFalse()
                alert("You lost!")
                ansBtn.style.display = 'block';
            }
        }
    }
}


ansBtn.addEventListener('click', () => {
    document.getElementById("answer").style.display = "block";
})