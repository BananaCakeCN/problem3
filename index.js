const sleep = ms => new Promise(res => setTimeout(res, ms));
document.getElementById('startBTN').onclick = async function(){
    document.getElementById('start').style.cssText = 'animation: hide 0.3s ease forwards;';
    await sleep(300);
    document.getElementById('start').remove();
}
function area(canvas, pieces){
    const cvsp = canvas.getContext('2d');
    cvsp.clearRect(0, 0, canvas.width, canvas.height);
    cvsp.strokeStyle = '#000';
    cvsp.beginPath();
    cvsp.arc(100, 70, 50, 0, 2 * Math.PI);
    cvsp.stroke();
    for(var i = 0; i < pieces; i++){
        //canvas.fillStyle = '#' + (Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0');
        cvsp.save();
        cvsp.translate(100, 70);
        cvsp.moveTo(0, 0);
        cvsp.rotate((360 / pieces) * i * Math.PI / 180);
        cvsp.lineTo(60, 0);
        cvsp.stroke();
        cvsp.restore();
    }
    cvsp.beginPath();
    cvsp.moveTo(170, 40);
    cvsp.lineTo(190, 60);
    cvsp.lineTo(180, 60);
    cvsp.stroke();
    cvsp.moveTo(190, 60);
    cvsp.lineTo(190, 50);
    cvsp.stroke();
    cvsp.closePath();
    cvsp.save();
    cvsp.translate(230, 70);
    for(var i = 0; i < pieces; i++){
        cvsp.beginPath();
        cvsp.rotate((90 + 360 / pieces / 2) * Math.PI / 180);
        cvsp.moveTo(0, 0);
        cvsp.lineTo(50, 0);
        cvsp.stroke();
        cvsp.closePath();
        cvsp.rotate((0 - 360 / pieces) * Math.PI / 180);
        cvsp.beginPath();
        cvsp.moveTo(0, 0);
        cvsp.lineTo(50, 0);
        cvsp.stroke();
        cvsp.closePath();
        cvsp.beginPath();
        cvsp.arc(0, 0, 50, 0, (360 / pieces) * Math.PI / 180);
        cvsp.stroke();
        cvsp.closePath();
        //cvsp.restore();
        if(i % 2 == 1){
            cvsp.restore();
            cvsp.resetTransform();
            cvsp.translate(230, 70);
            cvsp.translate((i + 1) * 50 * Math.sin(360 / pieces / 2 * Math.PI / 180), 0);
            //console.log((i + 1) * 50 * Math.sin(360 / pieces / 2 * Math.PI / 180))
        }else{
            cvsp.translate(50, 0);
            cvsp.rotate((0 + 360 / pieces) * Math.PI / 180);
            cvsp.rotate((90 - 360 / pieces / 2) * Math.PI / 180);
        }
        //cvsp.rotate(180 * Math.PI / 180);
    }
    cvsp.restore();
    cvsp.resetTransform();
    cvsp.strokeStyle = '#f00';
    cvsp.beginPath();
    cvsp.strokeRect(230, 70, 157, 50)
    cvsp.stroke();
    cvsp.beginPath();
    cvsp.moveTo(420, 40);
    cvsp.lineTo(400, 60);
    cvsp.lineTo(410, 60);
    cvsp.stroke();
    cvsp.moveTo(400, 60);
    cvsp.lineTo(400, 50);
    cvsp.stroke();
    cvsp.closePath();
    cvsp.fillStyle = '#f00'
    cvsp.fillText('rectangle with the area of πd/2 * r', 220, 40);
}
function graph(status){
    const cvsp = document.getElementById('graph').getContext('2d');
    cvsp.fillStyle = '#8eb8fe';
    cvsp.fillRect(0, 0, 300, 300);
    cvsp.beginPath();
    cvsp.fillStyle = '#ddd';
    cvsp.arc(75, 75, 75, 0, 2 * Math.PI);
    cvsp.fill();
    cvsp.beginPath();
    cvsp.arc(75, 225, 75, 0, 2 * Math.PI);
    cvsp.fill();
    cvsp.beginPath();
    cvsp.arc(225, 75, 75, 0, 2 * Math.PI);
    cvsp.fill();
    cvsp.beginPath();
    cvsp.arc(225, 225, 75, 0, 2 * Math.PI);
    cvsp.fill();
    cvsp.beginPath();
    if(status == 1){
        cvsp.beginPath();
        cvsp.moveTo(80, 5);
        cvsp.lineTo(75, 0);
        cvsp.lineTo(70, 5);
        cvsp.moveTo(75, 0);
        cvsp.lineTo(75, 150);
        cvsp.lineTo(80, 145);
        cvsp.moveTo(75, 150);
        cvsp.lineTo(70, 145);
        cvsp.stroke();
        cvsp.fillStyle = '#000';
        cvsp.fillText('20m', 80, 10);
        cvsp.beginPath();
        cvsp.moveTo(10, 5);
        cvsp.lineTo(5, 0);
        cvsp.lineTo(0, 5);
        cvsp.moveTo(5, 0);
        cvsp.lineTo(5, 300);
        cvsp.lineTo(10, 295);
        cvsp.moveTo(5, 300);
        cvsp.lineTo(0, 295);
        cvsp.stroke();
        cvsp.fillStyle = '#000';
        cvsp.fillText('40m', 10, 10);
    }else if(status == 2){
        cvsp.beginPath();
        cvsp.moveTo(225, 80);
        cvsp.lineTo(220, 75);
        cvsp.lineTo(215, 80);
        cvsp.moveTo(220, 75);
        cvsp.lineTo(220, 150);
        cvsp.lineTo(225, 145);
        cvsp.moveTo(220, 150);
        cvsp.lineTo(215, 145);
        cvsp.stroke();
        cvsp.fillStyle = '#000';
        cvsp.fillText('10m', 190, 85);
        cvsp.beginPath();
        cvsp.moveTo(85, 80);
        cvsp.lineTo(80, 75);
        cvsp.lineTo(75, 80);
        cvsp.moveTo(80, 75);
        cvsp.lineTo(80, 225);
        cvsp.lineTo(85, 220);
        cvsp.moveTo(80, 225);
        cvsp.lineTo(75, 220);
        cvsp.stroke();
        cvsp.fillStyle = '#000';
        cvsp.fillText('20m', 85, 85);
        cvsp.clearRect(0, 0, 225, 75);
        cvsp.clearRect(0, 75, 75, 225);
        cvsp.clearRect(75, 225, 225, 75);
        cvsp.clearRect(225, 0, 75, 225);
    }else if(status == 3){
        cvsp.beginPath();
        cvsp.moveTo(0, 150);
        cvsp.lineTo(300, 150);
        cvsp.moveTo(150, 0);
        cvsp.lineTo(150, 300);
        cvsp.stroke();
    }else if(status == 4){
        cvsp.beginPath();
        cvsp.moveTo(75, 75);
        cvsp.lineTo(75, 225);
        cvsp.lineTo(225, 225);
        cvsp.lineTo(75, 75);
        cvsp.stroke();
        cvsp.beginPath();
        cvsp.arc(150, 150, 31, 0, 2 * Math.PI)
        cvsp.stroke();
        cvsp.closePath();
        cvsp.fillStyle = '#000';
        cvsp.fillText('20m', 80, 220);
        cvsp.fillText('10m', 100, 100);
        cvsp.fillText('8.28m', 150, 150);
    }
}
graph(0);
area(document.getElementById('area'), 4);
document.getElementById('pieces').oninput = function(){
    document.getElementById('area').remove();
    var child = document.createElement('canvas');
    child.setAttribute('id', 'area');
    child.setAttribute('width', '500');
    document.getElementById('cvs').appendChild(child);
    area(child, parseInt(document.getElementById('pieces').value));
}
document.onscroll = function(){
    if(document.scrollingElement.scrollTop > document.getElementById('scroll4').offsetTop){
        graph(4);
    }else if(document.scrollingElement.scrollTop > document.getElementById('scroll3').offsetTop){
        graph(3);
    }else if(document.scrollingElement.scrollTop > document.getElementById('scroll2').offsetTop){
        graph(2);
    }else if(document.scrollingElement.scrollTop > document.getElementById('scroll1').offsetTop){
        graph(1);
    }else{
        graph(0);
    }
}