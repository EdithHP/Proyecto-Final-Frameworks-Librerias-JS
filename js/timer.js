/*
 * Author - Harshen Pandey
 * Version - 1.0.9
 * Release - 18th March 2017
 * Copyright (c) 2017 - 2020 Harshen Pandey
 */

! function(a) {
  function b(b, m) {
    var n = a.extend({}, a.fn.countdowntimer.defaults, m),
      b = b;
    b.addClass("style");
    var o = "",
      r = "",
      s = "",
      t = "";
    if (o = n.size, r = n.borderColor, s = n.fontColor, t = n.backgroundColor, void 0 != m.regexpMatchFormat && void 0 != m.regexpReplaceWith && void 0 == m.timeSeparator && (window["regexpMatchFormat_" + b.attr("id")] = m.regexpMatchFormat, window["regexpReplaceWith_" + b.attr("id")] = m.regexpReplaceWith), void 0 != m.beforeExpiryTime) {
      var w = n.beforeExpiryTime.split(":");
      "00" != w[0] && (window["beforeExpiryDays_" + b.attr("id")] = w[0]), "00" != w[1] && (window["beforeExpiryHours_" + b.attr("id")] = w[1]), "00" != w[2] && (window["beforeExpiryMinutes_" + b.attr("id")] = w[2]), "00" != w[3] && (window["beforeExpirySeconds_" + b.attr("id")] = w[3])
    }
    if (void 0 != m.borderColor || void 0 != m.fontColor || void 0 != m.backgroundColor) {
      var x = {
        background: t,
        color: s,
        "border-color": r
      };
      b.css(x)
    } else b.addClass("colorDefinition");
    if (void 0 != m.size) switch (o) {
      case "xl":
        b.addClass("size_xl");
        break;
      case "lg":
        b.addClass("size_lg");
        break;
      case "md":
        b.addClass("size_md");
        break;
      case "sm":
        b.addClass("size_sm");
        break;
      case "xs":
        b.addClass("size_xs")
    } else "sm" == o && b.addClass("size_sm");
    if (void 0 != m.startDate || void 0 != m.dateAndTime || void 0 != m.currentTime || void 0 == m.hours && void 0 == m.minutes && void 0 == m.seconds)
      if (void 0 != m.startDate && void 0 != m.dateAndTime && void 0 == m.currentTime) {
        startDate = "", endDate = "", timer_startDate = "", window["startDate" + b.attr("id")] = new Date(n.startDate), window["endDate" + b.attr("id")] = new Date(n.dateAndTime);
        var y = "withStart";
        j(b, n, y), window["timer_startDate" + b.attr("id")] = setInterval(function() {
          j(b, n, y)
        }, 1e3 * n.tickInterval)
      } else if (void 0 == m.startDate && void 0 != m.dateAndTime && void 0 == m.currentTime) {
      startTime = "", dateTime = "", timer_givenDate = "";
      var z = n.startDate.getHours() < 10 ? "0" + n.startDate.getHours() : n.startDate.getHours(),
        A = n.startDate.getMinutes() < 10 ? "0" + n.startDate.getMinutes() : n.startDate.getMinutes(),
        B = n.startDate.getSeconds() < 10 ? "0" + n.startDate.getSeconds() : n.startDate.getSeconds(),
        C = n.startDate.getMonth() + 1 < 10 ? "0" + (n.startDate.getMonth() + 1) : n.startDate.getMonth() + 1,
        D = n.startDate.getDate() < 10 ? "0" + n.startDate.getDate() : n.startDate.getDate(),
        E = n.startDate.getFullYear();
      window["startTime" + b.attr("id")] = new Date(E + "/" + C + "/" + D + " " + z + ":" + A + ":" + B), window["dateTime" + b.attr("id")] = new Date(n.dateAndTime);
      var y = "withnoStart";
      j(b, n, y), window["timer_givenDate" + b.attr("id")] = setInterval(function() {
        j(b, n, y)
      }, 1e3 * n.tickInterval)
    } else void 0 != m.currentTime ? (currentTime = "", timer_currentDate = "", window["currentTime" + b.attr("id")] = n.currentTime, k(b, n), window["timer_currentDate" + b.attr("id")] = setInterval(function() {
      k(b, n)
    }, 1e3 * n.tickInterval)) : (countSeconds = "", timer_secondsTimer = "", window["countSeconds" + b.attr("id")] = n.seconds, window["timer_secondsTimer" + b.attr("id")] = setInterval(function() {
      l(b)
    }, 1e3));
    else void 0 != m.hours && void 0 == m.minutes && void 0 == m.seconds ? (hours_H = "", minutes_H = "", seconds_H = "", timer_H = "", window["hours_H" + b.attr("id")] = n.hours, window["minutes_H" + b.attr("id")] = n.minutes, window["seconds_H" + b.attr("id")] = n.seconds, void 0 != m.pauseButton && p(b, "H", n, c), void 0 != m.stopButton && q(b, "H", n, c), c(b, n), window["timer_H" + b.attr("id")] = setInterval(function() {
      c(b, n)
    }, 1e3 * n.tickInterval)) : void 0 == m.hours && void 0 != m.minutes && void 0 == m.seconds ? (hours_M = "", minutes_M = "", seconds_M = "", timer_M = "", window["hours_M" + b.attr("id")] = n.hours, window["minutes_M" + b.attr("id")] = n.minutes, window["seconds_M" + b.attr("id")] = n.seconds, void 0 != m.pauseButton && p(b, "M", n, d), void 0 != m.stopButton && q(b, "M", n, d), d(b, n), window["timer_M" + b.attr("id")] = setInterval(function() {
      d(b, n)
    }, 1e3 * n.tickInterval)) : void 0 == m.hours && void 0 == m.minutes && void 0 != m.seconds ? (hours_S = "", minutes_S = "", seconds_S = "", timer_S = "", window["hours_S" + b.attr("id")] = n.hours, window["minutes_S" + b.attr("id")] = n.minutes, window["seconds_S" + b.attr("id")] = n.seconds, void 0 != m.pauseButton && p(b, "S", n, e), void 0 != m.stopButton && q(b, "S", n, e), e(b, n), window["timer_S" + b.attr("id")] = setInterval(function() {
      e(b, n)
    }, 1e3 * n.tickInterval)) : void 0 != m.hours && void 0 != m.minutes && void 0 == m.seconds ? (hours_HM = "", minutes_HM = "", seconds_HM = "", timer_HM = "", window["hours_HM" + b.attr("id")] = n.hours, window["minutes_HM" + b.attr("id")] = n.minutes, window["seconds_HM" + b.attr("id")] = n.seconds, void 0 != m.pauseButton && p(b, "HM", n, f), void 0 != m.stopButton && q(b, "HM", n, f), f(b, n), window["timer_HM" + b.attr("id")] = setInterval(function() {
      f(b, n)
    }, 1e3 * n.tickInterval)) : void 0 == m.hours && void 0 != m.minutes && void 0 != m.seconds ? (hours_MS = "", minutes_MS = "", seconds_MS = "", timer_MS = "", window["hours_MS" + b.attr("id")] = n.hours, window["minutes_MS" + b.attr("id")] = n.minutes, window["seconds_MS" + b.attr("id")] = n.seconds, void 0 != m.pauseButton && p(b, "MS", n, g), void 0 != m.stopButton && q(b, "MS", n, g), g(b, n), window["timer_MS" + b.attr("id")] = setInterval(function() {
      g(b, n)
    }, 1e3 * n.tickInterval)) : void 0 != m.hours && void 0 == m.minutes && void 0 != m.seconds ? (hours_HS = "", minutes_HS = "", seconds_HS = "", timer_HS = "", window["hours_HS" + b.attr("id")] = n.hours, window["minutes_HS" + b.attr("id")] = n.minutes, window["seconds_HS" + b.attr("id")] = n.seconds, void 0 != m.pauseButton && p(b, "HS", n, h), void 0 != m.stopButton && q(b, "HS", n, h), h(b, n), window["timer_HS" + b.attr("id")] = setInterval(function() {
      h(b, n)
    }, 1e3 * n.tickInterval)) : void 0 != m.hours && void 0 != m.minutes && void 0 != m.seconds && (hours_HMS = "", minutes_HMS = "", seconds_HMS = "", timer_HMS = "", window["hours_HMS" + b.attr("id")] = n.hours, window["minutes_HMS" + b.attr("id")] = n.minutes, window["seconds_HMS" + b.attr("id")] = n.seconds, void 0 != m.pauseButton && p(b, "HMS", n, i), void 0 != m.stopButton && q(b, "HMS", n, i), i(b, n), window["timer_HMS" + b.attr("id")] = setInterval(function() {
      i(b, n)
    }, 1e3 * n.tickInterval))
  }

  function c(a, b) {
    var c = a.attr("id");
    window["minutes_H" + c] == b.minutes && window["seconds_H" + c] == b.seconds && window["hours_H" + c] == b.hours ? (window["hours_H" + c].toString().length < 2 && (window["hours_H" + c] = "0" + window["hours_H" + c]), o(a, window["hours_H" + c] + b.timeSeparator + "00" + b.timeSeparator + "00"), "undefined" != typeof window["beforeExpiryHours_" + c] && window["beforeExpiryHours_" + c] == window["hours_H" + c] && n(a, b), window["seconds_H" + c] = 60 - b.tickInterval, window["minutes_H" + c] = 59, 0 != window["hours_H" + c] ? window["hours_H" + c]-- : (delete window["hours_H" + c], delete window["minutes_H" + c], delete window["seconds_H" + c], clearInterval(window["timer_H" + c]), m(a, b))) : (window["hours_H" + c].toString().length < 2 && (window["hours_H" + c] = "0" + window["hours_H" + c]), window["minutes_H" + c].toString().length < 2 && (window["minutes_H" + c] = "0" + window["minutes_H" + c]), window["seconds_H" + c].toString().length < 2 && (window["seconds_H" + c] = "0" + window["seconds_H" + c]), o(a, window["hours_H" + c] + b.timeSeparator + window["minutes_H" + c] + b.timeSeparator + window["seconds_H" + c]), ("undefined" != typeof window["beforeExpiryHours_" + c] && window["beforeExpiryHours_" + c] == window["hours_H" + c] && "undefined" != typeof window["beforeExpiryMinutes_" + c] && window["beforeExpiryMinutes_" + c] == window["minutes_H" + c] && "undefined" != typeof window["beforeExpirySeconds_" + c] && window["beforeExpirySeconds_" + c] == window["seconds_H" + c] || "undefined" != typeof window["beforeExpiryHours_" + c] && window["beforeExpiryHours_" + c] == window["hours_H" + c] && "undefined" != typeof window["beforeExpiryMinutes_" + c] && window["beforeExpiryMinutes_" + c] == window["minutes_H" + c] && "undefined" == typeof window["beforeExpirySeconds_" + c] && "00" == window["seconds_H" + c] || "undefined" == typeof window["beforeExpiryHours_" + c] && "00" == window["hours_H" + c] && "undefined" != typeof window["beforeExpiryMinutes_" + c] && window["beforeExpiryMinutes_" + c] == window["minutes_H" + c] && "undefined" != typeof window["beforeExpirySeconds_" + c] && window["beforeExpirySeconds_" + c] == window["seconds_H" + c] || "undefined" != typeof window["beforeExpiryHours_" + c] && window["beforeExpiryHours_" + c] == window["hours_H" + c] && "undefined" == typeof window["beforeExpiryMinutes_" + c] && "00" == window["minutes_H" + c] && "undefined" != typeof window["beforeExpirySeconds_" + c] && window["beforeExpirySeconds_" + c] == window["seconds_H" + c] || "undefined" != typeof window["beforeExpiryHours_" + c] && window["beforeExpiryHours_" + c] == window["hours_H" + c] && "undefined" == typeof window["beforeExpiryMinutes_" + c] && "00" == window["minutes_H" + c] && "undefined" == typeof window["beforeExpirySeconds_" + c] && "00" == window["seconds_H" + c] || "undefined" == typeof window["beforeExpiryHours_" + c] && "00" == window["hours_H" + c] && "undefined" != typeof window["beforeExpiryMinutes_" + c] && window["beforeExpiryMinutes_" + c] == window["minutes_H" + c] && "undefined" == typeof window["beforeExpirySeconds_" + c] && "00" == window["seconds_H" + c] || "undefined" == typeof window["beforeExpiryHours_" + c] && "00" == window["hours_H" + c] && "undefined" == typeof window["beforeExpiryMinutes_" + c] && "00" == window["minutes_H" + c] && "undefined" != typeof window["beforeExpirySeconds_" + c] && window["beforeExpirySeconds_" + c] == window["seconds_H" + c]) && n(a, b), window["seconds_H" + c] -= b.tickInterval, 0 != window["minutes_H" + c] && window["seconds_H" + c] < 0 && (window["minutes_H" + c]--, window["seconds_H" + c] = 60 - b.tickInterval), 0 == window["minutes_H" + c] && window["seconds_H" + c] < 0 && 0 != window["hours_H" + c] && (window["hours_H" + c]--, window["minutes_H" + c] = 59, window["seconds_H" + c] = 60 - b.tickInterval), 0 == window["minutes_H" + c] && window["seconds_H" + c] < 0 && 0 == window["hours_H" + c] && (delete window["hours_H" + c], delete window["minutes_H" + c], delete window["seconds_H" + c], clearInterval(window["timer_H" + c]), m(a, b))), c = null
  }

  function d(a, b) {
    var c = a.attr("id");
    window["minutes_M" + c] == b.minutes && window["seconds_M" + c] == b.seconds ? (window["minutes_M" + c].toString().length < 2 && (window["minutes_M" + c] = "0" + window["minutes_M" + c]), o(a, window["minutes_M" + c] + b.timeSeparator + "00"), "undefined" != typeof window["beforeExpiryMinutes_" + c] && window["beforeExpiryMinutes_" + c] == window["minutes_M" + c] && n(a, b), window["seconds_M" + c] = 60 - b.tickInterval, 0 != window["minutes_M" + c] ? window["minutes_M" + c]-- : (delete window["hours_M" + c], delete window["minutes_M" + c], delete window["seconds_M" + c], clearInterval(window["timer_M" + c]), m(a, b))) : (window["minutes_M" + c].toString().length < 2 && (window["minutes_M" + c] = "0" + window["minutes_M" + c]), window["seconds_M" + c].toString().length < 2 && (window["seconds_M" + c] = "0" + window["seconds_M" + c]), o(a, window["minutes_M" + c] + b.timeSeparator + window["seconds_M" + c]), ("undefined" != typeof window["beforeExpiryMinutes_" + c] && window["beforeExpiryMinutes_" + c] == window["minutes_M" + c] && "undefined" != typeof window["beforeExpirySeconds_" + c] && window["beforeExpirySeconds_" + c] == window["seconds_M" + c] || "undefined" != typeof window["beforeExpiryMinutes_" + c] && window["beforeExpiryMinutes_" + c] == window["minutes_M" + c] && "undefined" == typeof window["beforeExpirySeconds_" + c] && "00" == window["seconds_M" + c] || "undefined" == typeof window["beforeExpiryMinutes_" + c] && "00" == window["minutes_M" + c] && "undefined" != typeof window["beforeExpirySeconds_" + c] && window["beforeExpirySeconds_" + c] == window["seconds_M" + c]) && n(a, b), window["seconds_M" + c] -= b.tickInterval, 0 != window["minutes_M" + c] && window["seconds_M" + c] < 0 && (window["minutes_M" + c]--, window["seconds_M" + c] = 60 - b.tickInterval), 0 == window["minutes_M" + c] && window["seconds_M" + c] < 0 && (delete window["hours_M" + c], delete window["minutes_M" + c], delete window["seconds_M" + c], clearInterval(window["timer_M" + c]), m(a, b))), c = null
  }

  function e(a, b) {
    var c = a.attr("id");
    window["seconds_S" + c].toString().length < 2 && (window["seconds_S" + c] = "0" + window["seconds_S" + c]), o(a, window["seconds_S" + c] + " sec"), "undefined" != typeof window["beforeExpirySeconds_" + c] && window["beforeExpirySeconds_" + c] == window["seconds_S" + c] && n(a, b), window["seconds_S" + c] -= b.tickInterval, window["seconds_S" + c] < 0 && (delete window["hours_S" + c], delete window["minutes_S" + c], delete window["seconds_S" + c], clearInterval(window["timer_S" + c]), m(a, b)), c = null
  }

  function f(a, b) {
    var c = a.attr("id");
    window["minutes_HM" + c] == b.minutes && window["hours_HM" + c] == b.hours ? (window["hours_HM" + c].toString().length < 2 && (window["hours_HM" + c] = "0" + window["hours_HM" + c]), window["minutes_HM" + c].toString().length < 2 && (window["minutes_HM" + c] = "0" + window["minutes_HM" + c]), o(a, window["hours_HM" + c] + b.timeSeparator + window["minutes_HM" + c] + b.timeSeparator + "00"), "undefined" != typeof window["beforeExpiryHours_" + c] && window["beforeExpiryHours_" + c] == window["hours_HM" + c] && "undefined" != typeof window["beforeExpiryMinutes_" + c] && window["beforeExpiryMinutes_" + c] == window["minutes_HM" + c] && n(a, b), 0 != window["hours_HM" + c] && 0 == window["minutes_HM" + c] ? (window["hours_HM" + c]--, window["minutes_HM" + c] = 59, window["seconds_HM" + c] = 60 - b.tickInterval) : 0 == window["hours_HM" + c] && 0 != window["minutes_HM" + c] ? (window["seconds_HM" + c] = 60 - b.tickInterval, window["minutes_HM" + c]--) : (window["seconds_HM" + c] = 60 - b.tickInterval, window["minutes_HM" + c]--), 0 == window["hours_HM" + c] && 0 == window["minutes_HM" + c] && 60 == window["seconds_HM" + c] && (delete window["hours_HM" + c], delete window["minutes_HM" + c], delete window["seconds_HM" + c], clearInterval(window["timer_HM" + c]), m(a, b))) : (window["hours_HM" + c].toString().length < 2 && (window["hours_HM" + c] = "0" + window["hours_HM" + c]), window["minutes_HM" + c].toString().length < 2 && (window["minutes_HM" + c] = "0" + window["minutes_HM" + c]), window["seconds_HM" + c].toString().length < 2 && (window["seconds_HM" + c] = "0" + window["seconds_HM" + c]), o(a, window["hours_HM" + c] + b.timeSeparator + window["minutes_HM" + c] + b.timeSeparator + window["seconds_HM" + c]), ("undefined" != typeof window["beforeExpiryHours_" + c] && window["beforeExpiryHours_" + c] == window["hours_HM" + c] && "undefined" != typeof window["beforeExpiryMinutes_" + c] && window["beforeExpiryMinutes_" + c] == window["minutes_HM" + c] && "undefined" != typeof window["beforeExpirySeconds_" + c] && window["beforeExpirySeconds_" + c] == window["seconds_HM" + c] || "undefined" != typeof window["beforeExpiryHours_" + c] && window["beforeExpiryHours_" + c] == window["hours_HM" + c] && "undefined" != typeof window["beforeExpiryMinutes_" + c] && window["beforeExpiryMinutes_" + c] == window["minutes_HM" + c] && "undefined" == typeof window["beforeExpirySeconds_" + c] && "00" == window["seconds_HM" + c] || "undefined" == typeof window["beforeExpiryHours_" + c] && "00" == window["hours_HM" + c] && "undefined" != typeof window["beforeExpiryMinutes_" + c] && window["beforeExpiryMinutes_" + c] == window["minutes_HM" + c] && "undefined" != typeof window["beforeExpirySeconds_" + c] && window["beforeExpirySeconds_" + c] == window["seconds_HM" + c] || "undefined" != typeof window["beforeExpiryHours_" + c] && window["beforeExpiryHours_" + c] == window["hours_HM" + c] && "undefined" == typeof window["beforeExpiryMinutes_" + c] && "00" == window["minutes_HM" + c] && "undefined" != typeof window["beforeExpirySeconds_" + c] && window["beforeExpirySeconds_" + c] == window["seconds_HM" + c] || "undefined" != typeof window["beforeExpiryHours_" + c] && window["beforeExpiryHours_" + c] == window["hours_HM" + c] && "undefined" == typeof window["beforeExpiryMinutes_" + c] && "00" == window["minutes_HM" + c] && "undefined" == typeof window["beforeExpirySeconds_" + c] && "00" == window["seconds_HM" + c] || "undefined" == typeof window["beforeExpiryHours_" + c] && "00" == window["hours_HM" + c] && "undefined" != typeof window["beforeExpiryMinutes_" + c] && window["beforeExpiryMinutes_" + c] == window["minutes_HM" + c] && "undefined" == typeof window["beforeExpirySeconds_" + c] && "00" == window["seconds_HM" + c] || "undefined" == typeof window["beforeExpiryHours_" + c] && "00" == window["hours_HM" + c] && "undefined" == typeof window["beforeExpiryMinutes_" + c] && "00" == window["minutes_HM" + c] && "undefined" != typeof window["beforeExpirySeconds_" + c] && window["beforeExpirySeconds_" + c] == window["seconds_HM" + c]) && n(a, b), window["seconds_HM" + c] -= b.tickInterval, 0 != window["minutes_HM" + c] && window["seconds_HM" + c] < 0 && (window["minutes_HM" + c]--, window["seconds_HM" + c] = 60 - b.tickInterval), 0 == window["minutes_HM" + c] && window["seconds_HM" + c] < 0 && 0 != window["hours_HM" + c] && (window["hours_HM" + c]--, window["minutes_HM" + c] = 59, window["seconds_HM" + c] = 60 - b.tickInterval), 0 == window["minutes_HM" + c] && window["seconds_HM" + c] < 0 && 0 == window["hours_HM" + c] && (delete window["hours_HM" + c], delete window["minutes_HM" + c], delete window["seconds_HM" + c], clearInterval(window["timer_HM" + c]), m(a, b))), c = null
  }

  function g(a, b) {
    var c = a.attr("id");
    window["minutes_MS" + c] == b.minutes && window["seconds_MS" + c] == b.seconds ? (window["minutes_MS" + c].toString().length < 2 && (window["minutes_MS" + c] = "0" + window["minutes_MS" + c]), window["seconds_MS" + c].toString().length < 2 && (window["seconds_MS" + c] = "0" + window["seconds_MS" + c]), o(a, window["minutes_MS" + c] + b.timeSeparator + window["seconds_MS" + c]), "undefined" != typeof window["beforeExpiryMinutes_" + c] && window["beforeExpiryMinutes_" + c] == window["minutes_MS" + c] && "undefined" != typeof window["beforeExpirySeconds_" + c] && window["beforeExpirySeconds_" + c] == window["seconds_MS" + c] && n(a, b), 0 != window["minutes_MS" + c] && 0 == window["seconds_MS" + c] ? (window["minutes_MS" + c]--, window["seconds_MS" + c] = 60 - b.tickInterval) : 0 == window["minutes_MS" + c] && 0 == window["seconds_MS" + c] ? (delete window["hours_MS" + c], delete window["minutes_MS" + c], delete window["seconds_MS" + c], clearInterval(window["timer_MS" + c]), m(a, b)) : window["seconds_MS" + c] -= b.tickInterval) : (window["minutes_MS" + c].toString().length < 2 && (window["minutes_MS" + c] = "0" + window["minutes_MS" + c]), window["seconds_MS" + c].toString().length < 2 && (window["seconds_MS" + c] = "0" + window["seconds_MS" + c]), o(a, window["minutes_MS" + c] + b.timeSeparator + window["seconds_MS" + c]), ("undefined" != typeof window["beforeExpiryMinutes_" + c] && window["beforeExpiryMinutes_" + c] == window["minutes_MS" + c] && "undefined" != typeof window["beforeExpirySeconds_" + c] && window["beforeExpirySeconds_" + c] == window["seconds_MS" + c] || "undefined" != typeof window["beforeExpiryMinutes_" + c] && window["beforeExpiryMinutes_" + c] == window["minutes_MS" + c] && "undefined" == typeof window["beforeExpirySeconds_" + c] && "00" == window["seconds_MS" + c] || "undefined" == typeof window["beforeExpiryMinutes_" + c] && "00" == window["minutes_MS" + c] && "undefined" != typeof window["beforeExpirySeconds_" + c] && window["beforeExpirySeconds_" + c] == window["seconds_MS" + c]) && n(a, b), window["seconds_MS" + c] -= b.tickInterval, 0 != window["minutes_MS" + c] && window["seconds_MS" + c] < 0 && (window["minutes_MS" + c]--, window["seconds_MS" + c] = 60 - b.tickInterval), 0 == window["minutes_MS" + c] && window["seconds_MS" + c] < 0 && (delete window["hours_MS" + c], delete window["minutes_MS" + c], delete window["seconds_MS" + c], clearInterval(window["timer_MS" + c]), m(a, b))), c = null
  }

  function h(a, b) {
    var c = a.attr("id");
    window["seconds_HS" + c] == b.seconds && window["hours_HS" + c] == b.hours ? (window["hours_HS" + c].toString().length < 2 && (window["hours_HS" + c] = "0" + window["hours_HS" + c]), window["seconds_HS" + c].toString().length < 2 && (window["seconds_HS" + c] = "0" + window["seconds_HS" + c]), o(a, window["hours_HS" + c] + b.timeSeparator + "00" + b.timeSeparator + window["seconds_HS" + c]), "undefined" != typeof window["beforeExpiryHours_" + c] && window["beforeExpiryHours_" + c] == window["hours_HS" + c] && "undefined" != typeof window["beforeExpirySeconds_" + c] && window["beforeExpirySeconds_" + c] == window["seconds_HS" + c] && n(a, b), 0 == window["hours_HS" + c] && 0 == window["seconds_HS" + c] ? (delete window["hours_HS" + c], delete window["minutes_HS" + c], delete window["seconds_HS" + c], clearInterval(window["timer_HS" + c]), m(a, b)) : 0 != window["hours_HS" + c] && 0 == window["seconds_HS" + c] ? (window["hours_HS" + c]--, window["minutes_HS" + c] = 59, window["seconds_HS" + c] = 60 - b.tickInterval) : window["seconds_HS" + c] -= b.tickInterval) : (window["hours_HS" + c].toString().length < 2 && (window["hours_HS" + c] = "0" + window["hours_HS" + c]), window["minutes_HS" + c].toString().length < 2 && (window["minutes_HS" + c] = "0" + window["minutes_HS" + c]), window["seconds_HS" + c].toString().length < 2 && (window["seconds_HS" + c] = "0" + window["seconds_HS" + c]), o(a, window["hours_HS" + c] + b.timeSeparator + window["minutes_HS" + c] + b.timeSeparator + window["seconds_HS" + c]), ("undefined" != typeof window["beforeExpiryHours_" + c] && window["beforeExpiryHours_" + c] == window["hours_HS" + c] && "undefined" != typeof window["beforeExpiryMinutes_" + c] && window["beforeExpiryMinutes_" + c] == window["minutes_HS" + c] && "undefined" != typeof window["beforeExpirySeconds_" + c] && window["beforeExpirySeconds_" + c] == window["seconds_HS" + c] || "undefined" != typeof window["beforeExpiryHours_" + c] && window["beforeExpiryHours_" + c] == window["hours_HS" + c] && "undefined" != typeof window["beforeExpiryMinutes_" + c] && window["beforeExpiryMinutes_" + c] == window["minutes_HS" + c] && "undefined" == typeof window["beforeExpirySeconds_" + c] && "00" == window["seconds_HS" + c] || "undefined" == typeof window["beforeExpiryHours_" + c] && "00" == window["hours_HS" + c] && "undefined" != typeof window["beforeExpiryMinutes_" + c] && window["beforeExpiryMinutes_" + c] == window["minutes_HS" + c] && "undefined" != typeof window["beforeExpirySeconds_" + c] && window["beforeExpirySeconds_" + c] == window["seconds_HS" + c] || "undefined" != typeof window["beforeExpiryHours_" + c] && window["beforeExpiryHours_" + c] == window["hours_HS" + c] && "undefined" == typeof window["beforeExpiryMinutes_" + c] && "00" == window["minutes_HS" + c] && "undefined" != typeof window["beforeExpirySeconds_" + c] && window["beforeExpirySeconds_" + c] == window["seconds_HS" + c] || "undefined" != typeof window["beforeExpiryHours_" + c] && window["beforeExpiryHours_" + c] == window["hours_HS" + c] && "undefined" == typeof window["beforeExpiryMinutes_" + c] && "00" == window["minutes_HS" + c] && "undefined" == typeof window["beforeExpirySeconds_" + c] && "00" == window["seconds_HS" + c] || "undefined" == typeof window["beforeExpiryHours_" + c] && "00" == window["hours_HS" + c] && "undefined" != typeof window["beforeExpiryMinutes_" + c] && window["beforeExpiryMinutes_" + c] == window["minutes_HS" + c] && "undefined" == typeof window["beforeExpirySeconds_" + c] && "00" == window["seconds_HS" + c] || "undefined" == typeof window["beforeExpiryHours_" + c] && "00" == window["hours_HS" + c] && "undefined" == typeof window["beforeExpiryMinutes_" + c] && "00" == window["minutes_HS" + c] && "undefined" != typeof window["beforeExpirySeconds_" + c] && window["beforeExpirySeconds_" + c] == window["seconds_HS" + c]) && n(a, b), window["seconds_HS" + c] -= b.tickInterval, 0 != window["minutes_HS" + c] && window["seconds_HS" + c] < 0 && (window["minutes_HS" + c]--, window["seconds_HS" + c] = 60 - b.tickInterval), 0 == window["minutes_HS" + c] && window["seconds_HS" + c] < 0 && 0 != window["hours_HS" + c] && (window["hours_HS" + c]--, window["minutes_HS" + c] = 59, window["seconds_HS" + c] = 60 - b.tickInterval), 0 == window["minutes_HS" + c] && window["seconds_HS" + c] < 0 && 0 == window["hours_HS" + c] && (delete window["hours_HS" + c], delete window["minutes_HS" + c], delete window["seconds_HS" + c], clearInterval(window["timer_HS" + c]), m(a, b))), c = null
  }

  function i(a, b) {
    var c = a.attr("id");
    window["minutes_HMS" + c] == b.minutes && window["seconds_HMS" + c] == b.seconds && window["hours_HMS" + c] == b.hours ? (window["hours_HMS" + c].toString().length < 2 && (window["hours_HMS" + c] = "0" + window["hours_HMS" + c]), window["minutes_HMS" + c].toString().length < 2 && (window["minutes_HMS" + c] = "0" + window["minutes_HMS" + c]), window["seconds_HMS" + c].toString().length < 2 && (window["seconds_HMS" + c] = "0" + window["seconds_HMS" + c]), o(a, window["hours_HMS" + c] + b.timeSeparator + window["minutes_HMS" + c] + b.timeSeparator + window["seconds_HMS" + c]), "undefined" != typeof window["beforeExpiryHours_" + c] && window["beforeExpiryHours_" + c] == window["hours_HMS" + c] && "undefined" != typeof window["beforeExpiryMinutes_" + c] && window["beforeExpiryMinutes_" + c] == window["minutes_HMS" + c] && "undefined" != typeof window["beforeExpirySeconds_" + c] && window["beforeExpirySeconds_" + c] == window["seconds_HMS" + c] && n(a, b), 0 == window["hours_HMS" + c] && 0 == window["minutes_HMS" + c] && 0 == window["seconds_HMS" + c] ? (delete window["hours_HMS" + c], delete window["minutes_HMS" + c], delete window["seconds_HMS" + c], clearInterval(window["timer_HMS" + c]), m(a, b)) : 0 != window["hours_HMS" + c] && 0 == window["minutes_HMS" + c] && 0 == window["seconds_HMS" + c] ? (window["hours_HMS" + c]--, window["minutes_HMS" + c] = 59, window["seconds_HMS" + c] = 60 - b.tickInterval) : 0 == window["hours_HMS" + c] && 0 != window["minutes_HMS" + c] && 0 == window["seconds_HMS" + c] ? (window["minutes_HMS" + c]--, window["seconds_HMS" + c] = 60 - b.tickInterval) : 0 != window["hours_HMS" + c] && 0 != window["minutes_HMS" + c] && 0 == window["seconds_HMS" + c] ? (window["minutes_HMS" + c]--, window["seconds_HMS" + c] = 60 - b.tickInterval) : window["seconds_HMS" + c] -= b.tickInterval) : (window["hours_HMS" + c].toString().length < 2 && (window["hours_HMS" + c] = "0" + window["hours_HMS" + c]), window["minutes_HMS" + c].toString().length < 2 && (window["minutes_HMS" + c] = "0" + window["minutes_HMS" + c]), window["seconds_HMS" + c].toString().length < 2 && (window["seconds_HMS" + c] = "0" + window["seconds_HMS" + c]), o(a, window["hours_HMS" + c] + b.timeSeparator + window["minutes_HMS" + c] + b.timeSeparator + window["seconds_HMS" + c]), ("undefined" != typeof window["beforeExpiryHours_" + c] && window["beforeExpiryHours_" + c] == window["hours_HMS" + c] && "undefined" != typeof window["beforeExpiryMinutes_" + c] && window["beforeExpiryMinutes_" + c] == window["minutes_HMS" + c] && "undefined" != typeof window["beforeExpirySeconds_" + c] && window["beforeExpirySeconds_" + c] == window["seconds_HMS" + c] || "undefined" != typeof window["beforeExpiryHours_" + c] && window["beforeExpiryHours_" + c] == window["hours_HMS" + c] && "undefined" != typeof window["beforeExpiryMinutes_" + c] && window["beforeExpiryMinutes_" + c] == window["minutes_HMS" + c] && "undefined" == typeof window["beforeExpirySeconds_" + c] && "00" == window["seconds_HMS" + c] || "undefined" == typeof window["beforeExpiryHours_" + c] && "00" == window["hours_HMS" + c] && "undefined" != typeof window["beforeExpiryMinutes_" + c] && window["beforeExpiryMinutes_" + c] == window["minutes_HMS" + c] && "undefined" != typeof window["beforeExpirySeconds_" + c] && window["beforeExpirySeconds_" + c] == window["seconds_HMS" + c] || "undefined" != typeof window["beforeExpiryHours_" + c] && window["beforeExpiryHours_" + c] == window["hours_HMS" + c] && "undefined" == typeof window["beforeExpiryMinutes_" + c] && "00" == window["minutes_HMS" + c] && "undefined" != typeof window["beforeExpirySeconds_" + c] && window["beforeExpirySeconds_" + c] == window["seconds_HMS" + c] || "undefined" != typeof window["beforeExpiryHours_" + c] && window["beforeExpiryHours_" + c] == window["hours_HMS" + c] && "undefined" == typeof window["beforeExpiryMinutes_" + c] && "00" == window["minutes_HMS" + c] && "undefined" == typeof window["beforeExpirySeconds_" + c] && "00" == window["seconds_HMS" + c] || "undefined" == typeof window["beforeExpiryHours_" + c] && "00" == window["hours_HMS" + c] && "undefined" != typeof window["beforeExpiryMinutes_" + c] && window["beforeExpiryMinutes_" + c] == window["minutes_HMS" + c] && "undefined" == typeof window["beforeExpirySeconds_" + c] && "00" == window["seconds_HMS" + c] || "undefined" == typeof window["beforeExpiryHours_" + c] && "00" == window["hours_HMS" + c] && "undefined" == typeof window["beforeExpiryMinutes_" + c] && "00" == window["minutes_HMS" + c] && "undefined" != typeof window["beforeExpirySeconds_" + c] && window["beforeExpirySeconds_" + c] == window["seconds_HMS" + c]) && n(a, b), window["seconds_HMS" + c] -= b.tickInterval, 0 != window["minutes_HMS" + c] && window["seconds_HMS" + c] < 0 && (window["minutes_HMS" + c]--, window["seconds_HMS" + c] = 60 - b.tickInterval), 0 == window["minutes_HMS" + c] && window["seconds_HMS" + c] < 0 && 0 != window["hours_HMS" + c] && (window["hours_HMS" + c]--, window["minutes_HMS" + c] = 59, window["seconds_HMS" + c] = 60 - b.tickInterval), 0 == window["minutes_HMS" + c] && window["seconds_HMS" + c] < 0 && 0 == window["hours_HMS" + c] && (delete window["hours_HMS" + c], delete window["minutes_HMS" + c], delete window["seconds_HMS" + c], clearInterval(window["timer_HMS" + c]), m(a, b))), c = null
  }

  function j(a, b, c) {
    var d = a.attr("id"),
      e = "withnoStart" == c ? window["dateTime" + d] : window["endDate" + d],
      f = "withnoStart" == c ? window["startTime" + d] : window["startDate" + d],
      g = Math.floor((e - f) / 864e5),
      h = Math.floor((e - f) % 864e5 / 36e5),
      i = Math.floor((e - f) % 864e5 / 6e4) % 60,
      j = Math.floor((e - f) % 864e5 / 1e3) % 60 % 60;
    e - f > 0 ? (g.toString().length < 2 && (g = "0" + g), h.toString().length < 2 && (h = "0" + h), i.toString().length < 2 && (i = "0" + i), j.toString().length < 2 && (j = "0" + j), o(a, g + b.timeSeparator + h + b.timeSeparator + i + b.timeSeparator + j), ("undefined" != typeof window["beforeExpiryDays_" + d] && window["beforeExpiryDays_" + d] == g && "undefined" != typeof window["beforeExpiryHours_" + d] && window["beforeExpiryHours_" + d] == h && "undefined" != typeof window["beforeExpiryMinutes_" + d] && window["beforeExpiryMinutes_" + d] == i && "undefined" != typeof window["beforeExpirySeconds_" + d] && window["beforeExpirySeconds_" + d] == j || "undefined" != typeof window["beforeExpiryDays_" + d] && window["beforeExpiryDays_" + d] == g && "undefined" != typeof window["beforeExpiryHours_" + d] && window["beforeExpiryHours_" + d] == h && "undefined" != typeof window["beforeExpiryMinutes_" + d] && window["beforeExpiryMinutes_" + d] == i && "undefined" == typeof window["beforeExpirySeconds_" + d] && "00" == j || "undefined" != typeof window["beforeExpiryDays_" + d] && window["beforeExpiryDays_" + d] == g && "undefined" != typeof window["beforeExpiryHours_" + d] && window["beforeExpiryHours_" + d] == h && "undefined" == typeof window["beforeExpiryMinutes_" + d] && "00" == i && "undefined" != typeof window["beforeExpirySeconds_" + d] && window["beforeExpirySeconds_" + d] == j || "undefined" != typeof window["beforeExpiryDays_" + d] && window["beforeExpiryDays_" + d] == g && "undefined" == typeof window["beforeExpiryHours_" + d] && "00" == h && "undefined" != typeof window["beforeExpiryMinutes_" + d] && window["beforeExpiryMinutes_" + d] == i && "undefined" != typeof window["beforeExpirySeconds_" + d] && window["beforeExpirySeconds_" + d] == j || "undefined" == typeof window["beforeExpiryDays_" + d] && "00" == g && "undefined" != typeof window["beforeExpiryHours_" + d] && window["beforeExpiryHours_" + d] == h && "undefined" != typeof window["beforeExpiryMinutes_" + d] && window["beforeExpiryMinutes_" + d] == i && "undefined" != typeof window["beforeExpirySeconds_" + d] && window["beforeExpirySeconds_" + d] == j || "undefined" != typeof window["beforeExpiryDays_" + d] && window["beforeExpiryDays_" + d] == g && "undefined" != typeof window["beforeExpiryHours_" + d] && window["beforeExpiryHours_" + d] == h && "undefined" == typeof window["beforeExpiryMinutes_" + d] && "00" == i && "undefined" == typeof window["beforeExpirySeconds_" + d] && "00" == j || "undefined" != typeof window["beforeExpiryDays_" + d] && window["beforeExpiryDays_" + d] == g && "undefined" == typeof window["beforeExpiryHours_" + d] && "00" == h && "undefined" == typeof window["beforeExpiryMinutes_" + d] && "00" == i && "undefined" != typeof window["beforeExpirySeconds_" + d] && window["beforeExpirySeconds_" + d] == j || "undefined" == typeof window["beforeExpiryDays_" + d] && "00" == g && "undefined" == typeof window["beforeExpiryHours_" + d] && "00" == h && "undefined" != typeof window["beforeExpiryMinutes_" + d] && window["beforeExpiryMinutes_" + d] == i && "undefined" != typeof window["beforeExpirySeconds_" + d] && window["beforeExpirySeconds_" + d] == j || "undefined" == typeof window["beforeExpiryDays_" + d] && "00" == g && "undefined" != typeof window["beforeExpiryHours_" + d] && window["beforeExpiryHours_" + d] == h && "undefined" != typeof window["beforeExpiryMinutes_" + d] && window["beforeExpiryMinutes_" + d] == i && "undefined" == typeof window["beforeExpirySeconds_" + d] && "00" == j || "undefined" == typeof window["beforeExpiryDays_" + d] && "00" == g && "undefined" != typeof window["beforeExpiryHours_" + d] && window["beforeExpiryHours_" + d] == h && "undefined" == typeof window["beforeExpiryMinutes_" + d] && "00" == i && "undefined" != typeof window["beforeExpirySeconds_" + d] && window["beforeExpirySeconds_" + d] == j || "undefined" != typeof window["beforeExpiryDays_" + d] && window["beforeExpiryDays_" + d] == g && "undefined" == typeof window["beforeExpiryHours_" + d] && "00" == h && "undefined" != typeof window["beforeExpiryMinutes_" + d] && window["beforeExpiryMinutes_" + d] == i && "undefined" == typeof window["beforeExpirySeconds_" + d] && "00" == j || "undefined" != typeof window["beforeExpiryDays_" + d] && window["beforeExpiryDays_" + d] == g && "undefined" == typeof window["beforeExpiryHours_" + d] && "00" == h && "undefined" == typeof window["beforeExpiryMinutes_" + d] && "00" == i && "undefined" == typeof window["beforeExpirySeconds_" + d] && "00" == j || "undefined" == typeof window["beforeExpiryDays_" + d] && "00" == g && "undefined" != typeof window["beforeExpiryHours_" + d] && window["beforeExpiryHours_" + d] == h && "undefined" == typeof window["beforeExpiryMinutes_" + d] && "00" == i && "undefined" == typeof window["beforeExpirySeconds_" + d] && "00" == j || "undefined" == typeof window["beforeExpiryDays_" + d] && "00" == g && "undefined" == typeof window["beforeExpiryHours_" + d] && "00" == h && "undefined" != typeof window["beforeExpiryMinutes_" + d] && window["beforeExpiryMinutes_" + d] == i && "undefined" == typeof window["beforeExpirySeconds_" + d] && "00" == j || "undefined" == typeof window["beforeExpiryDays_" + d] && "00" == g && "undefined" == typeof window["beforeExpiryHours_" + d] && "00" == h && "undefined" == typeof window["beforeExpiryMinutes_" + d] && "00" == i && "undefined" != typeof window["beforeExpirySeconds_" + d] && window["beforeExpirySeconds_" + d] == j) && n(a, b), "withnoStart" == c ? window["startTime" + d].setSeconds(window["startTime" + d].getSeconds() + b.tickInterval) : window["startDate" + d].setSeconds(window["startDate" + d].getSeconds() + b.tickInterval)) : (o(a, "00" + b.timeSeparator + "00" + b.timeSeparator + "00" + b.timeSeparator + "00"), "withnoStart" == c ? (delete window["dateTime" + d], delete window["startTime" + d], clearInterval(window["timer_givenDate" + d])) : "withStart" == c && (delete window["startDate" + d], delete window["endDate" + d], clearInterval(window["timer_startDate" + d])), m(a, b)), d = null
  }

  function k(a, b) {
    if (1 == window["currentTime" + a.attr("id")]) {
      var c = new Date,
        d = c.getHours(),
        e = c.getMinutes(),
        f = c.getSeconds();
      d.toString().length < 2 && (d = "0" + d), e.toString().length < 2 && (e = "0" + e), f.toString().length < 2 && (f = "0" + f), o(a, d + b.timeSeparator + e + b.timeSeparator + f)
    } else alert("Set Current Time option.")
  }

  function l(a) {
    var b = a.attr("id");
    window["countSeconds" + b].toString().length < 2 && (window["countSeconds" + b] = "0" + window["countSeconds" + b]), o(a, window["countSeconds" + b] + " sec"), window["countSeconds" + b]--, window["countSeconds" + b] == -1 && (delete window["countSeconds" + b], clearInterval(window["timer_secondsTimer" + b])), b = null
  }

  function m(b, c) {
    null != c.timeUp && 1 == a.isFunction(c.timeUp) && c.timeUp.apply(b, []), null != c.expiryUrl && (window.location = c.expiryUrl)
  }

  function n(b, c) {
    null != c.beforeExpiryTimeFunction && 1 == a.isFunction(c.beforeExpiryTimeFunction) && c.beforeExpiryTimeFunction.apply(b, [])
  }

  function o(a, b) {
    var c = b;
    if ("undefined" != typeof window["regexpMatchFormat_" + a.attr("id")] && "undefined" != typeof window["regexpReplaceWith_" + a.attr("id")]) {
      var d = new RegExp(window["regexpMatchFormat_" + a.attr("id")]);
      c = b.replace(d, window["regexpReplaceWith_" + a.attr("id")])
    }
    a.html(c)
  }

  function p(b, c, d, e) {
    a("#" + d.pauseButton).click(function() {
      "resume" != a(this).val() ? (a("#" + d.pauseButton).val("resume").text("Resume"), clearInterval(window["timer_" + c + b.attr("id")])) : "resume" == a(this).val() && (a("#" + d.pauseButton).val("pause").text("Pause"), window["timer_" + c + b.attr("id")] = setInterval(function() {
        e(b, d)
      }, 1e3 * d.tickInterval))
    })
  }

  function q(b, c, d, e) {
    a("#" + d.stopButton).click(function() {
      "start" != a(this).val() ? (a("#" + d.stopButton).val("start").text("Start"), clearInterval(window["timer_" + c + b.attr("id")]), window["hours_" + c + b.attr("id")] = d.hours, window["minutes_" + c + b.attr("id")] = d.minutes, window["seconds_" + c + b.attr("id")] = d.seconds, e(b, d)) : "start" == a(this).val() && (a("#" + d.stopButton).val("stop").text("Stop"), window["timer_" + c + b.attr("id")] = setInterval(function() {
        e(b, d)
      }, 1e3 * d.tickInterval))
    })
  }
  a.fn.countdowntimer = function(c) {
    return this.each(function() {
      b(a(this), c)
    })
  }, a.fn.countdowntimer.defaults = {
    hours: 0,
    minutes: 0,
    seconds: 60,
    startDate: new Date,
    dateAndTime: new Date("0000/00/00 00:00:00"),
    currentTime: !1,
    size: "sm",
    borderColor: "#F0068E",
    fontColor: "#FFFFFF",
    backgroundColor: "#000000",
    timeSeparator: ":",
    tickInterval: 1,
    timeUp: null,
    expiryUrl: null,
    regexpMatchFormat: null,
    regexpReplaceWith: null,
    pauseButton: null,
    stopButton: null,
    beforeExpiryTime: null,
    beforeExpiryTimeFunction: null
  }
}(jQuery);
