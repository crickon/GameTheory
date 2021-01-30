const canvas = document.querySelector('.myCanvas');
//const width = canvas.width = window.innerWidth;
//const height = canvas.height = window.innerHeight;
const width = 600;
const height = 600;
const ctx = canvas.getContext('2d');

const spaces = [[0,0],[width/3,0],[width/3*2,0],
[0,height/3],[width/3,height/3],[width/3*2,height/3],
[0,height/3*2],[width/3,height/3*2],[width/3*2,height/3*2]];

drawBoard();
drawX(spaces[0]);
drawO(spaces[1]);

function drawBoard() {
  ctx.beginPath();
  ctx.moveTo(width/3,0);
  ctx.lineTo(width/3,height);
  ctx.stroke();
  ctx.moveTo(width/3*2,0);
  ctx.lineTo(width/3*2,height);
  ctx.stroke();
  ctx.moveTo(0,height/3);
  ctx.lineTo(width,height/3);
  ctx.stroke();
  ctx.moveTo(0,height/3*2);
  ctx.lineTo(width,height/3*2);
  ctx.stroke();
}
function clearBoard() {
  ctx.clearRect(0,0,width,height);
}
function drawX(arr) {
  img = new Image();
  img.src = 'https://2.bp.blogspot.com/-44FEkFGb5h8/Ux3Ul5ly3LI/AAAAAAAAEGU/jl4_ktKNJp0/s1600/playX.png';
  ctx.drawImage(img, arr[0], arr[1], width/3, height/3);
}

function drawO(arr) {
  img2 = new Image();
  img2.src ='https://1.bp.blogspot.com/-lyELSi3oPWc/Ux3UlhpiAWI/AAAAAAAAEGI/VLvmMCW7aco/s1600/playO.png';
  ctx.drawImage(img2, arr[0], arr[1], width/3, height/3);
}
