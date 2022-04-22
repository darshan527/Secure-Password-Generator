let btn = document.getElementById("generate")

//This function generates password of length 'len' and returns as string
function generate() {
    var len = Number(document.getElementById("slider").value)
    var pass = '';
    var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$';

    for (i = 1; i <= len; i++) {
        var char = Math.floor(Math.random()
            * str.length + 1);

        pass += str.charAt(char)
    }
    return pass;
}

//This function handles the updation of 'rangeVal' div value when the 'slider' value is changed
function updateText() {
    let tmp = document.getElementById("slider").value
    document.getElementById("rangeVal").innerText = tmp;
    genBox(null)
}
//default update on pageload
updateText()


//This function copies text to Clipboard it takes div as its argument and alerts the status of copy when done
function copyToClip(div) {
    navigator.clipboard.writeText(div.innerText).then((f1) => {
        alert("Password Copied to clipboard")
    }, (f2) => {
        alert("Copy Failed")
    })
}

//This function renders 4 password divs it handles both loading scenario and when there is a value available.
function genBox(passList = null) {
    let main2 = document.getElementById("main2")
    let tmpHtml = ''
    for (i = 0; i < 4; i++) {
        let pas = passList ? passList[i] : `<svg class="load" width="50" height="13" viewBox="0 0 50 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.5 6.25C12.5 9.70178 9.70178 12.5 6.25 12.5C2.79822 12.5 0 9.70178 0 6.25C0 2.79822 2.79822 0 6.25 0C9.70178 0 12.5 2.79822 12.5 6.25Z" fill="#3F516B"/>
            <path d="M31.25 6.25C31.25 9.70178 28.4518 12.5 25 12.5C21.5482 12.5 18.75 9.70178 18.75 6.25C18.75 2.79822 21.5482 0 25 0C28.4518 0 31.25 2.79822 31.25 6.25Z" fill="#3F516B"/>
            <path d="M43.75 12.5C47.2018 12.5 50 9.70178 50 6.25C50 2.79822 47.2018 0 43.75 0C40.2982 0 37.5 2.79822 37.5 6.25C37.5 9.70178 40.2982 12.5 43.75 12.5Z" fill="#3F516B"/>
            </svg>`
        let cpy = passList ? "copyToClip(this)" : "null";
        let t2 = `<div id="${String(i)}" class="pass" onclick="${cpy}">
            ${pas}
        </div>`;
        tmpHtml += t2;
    }
    main2.innerHTML = tmpHtml;
}
genBox()

function genP() {
    let arr = Array()
    for (let i = 0; i < 4; i++) {
        var tmp = generate()
        arr.push(tmp)
    }
    genBox(passList = arr)
}