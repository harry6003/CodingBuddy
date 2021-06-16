const api = "https://kontests.net/api/v1/all";
let allowed_platforms_by_user = [];



if (localStorage.getItem("CodeChef") === null && localStorage.getItem("CodeForces") === null && localStorage.getItem("AtCoder") === null && localStorage.getItem("HackerEarth") === null && localStorage.getItem("LeetCode") === null && localStorage.getItem("HackerRank") === null) {
    localStorage.setItem("CodeChef", "true");
    localStorage.setItem("CodeForces", "true");
    localStorage.setItem("AtCoder", "true");
    localStorage.setItem("HackerEarth", "true");
    localStorage.setItem("LeetCode", "true");
    localStorage.setItem("HackerRank", "true");

    console.log("all set to true first time");
    allowed_platforms_by_user = [];
    for (var i = 0, len = localStorage.length; i < len; ++i) {
        if (localStorage.getItem(localStorage.key(i)) === "true") {
            allowed_platforms_by_user.push(localStorage.key(i));
        }
    }
    console.log(allowed_platforms_by_user)

} else {
    allowed_platforms_by_user = [];
    for (var i = 0, len = localStorage.length; i < len; ++i) {
        if (localStorage.getItem(localStorage.key(i)) === "true") {
            allowed_platforms_by_user.push(localStorage.key(i));
        }
    }
    // console.log(allowed_platforms_by_user)  TESTING PURPOSE


}


function getsrcofimg(s) {
    switch (s) {
        case "CodeForces":
            return "./img/platform-logos/cfmade.png"
        case "LeetCode":
            return "./img/platform-logos/leetcode.png"
        case "HackerEarth":
            return "./img/platform-logos/hackerearthrbg.png"
        case "CodeChef":
            return "./img/platform-logos/codechefnew.png"
        case "HackerRank":
            return "./img/platform-logos/hackerrank.png"
        case "AtCoder":
            return "./img/platform-logos/atcoderwhiterbg.png"
    }
}


function getcontestduration(seconds) {
    seconds = Number(seconds);
    var d = Math.floor(seconds / (3600 * 24));
    var h = Math.floor(seconds % (3600 * 24) / 3600);
    var m = Math.floor(seconds % 3600 / 60);
    var s = Math.floor(seconds % 60);

    var dDisplay = d > 0 ? d + (d == 1 ? " day, " : " days, ") : "";
    var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " hours, ") : "";
    var mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " minutes, ") : "";
    var sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";
    return dDisplay + hDisplay + mDisplay;
}


function getcontestendtime(endtime) {
    let utcDate = endtime; // ISO-8601 formatted date returned from server
    let localDate = new Date(utcDate);
    let year = localDate.getFullYear();
    let month = localDate.getMonth() + 1;
    let dt = localDate.getDate();
    let hours = localDate.getHours();
    let minutes = localDate.getMinutes() > 0 ? (localDate.getMinutes() > 10 ? localDate.getMinutes() : "0" + localDate.getMinutes()) : "00";


    var weekday = new Array(7);
    weekday[0] = "SUN";
    weekday[1] = "MON";
    weekday[2] = "TUE";
    weekday[3] = "WED";
    weekday[4] = "THU";
    weekday[5] = "FRI";
    weekday[6] = "SAT";

    let day = weekday[localDate.getDay()];
    let result = "END :   " + day + " " +
        dt + "/" + month + "/" + year + "   " + hours + ":" + minutes;
    return result;
}

function getdateofstart(start_time) {
    let utcDate = start_time;
    let localDate = new Date(utcDate);
    let year = localDate.getFullYear();
    let month = localDate.getMonth() + 1;
    let dt = localDate.getDate();

    var weekday = new Array(7);
    weekday[0] = "SUN";
    weekday[1] = "MON";
    weekday[2] = "TUE";
    weekday[3] = "WED";
    weekday[4] = "THU";
    weekday[5] = "FRI";
    weekday[6] = "SAT";

    let day = weekday[localDate.getDay()];
    let res = day + " " + dt + "/" + month + "/" + year;
    return res;
}

function getdateofstartforgcalender(start_time) {
    let utcDate = start_time;
    let localDate = new Date(utcDate);
    let year = localDate.getFullYear();
    let month = localDate.getMonth() + 1;
    let dt = localDate.getDate();

    month = month > 9 ? month : "0" + month;
    dt = dt > 9 ? dt : "0" + dt;
    // let res = "" + dt + month + year;
    let res = "" + year + month + dt;
    return res;
}

function gettimeofstart(start_time) {
    let utcDate = start_time; // ISO-8601 formatted date returned from server
    let localDate = new Date(utcDate);
    let hours = localDate.getHours() > 0 ? (localDate.getHours() >= 10 ? localDate.getHours() : "0" + localDate.getHours()) : "00";
    let minutes = localDate.getMinutes() > 0 ? (localDate.getMinutes() >= 10 ? localDate.getMinutes() : "0" + localDate.getMinutes()) : "00";

    let result = hours + ":" + minutes;
    return result;
}

