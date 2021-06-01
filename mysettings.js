let allcheck = document.querySelectorAll('.check')


allcheck.forEach(item => {
    let localnamemaker = item.attributes.id.nodeValue.slice(0, -5);
    if (localStorage.getItem(localnamemaker) === "true") {
        item.setAttribute("src", "./img/tick.png");
    } else if (localStorage.getItem(localnamemaker) === "false") {
        item.setAttribute("src", "./img/wrong.png");
    }
})









allcheck.forEach(item => {
    console.log(item)
    item.addEventListener('click', () => {
        console.log(item.attributes)
        if (item.attributes.src.nodeValue == "./img/tick.png") {
            item.setAttribute("src", "./img/wrong.png");

            let localnamemaker = item.attributes.id.nodeValue.slice(0, -5);
            console.log(localnamemaker)
            localStorage.setItem(localnamemaker, "false")
        } else {
            item.setAttribute("src", "./img/tick.png");
            let localnamemaker = item.attributes.id.nodeValue.slice(0, -5);
            console.log(localnamemaker)
            localStorage.setItem(localnamemaker, "true")
        }

    })
})


allowed_platforms_by_user_in_set = [];
for (var i = 0, len = localStorage.length; i < len; ++i) {
    if (localStorage.getItem(localStorage.key(i)) === "true") {
        allowed_platforms_by_user_in_set.push(localStorage.key(i));
    }
}
console.log(allowed_platforms_by_user_in_set)

// let allcheck = document.getElementsByClassName("check");
// allcheck.addEventListnner("click",)

// .forEach(item => {
//     console.log(item);
//     item.addEventListener('click', event => {
//         console.log("ehe")
//     })
// })

// document.querySelectorAll('.some-class')






// //item.attributes.src = "./img/wrong.png"

// item.removeAttribute("src");


// var attr = document.createAttribute("src");
// attr.value = "./img/wrong.png";
// // var h = document.getElementsByTagName("H1")[0];
// item.setAttributeNode(attr);