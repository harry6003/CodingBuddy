let allcheck = document.querySelectorAll('.check')
const api = "https://kontests.net/api/v1/all";

allcheck.forEach(item => {
        let localnamemaker = item.attributes.id.nodeValue.slice(0, -5);
        if (localStorage.getItem(localnamemaker) === "true") {
            item.setAttribute("src", "./img/tick.png");
        } else if (localStorage.getItem(localnamemaker) === "false") {
            item.setAttribute("src", "./img/wrong.png");
        }
    })
    // let ado = [];
    // let adu = [];


// async function getcontestdetails() {
//     const response = await fetch(api);
//     const data = await response.json();

//     ado = data.filter(element => {
//         if ((element.status === "CODING" && localStorage.getItem(element.site)) && (parseInt(element.duration) <= 2678400))
//             return element
//     })




// }






allcheck.forEach(item => {
    // console.log(item)
    item.addEventListener('click', () => {
        console.log(item.attributes)
        if (item.attributes.src.nodeValue == "./img/tick.png") {
            item.setAttribute("src", "./img/wrong.png");

            let localnamemaker = item.attributes.id.nodeValue.slice(0, -5);
            console.log(localnamemaker)
            localStorage.setItem(localnamemaker, "false")

            let ado_allowed = JSON.parse(localStorage.getItem("alldataofongoing"));
            let ado_not_allowed = JSON.parse(localStorage.getItem("ado_not_allowed"));
            let adu_allowed = JSON.parse(localStorage.getItem("alldataofupcoming"));
            let adu_not_allowed = JSON.parse(localStorage.getItem("adu_not_allowed"));


            let updated_ado = ado_allowed.filter(ele => {
                let site = ele.site;
                if (localStorage.getItem(site) === "true")
                    return ele;
                else
                    ado_not_allowed.push(ele);
            })
            console.log(updated_ado);
            console.log(ado_not_allowed);
            localStorage.setItem("alldataofongoing", JSON.stringify(updated_ado));
            localStorage.setItem("ado_not_allowed", JSON.stringify(ado_not_allowed));


            let updated_adu = adu_allowed.filter(ele => {
                let site = ele.site;
                if (localStorage.getItem(site) === "true")
                    return ele;
                else
                    adu_not_allowed.push(ele);
            })
            console.log(updated_adu);
            console.log(adu_not_allowed);
            localStorage.setItem("alldataofupcoming", JSON.stringify(updated_adu));
            localStorage.setItem("adu_not_allowed", JSON.stringify(adu_not_allowed));



        } else {
            item.setAttribute("src", "./img/tick.png");
            let localnamemaker = item.attributes.id.nodeValue.slice(0, -5);
            console.log(localnamemaker)
            localStorage.setItem(localnamemaker, "true")

            let ado = JSON.parse(localStorage.getItem("alldataofongoing"));
            let ado_not_allowed = JSON.parse(localStorage.getItem("ado_not_allowed"));
            let temp_ado = [];
            let adu = JSON.parse(localStorage.getItem("alldataofupcoming"));
            let adu_not_allowed = JSON.parse(localStorage.getItem("adu_not_allowed"));
            let temp_adu = [];
            let updated_ado = ado.filter(ele => {
                let site = ele.site;
                if (localStorage.getItem(site) === "true")
                    return ele;
            })
            ado_not_allowed.forEach((ele, index) => {
                let site = ele.site;
                if (localStorage.getItem(site) === "true") {
                    //  console.log(ele);
                    updated_ado.push(ele);
                    temp_ado.push(ele);
                }
            })
            temp_ado.forEach(ele => {
                const index = ado_not_allowed.indexOf(ele);
                if (index > -1) {
                    ado_not_allowed.splice(index, 1);
                }

            })

            console.log(updated_ado);
            console.log(ado_not_allowed);
            localStorage.setItem("alldataofongoing", JSON.stringify(updated_ado));
            localStorage.setItem("ado_not_allowed", JSON.stringify(ado_not_allowed));


            let updated_adu = adu.filter(ele => {
                let site = ele.site;
                if (localStorage.getItem(site) === "true")
                    return ele;
            })
            adu_not_allowed.forEach((ele, index) => {
                let site = ele.site;
                if (localStorage.getItem(site) === "true") {
                    // console.log(ele);
                    updated_adu.push(ele);
                    temp_adu.push(ele);
                }
            })
            temp_adu.forEach(ele => {
                const index = adu_not_allowed.indexOf(ele);
                if (index > -1) {
                    adu_not_allowed.splice(index, 1);
                }

            })

            console.log(updated_adu);
            console.log(adu_not_allowed);
            localStorage.setItem("alldataofupcoming", JSON.stringify(updated_adu));
            localStorage.setItem("adu_not_allowed", JSON.stringify(adu_not_allowed));






        }

    })
})


allowed_platforms_by_user_in_set = [];
for (var i = 0, len = localStorage.length; i < len; ++i) {
    if (localStorage.getItem(localStorage.key(i)) === "true") {
        allowed_platforms_by_user_in_set.push(localStorage.key(i));
    }
}
// console.log(allowed_platforms_by_user_in_set)   TESTING PURPOSE TESTING PURPOSE

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