function gettimeofstart_forgcalender(start_time) {
    let utcDate = start_time; // ISO-8601 formatted date returned from server
    let localDate = new Date(utcDate);
    let hours = localDate.getHours() > 0 ? (localDate.getHours() >= 10 ? localDate.getHours() : "0" + localDate.getHours()) : "00";
    let minutes = localDate.getMinutes() > 0 ? (localDate.getMinutes() >= 10 ? localDate.getMinutes() : "0" + localDate.getMinutes()) : "00";

    let result = "" + hours + minutes + "00";
    return result;
}


function gcalenderlinkofevent(CNAME, SDATE, STIME, EDATE, ETIME, LINKOFC) {

    // console.log(CNAME);
    // console.log(SDATE);
    // console.log(STIME);
    // console.log(EDATE);
    // console.log(ETIME);
    // console.log(LINKOFC);
    let result = "https://www.google.com/calendar/render?action=TEMPLATE&text=" + CNAME + "&dates=" + SDATE + "T" + STIME + "/" + EDATE + "T" + ETIME + "&location=" + LINKOFC + "&pli=1&uid=&sf=true&output=xml#eventpage_6"

    return result.replace(/#/g, '%23');

    // return `https://www.google.com/calendar/render?action=TEMPLATE&text=${CNAME}&dates=${calendarTime}&location=${this.url}&pli=1&uid=&sf=true&output=xml#eventpage_6`
}






let alldataofongoing = [];
let ado_not_allowed = [];

let alldataofupcoming = [];
let adu_not_allowed = [];
async function getcontestdetails() {

    if (localStorage.getItem("alldataofongoing") == null && localStorage.getItem("alldataofupcoming") == null) {
        const response = await fetch(api);
        const data = await response.json();

        console.log(data);
        alldataofongoing = data.filter(element => {
            if (element.status === "CODING" && allowed_platforms_by_user.includes(element.site) && parseInt(element.duration) <= 1728000)
                return element
        });
        console.log(alldataofongoing)
        localStorage.setItem("alldataofongoing", JSON.stringify(alldataofongoing));
        localStorage.setItem("ado_not_allowed", JSON.stringify(ado_not_allowed));

        alldataofupcoming = data.filter(element => {
            if (element.status === "BEFORE" && allowed_platforms_by_user.includes(element.site) && parseInt(element.duration) <= 2678400)
                return element
        });
        console.log(alldataofupcoming)
        localStorage.setItem("alldataofupcoming", JSON.stringify(alldataofupcoming));
        localStorage.setItem("adu_not_allowed", JSON.stringify(adu_not_allowed));


    } else {
        alldataofongoing = JSON.parse(localStorage.getItem("alldataofongoing"));
        alldataofupcoming = JSON.parse(localStorage.getItem("alldataofupcoming"));
    }



    if (alldataofongoing.length == 0) {

        let ongoinginfo = document.getElementsByClassName("ongoingcontestinfo")[0];
        let outerdiv = document.createElement("DIV");
        outerdiv.setAttribute("style", "text-align:center")
        outerdiv.setAttribute("class", "sorrytextdiv")
        let h2 = document.createElement("H2");
        h2.innerHTML = "SORRY ! THERE IS NO CURRENT CONTEST "

        h2.setAttribute("class", "sorrytext");
        outerdiv.appendChild(h2);
        ongoinginfo.appendChild(outerdiv);


    } else {

        for (let i = 0; i < alldataofongoing.length; i++) {


            let ongoinginfo = document.getElementsByClassName("ongoingcontestinfo")[0];
            //outerdiv
            let outerdiv = document.createElement("DIV");
            outerdiv.setAttribute("class", "single-contest-detail-container")

            //div1
            let innerdiv1 = document.createElement("DIV");
            innerdiv1.setAttribute("class", "imageandheading");
            let imgofcontest = document.createElement("IMG");
            imgofcontest.setAttribute("src", getsrcofimg(alldataofongoing[i].site));
            imgofcontest.setAttribute("alt", "contest-image");
            imgofcontest.setAttribute("class", "contest-logo");
            let headingofcontest = document.createElement("H3");
            let linkofcontest = alldataofongoing[i].url;

            let anchor = document.createElement("A");
            anchor.setAttribute("href", linkofcontest);
            anchor.setAttribute("target", "_blank");
            anchor.setAttribute("class", "linkofcontest");
            anchor.appendChild(headingofcontest);
            headingofcontest.setAttribute("class", "nameofcontest");
            headingofcontest.innerHTML = alldataofongoing[i].name;
            innerdiv1.appendChild(imgofcontest);
            innerdiv1.appendChild(anchor);

            //div2
            let innerdiv2 = document.createElement("DIV");
            innerdiv2.setAttribute("class", "startandend");
            //starttime
            let starttime = document.createElement("DIV");
            starttime.setAttribute("class", "starttime");
            let startdate = document.createElement("H4");
            startdate.setAttribute("class", "date");
            startdate.innerHTML = getdateofstart(alldataofongoing[i].start_time);
            let timeofstart = document.createElement("P");
            timeofstart.setAttribute("class", "time");
            timeofstart.classList.add("extratimestyleofstart");
            timeofstart.innerHTML = gettimeofstart(alldataofongoing[i].start_time);
            starttime.appendChild(startdate);
            starttime.appendChild(timeofstart);


            //endtime
            let endtime = document.createElement("DIV");
            endtime.setAttribute("class", "endtime");
            let enddate = document.createElement("H4");
            enddate.setAttribute("class", "date");
            enddate.innerHTML = getdateofstart(alldataofongoing[i].end_time);
            let timeofend = document.createElement("P");
            timeofend.setAttribute("class", "time");
            timeofend.classList.add("extratimestyleofend");
            timeofend.innerHTML = gettimeofstart(alldataofongoing[i].end_time);
            endtime.appendChild(enddate);
            endtime.appendChild(timeofend);


            //  calender
            let imgofcalenderdiv = document.createElement("DIV");
            imgofcalenderdiv.setAttribute("class", "calender-logo-div")

            let imgofcalender = document.createElement("IMG");
            imgofcalender.setAttribute("src", "./img/calender-new.png");
            imgofcalender.setAttribute("alt", "calender-image");
            imgofcalender.setAttribute("class", "calender-logo");

            // a
            let linktogcalender = document.createElement("A");
            linktogcalender.setAttribute("href",
                gcalenderlinkofevent(
                    alldataofongoing[i].name,
                    getdateofstartforgcalender(alldataofongoing[i].start_time),
                    gettimeofstart_forgcalender(alldataofongoing[i].start_time),
                    getdateofstartforgcalender(alldataofongoing[i].end_time),
                    gettimeofstart_forgcalender(alldataofongoing[i].end_time),
                    linkofcontest));
            linktogcalender.setAttribute("target", "_blank");
            linktogcalender.appendChild(imgofcalender)

            imgofcalenderdiv.appendChild(linktogcalender);


            innerdiv2.appendChild(starttime);
            innerdiv2.appendChild(endtime);
            innerdiv2.appendChild(imgofcalenderdiv);

            //outerdiv
            outerdiv.appendChild(innerdiv1);
            outerdiv.appendChild(innerdiv2);
            ongoinginfo.appendChild(outerdiv);
            // let hr = document.createElement("HR");
            // ongoinginfo.appendChild(hr);
        }
    }

    for (let i = 0; i < alldataofupcoming.length; i++) {
        let upcominginfo = document.getElementsByClassName("upcomingcontestinfo")[0];
        //outerdiv
        let outerdiv = document.createElement("DIV");
        outerdiv.setAttribute("class", "single-contest-detail-container");
        //div1
        let innerdiv1 = document.createElement("DIV");
        innerdiv1.setAttribute("class", "imageandheading");
        let imgofcontest = document.createElement("IMG");
        imgofcontest.setAttribute("src", getsrcofimg(alldataofupcoming[i].site));
        imgofcontest.setAttribute("alt", "contest-image");
        imgofcontest.setAttribute("class", "contest-logo");
        let headingofcontest = document.createElement("H3");
        let linkofcontest = alldataofupcoming[i].url;
        let anchor = document.createElement("A");
        anchor.setAttribute("href", linkofcontest);
        anchor.setAttribute("target", "_blank");
        anchor.setAttribute("class", "linkofcontest");
        anchor.appendChild(headingofcontest);
        headingofcontest.setAttribute("class", "nameofcontest");
        headingofcontest.innerHTML = alldataofupcoming[i].name;
        innerdiv1.appendChild(imgofcontest);
        innerdiv1.appendChild(anchor);

        //div2
        let innerdiv2 = document.createElement("DIV");
        innerdiv2.setAttribute("class", "startandend");
        //starttime
        let starttime = document.createElement("DIV");
        starttime.setAttribute("class", "starttime");
        let startdate = document.createElement("H4");
        startdate.setAttribute("class", "date");
        startdate.innerHTML = getdateofstart(alldataofupcoming[i].start_time);
        let timeofstart = document.createElement("P");
        timeofstart.setAttribute("class", "time");
        timeofstart.classList.add("extratimestyleofstart");
        timeofstart.innerHTML = gettimeofstart(alldataofupcoming[i].start_time);
        starttime.appendChild(startdate);
        starttime.appendChild(timeofstart);


        //endtime
        let endtime = document.createElement("DIV");
        endtime.setAttribute("class", "endtime");
        let enddate = document.createElement("H4");
        enddate.setAttribute("class", "date");
        enddate.innerHTML = getdateofstart(alldataofupcoming[i].end_time);
        let timeofend = document.createElement("P");
        timeofend.setAttribute("class", "time");
        timeofend.classList.add("extratimestyleofend");
        timeofend.innerHTML = gettimeofstart(alldataofupcoming[i].end_time);
        endtime.appendChild(enddate);
        endtime.appendChild(timeofend);


        //  calender
        let imgofcalenderdiv = document.createElement("DIV");
        imgofcalenderdiv.setAttribute("class", "calender-logo-div")
            // image
        let imgofcalender = document.createElement("IMG");
        imgofcalender.setAttribute("src", "./img/calender-new.png");
        imgofcalender.setAttribute("alt", "calender-image");
        imgofcalender.setAttribute("class", "calender-logo");
        // a
        let linktogcalender = document.createElement("A");
        linktogcalender.setAttribute("href",
            gcalenderlinkofevent(
                alldataofupcoming[i].name,
                getdateofstartforgcalender(alldataofupcoming[i].start_time),
                gettimeofstart_forgcalender(alldataofupcoming[i].start_time),
                getdateofstartforgcalender(alldataofupcoming[i].end_time),
                gettimeofstart_forgcalender(alldataofupcoming[i].end_time),
                linkofcontest));
        linktogcalender.setAttribute("target", "_blank");
        linktogcalender.appendChild(imgofcalender)

        imgofcalenderdiv.appendChild(linktogcalender);


        innerdiv2.appendChild(starttime);
        innerdiv2.appendChild(endtime);
        innerdiv2.appendChild(imgofcalenderdiv);


        //outerdiv
        outerdiv.appendChild(innerdiv1);
        outerdiv.appendChild(innerdiv2);
        upcominginfo.appendChild(outerdiv);

        // let hr = document.createElement("HR");
        // upcominginfo.appendChild(hr);
    }

    async function updatecontestdetails() {
        const updated_response = await fetch(api);
        const updated_data = await updated_response.json();
        // console.log(updated_data);   TESTING PURPOSE

        let updated_alldataofongoing = [];
        let updated_alldataofupcoming = [];

        updated_alldataofongoing = updated_data.filter(element => {
            if (element.status === "CODING" && allowed_platforms_by_user.includes(element.site) && parseInt(element.duration) <= 2678400)
                return element
        });

        // console.log(updated_alldataofongoing)  TESTING PURPOSE
        localStorage.setItem("alldataofongoing", JSON.stringify(updated_alldataofongoing));


        updated_alldataofupcoming = updated_data.filter(element => {
            if (element.status === "BEFORE" && allowed_platforms_by_user.includes(element.site) && parseInt(element.duration) <= 2678400)
                return element
        });
        // console.log(updated_alldataofupcoming)   TESTING PURPOSE
        localStorage.setItem("alldataofupcoming", JSON.stringify(updated_alldataofupcoming));
    }
    updatecontestdetails();

}

getcontestdetails();








// let div = document.createElement("DIV");
// div.setAttribute("class", "single-contest-detail-container")
// let img = document.createElement("IMG");
// let imgsrc = getsrcofimg(alldataofongoing[i].site);
// img.setAttribute("src", imgsrc);
// img.setAttribute("class", "imageofcontestongoing");
// div.appendChild(img);


// //  let div_of_head_and_duration = document.createElement("DIV");
// let cname = document.createElement("H3");
// cname.innerHTML = alldataofongoing[i].name;
// cname.setAttribute("class", "nameofcontestongoing");
// let endtime = document.createElement("H3");
// endtime.innerHTML = getcontestendtime(alldataofongoing[i].end_time);
// // div_of_head_and_duration.appendChild(cname);
// // div_of_head_and_duration.appendChild(endtime);
// // div.appendChild(div_of_head_and_duration);
// div.appendChild(cname);
// div.appendChild(endtime);


//ongoinginfo.appendChild(div);
// var namuna = document.createElement("h1");
// namuna.innerHTML = "HELLO I AM NAMUNA ON " + (i + 1);
// div.appendChild(namuna);
// let ongoinginfo = document.getElementsByClassName("ongoingcontestinfo")[0];
// ongoinginfo.appendChild(div);
// console.log("HH")



// var div = document.createElement("DIV");
// var namuna = document.createElement("h1");
// namuna.innerHTML = "HELLO I AM NAMUNA UP " + (i + 1);
// div.appendChild(namuna);
// let ongoinginfo = document.getElementsByClassName("upcomingcontestinfo")[0];
// ongoinginfo.appendChild(div);
// console.log("HH")