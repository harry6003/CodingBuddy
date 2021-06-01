"use strict";

var api = "https://kontests.net/api/v1/all";

if (localStorage.getItem("codechef") === null && localStorage.getItem("codeforces") === null && localStorage.getItem("at_coder") === null && localStorage.getItem("kick_start") === null && localStorage.getItem("hacker_earth") === null && localStorage.getItem("leet_code") === null && localStorage.getItem("hacker_rank") === null) {
  localStorage.setItem("codechef", "true");
  localStorage.setItem("codeforces", "true");
  localStorage.setItem("at_coder", "true");
  localStorage.setItem("kick_start", "true");
  localStorage.setItem("hacker_earth", "true");
  localStorage.setItem("leet_code", "true");
  localStorage.setItem("hacker_rank", "true");
} else {
  var allowed_platforms_by_user = [];

  for (var i = 0, len = localStorage.length; i < len; ++i) {
    if (localStorage.getItem(localStorage.key(i)) === "true") {
      allowed_platforms_by_user.push(localStorage.key(i));
    }
  }

  console.log(allowed_platforms_by_user);
}

function getcontestdetails() {
  var response, data, dataofongoing, dataofupcoming;
  return regeneratorRuntime.async(function getcontestdetails$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(fetch(api));

        case 2:
          response = _context.sent;
          _context.next = 5;
          return regeneratorRuntime.awrap(response.json());

        case 5:
          data = _context.sent;
          console.log(data);
          dataofongoing = data.filter(function (element) {
            if (element.status === "CODING") return element;
          });
          console.log(dataofongoing);
          dataofupcoming = data.filter(function (element) {
            if (element.status === "BEFORE") return element;
          });
          console.log(dataofupcoming);

        case 11:
        case "end":
          return _context.stop();
      }
    }
  });
}

getcontestdetails();