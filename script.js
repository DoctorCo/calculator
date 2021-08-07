let ans = document.querySelector('.ans');
let num = '';
let ans_show = false;

// Change Theme
let cur_theme = 1;
const body = $('.body1');
const topp = $('.top1');
const toggler = $('.toggler1');
const circle = $('.circle1');
const toggle_button = $('.toggle-button1');
const output = $('.output1');
const key_container = $('.key-container1');
const key = $('.key1');
const btns = $('.btn1');
const key_reset = $('.key-reset1');
const key_del = $('.key-del1');
const key_equal = $('.key-equal1');

btns.each((index, btn) => {
    $(btn).on('click', event => {
        let cur = parseInt($(event.target).html());
        if (cur == 1) {
            circle.css('transform', 'matrix(1, 0, 0, 1, ' + 0 + ', 0)');
        } else if (cur == 2) {
            circle.css('transform', 'matrix(1, 0, 0, 1, ' + 22.8 + ', 0)');
        } else {
            circle.css('transform', 'matrix(1, 0, 0, 1, ' + (22.8 * 2) + ', 0)');
        }
        cur_theme = cur;
        reset();
        if (cur_theme == 2) {
            add(cur_theme);
        } else if (cur_theme == 3) {
            add(cur_theme);
        }

    });
});
//add class
function add(cur) {
    body.addClass('body' + cur);
    topp.addClass('top' + cur);
    toggler.addClass('toggler' + cur);
    circle.addClass('circle' + cur);
    toggle_button.addClass('toggle-button' + cur);
    output.addClass('output' + cur);
    key_container.addClass('key-container' + cur);

    key.addClass('key' + cur);
    btns.addClass('btn' + cur);
    key_reset.addClass('key-reset' + cur);
    key_equal.addClass('key-equal' + cur);
    key_del.addClass('key-del' + cur);
}
// reset theme
function reset() {
    body.removeClass('body2 body3');
    topp.removeClass('top2 top3');
    toggler.removeClass('toggler2 toggler3');
    circle.removeClass('circle2 circle3');
    toggle_button.removeClass('toggle-button2 toggle-button3');
    output.removeClass('output2 output3');
    key_container.removeClass('key-container2 key-container3');
    key.removeClass('key2 key3');
    btns.removeClass('btn2 btn3');
    key_reset.removeClass('key-reset2 key-reset3');
    key_equal.removeClass('key-equal2 key-equal3');
    key_del.removeClass('key-del2 key-del3');
}


// Calculate
key.each((index, element) => {
    $(element).on('click', (event) => {
        calc(event.target.innerText);
        ans.innerHTML = num;
    })
})

function calc(val) {
    switch (val) {
        case '1':
            if (ans_show) {
                num = '';
                ans_show = false;
            }
            num += '1';
            break;
        case '2':
            if (ans_show) {
                num = '';
                ans_show = false;
            }
            num += '2';
            break;
        case '3':
            if (ans_show) {
                num = '';
                ans_show = false;
            }
            num += '3';
            break;
        case '4':
            if (ans_show) {
                num = '';
                ans_show = false;
            }
            num += '4';
            break;
        case '5':
            if (ans_show) {
                num = '';
                ans_show = false;
            }
            num += '5';
            break;
        case '6':
            if (ans_show) {
                num = '';
                ans_show = false;
            }
            num += '6';
            break;
        case '7':
            if (ans_show) {
                num = '';
                ans_show = false;
            }
            num += '7';
            break;
        case '8':
            if (ans_show) {
                num = '';
                ans_show = false;
            }
            num += '8';
            break;
        case '9':
            if (ans_show) {
                num = '';
                ans_show = false;
            }
            num += '9';
            break;
        case '0':
            if (ans_show) {
                num = '';
                ans_show = false;
            }
            num += '0';
            break;
        case '+':
            if (ans_show) {
                num += '+';
                ans_show = false;
                break;
            }
            if (num.length == 0) {
                break;
            } else {
                if (num.slice(-1) == '+' || num.slice(-1) == '-' || num.slice(-1) == '*' || num.slice(-1) == '/') {
                    let temp = num.slice(0, -1);
                    num = temp;
                } else if (num.includes('-') || num.includes('+') || num.includes('*') || num.includes('/')) {
                    num = eval(num);
                    var temp_val = Number(num);
                    if (!Number.isInteger(temp_val)) {
                        temp_val = temp_val.toFixed(4);
                    }
                    num = temp_val.toString();
                }
            }
            num += '+';
            break;
        case '-':
            if (ans_show) {
                ans_show = false;
                num += '-';
                break;
            }
            if (num.length == 0) {
                break;
            } else {
                if (num.slice(-1) == '+' || num.slice(-1) == '-' || num.slice(-1) == '*' || num.slice(-1) == '/') {
                    let temp = num.slice(0, -1);
                    num = temp;
                } else if (num.includes('-') || num.includes('+') || num.includes('*') || num.includes('/')) {
                    num = eval(num);
                    var temp_val = Number(num);
                    if (!Number.isInteger(temp_val)) {
                        temp_val = temp_val.toFixed(4);
                    }
                    num = temp_val.toString();
                }
            }

            num += '-';
            break;
        case '/':
            if (ans_show) {
                ans_show = false;
                num += '/';
                break;
            }
            if (num.length == 0) {
                break;
            } else {
                if (num.slice(-1) == '+' || num.slice(-1) == '-' || num.slice(-1) == '*' || num.slice(-1) == '/') {
                    let temp = num.slice(0, -1);
                    num = temp;
                } else if (num.includes('-') || num.includes('+') || num.includes('*') || num.includes('/')) {
                    num = eval(num);
                    var temp_val = Number(num);
                    if (!Number.isInteger(temp_val)) {
                        temp_val = temp_val.toFixed(4);
                    }
                    num = temp_val.toString();
                }
            }

            num += '/';
            break;
        case '*':
            if (ans_show) {
                ans_show = false;
                num += '*';
                break;
            }
            if (num.length == 0) {
                break;
            } else {
                if (num.slice(-1) == '+' || num.slice(-1) == '-' || num.slice(-1) == '*' || num.slice(-1) == '/') {
                    let temp = num.slice(0, -1);
                    num = temp;
                } else if (num.includes('-') || num.includes('+') || num.includes('*') || num.includes('/')) {
                    num = eval(num);
                    var temp_val = Number(num);
                    if (!Number.isInteger(temp_val)) {
                        temp_val = temp_val.toFixed(4);
                    }
                    num = temp_val.toString();
                }
            }

            num += '*';
            break;
        case '=':
            if (num.length == 0) {
                break;
            }
            if (num.slice(-1) == '+' || num.slice(-1) == '-' || num.slice(-1) == '*' || num.slice(-1) == '/') {
                break;
            } else {
                num = eval(num);
                var temp_val = Number(num);
                if (!Number.isInteger(temp_val)) {
                    temp_val = temp_val.toFixed(4);
                }
                num = temp_val.toString();
            }
            ans_show = true;
            break;
        case 'DEL':
            if (num.length) {
                num = num.slice(0, -1);
            }
            break;
        case 'RESET':
            num = '';
            break;
        case '.':
            if (check() && num.length > 0) {
                break;
            }
            num += '.'
            break;
    }
}

function check() {
    for (let i = num.length - 1; i >= 0; i--) {
        if (num[i] === '.') {
            return true;
        }
        if (num[i] === '+' || num[i] === '-' || num[i] === '*' || num[i] === '/') {
            return false;
        }
    }

}