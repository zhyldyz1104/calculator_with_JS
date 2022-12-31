let a = ''
let b = ''
let sign = ''
let finish = false
let digit = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.']
const actions = ['-', '+', '/', '*']
let out = document.querySelector('.result p')

function clearAll() {
    a = ''
    b = ''
    sign = ''
    finish = false
    out.textContent = 0
}

document.querySelector('.ac').onclick = clearAll

document.querySelector('.buttons').onclick = (event) => {
    if (!event.target.classList.contains('btn')) return;
    if (event.target.classList.contains('ac')) return
    out.textContent = ''
    const key = event.target.textContent
    if (digit.includes(key)) {
        if (b === '' && sign === '') {
            a += key
            out.textContent = a
        } else if (a !== '' && b !== '' && finish) {
            b = key
            finish = false
            out.textContent = b
        } else {
            b += key
            out.textContent = b
        }

    }
    if (actions.includes(key)) {
        sign = key
        out.textContent = sign
        return
    }
    //=

    if (key === '=') {

        if (b === '') b = a
        switch (sign) {
            case '+':
                a = (+a) + (+b)
                break
            case '-':
                a = (+a) - (+b)
                break
            case '/':
                a = (+a) / (+b)
                break
            case '*':
                a = (+a) * (+b)
                console.log('hey');
                break
        }
        finish = true
        out.textContent = a

    }
}