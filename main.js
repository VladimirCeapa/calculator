let a = '';     //first number
let b = '';     //second number
let sing = '';  //calculation signs
let finish = false;

const digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
const action = ['-', '+', 'x', '/'];

//Display screen
const out = document.querySelector('.calc-screen p');

//Clear All
function clearAll() {
    a = '';
    b = '';
    sing = '';
    finish = false;
    out.textContent = 0;
}

document.querySelector('.ac').onclick = clearAll;

document.querySelector('.buttons').onclick = (e) => {
    // press 
    if (!e.target.classList.contains('btn')) return;

    if (e.target.classList.contains('ac')) return;

    out.textContent = '';
    const key = e.target.textContent;

    //check button
    if (digit.includes(key)) {
        if (b === '' && sing === '') {
            a += key;
            console.log(a, b, sing)
            out.textContent = a;
        } else if (a !== '' && b !== '' && finish) {
            b = key;
            finish = false;
            out.textContent = b;
        } else {
            b += key;
            out.textContent = b;
        }

    }
    //check sing
    if (action.includes(key)) {
        sing = key;
        console.log(a, b, sing)
        out.textContent = sing;
        return;
    }
    if (key === '=') {
        if(b=='')b=a;
        switch (sing) {
            case '+':
                a = (+a) + (+b);
                break;
            case '-':
                a = (+a) - (+b);
                break;
            case 'x':
                a = (+a) * (+b);
                break;
            case '/':
                if(b==='0'){
                    out.textContent="Error";
                    a='';
                    b='';
                    sing='';
                    return
                }

                a = (+a) / (+b);
                break;


        }
        finish = true;
        out.textContent = a;
        console.log(a, b, sing)
    }
}

