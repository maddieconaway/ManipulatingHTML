document.addEventListener('DOMContentLoaded', function () {
    // 1. put a button that triggers a 'have a nice day' alert  
    let div1 = document.createElement('div');
    div1.id = 'div1';
    document.body.appendChild(div1);

    let lbl1 = document.createElement('label');
    lbl1.innerHTML = '1. ';
    div1.appendChild(lbl1);

    let btn1 = document.createElement('button');
    btn1.id = 'btn1';
    btn1.addEventListener('click', (e) => {
        alert('Have a nice day...or else.');
    });
    btn1.append(document.createTextNode('Click Here'));
    div1.appendChild(btn1);

    document.body.appendChild(div1);

    // 2. put a textbox and a button, click the button and it triggers an alert with the textbox contents
    let div2 = document.createElement('div');
    div2.id = 'div2';

    let lbl2 = document.createElement('label');
    lbl2.innerHTML = '2. ';
    div2.appendChild(lbl2);

    let tbox2 = document.createElement('textarea');
    tbox2.id = "tbox2";
    div2.appendChild(tbox2);

    let btn2 = document.createElement('button');
    btn2.id = 'btn2';
    btn2.addEventListener('click', (e) => {
        alert(tbox2.value);
    });
    btn2.append(document.createTextNode('Click Here'));
    div2.appendChild(btn2);

    document.body.appendChild(div2);

    // 3. color changing div with mouseover and mouseout

    let div3 = document.createElement('div');
    div3.id = 'div3';

    let lbl3 = document.createElement('label');
    lbl3.innerHTML = '3. ';
    div3.appendChild(lbl3);
    let div31 = document.createElement('div');
    div31.id = 'div31';
    div31.style.height = '100px';
    div31.style.width = '100px';
    div31.style.display = 'inline-block';
    div31.addEventListener('mouseover', (e) => {
        div31.style.backgroundColor = 'red';
    });
    div31.addEventListener('mouseout', (e) => {
        div31.style.backgroundColor = 'inherit';
    });
    div3.appendChild(div31);

    document.body.appendChild(div3);

    // 4. paragraph text color change

    let div4 = document.createElement('div');
    div4.id = 'div4';

    let lbl4 = document.createElement('label');
    lbl4.innerHTML = '4. ';
    div4.appendChild(lbl4);
    let p41 = document.createElement('p');
    p41.textContent = 'This is a paragraph.';
    p41.style.display = 'inline-block';
    p41.addEventListener('click', (e) => {
        //p41.style.color='red';
        p41.style.color = getRandomColor();
    });
    div4.appendChild(p41);
    document.body.appendChild(div4);

    // 5. put a button and empty div, when clicked add a span with my name  
    let div5 = document.createElement('div');
    div5.id = 'div5';

    let lbl5 = document.createElement('label');
    lbl5.innerHTML = '5. ';
    div5.appendChild(lbl5);

    let div51 = document.createElement('div');
    div51.style.display = 'inline-block';

    let btn5 = document.createElement('button');
    btn5.id = 'btn5';
    btn5.addEventListener('click', (e) => {
        let span5 = document.createElement('span');
        span5.id = 'span5';
        span5.textContent = 'Maddie Conaway';
        div51.appendChild(span5);
    });
    btn5.append(document.createTextNode('Who is the author?'));
    div5.appendChild(btn5);
    div5.appendChild(div51);
    document.body.appendChild(div5);

    // 6. create and populate an unordered list from an array 
    let div6 = document.createElement('div');
    div6.id = 'div6';

    let lbl6 = document.createElement('label');
    lbl6.innerHTML = '6. ';
    div6.appendChild(lbl6);

    let ul6 = document.createElement('ul');
    ul6.id = 'ul6';

    let btn6 = document.createElement('button');
    btn6.id = 'btn6';
    btn6.addEventListener('click', (e) => {
        let arrNames = ['Brit', 'Alex', 'Danni', 'Alden', 'Leila', 'Carmen', 'Josie', 'Meredith', 'Mel', 'Chelsey', 'Catherine Gail'];
        arrNames.forEach(function (item) {
            let li = document.createElement('li');
            li.textContent = item;
            ul6.append(li);
        });
    });
    btn6.append(document.createTextNode('Click Here'));
    div6.appendChild(btn6);
    div6.appendChild(ul6);
    document.body.appendChild(div6);

    function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
});
