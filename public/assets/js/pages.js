/*! For license information please see pages.js.LICENSE.txt */
(() => {
    var __webpack_modules__ = {
        7908: function (e, t) {
            !function (e) {
                "use strict";
                var t = function () {
                        return t = Object.assign || function (e) {
                            for (var t, a = 1, n = arguments.length; a < n; a++) for (var r in t = arguments[a]) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                            return e
                        }, t.apply(this, arguments)
                    }, a = "undefined" != typeof window && void 0 !== window.flatpickr ? window.flatpickr : {l10ns: {}},
                    n = {
                        weekdays: {
                            shorthand: ["أحد", "اثنين", "ثلاثاء", "أربعاء", "خميس", "جمعة", "سبت"],
                            longhand: ["الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"]
                        },
                        months: {
                            shorthand: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
                            longhand: ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"]
                        },
                        firstDayOfWeek: 6,
                        rangeSeparator: " إلى ",
                        weekAbbreviation: "Wk",
                        scrollTitle: "قم بالتمرير للزيادة",
                        toggleTitle: "اضغط للتبديل",
                        amPM: ["ص", "م"],
                        yearAriaLabel: "سنة",
                        monthAriaLabel: "شهر",
                        hourAriaLabel: "ساعة",
                        minuteAriaLabel: "دقيقة",
                        time_24hr: !1
                    };
                a.l10ns.ar = n, a.l10ns;
                var r = "undefined" != typeof window && void 0 !== window.flatpickr ? window.flatpickr : {l10ns: {}},
                    i = {
                        weekdays: {
                            shorthand: ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"],
                            longhand: ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"]
                        },
                        months: {
                            shorthand: ["Jän", "Feb", "Mär", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dez"],
                            longhand: ["Jänner", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"]
                        },
                        firstDayOfWeek: 1,
                        weekAbbreviation: "KW",
                        rangeSeparator: " bis ",
                        scrollTitle: "Zum Ändern scrollen",
                        toggleTitle: "Zum Umschalten klicken",
                        time_24hr: !0
                    };
                r.l10ns.at = i, r.l10ns;
                var s = "undefined" != typeof window && void 0 !== window.flatpickr ? window.flatpickr : {l10ns: {}},
                    o = {
                        weekdays: {
                            shorthand: ["B.", "B.e.", "Ç.a.", "Ç.", "C.a.", "C.", "Ş."],
                            longhand: ["Bazar", "Bazar ertəsi", "Çərşənbə axşamı", "Çərşənbə", "Cümə axşamı", "Cümə", "Şənbə"]
                        },
                        months: {
                            shorthand: ["Yan", "Fev", "Mar", "Apr", "May", "İyn", "İyl", "Avq", "Sen", "Okt", "Noy", "Dek"],
                            longhand: ["Yanvar", "Fevral", "Mart", "Aprel", "May", "İyun", "İyul", "Avqust", "Sentyabr", "Oktyabr", "Noyabr", "Dekabr"]
                        },
                        firstDayOfWeek: 1,
                        ordinal: function () {
                            return "."
                        },
                        rangeSeparator: " - ",
                        weekAbbreviation: "Hf",
                        scrollTitle: "Artırmaq üçün sürüşdürün",
                        toggleTitle: "Aç / Bağla",
                        amPM: ["GƏ", "GS"],
                        time_24hr: !0
                    };
                s.l10ns.az = o, s.l10ns;
                var l = "undefined" != typeof window && void 0 !== window.flatpickr ? window.flatpickr : {l10ns: {}},
                    d = {
                        weekdays: {
                            shorthand: ["Нд", "Пн", "Аў", "Ср", "Чц", "Пт", "Сб"],
                            longhand: ["Нядзеля", "Панядзелак", "Аўторак", "Серада", "Чацвер", "Пятніца", "Субота"]
                        },
                        months: {
                            shorthand: ["Сту", "Лют", "Сак", "Кра", "Тра", "Чэр", "Ліп", "Жні", "Вер", "Кас", "Ліс", "Сне"],
                            longhand: ["Студзень", "Люты", "Сакавік", "Красавік", "Травень", "Чэрвень", "Ліпень", "Жнівень", "Верасень", "Кастрычнік", "Лістапад", "Снежань"]
                        },
                        firstDayOfWeek: 1,
                        ordinal: function () {
                            return ""
                        },
                        rangeSeparator: " — ",
                        weekAbbreviation: "Тыд.",
                        scrollTitle: "Пракруціце для павелічэння",
                        toggleTitle: "Націсніце для пераключэння",
                        amPM: ["ДП", "ПП"],
                        yearAriaLabel: "Год",
                        time_24hr: !0
                    };
                l.l10ns.be = d, l.l10ns;
                var c = "undefined" != typeof window && void 0 !== window.flatpickr ? window.flatpickr : {l10ns: {}},
                    u = {
                        firstDayOfWeek: 1,
                        weekdays: {
                            shorthand: ["Ned", "Pon", "Uto", "Sri", "Čet", "Pet", "Sub"],
                            longhand: ["Nedjelja", "Ponedjeljak", "Utorak", "Srijeda", "Četvrtak", "Petak", "Subota"]
                        },
                        months: {
                            shorthand: ["Jan", "Feb", "Mar", "Apr", "Maj", "Jun", "Jul", "Avg", "Sep", "Okt", "Nov", "Dec"],
                            longhand: ["Januar", "Februar", "Mart", "April", "Maj", "Juni", "Juli", "Avgust", "Septembar", "Oktobar", "Novembar", "Decembar"]
                        },
                        time_24hr: !0
                    };
                c.l10ns.bs = u, c.l10ns;
                var p = "undefined" != typeof window && void 0 !== window.flatpickr ? window.flatpickr : {l10ns: {}},
                    h = {
                        weekdays: {
                            shorthand: ["Нд", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
                            longhand: ["Неделя", "Понеделник", "Вторник", "Сряда", "Четвъртък", "Петък", "Събота"]
                        },
                        months: {
                            shorthand: ["Яну", "Фев", "Март", "Апр", "Май", "Юни", "Юли", "Авг", "Сеп", "Окт", "Ное", "Дек"],
                            longhand: ["Януари", "Февруари", "Март", "Април", "Май", "Юни", "Юли", "Август", "Септември", "Октомври", "Ноември", "Декември"]
                        },
                        time_24hr: !0,
                        firstDayOfWeek: 1
                    };
                p.l10ns.bg = h, p.l10ns;
                var m = "undefined" != typeof window && void 0 !== window.flatpickr ? window.flatpickr : {l10ns: {}},
                    g = {
                        weekdays: {
                            shorthand: ["রবি", "সোম", "মঙ্গল", "বুধ", "বৃহস্পতি", "শুক্র", "শনি"],
                            longhand: ["রবিবার", "সোমবার", "মঙ্গলবার", "বুধবার", "বৃহস্পতিবার", "শুক্রবার", "শনিবার"]
                        },
                        months: {
                            shorthand: ["জানু", "ফেব্রু", "মার্চ", "এপ্রিল", "মে", "জুন", "জুলাই", "আগ", "সেপ্টে", "অক্টো", "নভে", "ডিসে"],
                            longhand: ["জানুয়ারী", "ফেব্রুয়ারী", "মার্চ", "এপ্রিল", "মে", "জুন", "জুলাই", "আগস্ট", "সেপ্টেম্বর", "অক্টোবর", "নভেম্বর", "ডিসেম্বর"]
                        }
                    };
                m.l10ns.bn = g, m.l10ns;
                var f = "undefined" != typeof window && void 0 !== window.flatpickr ? window.flatpickr : {l10ns: {}},
                    v = {
                        weekdays: {
                            shorthand: ["Dg", "Dl", "Dt", "Dc", "Dj", "Dv", "Ds"],
                            longhand: ["Diumenge", "Dilluns", "Dimarts", "Dimecres", "Dijous", "Divendres", "Dissabte"]
                        },
                        months: {
                            shorthand: ["Gen", "Febr", "Març", "Abr", "Maig", "Juny", "Jul", "Ag", "Set", "Oct", "Nov", "Des"],
                            longhand: ["Gener", "Febrer", "Març", "Abril", "Maig", "Juny", "Juliol", "Agost", "Setembre", "Octubre", "Novembre", "Desembre"]
                        },
                        ordinal: function (e) {
                            var t = e % 100;
                            if (t > 3 && t < 21) return "è";
                            switch (t % 10) {
                                case 1:
                                case 3:
                                    return "r";
                                case 2:
                                    return "n";
                                case 4:
                                    return "t";
                                default:
                                    return "è"
                            }
                        },
                        firstDayOfWeek: 1,
                        rangeSeparator: " a ",
                        time_24hr: !0
                    };
                f.l10ns.cat = f.l10ns.ca = v, f.l10ns;
                var y = "undefined" != typeof window && void 0 !== window.flatpickr ? window.flatpickr : {l10ns: {}},
                    w = {
                        weekdays: {
                            shorthand: ["یەکشەممە", "دووشەممە", "سێشەممە", "چوارشەممە", "پێنجشەممە", "هەینی", "شەممە"],
                            longhand: ["یەکشەممە", "دووشەممە", "سێشەممە", "چوارشەممە", "پێنجشەممە", "هەینی", "شەممە"]
                        },
                        months: {
                            shorthand: ["ڕێبەندان", "ڕەشەمە", "نەورۆز", "گوڵان", "جۆزەردان", "پووشپەڕ", "گەلاوێژ", "خەرمانان", "ڕەزبەر", "گەڵاڕێزان", "سەرماوەز", "بەفرانبار"],
                            longhand: ["ڕێبەندان", "ڕەشەمە", "نەورۆز", "گوڵان", "جۆزەردان", "پووشپەڕ", "گەلاوێژ", "خەرمانان", "ڕەزبەر", "گەڵاڕێزان", "سەرماوەز", "بەفرانبار"]
                        },
                        firstDayOfWeek: 6,
                        ordinal: function () {
                            return ""
                        }
                    };
                y.l10ns.ckb = w, y.l10ns;
                var b = "undefined" != typeof window && void 0 !== window.flatpickr ? window.flatpickr : {l10ns: {}},
                    $ = {
                        weekdays: {
                            shorthand: ["Ne", "Po", "Út", "St", "Čt", "Pá", "So"],
                            longhand: ["Neděle", "Pondělí", "Úterý", "Středa", "Čtvrtek", "Pátek", "Sobota"]
                        },
                        months: {
                            shorthand: ["Led", "Ún", "Bře", "Dub", "Kvě", "Čer", "Čvc", "Srp", "Zář", "Říj", "Lis", "Pro"],
                            longhand: ["Leden", "Únor", "Březen", "Duben", "Květen", "Červen", "Červenec", "Srpen", "Září", "Říjen", "Listopad", "Prosinec"]
                        },
                        firstDayOfWeek: 1,
                        ordinal: function () {
                            return "."
                        },
                        rangeSeparator: " do ",
                        weekAbbreviation: "Týd.",
                        scrollTitle: "Rolujte pro změnu",
                        toggleTitle: "Přepnout dopoledne/odpoledne",
                        amPM: ["dop.", "odp."],
                        yearAriaLabel: "Rok",
                        time_24hr: !0
                    };
                b.l10ns.cs = $, b.l10ns;
                var k = "undefined" != typeof window && void 0 !== window.flatpickr ? window.flatpickr : {l10ns: {}},
                    S = {
                        weekdays: {
                            shorthand: ["Sul", "Llun", "Maw", "Mer", "Iau", "Gwe", "Sad"],
                            longhand: ["Dydd Sul", "Dydd Llun", "Dydd Mawrth", "Dydd Mercher", "Dydd Iau", "Dydd Gwener", "Dydd Sadwrn"]
                        },
                        months: {
                            shorthand: ["Ion", "Chwef", "Maw", "Ebr", "Mai", "Meh", "Gorff", "Awst", "Medi", "Hyd", "Tach", "Rhag"],
                            longhand: ["Ionawr", "Chwefror", "Mawrth", "Ebrill", "Mai", "Mehefin", "Gorffennaf", "Awst", "Medi", "Hydref", "Tachwedd", "Rhagfyr"]
                        },
                        firstDayOfWeek: 1,
                        ordinal: function (e) {
                            return 1 === e ? "af" : 2 === e ? "ail" : 3 === e || 4 === e ? "ydd" : 5 === e || 6 === e ? "ed" : e >= 7 && e <= 10 || 12 == e || 15 == e || 18 == e || 20 == e ? "fed" : 11 == e || 13 == e || 14 == e || 16 == e || 17 == e || 19 == e ? "eg" : e >= 21 && e <= 39 ? "ain" : ""
                        },
                        time_24hr: !0
                    };
                k.l10ns.cy = S, k.l10ns;
                var C = "undefined" != typeof window && void 0 !== window.flatpickr ? window.flatpickr : {l10ns: {}},
                    M = {
                        weekdays: {
                            shorthand: ["søn", "man", "tir", "ons", "tors", "fre", "lør"],
                            longhand: ["søndag", "mandag", "tirsdag", "onsdag", "torsdag", "fredag", "lørdag"]
                        },
                        months: {
                            shorthand: ["jan", "feb", "mar", "apr", "maj", "jun", "jul", "aug", "sep", "okt", "nov", "dec"],
                            longhand: ["januar", "februar", "marts", "april", "maj", "juni", "juli", "august", "september", "oktober", "november", "december"]
                        },
                        ordinal: function () {
                            return "."
                        },
                        firstDayOfWeek: 1,
                        rangeSeparator: " til ",
                        weekAbbreviation: "uge",
                        time_24hr: !0
                    };
                C.l10ns.da = M, C.l10ns;
                var T = "undefined" != typeof window && void 0 !== window.flatpickr ? window.flatpickr : {l10ns: {}},
                    E = {
                        weekdays: {
                            shorthand: ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"],
                            longhand: ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"]
                        },
                        months: {
                            shorthand: ["Jan", "Feb", "Mär", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dez"],
                            longhand: ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"]
                        },
                        firstDayOfWeek: 1,
                        weekAbbreviation: "KW",
                        rangeSeparator: " bis ",
                        scrollTitle: "Zum Ändern scrollen",
                        toggleTitle: "Zum Umschalten klicken",
                        time_24hr: !0
                    };
                T.l10ns.de = E, T.l10ns;
                var _ = {
                        weekdays: {
                            shorthand: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                            longhand: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
                        },
                        months: {
                            shorthand: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                            longhand: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
                        },
                        daysInMonth: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
                        firstDayOfWeek: 0,
                        ordinal: function (e) {
                            var t = e % 100;
                            if (t > 3 && t < 21) return "th";
                            switch (t % 10) {
                                case 1:
                                    return "st";
                                case 2:
                                    return "nd";
                                case 3:
                                    return "rd";
                                default:
                                    return "th"
                            }
                        },
                        rangeSeparator: " to ",
                        weekAbbreviation: "Wk",
                        scrollTitle: "Scroll to increment",
                        toggleTitle: "Click to toggle",
                        amPM: ["AM", "PM"],
                        yearAriaLabel: "Year",
                        monthAriaLabel: "Month",
                        hourAriaLabel: "Hour",
                        minuteAriaLabel: "Minute",
                        time_24hr: !1
                    }, L = "undefined" != typeof window && void 0 !== window.flatpickr ? window.flatpickr : {l10ns: {}},
                    P = {
                        firstDayOfWeek: 1,
                        rangeSeparator: " ĝis ",
                        weekAbbreviation: "Sem",
                        scrollTitle: "Rulumu por pligrandigi la valoron",
                        toggleTitle: "Klaku por ŝalti",
                        weekdays: {
                            shorthand: ["Dim", "Lun", "Mar", "Mer", "Ĵaŭ", "Ven", "Sab"],
                            longhand: ["dimanĉo", "lundo", "mardo", "merkredo", "ĵaŭdo", "vendredo", "sabato"]
                        },
                        months: {
                            shorthand: ["Jan", "Feb", "Mar", "Apr", "Maj", "Jun", "Jul", "Aŭg", "Sep", "Okt", "Nov", "Dec"],
                            longhand: ["januaro", "februaro", "marto", "aprilo", "majo", "junio", "julio", "aŭgusto", "septembro", "oktobro", "novembro", "decembro"]
                        },
                        ordinal: function () {
                            return "-a"
                        },
                        time_24hr: !0
                    };
                L.l10ns.eo = P, L.l10ns;
                var x = "undefined" != typeof window && void 0 !== window.flatpickr ? window.flatpickr : {l10ns: {}},
                    D = {
                        weekdays: {
                            shorthand: ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"],
                            longhand: ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"]
                        },
                        months: {
                            shorthand: ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"],
                            longhand: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
                        },
                        ordinal: function () {
                            return "º"
                        },
                        firstDayOfWeek: 1,
                        rangeSeparator: " a ",
                        time_24hr: !0
                    };
                x.l10ns.es = D, x.l10ns;
                var j = "undefined" != typeof window && void 0 !== window.flatpickr ? window.flatpickr : {l10ns: {}},
                    A = {
                        weekdays: {
                            shorthand: ["P", "E", "T", "K", "N", "R", "L"],
                            longhand: ["Pühapäev", "Esmaspäev", "Teisipäev", "Kolmapäev", "Neljapäev", "Reede", "Laupäev"]
                        },
                        months: {
                            shorthand: ["Jaan", "Veebr", "Märts", "Apr", "Mai", "Juuni", "Juuli", "Aug", "Sept", "Okt", "Nov", "Dets"],
                            longhand: ["Jaanuar", "Veebruar", "Märts", "Aprill", "Mai", "Juuni", "Juuli", "August", "September", "Oktoober", "November", "Detsember"]
                        },
                        firstDayOfWeek: 1,
                        ordinal: function () {
                            return "."
                        },
                        weekAbbreviation: "Näd",
                        rangeSeparator: " kuni ",
                        scrollTitle: "Keri, et suurendada",
                        toggleTitle: "Klõpsa, et vahetada",
                        time_24hr: !0
                    };
                j.l10ns.et = A, j.l10ns;
                var F = "undefined" != typeof window && void 0 !== window.flatpickr ? window.flatpickr : {l10ns: {}},
                    I = {
                        weekdays: {
                            shorthand: ["یک", "دو", "سه", "چهار", "پنج", "جمعه", "شنبه"],
                            longhand: ["یک‌شنبه", "دوشنبه", "سه‌شنبه", "چهارشنبه", "پنچ‌شنبه", "جمعه", "شنبه"]
                        },
                        months: {
                            shorthand: ["ژانویه", "فوریه", "مارس", "آوریل", "مه", "ژوئن", "ژوئیه", "اوت", "سپتامبر", "اکتبر", "نوامبر", "دسامبر"],
                            longhand: ["ژانویه", "فوریه", "مارس", "آوریل", "مه", "ژوئن", "ژوئیه", "اوت", "سپتامبر", "اکتبر", "نوامبر", "دسامبر"]
                        },
                        firstDayOfWeek: 6,
                        ordinal: function () {
                            return ""
                        }
                    };
                F.l10ns.fa = I, F.l10ns;
                var N = "undefined" != typeof window && void 0 !== window.flatpickr ? window.flatpickr : {l10ns: {}},
                    O = {
                        firstDayOfWeek: 1,
                        weekdays: {
                            shorthand: ["su", "ma", "ti", "ke", "to", "pe", "la"],
                            longhand: ["sunnuntai", "maanantai", "tiistai", "keskiviikko", "torstai", "perjantai", "lauantai"]
                        },
                        months: {
                            shorthand: ["tammi", "helmi", "maalis", "huhti", "touko", "kesä", "heinä", "elo", "syys", "loka", "marras", "joulu"],
                            longhand: ["tammikuu", "helmikuu", "maaliskuu", "huhtikuu", "toukokuu", "kesäkuu", "heinäkuu", "elokuu", "syyskuu", "lokakuu", "marraskuu", "joulukuu"]
                        },
                        ordinal: function () {
                            return "."
                        },
                        time_24hr: !0
                    };
                N.l10ns.fi = O, N.l10ns;
                var R = "undefined" != typeof window && void 0 !== window.flatpickr ? window.flatpickr : {l10ns: {}},
                    B = {
                        weekdays: {
                            shorthand: ["Sun", "Mán", "Týs", "Mik", "Hós", "Frí", "Ley"],
                            longhand: ["Sunnudagur", "Mánadagur", "Týsdagur", "Mikudagur", "Hósdagur", "Fríggjadagur", "Leygardagur"]
                        },
                        months: {
                            shorthand: ["Jan", "Feb", "Mar", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Des"],
                            longhand: ["Januar", "Februar", "Mars", "Apríl", "Mai", "Juni", "Juli", "August", "Septembur", "Oktobur", "Novembur", "Desembur"]
                        },
                        ordinal: function () {
                            return "."
                        },
                        firstDayOfWeek: 1,
                        rangeSeparator: " til ",
                        weekAbbreviation: "vika",
                        scrollTitle: "Rulla fyri at broyta",
                        toggleTitle: "Trýst fyri at skifta",
                        yearAriaLabel: "Ár",
                        time_24hr: !0
                    };
                R.l10ns.fo = B, R.l10ns;
                var q = "undefined" != typeof window && void 0 !== window.flatpickr ? window.flatpickr : {l10ns: {}},
                    J = {
                        firstDayOfWeek: 1,
                        weekdays: {
                            shorthand: ["dim", "lun", "mar", "mer", "jeu", "ven", "sam"],
                            longhand: ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"]
                        },
                        months: {
                            shorthand: ["janv", "févr", "mars", "avr", "mai", "juin", "juil", "août", "sept", "oct", "nov", "déc"],
                            longhand: ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre"]
                        },
                        ordinal: function (e) {
                            return e > 1 ? "" : "er"
                        },
                        rangeSeparator: " au ",
                        weekAbbreviation: "Sem",
                        scrollTitle: "Défiler pour augmenter la valeur",
                        toggleTitle: "Cliquer pour basculer",
                        time_24hr: !0
                    };
                q.l10ns.fr = J, q.l10ns;
                var U = "undefined" != typeof window && void 0 !== window.flatpickr ? window.flatpickr : {l10ns: {}},
                    H = {
                        weekdays: {
                            shorthand: ["Κυ", "Δε", "Τρ", "Τε", "Πέ", "Πα", "Σά"],
                            longhand: ["Κυριακή", "Δευτέρα", "Τρίτη", "Τετάρτη", "Πέμπτη", "Παρασκευή", "Σάββατο"]
                        },
                        months: {
                            shorthand: ["Ιαν", "Φεβ", "Μάρ", "Απρ", "Μάι", "Ιούν", "Ιούλ", "Αύγ", "Σεπ", "Οκτ", "Νοέ", "Δεκ"],
                            longhand: ["Ιανουάριος", "Φεβρουάριος", "Μάρτιος", "Απρίλιος", "Μάιος", "Ιούνιος", "Ιούλιος", "Αύγουστος", "Σεπτέμβριος", "Οκτώβριος", "Νοέμβριος", "Δεκέμβριος"]
                        },
                        firstDayOfWeek: 1,
                        ordinal: function () {
                            return ""
                        },
                        weekAbbreviation: "Εβδ",
                        rangeSeparator: " έως ",
                        scrollTitle: "Μετακυλήστε για προσαύξηση",
                        toggleTitle: "Κάντε κλικ για αλλαγή",
                        amPM: ["ΠΜ", "ΜΜ"],
                        yearAriaLabel: "χρόνος",
                        monthAriaLabel: "μήνας",
                        hourAriaLabel: "ώρα",
                        minuteAriaLabel: "λεπτό"
                    };
                U.l10ns.gr = H, U.l10ns;
                var V = "undefined" != typeof window && void 0 !== window.flatpickr ? window.flatpickr : {l10ns: {}},
                    W = {
                        weekdays: {
                            shorthand: ["א", "ב", "ג", "ד", "ה", "ו", "ש"],
                            longhand: ["ראשון", "שני", "שלישי", "רביעי", "חמישי", "שישי", "שבת"]
                        },
                        months: {
                            shorthand: ["ינו׳", "פבר׳", "מרץ", "אפר׳", "מאי", "יוני", "יולי", "אוג׳", "ספט׳", "אוק׳", "נוב׳", "דצמ׳"],
                            longhand: ["ינואר", "פברואר", "מרץ", "אפריל", "מאי", "יוני", "יולי", "אוגוסט", "ספטמבר", "אוקטובר", "נובמבר", "דצמבר"]
                        },
                        rangeSeparator: " אל ",
                        time_24hr: !0
                    };
                V.l10ns.he = W, V.l10ns;
                var z = "undefined" != typeof window && void 0 !== window.flatpickr ? window.flatpickr : {l10ns: {}},
                    Y = {
                        weekdays: {
                            shorthand: ["रवि", "सोम", "मंगल", "बुध", "गुरु", "शुक्र", "शनि"],
                            longhand: ["रविवार", "सोमवार", "मंगलवार", "बुधवार", "गुरुवार", "शुक्रवार", "शनिवार"]
                        },
                        months: {
                            shorthand: ["जन", "फर", "मार्च", "अप्रेल", "मई", "जून", "जूलाई", "अग", "सित", "अक्ट", "नव", "दि"],
                            longhand: ["जनवरी ", "फरवरी", "मार्च", "अप्रेल", "मई", "जून", "जूलाई", "अगस्त ", "सितम्बर", "अक्टूबर", "नवम्बर", "दिसम्बर"]
                        }
                    };
                z.l10ns.hi = Y, z.l10ns;
                var G = "undefined" != typeof window && void 0 !== window.flatpickr ? window.flatpickr : {l10ns: {}},
                    K = {
                        firstDayOfWeek: 1,
                        weekdays: {
                            shorthand: ["Ned", "Pon", "Uto", "Sri", "Čet", "Pet", "Sub"],
                            longhand: ["Nedjelja", "Ponedjeljak", "Utorak", "Srijeda", "Četvrtak", "Petak", "Subota"]
                        },
                        months: {
                            shorthand: ["Sij", "Velj", "Ožu", "Tra", "Svi", "Lip", "Srp", "Kol", "Ruj", "Lis", "Stu", "Pro"],
                            longhand: ["Siječanj", "Veljača", "Ožujak", "Travanj", "Svibanj", "Lipanj", "Srpanj", "Kolovoz", "Rujan", "Listopad", "Studeni", "Prosinac"]
                        },
                        time_24hr: !0
                    };
                G.l10ns.hr = K, G.l10ns;
                var Q = "undefined" != typeof window && void 0 !== window.flatpickr ? window.flatpickr : {l10ns: {}},
                    Z = {
                        firstDayOfWeek: 1,
                        weekdays: {
                            shorthand: ["V", "H", "K", "Sz", "Cs", "P", "Szo"],
                            longhand: ["Vasárnap", "Hétfő", "Kedd", "Szerda", "Csütörtök", "Péntek", "Szombat"]
                        },
                        months: {
                            shorthand: ["Jan", "Feb", "Már", "Ápr", "Máj", "Jún", "Júl", "Aug", "Szep", "Okt", "Nov", "Dec"],
                            longhand: ["Január", "Február", "Március", "Április", "Május", "Június", "Július", "Augusztus", "Szeptember", "Október", "November", "December"]
                        },
                        ordinal: function () {
                            return "."
                        },
                        weekAbbreviation: "Hét",
                        scrollTitle: "Görgessen",
                        toggleTitle: "Kattintson a váltáshoz",
                        rangeSeparator: " - ",
                        time_24hr: !0
                    };
                Q.l10ns.hu = Z, Q.l10ns;
                var X = "undefined" != typeof window && void 0 !== window.flatpickr ? window.flatpickr : {l10ns: {}},
                    ee = {
                        weekdays: {
                            shorthand: ["Կիր", "Երկ", "Երք", "Չրք", "Հնգ", "Ուրբ", "Շբթ"],
                            longhand: ["Կիրակի", "Եկուշաբթի", "Երեքշաբթի", "Չորեքշաբթի", "Հինգշաբթի", "Ուրբաթ", "Շաբաթ"]
                        },
                        months: {
                            shorthand: ["Հնվ", "Փտր", "Մար", "Ապր", "Մայ", "Հնս", "Հլս", "Օգս", "Սեպ", "Հոկ", "Նմբ", "Դեկ"],
                            longhand: ["Հունվար", "Փետրվար", "Մարտ", "Ապրիլ", "Մայիս", "Հունիս", "Հուլիս", "Օգոստոս", "Սեպտեմբեր", "Հոկտեմբեր", "Նոյեմբեր", "Դեկտեմբեր"]
                        },
                        firstDayOfWeek: 1,
                        ordinal: function () {
                            return ""
                        },
                        rangeSeparator: " — ",
                        weekAbbreviation: "ՇԲՏ",
                        scrollTitle: "Ոլորեք՝ մեծացնելու համար",
                        toggleTitle: "Սեղմեք՝ փոխելու համար",
                        amPM: ["ՄԿ", "ԿՀ"],
                        yearAriaLabel: "Տարի",
                        monthAriaLabel: "Ամիս",
                        hourAriaLabel: "Ժամ",
                        minuteAriaLabel: "Րոպե",
                        time_24hr: !0
                    };
                X.l10ns.hy = ee, X.l10ns;
                var te = "undefined" != typeof window && void 0 !== window.flatpickr ? window.flatpickr : {l10ns: {}},
                    ae = {
                        weekdays: {
                            shorthand: ["Min", "Sen", "Sel", "Rab", "Kam", "Jum", "Sab"],
                            longhand: ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"]
                        },
                        months: {
                            shorthand: ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Agu", "Sep", "Okt", "Nov", "Des"],
                            longhand: ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"]
                        },
                        firstDayOfWeek: 1,
                        ordinal: function () {
                            return ""
                        },
                        time_24hr: !0,
                        rangeSeparator: " - "
                    };
                te.l10ns.id = ae, te.l10ns;
                var ne = "undefined" != typeof window && void 0 !== window.flatpickr ? window.flatpickr : {l10ns: {}},
                    re = {
                        weekdays: {
                            shorthand: ["Sun", "Mán", "Þri", "Mið", "Fim", "Fös", "Lau"],
                            longhand: ["Sunnudagur", "Mánudagur", "Þriðjudagur", "Miðvikudagur", "Fimmtudagur", "Föstudagur", "Laugardagur"]
                        },
                        months: {
                            shorthand: ["Jan", "Feb", "Mar", "Apr", "Maí", "Jún", "Júl", "Ágú", "Sep", "Okt", "Nóv", "Des"],
                            longhand: ["Janúar", "Febrúar", "Mars", "Apríl", "Maí", "Júní", "Júlí", "Ágúst", "September", "Október", "Nóvember", "Desember"]
                        },
                        ordinal: function () {
                            return "."
                        },
                        firstDayOfWeek: 1,
                        rangeSeparator: " til ",
                        weekAbbreviation: "vika",
                        yearAriaLabel: "Ár",
                        time_24hr: !0
                    };
                ne.l10ns.is = re, ne.l10ns;
                var ie = "undefined" != typeof window && void 0 !== window.flatpickr ? window.flatpickr : {l10ns: {}},
                    se = {
                        weekdays: {
                            shorthand: ["Dom", "Lun", "Mar", "Mer", "Gio", "Ven", "Sab"],
                            longhand: ["Domenica", "Lunedì", "Martedì", "Mercoledì", "Giovedì", "Venerdì", "Sabato"]
                        },
                        months: {
                            shorthand: ["Gen", "Feb", "Mar", "Apr", "Mag", "Giu", "Lug", "Ago", "Set", "Ott", "Nov", "Dic"],
                            longhand: ["Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno", "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre"]
                        },
                        firstDayOfWeek: 1,
                        ordinal: function () {
                            return "°"
                        },
                        rangeSeparator: " al ",
                        weekAbbreviation: "Se",
                        scrollTitle: "Scrolla per aumentare",
                        toggleTitle: "Clicca per cambiare",
                        time_24hr: !0
                    };
                ie.l10ns.it = se, ie.l10ns;
                var oe = "undefined" != typeof window && void 0 !== window.flatpickr ? window.flatpickr : {l10ns: {}},
                    le = {
                        weekdays: {
                            shorthand: ["日", "月", "火", "水", "木", "金", "土"],
                            longhand: ["日曜日", "月曜日", "火曜日", "水曜日", "木曜日", "金曜日", "土曜日"]
                        },
                        months: {
                            shorthand: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
                            longhand: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"]
                        },
                        time_24hr: !0,
                        rangeSeparator: " から ",
                        monthAriaLabel: "月",
                        amPM: ["午前", "午後"],
                        yearAriaLabel: "年",
                        hourAriaLabel: "時間",
                        minuteAriaLabel: "分"
                    };
                oe.l10ns.ja = le, oe.l10ns;
                var de = "undefined" != typeof window && void 0 !== window.flatpickr ? window.flatpickr : {l10ns: {}},
                    ce = {
                        weekdays: {
                            shorthand: ["კვ", "ორ", "სა", "ოთ", "ხუ", "პა", "შა"],
                            longhand: ["კვირა", "ორშაბათი", "სამშაბათი", "ოთხშაბათი", "ხუთშაბათი", "პარასკევი", "შაბათი"]
                        },
                        months: {
                            shorthand: ["იან", "თებ", "მარ", "აპრ", "მაი", "ივნ", "ივლ", "აგვ", "სექ", "ოქტ", "ნოე", "დეკ"],
                            longhand: ["იანვარი", "თებერვალი", "მარტი", "აპრილი", "მაისი", "ივნისი", "ივლისი", "აგვისტო", "სექტემბერი", "ოქტომბერი", "ნოემბერი", "დეკემბერი"]
                        },
                        firstDayOfWeek: 1,
                        ordinal: function () {
                            return ""
                        },
                        rangeSeparator: " — ",
                        weekAbbreviation: "კვ.",
                        scrollTitle: "დასქროლეთ გასადიდებლად",
                        toggleTitle: "დააკლიკეთ გადართვისთვის",
                        amPM: ["AM", "PM"],
                        yearAriaLabel: "წელი",
                        time_24hr: !0
                    };
                de.l10ns.ka = ce, de.l10ns;
                var ue = "undefined" != typeof window && void 0 !== window.flatpickr ? window.flatpickr : {l10ns: {}},
                    pe = {
                        weekdays: {
                            shorthand: ["일", "월", "화", "수", "목", "금", "토"],
                            longhand: ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"]
                        },
                        months: {
                            shorthand: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
                            longhand: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"]
                        },
                        ordinal: function () {
                            return "일"
                        },
                        rangeSeparator: " ~ ",
                        amPM: ["오전", "오후"]
                    };
                ue.l10ns.ko = pe, ue.l10ns;
                var he = "undefined" != typeof window && void 0 !== window.flatpickr ? window.flatpickr : {l10ns: {}},
                    me = {
                        weekdays: {
                            shorthand: ["អាទិត្យ", "ចន្ទ", "អង្គារ", "ពុធ", "ព្រហស.", "សុក្រ", "សៅរ៍"],
                            longhand: ["អាទិត្យ", "ចន្ទ", "អង្គារ", "ពុធ", "ព្រហស្បតិ៍", "សុក្រ", "សៅរ៍"]
                        },
                        months: {
                            shorthand: ["មករា", "កុម្ភះ", "មីនា", "មេសា", "ឧសភា", "មិថុនា", "កក្កដា", "សីហា", "កញ្ញា", "តុលា", "វិច្ឆិកា", "ធ្នូ"],
                            longhand: ["មករា", "កុម្ភះ", "មីនា", "មេសា", "ឧសភា", "មិថុនា", "កក្កដា", "សីហា", "កញ្ញា", "តុលា", "វិច្ឆិកា", "ធ្នូ"]
                        },
                        ordinal: function () {
                            return ""
                        },
                        firstDayOfWeek: 1,
                        rangeSeparator: " ដល់ ",
                        weekAbbreviation: "សប្តាហ៍",
                        scrollTitle: "រំកិលដើម្បីបង្កើន",
                        toggleTitle: "ចុចដើម្បីផ្លាស់ប្ដូរ",
                        yearAriaLabel: "ឆ្នាំ",
                        time_24hr: !0
                    };
                he.l10ns.km = me, he.l10ns;
                var ge = "undefined" != typeof window && void 0 !== window.flatpickr ? window.flatpickr : {l10ns: {}},
                    fe = {
                        weekdays: {
                            shorthand: ["Жс", "Дс", "Сc", "Ср", "Бс", "Жм", "Сб"],
                            longhand: ["Жексенбi", "Дүйсенбi", "Сейсенбi", "Сәрсенбi", "Бейсенбi", "Жұма", "Сенбi"]
                        },
                        months: {
                            shorthand: ["Қаң", "Ақп", "Нау", "Сәу", "Мам", "Мау", "Шiл", "Там", "Қыр", "Қаз", "Қар", "Жел"],
                            longhand: ["Қаңтар", "Ақпан", "Наурыз", "Сәуiр", "Мамыр", "Маусым", "Шiлде", "Тамыз", "Қыркүйек", "Қазан", "Қараша", "Желтоқсан"]
                        },
                        firstDayOfWeek: 1,
                        ordinal: function () {
                            return ""
                        },
                        rangeSeparator: " — ",
                        weekAbbreviation: "Апта",
                        scrollTitle: "Үлкейту үшін айналдырыңыз",
                        toggleTitle: "Ауыстыру үшін басыңыз",
                        amPM: ["ТД", "ТК"],
                        yearAriaLabel: "Жыл"
                    };
                ge.l10ns.kz = fe, ge.l10ns;
                var ve = "undefined" != typeof window && void 0 !== window.flatpickr ? window.flatpickr : {l10ns: {}},
                    ye = {
                        weekdays: {
                            shorthand: ["S", "Pr", "A", "T", "K", "Pn", "Š"],
                            longhand: ["Sekmadienis", "Pirmadienis", "Antradienis", "Trečiadienis", "Ketvirtadienis", "Penktadienis", "Šeštadienis"]
                        },
                        months: {
                            shorthand: ["Sau", "Vas", "Kov", "Bal", "Geg", "Bir", "Lie", "Rgp", "Rgs", "Spl", "Lap", "Grd"],
                            longhand: ["Sausis", "Vasaris", "Kovas", "Balandis", "Gegužė", "Birželis", "Liepa", "Rugpjūtis", "Rugsėjis", "Spalis", "Lapkritis", "Gruodis"]
                        },
                        firstDayOfWeek: 1,
                        ordinal: function () {
                            return "-a"
                        },
                        rangeSeparator: " iki ",
                        weekAbbreviation: "Sav",
                        scrollTitle: "Keisti laiką pelės rateliu",
                        toggleTitle: "Perjungti laiko formatą",
                        time_24hr: !0
                    };
                ve.l10ns.lt = ye, ve.l10ns;
                var we = "undefined" != typeof window && void 0 !== window.flatpickr ? window.flatpickr : {l10ns: {}},
                    be = {
                        firstDayOfWeek: 1,
                        weekdays: {
                            shorthand: ["Sv", "Pr", "Ot", "Tr", "Ce", "Pk", "Se"],
                            longhand: ["Svētdiena", "Pirmdiena", "Otrdiena", "Trešdiena", "Ceturtdiena", "Piektdiena", "Sestdiena"]
                        },
                        months: {
                            shorthand: ["Jan", "Feb", "Mar", "Apr", "Mai", "Jūn", "Jūl", "Aug", "Sep", "Okt", "Nov", "Dec"],
                            longhand: ["Janvāris", "Februāris", "Marts", "Aprīlis", "Maijs", "Jūnijs", "Jūlijs", "Augusts", "Septembris", "Oktobris", "Novembris", "Decembris"]
                        },
                        rangeSeparator: " līdz ",
                        time_24hr: !0
                    };
                we.l10ns.lv = be, we.l10ns;
                var $e = "undefined" != typeof window && void 0 !== window.flatpickr ? window.flatpickr : {l10ns: {}},
                    ke = {
                        weekdays: {
                            shorthand: ["Не", "По", "Вт", "Ср", "Че", "Пе", "Са"],
                            longhand: ["Недела", "Понеделник", "Вторник", "Среда", "Четврток", "Петок", "Сабота"]
                        },
                        months: {
                            shorthand: ["Јан", "Фев", "Мар", "Апр", "Мај", "Јун", "Јул", "Авг", "Сеп", "Окт", "Ное", "Дек"],
                            longhand: ["Јануари", "Февруари", "Март", "Април", "Мај", "Јуни", "Јули", "Август", "Септември", "Октомври", "Ноември", "Декември"]
                        },
                        firstDayOfWeek: 1,
                        weekAbbreviation: "Нед.",
                        rangeSeparator: " до ",
                        time_24hr: !0
                    };
                $e.l10ns.mk = ke, $e.l10ns;
                var Se = "undefined" != typeof window && void 0 !== window.flatpickr ? window.flatpickr : {l10ns: {}},
                    Ce = {
                        firstDayOfWeek: 1,
                        weekdays: {
                            shorthand: ["Да", "Мя", "Лх", "Пү", "Ба", "Бя", "Ня"],
                            longhand: ["Даваа", "Мягмар", "Лхагва", "Пүрэв", "Баасан", "Бямба", "Ням"]
                        },
                        months: {
                            shorthand: ["1-р сар", "2-р сар", "3-р сар", "4-р сар", "5-р сар", "6-р сар", "7-р сар", "8-р сар", "9-р сар", "10-р сар", "11-р сар", "12-р сар"],
                            longhand: ["Нэгдүгээр сар", "Хоёрдугаар сар", "Гуравдугаар сар", "Дөрөвдүгээр сар", "Тавдугаар сар", "Зургаадугаар сар", "Долдугаар сар", "Наймдугаар сар", "Есдүгээр сар", "Аравдугаар сар", "Арваннэгдүгээр сар", "Арванхоёрдугаар сар"]
                        },
                        rangeSeparator: "-с ",
                        time_24hr: !0
                    };
                Se.l10ns.mn = Ce, Se.l10ns;
                var Me = "undefined" != typeof window && void 0 !== window.flatpickr ? window.flatpickr : {l10ns: {}},
                    Te = {
                        weekdays: {
                            shorthand: ["Aha", "Isn", "Sel", "Rab", "Kha", "Jum", "Sab"],
                            longhand: ["Ahad", "Isnin", "Selasa", "Rabu", "Khamis", "Jumaat", "Sabtu"]
                        },
                        months: {
                            shorthand: ["Jan", "Feb", "Mac", "Apr", "Mei", "Jun", "Jul", "Ogo", "Sep", "Okt", "Nov", "Dis"],
                            longhand: ["Januari", "Februari", "Mac", "April", "Mei", "Jun", "Julai", "Ogos", "September", "Oktober", "November", "Disember"]
                        },
                        firstDayOfWeek: 1,
                        ordinal: function () {
                            return ""
                        }
                    };
                Me.l10ns;
                var Ee = "undefined" != typeof window && void 0 !== window.flatpickr ? window.flatpickr : {l10ns: {}},
                    _e = {
                        weekdays: {
                            shorthand: ["နွေ", "လာ", "ဂါ", "ဟူး", "ကြာ", "သော", "နေ"],
                            longhand: ["တနင်္ဂနွေ", "တနင်္လာ", "အင်္ဂါ", "ဗုဒ္ဓဟူး", "ကြာသပတေး", "သောကြာ", "စနေ"]
                        },
                        months: {
                            shorthand: ["ဇန်", "ဖေ", "မတ်", "ပြီ", "မေ", "ဇွန်", "လိုင်", "သြ", "စက်", "အောက်", "နို", "ဒီ"],
                            longhand: ["ဇန်နဝါရီ", "ဖေဖော်ဝါရီ", "မတ်", "ဧပြီ", "မေ", "ဇွန်", "ဇူလိုင်", "သြဂုတ်", "စက်တင်ဘာ", "အောက်တိုဘာ", "နိုဝင်ဘာ", "ဒီဇင်ဘာ"]
                        },
                        firstDayOfWeek: 1,
                        ordinal: function () {
                            return ""
                        },
                        time_24hr: !0
                    };
                Ee.l10ns.my = _e, Ee.l10ns;
                var Le = "undefined" != typeof window && void 0 !== window.flatpickr ? window.flatpickr : {l10ns: {}},
                    Pe = {
                        weekdays: {
                            shorthand: ["zo", "ma", "di", "wo", "do", "vr", "za"],
                            longhand: ["zondag", "maandag", "dinsdag", "woensdag", "donderdag", "vrijdag", "zaterdag"]
                        },
                        months: {
                            shorthand: ["jan", "feb", "mrt", "apr", "mei", "jun", "jul", "aug", "sept", "okt", "nov", "dec"],
                            longhand: ["januari", "februari", "maart", "april", "mei", "juni", "juli", "augustus", "september", "oktober", "november", "december"]
                        },
                        firstDayOfWeek: 1,
                        weekAbbreviation: "wk",
                        rangeSeparator: " t/m ",
                        scrollTitle: "Scroll voor volgende / vorige",
                        toggleTitle: "Klik om te wisselen",
                        time_24hr: !0,
                        ordinal: function (e) {
                            return 1 === e || 8 === e || e >= 20 ? "ste" : "de"
                        }
                    };
                Le.l10ns.nl = Pe, Le.l10ns;
                var xe = "undefined" != typeof window && void 0 !== window.flatpickr ? window.flatpickr : {l10ns: {}},
                    De = {
                        weekdays: {
                            shorthand: ["Sø.", "Må.", "Ty.", "On.", "To.", "Fr.", "La."],
                            longhand: ["Søndag", "Måndag", "Tysdag", "Onsdag", "Torsdag", "Fredag", "Laurdag"]
                        },
                        months: {
                            shorthand: ["Jan", "Feb", "Mars", "Apr", "Mai", "Juni", "Juli", "Aug", "Sep", "Okt", "Nov", "Des"],
                            longhand: ["Januar", "Februar", "Mars", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Desember"]
                        },
                        firstDayOfWeek: 1,
                        rangeSeparator: " til ",
                        weekAbbreviation: "Veke",
                        scrollTitle: "Scroll for å endre",
                        toggleTitle: "Klikk for å veksle",
                        time_24hr: !0,
                        ordinal: function () {
                            return "."
                        }
                    };
                xe.l10ns.nn = De, xe.l10ns;
                var je = "undefined" != typeof window && void 0 !== window.flatpickr ? window.flatpickr : {l10ns: {}},
                    Ae = {
                        weekdays: {
                            shorthand: ["Søn", "Man", "Tir", "Ons", "Tor", "Fre", "Lør"],
                            longhand: ["Søndag", "Mandag", "Tirsdag", "Onsdag", "Torsdag", "Fredag", "Lørdag"]
                        },
                        months: {
                            shorthand: ["Jan", "Feb", "Mar", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Des"],
                            longhand: ["Januar", "Februar", "Mars", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Desember"]
                        },
                        firstDayOfWeek: 1,
                        rangeSeparator: " til ",
                        weekAbbreviation: "Uke",
                        scrollTitle: "Scroll for å endre",
                        toggleTitle: "Klikk for å veksle",
                        time_24hr: !0,
                        ordinal: function () {
                            return "."
                        }
                    };
                je.l10ns.no = Ae, je.l10ns;
                var Fe = "undefined" != typeof window && void 0 !== window.flatpickr ? window.flatpickr : {l10ns: {}},
                    Ie = {
                        weekdays: {
                            shorthand: ["ਐਤ", "ਸੋਮ", "ਮੰਗਲ", "ਬੁੱਧ", "ਵੀਰ", "ਸ਼ੁੱਕਰ", "ਸ਼ਨਿੱਚਰ"],
                            longhand: ["ਐਤਵਾਰ", "ਸੋਮਵਾਰ", "ਮੰਗਲਵਾਰ", "ਬੁੱਧਵਾਰ", "ਵੀਰਵਾਰ", "ਸ਼ੁੱਕਰਵਾਰ", "ਸ਼ਨਿੱਚਰਵਾਰ"]
                        },
                        months: {
                            shorthand: ["ਜਨ", "ਫ਼ਰ", "ਮਾਰ", "ਅਪ੍ਰੈ", "ਮਈ", "ਜੂਨ", "ਜੁਲਾ", "ਅਗ", "ਸਤੰ", "ਅਕ", "ਨਵੰ", "ਦਸੰ"],
                            longhand: ["ਜਨਵਰੀ", "ਫ਼ਰਵਰੀ", "ਮਾਰਚ", "ਅਪ੍ਰੈਲ", "ਮਈ", "ਜੂਨ", "ਜੁਲਾਈ", "ਅਗਸਤ", "ਸਤੰਬਰ", "ਅਕਤੂਬਰ", "ਨਵੰਬਰ", "ਦਸੰਬਰ"]
                        },
                        time_24hr: !0
                    };
                Fe.l10ns.pa = Ie, Fe.l10ns;
                var Ne = "undefined" != typeof window && void 0 !== window.flatpickr ? window.flatpickr : {l10ns: {}},
                    Oe = {
                        weekdays: {
                            shorthand: ["Nd", "Pn", "Wt", "Śr", "Cz", "Pt", "So"],
                            longhand: ["Niedziela", "Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek", "Sobota"]
                        },
                        months: {
                            shorthand: ["Sty", "Lut", "Mar", "Kwi", "Maj", "Cze", "Lip", "Sie", "Wrz", "Paź", "Lis", "Gru"],
                            longhand: ["Styczeń", "Luty", "Marzec", "Kwiecień", "Maj", "Czerwiec", "Lipiec", "Sierpień", "Wrzesień", "Październik", "Listopad", "Grudzień"]
                        },
                        rangeSeparator: " do ",
                        weekAbbreviation: "tydz.",
                        scrollTitle: "Przewiń, aby zwiększyć",
                        toggleTitle: "Kliknij, aby przełączyć",
                        firstDayOfWeek: 1,
                        time_24hr: !0,
                        ordinal: function () {
                            return "."
                        }
                    };
                Ne.l10ns.pl = Oe, Ne.l10ns;
                var Re = "undefined" != typeof window && void 0 !== window.flatpickr ? window.flatpickr : {l10ns: {}},
                    Be = {
                        weekdays: {
                            shorthand: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"],
                            longhand: ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"]
                        },
                        months: {
                            shorthand: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"],
                            longhand: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]
                        },
                        rangeSeparator: " até ",
                        time_24hr: !0
                    };
                Re.l10ns.pt = Be, Re.l10ns;
                var qe = "undefined" != typeof window && void 0 !== window.flatpickr ? window.flatpickr : {l10ns: {}},
                    Je = {
                        weekdays: {
                            shorthand: ["Dum", "Lun", "Mar", "Mie", "Joi", "Vin", "Sâm"],
                            longhand: ["Duminică", "Luni", "Marți", "Miercuri", "Joi", "Vineri", "Sâmbătă"]
                        },
                        months: {
                            shorthand: ["Ian", "Feb", "Mar", "Apr", "Mai", "Iun", "Iul", "Aug", "Sep", "Oct", "Noi", "Dec"],
                            longhand: ["Ianuarie", "Februarie", "Martie", "Aprilie", "Mai", "Iunie", "Iulie", "August", "Septembrie", "Octombrie", "Noiembrie", "Decembrie"]
                        },
                        firstDayOfWeek: 1,
                        time_24hr: !0,
                        ordinal: function () {
                            return ""
                        }
                    };
                qe.l10ns.ro = Je, qe.l10ns;
                var Ue = "undefined" != typeof window && void 0 !== window.flatpickr ? window.flatpickr : {l10ns: {}},
                    He = {
                        weekdays: {
                            shorthand: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
                            longhand: ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"]
                        },
                        months: {
                            shorthand: ["Янв", "Фев", "Март", "Апр", "Май", "Июнь", "Июль", "Авг", "Сен", "Окт", "Ноя", "Дек"],
                            longhand: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"]
                        },
                        firstDayOfWeek: 1,
                        ordinal: function () {
                            return ""
                        },
                        rangeSeparator: " — ",
                        weekAbbreviation: "Нед.",
                        scrollTitle: "Прокрутите для увеличения",
                        toggleTitle: "Нажмите для переключения",
                        amPM: ["ДП", "ПП"],
                        yearAriaLabel: "Год",
                        time_24hr: !0
                    };
                Ue.l10ns.ru = He, Ue.l10ns;
                var Ve = "undefined" != typeof window && void 0 !== window.flatpickr ? window.flatpickr : {l10ns: {}},
                    We = {
                        weekdays: {
                            shorthand: ["ඉ", "ස", "අ", "බ", "බ්‍ර", "සි", "සෙ"],
                            longhand: ["ඉරිදා", "සඳුදා", "අඟහරුවාදා", "බදාදා", "බ්‍රහස්පතින්දා", "සිකුරාදා", "සෙනසුරාදා"]
                        },
                        months: {
                            shorthand: ["ජන", "පෙබ", "මාර්", "අප්‍රේ", "මැයි", "ජුනි", "ජූලි", "අගෝ", "සැප්", "ඔක්", "නොවැ", "දෙසැ"],
                            longhand: ["ජනවාරි", "පෙබරවාරි", "මාර්තු", "අප්‍රේල්", "මැයි", "ජුනි", "ජූලි", "අගෝස්තු", "සැප්තැම්බර්", "ඔක්තෝබර්", "නොවැම්බර්", "දෙසැම්බර්"]
                        },
                        time_24hr: !0
                    };
                Ve.l10ns.si = We, Ve.l10ns;
                var ze = "undefined" != typeof window && void 0 !== window.flatpickr ? window.flatpickr : {l10ns: {}},
                    Ye = {
                        weekdays: {
                            shorthand: ["Ned", "Pon", "Ut", "Str", "Štv", "Pia", "Sob"],
                            longhand: ["Nedeľa", "Pondelok", "Utorok", "Streda", "Štvrtok", "Piatok", "Sobota"]
                        },
                        months: {
                            shorthand: ["Jan", "Feb", "Mar", "Apr", "Máj", "Jún", "Júl", "Aug", "Sep", "Okt", "Nov", "Dec"],
                            longhand: ["Január", "Február", "Marec", "Apríl", "Máj", "Jún", "Júl", "August", "September", "Október", "November", "December"]
                        },
                        firstDayOfWeek: 1,
                        rangeSeparator: " do ",
                        time_24hr: !0,
                        ordinal: function () {
                            return "."
                        }
                    };
                ze.l10ns.sk = Ye, ze.l10ns;
                var Ge = "undefined" != typeof window && void 0 !== window.flatpickr ? window.flatpickr : {l10ns: {}},
                    Ke = {
                        weekdays: {
                            shorthand: ["Ned", "Pon", "Tor", "Sre", "Čet", "Pet", "Sob"],
                            longhand: ["Nedelja", "Ponedeljek", "Torek", "Sreda", "Četrtek", "Petek", "Sobota"]
                        },
                        months: {
                            shorthand: ["Jan", "Feb", "Mar", "Apr", "Maj", "Jun", "Jul", "Avg", "Sep", "Okt", "Nov", "Dec"],
                            longhand: ["Januar", "Februar", "Marec", "April", "Maj", "Junij", "Julij", "Avgust", "September", "Oktober", "November", "December"]
                        },
                        firstDayOfWeek: 1,
                        rangeSeparator: " do ",
                        time_24hr: !0,
                        ordinal: function () {
                            return "."
                        }
                    };
                Ge.l10ns.sl = Ke, Ge.l10ns;
                var Qe = "undefined" != typeof window && void 0 !== window.flatpickr ? window.flatpickr : {l10ns: {}},
                    Ze = {
                        weekdays: {
                            shorthand: ["Di", "Hë", "Ma", "Më", "En", "Pr", "Sh"],
                            longhand: ["E Diel", "E Hënë", "E Martë", "E Mërkurë", "E Enjte", "E Premte", "E Shtunë"]
                        },
                        months: {
                            shorthand: ["Jan", "Shk", "Mar", "Pri", "Maj", "Qer", "Kor", "Gus", "Sht", "Tet", "Nën", "Dhj"],
                            longhand: ["Janar", "Shkurt", "Mars", "Prill", "Maj", "Qershor", "Korrik", "Gusht", "Shtator", "Tetor", "Nëntor", "Dhjetor"]
                        },
                        firstDayOfWeek: 1,
                        rangeSeparator: " deri ",
                        weekAbbreviation: "Java",
                        yearAriaLabel: "Viti",
                        monthAriaLabel: "Muaji",
                        hourAriaLabel: "Ora",
                        minuteAriaLabel: "Minuta",
                        time_24hr: !0
                    };
                Qe.l10ns.sq = Ze, Qe.l10ns;
                var Xe = "undefined" != typeof window && void 0 !== window.flatpickr ? window.flatpickr : {l10ns: {}},
                    et = {
                        weekdays: {
                            shorthand: ["Ned", "Pon", "Uto", "Sre", "Čet", "Pet", "Sub"],
                            longhand: ["Nedelja", "Ponedeljak", "Utorak", "Sreda", "Četvrtak", "Petak", "Subota"]
                        },
                        months: {
                            shorthand: ["Jan", "Feb", "Mar", "Apr", "Maj", "Jun", "Jul", "Avg", "Sep", "Okt", "Nov", "Dec"],
                            longhand: ["Januar", "Februar", "Mart", "April", "Maj", "Jun", "Jul", "Avgust", "Septembar", "Oktobar", "Novembar", "Decembar"]
                        },
                        firstDayOfWeek: 1,
                        weekAbbreviation: "Ned.",
                        rangeSeparator: " do ",
                        time_24hr: !0
                    };
                Xe.l10ns.sr = et, Xe.l10ns;
                var tt = "undefined" != typeof window && void 0 !== window.flatpickr ? window.flatpickr : {l10ns: {}},
                    at = {
                        firstDayOfWeek: 1,
                        weekAbbreviation: "v",
                        weekdays: {
                            shorthand: ["sön", "mån", "tis", "ons", "tor", "fre", "lör"],
                            longhand: ["söndag", "måndag", "tisdag", "onsdag", "torsdag", "fredag", "lördag"]
                        },
                        months: {
                            shorthand: ["jan", "feb", "mar", "apr", "maj", "jun", "jul", "aug", "sep", "okt", "nov", "dec"],
                            longhand: ["januari", "februari", "mars", "april", "maj", "juni", "juli", "augusti", "september", "oktober", "november", "december"]
                        },
                        rangeSeparator: " till ",
                        time_24hr: !0,
                        ordinal: function () {
                            return "."
                        }
                    };
                tt.l10ns.sv = at, tt.l10ns;
                var nt = "undefined" != typeof window && void 0 !== window.flatpickr ? window.flatpickr : {l10ns: {}},
                    rt = {
                        weekdays: {
                            shorthand: ["อา", "จ", "อ", "พ", "พฤ", "ศ", "ส"],
                            longhand: ["อาทิตย์", "จันทร์", "อังคาร", "พุธ", "พฤหัสบดี", "ศุกร์", "เสาร์"]
                        },
                        months: {
                            shorthand: ["ม.ค.", "ก.พ.", "มี.ค.", "เม.ย.", "พ.ค.", "มิ.ย.", "ก.ค.", "ส.ค.", "ก.ย.", "ต.ค.", "พ.ย.", "ธ.ค."],
                            longhand: ["มกราคม", "กุมภาพันธ์", "มีนาคม", "เมษายน", "พฤษภาคม", "มิถุนายน", "กรกฎาคม", "สิงหาคม", "กันยายน", "ตุลาคม", "พฤศจิกายน", "ธันวาคม"]
                        },
                        firstDayOfWeek: 1,
                        rangeSeparator: " ถึง ",
                        scrollTitle: "เลื่อนเพื่อเพิ่มหรือลด",
                        toggleTitle: "คลิกเพื่อเปลี่ยน",
                        time_24hr: !0,
                        ordinal: function () {
                            return ""
                        }
                    };
                nt.l10ns.th = rt, nt.l10ns;
                var it = "undefined" != typeof window && void 0 !== window.flatpickr ? window.flatpickr : {l10ns: {}},
                    st = {
                        weekdays: {
                            shorthand: ["Paz", "Pzt", "Sal", "Çar", "Per", "Cum", "Cmt"],
                            longhand: ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"]
                        },
                        months: {
                            shorthand: ["Oca", "Şub", "Mar", "Nis", "May", "Haz", "Tem", "Ağu", "Eyl", "Eki", "Kas", "Ara"],
                            longhand: ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"]
                        },
                        firstDayOfWeek: 1,
                        ordinal: function () {
                            return "."
                        },
                        rangeSeparator: " - ",
                        weekAbbreviation: "Hf",
                        scrollTitle: "Artırmak için kaydırın",
                        toggleTitle: "Aç/Kapa",
                        amPM: ["ÖÖ", "ÖS"],
                        time_24hr: !0
                    };
                it.l10ns.tr = st, it.l10ns;
                var ot = "undefined" != typeof window && void 0 !== window.flatpickr ? window.flatpickr : {l10ns: {}},
                    lt = {
                        firstDayOfWeek: 1,
                        weekdays: {
                            shorthand: ["Нд", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
                            longhand: ["Неділя", "Понеділок", "Вівторок", "Середа", "Четвер", "П'ятниця", "Субота"]
                        },
                        months: {
                            shorthand: ["Січ", "Лют", "Бер", "Кві", "Тра", "Чер", "Лип", "Сер", "Вер", "Жов", "Лис", "Гру"],
                            longhand: ["Січень", "Лютий", "Березень", "Квітень", "Травень", "Червень", "Липень", "Серпень", "Вересень", "Жовтень", "Листопад", "Грудень"]
                        },
                        time_24hr: !0
                    };
                ot.l10ns.uk = lt, ot.l10ns;
                var dt = "undefined" != typeof window && void 0 !== window.flatpickr ? window.flatpickr : {l10ns: {}},
                    ct = {
                        weekdays: {
                            shorthand: ["Якш", "Душ", "Сеш", "Чор", "Пай", "Жум", "Шан"],
                            longhand: ["Якшанба", "Душанба", "Сешанба", "Чоршанба", "Пайшанба", "Жума", "Шанба"]
                        },
                        months: {
                            shorthand: ["Янв", "Фев", "Мар", "Апр", "Май", "Июн", "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек"],
                            longhand: ["Январ", "Феврал", "Март", "Апрел", "Май", "Июн", "Июл", "Август", "Сентябр", "Октябр", "Ноябр", "Декабр"]
                        },
                        firstDayOfWeek: 1,
                        ordinal: function () {
                            return ""
                        },
                        rangeSeparator: " — ",
                        weekAbbreviation: "Ҳафта",
                        scrollTitle: "Катталаштириш учун айлантиринг",
                        toggleTitle: "Ўтиш учун босинг",
                        amPM: ["AM", "PM"],
                        yearAriaLabel: "Йил",
                        time_24hr: !0
                    };
                dt.l10ns.uz = ct, dt.l10ns;
                var ut = "undefined" != typeof window && void 0 !== window.flatpickr ? window.flatpickr : {l10ns: {}},
                    pt = {
                        weekdays: {
                            shorthand: ["Ya", "Du", "Se", "Cho", "Pa", "Ju", "Sha"],
                            longhand: ["Yakshanba", "Dushanba", "Seshanba", "Chorshanba", "Payshanba", "Juma", "Shanba"]
                        },
                        months: {
                            shorthand: ["Yan", "Fev", "Mar", "Apr", "May", "Iyun", "Iyul", "Avg", "Sen", "Okt", "Noy", "Dek"],
                            longhand: ["Yanvar", "Fevral", "Mart", "Aprel", "May", "Iyun", "Iyul", "Avgust", "Sentabr", "Oktabr", "Noyabr", "Dekabr"]
                        },
                        firstDayOfWeek: 1,
                        ordinal: function () {
                            return ""
                        },
                        rangeSeparator: " — ",
                        weekAbbreviation: "Hafta",
                        scrollTitle: "Kattalashtirish uchun aylantiring",
                        toggleTitle: "O‘tish uchun bosing",
                        amPM: ["AM", "PM"],
                        yearAriaLabel: "Yil",
                        time_24hr: !0
                    };
                ut.l10ns.uz_latn = pt, ut.l10ns;
                var ht = "undefined" != typeof window && void 0 !== window.flatpickr ? window.flatpickr : {l10ns: {}},
                    mt = {
                        weekdays: {
                            shorthand: ["CN", "T2", "T3", "T4", "T5", "T6", "T7"],
                            longhand: ["Chủ nhật", "Thứ hai", "Thứ ba", "Thứ tư", "Thứ năm", "Thứ sáu", "Thứ bảy"]
                        },
                        months: {
                            shorthand: ["Th1", "Th2", "Th3", "Th4", "Th5", "Th6", "Th7", "Th8", "Th9", "Th10", "Th11", "Th12"],
                            longhand: ["Tháng một", "Tháng hai", "Tháng ba", "Tháng tư", "Tháng năm", "Tháng sáu", "Tháng bảy", "Tháng tám", "Tháng chín", "Tháng mười", "Tháng mười một", "Tháng mười hai"]
                        },
                        firstDayOfWeek: 1,
                        rangeSeparator: " đến "
                    };
                ht.l10ns.vn = mt, ht.l10ns;
                var gt = "undefined" != typeof window && void 0 !== window.flatpickr ? window.flatpickr : {l10ns: {}},
                    ft = {
                        weekdays: {
                            shorthand: ["周日", "周一", "周二", "周三", "周四", "周五", "周六"],
                            longhand: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"]
                        },
                        months: {
                            shorthand: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
                            longhand: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"]
                        },
                        rangeSeparator: " 至 ",
                        weekAbbreviation: "周",
                        scrollTitle: "滚动切换",
                        toggleTitle: "点击切换 12/24 小时时制"
                    };
                gt.l10ns.zh = ft, gt.l10ns;
                var vt = "undefined" != typeof window && void 0 !== window.flatpickr ? window.flatpickr : {l10ns: {}},
                    yt = {
                        weekdays: {
                            shorthand: ["週日", "週一", "週二", "週三", "週四", "週五", "週六"],
                            longhand: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"]
                        },
                        months: {
                            shorthand: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
                            longhand: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"]
                        },
                        rangeSeparator: " 至 ",
                        weekAbbreviation: "週",
                        scrollTitle: "滾動切換",
                        toggleTitle: "點擊切換 12/24 小時時制"
                    };
                vt.l10ns.zh_tw = yt, vt.l10ns;
                var wt = {
                    ar: n,
                    at: i,
                    az: o,
                    be: d,
                    bg: h,
                    bn: g,
                    bs: u,
                    ca: v,
                    ckb: w,
                    cat: v,
                    cs: $,
                    cy: S,
                    da: M,
                    de: E,
                    default: t({}, _),
                    en: _,
                    eo: P,
                    es: D,
                    et: A,
                    fa: I,
                    fi: O,
                    fo: B,
                    fr: J,
                    gr: H,
                    he: W,
                    hi: Y,
                    hr: K,
                    hu: Z,
                    hy: ee,
                    id: ae,
                    is: re,
                    it: se,
                    ja: le,
                    ka: ce,
                    ko: pe,
                    km: me,
                    kz: fe,
                    lt: ye,
                    lv: be,
                    mk: ke,
                    mn: Ce,
                    ms: Te,
                    my: _e,
                    nl: Pe,
                    nn: De,
                    no: Ae,
                    pa: Ie,
                    pl: Oe,
                    pt: Be,
                    ro: Je,
                    ru: He,
                    si: We,
                    sk: Ye,
                    sl: Ke,
                    sq: Ze,
                    sr: et,
                    sv: at,
                    th: rt,
                    tr: st,
                    uk: lt,
                    vn: mt,
                    zh: ft,
                    zh_tw: yt,
                    uz: ct,
                    uz_latn: pt
                };
                e.default = wt, Object.defineProperty(e, "__esModule", {value: !0})
            }(t)
        }, 2743: e => {
            !function (t, a) {
                var n = a.jQuery;
                e.exports = n ? t(a, n) : function (e) {
                    if (e && !e.fn) throw"Provide jQuery or null";
                    return t(a, e)
                }
            }((function (e, t) {
                "use strict";
                var a = !1 === t;
                t = t && t.fn ? t : e.jQuery;
                var n, r, i, s, o, l, d, c, u, p, h, m, g, f, v, y, w, b, $, k, S, C, M = "v1.0.11", T = "_ocp",
                    E = /[ \t]*(\r\n|\n|\r)/g, _ = /\\(['"\\])/g, L = /['"\\]/g,
                    P = /(?:\x08|^)(onerror:)?(?:(~?)(([\w$.]+):)?([^\x08]+))\x08(,)?([^\x08]+)/gi, x = /^if\s/,
                    D = /<(\w+)[>\s]/, j = /[\x00`><\"'&=]/, A = /^on[A-Z]|^convert(Back)?$/,
                    F = /^\#\d+_`[\s\S]*\/\d+_`$/, I = /[\x00`><"'&=]/g, N = /[&<>]/g, O = /&(amp|gt|lt);/g,
                    R = /\[['"]?|['"]?\]/g, B = 0, q = {
                        "&": "&amp;",
                        "<": "&lt;",
                        ">": "&gt;",
                        "\0": "&#0;",
                        "'": "&#39;",
                        '"': "&#34;",
                        "`": "&#96;",
                        "=": "&#61;"
                    }, J = {amp: "&", gt: ">", lt: "<"}, U = "html", H = "object", V = "data-jsv-tmpl", W = "jsvTmpl",
                    z = "For #index in nested block use #getIndex().", Y = {}, G = {}, K = e.jsrender,
                    Q = K && t && !t.render, Z = {
                        template: {
                            compile: function e(a, n, r, i) {
                                function o(n) {
                                    var s, o;
                                    if ("" + n === n || n.nodeType > 0 && (l = n)) {
                                        if (!l) if (/^\.?\/[^\\:*?"<>]*$/.test(n)) (o = c[a = a || n]) ? n = o : l = document.getElementById(n); else if ("#" === n.charAt(0)) l = document.getElementById(n.slice(1)); else if (t.fn && !m.rTmpl.test(n)) try {
                                            l = t(n, document)[0]
                                        } catch (e) {
                                        }
                                        l && ("SCRIPT" !== l.tagName && ke(n + ": Use script block, not " + l.tagName), i ? n = l.innerHTML : ((s = l.getAttribute(V)) && (s !== W ? (n = c[s], delete c[s]) : t.fn && (n = t.data(l)[W])), s && n || (a = a || (t.fn ? W : n), n = e(a, l.innerHTML, r, i)), n.tmplName = a = a || s, a !== W && (c[a] = n), l.setAttribute(V, a), t.fn && t.data(l, W, n))), l = void 0
                                    } else n.fn || (n = void 0);
                                    return n
                                }

                                var l, d, p = n = n || "";
                                m._html = u.html, 0 === i && (i = void 0, p = o(p));
                                (i = i || (n.markup ? n.bnds ? ie({}, n) : n : {})).tmplName = i.tmplName || a || "unnamed", r && (i._parentTmpl = r);
                                !p && n.markup && (p = o(n.markup)) && p.fn && (p = p.markup);
                                if (void 0 !== p) return p.render || n.render ? p.tmpls && (d = p) : (n = fe(p, i), Ce(p.replace(L, "\\$&"), n)), d || (d = ie((function () {
                                    return d.render.apply(d, arguments)
                                }), n), function (e) {
                                    var t, a, n;
                                    for (t in Z) e[a = t + "s"] && (n = e[a], e[a] = {}, s[a](n, e))
                                }(d)), d
                            }
                        }, tag: {
                            compile: function (e, t, a) {
                                var n, r, i, s = new m._tg;

                                function o() {
                                    var t = this;
                                    t._ = {unlinked: !0}, t.inline = !0, t.tagName = e
                                }

                                l(t) ? t = {depends: t.depends, render: t} : "" + t === t && (t = {template: t});
                                if (r = t.baseTag) for (i in t.flow = !!t.flow, (r = "" + r === r ? a && a.tags[r] || h[r] : r) || ke('baseTag: "' + t.baseTag + '" not found'), s = ie(s, r), t) s[i] = ee(r[i], t[i]); else s = ie(s, t);
                                void 0 !== (n = s.template) && (s.template = "" + n === n ? c[n] || c(n) : n);
                                (o.prototype = s).constructor = s._ctr = o, a && (s._parentTmpl = a);
                                return s
                            }
                        }, viewModel: {
                            compile: function (e, a) {
                                var n, r, i, s = this, c = a.getters, u = a.extend, p = a.id,
                                    h = t.extend({_is: e || "unnamed", unmap: S, merge: k}, u), m = "", g = "",
                                    f = c ? c.length : 0, v = t.observable, y = {};

                                function w(e) {
                                    r.apply(this, e)
                                }

                                function b() {
                                    return new w(arguments)
                                }

                                function $(e, t) {
                                    for (var a, n, r, i, o, l = 0; l < f; l++) a = void 0, (r = c[l]) + "" !== r && (r = (a = r).getter, o = a.parentRef), void 0 === (i = e[r]) && a && void 0 !== (n = a.defaultVal) && (i = me(n, e)), t(i, a && s[a.type], r, o)
                                }

                                function k(e, t, a) {
                                    e = e + "" === e ? JSON.parse(e) : e;
                                    var n, r, i, s, l, c, u, h, m, g, f = 0, w = this;
                                    if (d(w)) {
                                        for (u = {}, m = [], r = e.length, i = w.length; f < r; f++) {
                                            for (h = e[f], c = !1, n = 0; n < i && !c; n++) u[n] || (l = w[n], p && (u[n] = c = p + "" === p ? h[p] && (y[p] ? l[p]() : l[p]) === h[p] : p(l, h)));
                                            c ? (l.merge(h), m.push(l)) : (m.push(g = b.map(h)), a && ge(g, a, t))
                                        }
                                        v ? v(w).refresh(m, !0) : w.splice.apply(w, [0, w.length].concat(m))
                                    } else for (s in $(e, (function (e, t, a, n) {
                                        t ? w[a]().merge(e, w, n) : w[a]() !== e && w[a](e)
                                    })), e) s === o || y[s] || (w[s] = e[s])
                                }

                                function S() {
                                    var e, t, a, n, r = 0, i = this;

                                    function u(e) {
                                        for (var t = [], a = 0, n = e.length; a < n; a++) t.push(e[a].unmap());
                                        return t
                                    }

                                    if (d(i)) return u(i);
                                    for (e = {}; r < f; r++) a = void 0, (t = c[r]) + "" !== t && (t = (a = t).getter), n = i[t](), e[t] = a && n && s[a.type] ? d(n) ? u(n) : n.unmap() : n;
                                    for (t in i) !i.hasOwnProperty(t) || "_" === t.charAt(0) && y[t.slice(1)] || t === o || l(i[t]) || (e[t] = i[t]);
                                    return e
                                }

                                for (w.prototype = h, n = 0; n < f; n++) !function (e) {
                                    e = e.getter || e, y[e] = n + 1;
                                    var t = "_" + e;
                                    m += (m ? "," : "") + e, g += "this." + t + " = " + e + ";\n", h[e] = h[e] || function (a) {
                                        if (!arguments.length) return this[t];
                                        v ? v(this).setProperty(e, a) : this[t] = a
                                    }, v && (h[e].set = h[e].set || function (e) {
                                        this[t] = e
                                    })
                                }(c[n]);
                                return g = new Function(m, g), r = function () {
                                    g.apply(this, arguments), (i = arguments[f + 1]) && ge(this, arguments[f], i)
                                }, r.prototype = h, h.constructor = r, b.map = function (t) {
                                    t = t + "" === t ? JSON.parse(t) : t;
                                    var a, n, r, i, s = 0, l = t, u = [];
                                    if (d(t)) {
                                        for (a = (t = t || []).length; s < a; s++) u.push(this.map(t[s]));
                                        return u._is = e, u.unmap = S, u.merge = k, u
                                    }
                                    if (t) {
                                        for ($(t, (function (e, t) {
                                            t && (e = t.map(e)), u.push(e)
                                        })), l = this.apply(this, u), s = f; s--;) if (r = u[s], (i = c[s].parentRef) && r && r.unmap) if (d(r)) for (a = r.length; a--;) ge(r[a], i, l); else ge(r, i, l);
                                        for (n in t) n === o || y[n] || (l[n] = t[n])
                                    }
                                    return l
                                }, b.getters = c, b.extend = u, b.id = p, b
                            }
                        }, helper: {}, converter: {}
                    };

                function X(e, t) {
                    return function () {
                        var a, n = this, r = n.base;
                        return n.base = e, a = t.apply(n, arguments), n.base = r, a
                    }
                }

                function ee(e, t) {
                    return l(t) && ((t = X(e ? e._d ? e : X(ne, e) : ne, t))._d = (e && e._d || 0) + 1), t
                }

                function te(e, t) {
                    var a, n = t.props;
                    for (a in n) !A.test(a) || e[a] && e[a].fix || (e[a] = "convert" !== a ? ee(e.constructor.prototype[a], n[a]) : n[a])
                }

                function ae(e) {
                    return e
                }

                function ne() {
                    return ""
                }

                function re(e) {
                    this.name = (t.link ? "JsViews" : "JsRender") + " Error", this.message = e || this.name
                }

                function ie(e, t) {
                    if (e) {
                        for (var a in t) e[a] = t[a];
                        return e
                    }
                }

                function se() {
                    var e = this.get("item");
                    return e ? e.index : void 0
                }

                function oe() {
                    return this.index
                }

                function le(e, t, a, n) {
                    var r, i, s, o = 0;
                    if (1 === a && (n = 1, a = void 0), t) for (s = (i = t.split(".")).length; e && o < s; o++) r = e, e = i[o] ? e[i[o]] : e;
                    return a && (a.lt = a.lt || o < s), void 0 === e ? n ? ne : "" : n ? function () {
                        return e.apply(r, arguments)
                    } : e
                }

                function de(a, n, r) {
                    var i, s, o, d, c, u, h, g = this, f = !C && arguments.length > 1, v = g.ctx;
                    if (a) {
                        if (g._ || (c = g.index, g = g.tag), u = g, v && v.hasOwnProperty(a) || (v = p).hasOwnProperty(a)) {
                            if (o = v[a], "tag" === a || "tagCtx" === a || "root" === a || "parentTags" === a) return o
                        } else v = void 0;
                        if ((!C && g.tagCtx || g.linked) && (o && o._cxp || (g = g.tagCtx || l(o) ? g : !(g = g.scope || g).isTop && g.ctx.tag || g, void 0 !== o && g.tagCtx && (g = g.tagCtx.view.scope), v = g._ocps, (o = v && v.hasOwnProperty(a) && v[a] || o) && o._cxp || !r && !f || ((v || (g._ocps = g._ocps || {}))[a] = o = [{
                            _ocp: o,
                            _vw: u,
                            _key: a
                        }], o._cxp = {
                            path: T, ind: 0, updateValue: function (e, a) {
                                return t.observable(o[0]).setProperty(T, e), this
                            }
                        })), d = o && o._cxp)) {
                            if (arguments.length > 2) return (s = o[1] ? m._ceo(o[1].deps) : [T]).unshift(o[0]), s._cxp = d, s;
                            if (c = d.tagElse, h = o[1] ? d.tag && d.tag.cvtArgs ? d.tag.cvtArgs(c, 1)[d.ind] : o[1](o[0].data, o[0], m) : o[0]._ocp, f) return m._ucp(a, n, g, d), g;
                            o = h
                        }
                        return o && l(o) && (i = function () {
                            return o.apply(this && this !== e ? this : u, arguments)
                        }, ie(i, o)), i || o
                    }
                }

                function ce(e, t) {
                    var a, n, r, i, s, o, l, c = this;
                    if (c.tagName) {
                        if (!(c = ((o = c).tagCtxs || [c])[e || 0])) return
                    } else o = c.tag;
                    if (s = o.bindFrom, i = c.args, (l = o.convert) && "" + l === l && (l = "true" === l ? void 0 : c.view.getRsc("converters", l) || ke("Unknown converter: '" + l + "'")), l && !t && (i = i.slice()), s) {
                        for (r = [], a = s.length; a--;) n = s[a], r.unshift(ue(c, n));
                        t && (i = r)
                    }
                    if (l) {
                        if (void 0 === (l = l.apply(o, r || i))) return i;
                        if (a = (s = s || [0]).length, d(l) && (!1 === l.arg0 || 1 !== a && l.length === a && !l.arg0) || (l = [l], s = [0], a = 1), t) i = l; else for (; a--;) +(n = s[a]) === n && (i[n] = l[a])
                    }
                    return i
                }

                function ue(e, t) {
                    return (e = e[+t === t ? "args" : "props"]) && e[t]
                }

                function pe(e) {
                    return this.cvtArgs(e, 1)
                }

                function he(e, t, a, n, r, i, s, o) {
                    var l, d, c, u = this, p = "array" === t;
                    u.content = o, u.views = p ? [] : {}, u.data = n, u.tmpl = r, c = u._ = {
                        key: 0,
                        useKey: p ? 0 : 1,
                        id: "" + B++,
                        onRender: s,
                        bnds: {}
                    }, u.linked = !!s, u.type = t || "top", t && (u.cache = {_ct: g._cchCt}), a && "top" !== a.type || ((u.ctx = e || {}).root = u.data), (u.parent = a) ? (u.root = a.root || u, l = a.views, d = a._, u.isTop = d.scp, u.scope = (!e.tag || e.tag === a.ctx.tag) && !u.isTop && a.scope || u, d.useKey ? (l[c.key = "_" + d.useKey++] = u, u.index = z, u.getIndex = se) : l.length === (c.key = u.index = i) ? l.push(u) : l.splice(i, 0, u), u.ctx = e || a.ctx) : t && (u.root = u)
                }

                function me(e, t) {
                    return l(e) ? e.call(t) : e
                }

                function ge(e, t, a) {
                    Object.defineProperty(e, t, {value: a, configurable: !0})
                }

                function fe(e, a) {
                    var n, r = f._wm || {}, i = {tmpls: [], links: {}, bnds: [], _is: "template", render: be};
                    return a && (i = ie(i, a)), i.markup = e, i.htmlTag || (n = D.exec(e), i.htmlTag = n ? n[1].toLowerCase() : ""), (n = r[i.htmlTag]) && n !== r.div && (i.markup = t.trim(i.markup)), i
                }

                function ve(e, t) {
                    var a = e + "s";
                    s[a] = function n(r, i, o) {
                        var l, d, c, u = m.onStore[e];
                        if (r && typeof r === H && !r.nodeType && !r.markup && !r.getTgt && !("viewModel" === e && r.getters || r.extend)) {
                            for (d in r) n(d, r[d], i);
                            return i || s
                        }
                        return r && "" + r !== r && (o = i, i = r, r = void 0), c = o ? "viewModel" === e ? o : o[a] = o[a] || {} : n, l = t.compile, void 0 === i && (i = l ? r : c[r], r = void 0), null === i ? r && delete c[r] : (l && ((i = l.call(c, r, i, o, 0) || {})._is = e), r && (c[r] = i)), u && u(r, i, o, l), i
                    }
                }

                function ye(e) {
                    v[e] = v[e] || function (t) {
                        return arguments.length ? (g[e] = t, v) : g[e]
                    }
                }

                function we(e) {
                    function t(t, a) {
                        this.tgt = e.getTgt(t, a), a.map = this
                    }

                    return l(e) && (e = {getTgt: e}), e.baseMap && (e = ie(ie({}, e.baseMap), e)), e.map = function (e, a) {
                        return new t(e, a)
                    }, e
                }

                function be(e, t, a, n, r, s) {
                    var o, c, u, p, h, g, v, y = n, w = "";
                    if (!0 === t ? (a = t, t = void 0) : typeof t !== H && (t = void 0), (u = this.tag) ? (this, p = (y = y || this.view)._getTmpl(u.template || this.tmpl), arguments.length || (e = u.contentCtx && l(u.contentCtx) ? e = u.contentCtx(e) : y)) : p = this, p) {
                        if (!n && e && "view" === e._is && (y = e), y && e === y && (e = y.data), h = !y, C = C || h, h && ((t = t || {}).root = e), !C || f.useViews || p.useViews || y && y !== i) w = $e(p, e, t, a, y, r, s, u); else {
                            if (y ? (g = y.data, v = y.index, y.index = z) : (g = (y = i).data, y.data = e, y.ctx = t), d(e) && !a) for (o = 0, c = e.length; o < c; o++) y.index = o, y.data = e[o], w += p.fn(e[o], y, m); else y.data = e, w += p.fn(e, y, m);
                            y.data = g, y.index = v
                        }
                        h && (C = void 0)
                    }
                    return w
                }

                function $e(e, t, a, n, r, i, s, o) {
                    var l, c, u, p, h, g, f, v, y, w, b, $, k, S = "";
                    if (o && (y = o.tagName, $ = o.tagCtx, a = a ? Le(a, o.ctx) : o.ctx, e === r.content ? f = e !== r.ctx._wrp ? r.ctx._wrp : void 0 : e !== $.content ? e === o.template ? (f = $.tmpl, a._wrp = $.content) : f = $.content || r.content : f = r.content, !1 === $.props.link && ((a = a || {}).link = !1)), r && (s = s || r._.onRender, (k = a && !1 === a.link) && r._.nl && (s = void 0), a = Le(a, r.ctx), $ = !o && r.tag ? r.tag.tagCtxs[r.tagElse] : $), (w = $ && $.props.itemVar) && ("~" !== w[0] && Se("Use itemVar='~myItem'"), w = w.slice(1)), !0 === i && (g = !0, i = 0), s && o && o._.noVws && (s = void 0), v = s, !0 === s && (v = void 0, s = r._.onRender), b = a = e.helpers ? Le(e.helpers, a) : a, d(t) && !n) for ((u = g ? r : void 0 !== i && r || new he(a, "array", r, t, e, i, s, f))._.nl = k, r && r._.useKey && (u._.bnd = !o || o._.bnd && o, u.tag = o), l = 0, c = t.length; l < c; l++) p = new he(b, "item", u, t[l], e, (i || 0) + l, s, u.content), w && ((p.ctx = ie({}, b))[w] = m._cp(t[l], "#data", p)), h = e.fn(t[l], p, m), S += u._.onRender ? u._.onRender(h, p) : h; else u = g ? r : new he(b, y || "data", r, t, e, i, s, f), w && ((u.ctx = ie({}, b))[w] = m._cp(t, "#data", u)), u.tag = o, u._.nl = k, S += e.fn(t, u, m);
                    return o && (u.tagElse = $.index, $.contentView = u), v ? v(S, u) : S
                }

                function ke(e) {
                    throw new m.Err(e)
                }

                function Se(e) {
                    ke("Syntax error\n" + e)
                }

                function Ce(e, t, a, n, i) {
                    function s(t) {
                        (t -= f) && k.push(e.substr(f, t).replace(E, "\\n"))
                    }

                    function o(t, a) {
                        t && (t += "}}", Se((a ? "{{" + a + "}} block has {{/" + t + " without {{" + t : "Unmatched or missing {{/" + t) + ", in template:\n" + e))
                    }

                    var l, d, c, u, p, h = g.allowCode || t && t.allowCode || !0 === v.allowCode, m = [], f = 0, w = [],
                        k = m, S = [, , m];
                    if (h && t._is && (t.allowCode = h), a && (void 0 !== n && (e = e.slice(0, -n.length - 2) + b), e = y + e + $), o(w[0] && w[0][2].pop()[0]), e.replace(r, (function (r, l, d, p, m, g, v, y, b, $, C, M) {
                        (v && l || b && !d || y && ":" === y.slice(-1) || $) && Se(r), g && (m = ":", p = U);
                        var T, L, D, j = (l || a) && [[]], F = "", I = "", N = "", O = "", R = "", B = "", q = "",
                            J = "", H = !(b = b || a && !i) && !m;
                        d = d || (y = y || "#data", m), s(M), f = M + r.length, v ? h && k.push(["*", "\n" + y.replace(/^:/, "ret+= ").replace(_, "$1") + ";\n"]) : d ? ("else" === d && (x.test(y) && Se('For "{{else if expr}}" use "{{else expr}}"'), j = S[9] && [[]], S[10] = e.substring(S[10], M), L = S[11] || S[0] || Se("Mismatched: " + r), S = w.pop(), k = S[2], H = !0), y && Ee(y.replace(E, " "), j, t, a).replace(P, (function (e, t, a, n, r, i, s, o) {
                            return "this:" === n && (i = "undefined"), o && (D = D || "@" === o[0]), n = "'" + r + "':", s ? (I += a + i + ",", O += "'" + o + "',") : a ? (N += n + "j._cp(" + i + ',"' + o + '",view),', B += n + "'" + o + "',") : t ? q += i : ("trigger" === r && (J += i), "lateRender" === r && (T = "false" !== o), F += n + i + ",", R += n + "'" + o + "',", u = u || A.test(r)), ""
                        })).slice(0, -1), j && j[0] && j.pop(), c = [d, p || !!n || u || "", H && [], Te(O || (":" === d ? "'#data'," : ""), R, B), Te(I || (":" === d ? "data," : ""), F, N), q, J, T, D, j || 0], k.push(c), H && (w.push(S), (S = c)[10] = f, S[11] = L)) : C && (o(C !== S[0] && C !== S[11] && C, S[0]), S[10] = e.substring(S[10], M), S = w.pop()), o(!S && C), k = S[2]
                    })), s(e.length), (f = m[m.length - 1]) && o("" + f !== f && +f[10] === f[10] && f[0]), a) {
                        for (d = _e(m, e, a), p = [], l = m.length; l--;) p.unshift(m[l][9]);
                        Me(d, p)
                    } else d = _e(m, t);
                    return d
                }

                function Me(e, t) {
                    var a, n, r = 0, i = t.length;
                    for (e.deps = [], e.paths = []; r < i; r++) for (a in e.paths.push(n = t[r]), n) "_jsvto" !== a && n.hasOwnProperty(a) && n[a].length && !n[a].skp && (e.deps = e.deps.concat(n[a]))
                }

                function Te(e, t, a) {
                    return [e.slice(0, -1), t.slice(0, -1), a.slice(0, -1)]
                }

                function Ee(e, a, n, r) {
                    var i, s, o, l, d, c = a && a[0], u = {bd: c}, p = {0: u}, h = 0, g = 0, v = 0, y = {}, w = 0,
                        b = {}, $ = {}, k = {}, S = {0: 0}, C = {0: ""}, M = 0;
                    return "@" === e[0] && (e = e.replace(R, ".")), o = (e + (n ? " " : "")).replace(m.rPrm, (function (n, o, T, E, _, P, x, D, j, A, F, I, N, O, R, B, q, J, U, H, V) {
                        E && !D && (_ = E + _), P = P || "", N = N || "", T = T || o || N, _ = _ || j, A && (A = !/\)|]/.test(V[H - 1])) && (_ = _.slice(1).split(".").join("^")), F = F || J || "";
                        var W, z, G, K, Q, Z, X, ee = H;
                        if (!d && !l) {
                            if (x && Se(e), q && c) {
                                if (W = k[v - 1], V.length - 1 > ee - (W || 0)) {
                                    if (W = t.trim(V.slice(W, ee + n.length)), z = s || p[v - 1].bd, (G = z[z.length - 1]) && G.prm) {
                                        for (; G.sb && G.sb.prm;) G = G.sb;
                                        K = G.sb = {path: G.sb, bnd: G.bnd}
                                    } else z.push(K = {path: z.pop()});
                                    G && G.sb === K && (C[v] = C[v - 1].slice(G._cpPthSt) + C[v], C[v - 1] = C[v - 1].slice(0, G._cpPthSt)), K._cpPthSt = S[v - 1], K._cpKey = W, C[v] += V.slice(M, H), M = H, K._cpfn = Y[W] = Y[W] || new Function("data,view,j", "//" + W + "\nvar v;\nreturn ((v=" + C[v] + ("]" === B ? ")]" : B) + ")!=null?v:null);"), C[v - 1] += $[g] && f.cache ? 'view.getCache("' + W.replace(L, "\\$&") + '"' : C[v], K.prm = u.bd, K.bnd = K.bnd || K.path && K.path.indexOf("^") >= 0
                                }
                                C[v] = ""
                            }
                            "[" === F && (F = "[j._sq("), "[" === T && (T = "[j._sq(")
                        }
                        return X = d ? (d = !O) ? n : N + '"' : l ? (l = !R) ? n : N + '"' : (T ? (b[++g] = !0, y[g] = 0, c && (k[v++] = ee++, u = p[v] = {bd: []}, C[v] = "", S[v] = 1), T) : "") + (U ? g ? "" : (h = V.slice(h, ee), (i ? (i = s = !1, "\b") : "\b,") + h + (h = ee + n.length, c && a.push(u.bd = []), "\b")) : D ? (v && Se(e), c && a.pop(), i = "_" + _, E, h = ee + n.length, c && ((c = u.bd = a[i] = []).skp = !E), _ + ":") : _ ? _.split("^").join(".").replace(m.rPath, (function (e, t, n, o, l, d, p, h) {
                            if (Q = "." === n, n && (_ = _.slice(t.length), /^\.?constructor$/.test(h || _) && Se(e), Q || (e = (A ? (r ? "" : "(ltOb.lt=ltOb.lt||") + "(ob=" : "") + (o ? 'view.ctxPrm("' + o + '")' : l ? "view" : "data") + (A ? ")===undefined" + (r ? "" : ")") + '?"":view._getOb(ob,"' : "") + (h ? (d ? "." + d : o || l ? "" : "." + n) + (p || "") : (h = o ? "" : l ? d || "" : n, "")), e = t + ("view.data" === (e += h ? "." + h : "").slice(0, 9) ? e.slice(5) : e) + (A ? (r ? '"' : '",ltOb') + (F ? ",1)" : ")") : "")), c)) {
                                if (z = "_linkTo" === i ? s = a._jsvto = a._jsvto || [] : u.bd, G = Q && z[z.length - 1]) {
                                    if (G._cpfn) {
                                        for (; G.sb;) G = G.sb;
                                        G.prm && (G.bnd && (_ = "^" + _.slice(1)), G.sb = _, G.bnd = G.bnd || "^" === _[0])
                                    }
                                } else z.push(_);
                                F && !Q && (k[v] = ee, S[v] = C[v].length)
                            }
                            return e
                        })) + (F || P) : P || (B ? "]" === B ? ")]" : ")" : I ? ($[g] || Se(e), ",") : o ? "" : (d = O, l = R, '"'))), d || l || B && ($[g] = !1, g--), c && (d || l || (B && (b[g + 1] && (u = p[--v], b[g + 1] = !1), w = y[g + 1]), F && (y[g + 1] = C[v].length + (T ? 1 : 0), (_ || B) && (u = p[++v] = {bd: []}, b[g + 1] = !0))), C[v] = (C[v] || "") + V.slice(M, H), M = H + n.length, d || l || ((Z = T && b[g + 1]) && (C[v - 1] += T, S[v - 1]++), "(" === F && Q && !K && (C[v] = C[v - 1].slice(w) + C[v], C[v - 1] = C[v - 1].slice(0, w))), C[v] += Z ? X.slice(1) : X), d || l || !F || (g++, _ && "(" === F && ($[g] = !0)), d || l || !J || (c && (C[v] += F), X += F), X
                    })), c && (o = C[0]), !g && o || Se(e)
                }

                function _e(e, t, a) {
                    var n, r, i, s, o, l, d, c, u, p, m, v, y, w, b, $, k, S, C, M, T, L, P, x, D, j, A, F, I, N, O, R,
                        B, q, J = 0, H = f.useViews || t.useViews || t.tags || t.templates || t.helpers || t.converters,
                        V = "", W = {}, z = e.length;
                    for ("" + t === t ? (k = a ? 'data-link="' + t.replace(E, " ").slice(1, -1) + '"' : t, t = 0) : (k = t.tmplName || "unnamed", t.allowCode && (W.allowCode = !0), t.debug && (W.debug = !0), p = t.bnds, $ = t.tmpls), n = 0; n < z; n++) if ("" + (r = e[n]) === r) V += '+"' + r + '"'; else if ("*" === (i = r[0])) V += ";\n" + r[1] + "\nret=ret"; else {
                        if (s = r[1], M = !a && r[2], B = r[3], q = v = r[4], o = "\n\tparams:{args:[" + B[0] + "],\n\tprops:{" + B[1] + "}" + (B[2] ? ",\n\tctx:{" + B[2] + "}" : "") + "},\n\targs:[" + q[0] + "],\n\tprops:{" + q[1] + "}" + (q[2] ? ",\n\tctx:{" + q[2] + "}" : ""), I = r[6], N = r[7], r[8] ? (O = "\nvar ob,ltOb={},ctxs=", R = ";\nctxs.lt=ltOb.lt;\nreturn ctxs;") : (O = "\nreturn ", R = ""), T = r[10] && r[10].replace(_, "$1"), (x = "else" === i) ? m && m.push(r[9]) : (A = r[5] || !1 !== g.debugMode && "undefined", p && (m = r[9]) && (m = [m], J = p.push(1))), H = H || v[1] || v[2] || m || /view.(?!index)/.test(v[0]), (D = ":" === i) ? s && (i = s === U ? ">" : s + i) : (M && ((S = fe(T, W)).tmplName = k + "/" + i, S.useViews = S.useViews || H, _e(M, S), H = S.useViews, $.push(S)), x || (C = i, H = H || i && (!h[i] || !h[i].flow), P = V, V = ""), L = (L = e[n + 1]) && "else" === L[0]), F = A ? ";\ntry{\nret+=" : "\n+", y = "", w = "", D && (m || I || s && s !== U || N)) {
                            if ((j = new Function("data,view,j", "// " + k + " " + ++J + " " + i + O + "{" + o + "};" + R))._er = A, j._tag = i, j._bd = !!m, j._lr = N, a) return j;
                            Me(j, m), u = !0, y = (b = 'c("' + s + '",view,') + J + ",", w = ")"
                        }
                        if (V += D ? (a ? (A ? "try{\n" : "") + "return " : F) + (u ? (u = void 0, H = c = !0, b + (j ? (p[J - 1] = j, J) : "{" + o + "}") + ")") : ">" === i ? (d = !0, "h(" + v[0] + ")") : (!0, "((v=" + v[0] + ")!=null?v:" + (a ? "null)" : '"")'))) : (l = !0, "\n{view:view,content:false,tmpl:" + (M ? $.length : "false") + "," + o + "},"), C && !L) {
                            if (V = "[" + V.slice(0, -1) + "]", b = 't("' + C + '",view,this,', a || m) {
                                if ((V = new Function("data,view,j", " // " + k + " " + J + " " + C + O + V + R))._er = A, V._tag = C, m && Me(p[J - 1] = V, m), V._lr = N, a) return V;
                                y = b + J + ",undefined,", w = ")"
                            }
                            V = P + F + b + (m && J || V) + ")", m = 0, C = 0
                        }
                        A && !L && (H = !0, V += ";\n}catch(e){ret" + (a ? "urn " : "+=") + y + "j._err(e,view," + A + ")" + w + ";}" + (a ? "" : "\nret=ret"))
                    }
                    V = "// " + k + (W.debug ? "\ndebugger;" : "") + "\nvar v" + (l ? ",t=j._tag" : "") + (c ? ",c=j._cnvt" : "") + (d ? ",h=j._html" : "") + (a ? (r[8] ? ", ob" : "") + ";\n" : ',ret=""') + V + (a ? "\n" : ";\nreturn ret;");
                    try {
                        V = new Function("data,view,j", V)
                    } catch (e) {
                        Se("Compiled template code:\n\n" + V + '\n: "' + (e.message || e) + '"')
                    }
                    return t && (t.fn = V, t.useViews = !!H), V
                }

                function Le(e, t) {
                    return e && e !== t ? t ? ie(ie({}, t), e) : e : t && ie({}, t)
                }

                function Pe(e, a) {
                    var n, r, i, s = a.tag, o = a.props, c = a.params.props, u = o.filter, p = o.sort, h = !0 === p,
                        m = parseInt(o.step), g = o.reverse ? -1 : 1;
                    if (!d(e)) return e;
                    if (h || p && "" + p === p ? ((n = e.map((function (e, t) {
                        return {i: t, v: "" + (e = h ? e : le(e, p)) === e ? e.toLowerCase() : e}
                    }))).sort((function (e, t) {
                        return e.v > t.v ? g : e.v < t.v ? -g : 0
                    })), e = n.map((function (t) {
                        return e[t.i]
                    }))) : (p || g < 0) && !s.dataMap && (e = e.slice()), l(p) && (e = e.sort((function () {
                        return p.apply(a, arguments)
                    }))), g < 0 && (!p || l(p)) && (e = e.reverse()), e.filter && u && (e = e.filter(u, a), a.tag.onFilter && a.tag.onFilter(a)), c.sorted && (n = p || g < 0 ? e : e.slice(), s.sorted ? t.observable(s.sorted).refresh(n) : a.map.sorted = n), r = o.start, i = o.end, (c.start && void 0 === r || c.end && void 0 === i) && (r = i = 0), isNaN(r) && isNaN(i) || (r = +r || 0, i = void 0 === i || i > e.length ? e.length : +i, e = e.slice(r, i)), m > 1) {
                        for (r = 0, i = e.length, n = []; r < i; r += m) n.push(e[r]);
                        e = n
                    }
                    return c.paged && s.paged && $observable(s.paged).refresh(e), e
                }

                function xe(e, a, n) {
                    var r = this.jquery && (this[0] || ke("Unknown template")), i = r.getAttribute(V);
                    return be.call(i && t.data(r)[W] || c(r), e, a, n)
                }

                function De(e) {
                    return q[e] || (q[e] = "&#" + e.charCodeAt(0) + ";")
                }

                function je(e, t) {
                    return J[t] || ""
                }

                function Ae(e) {
                    return null != e ? j.test(e) && ("" + e).replace(I, De) || e : ""
                }

                if (s = {
                    jsviews: M, sub: {
                        rPath: /^(!*?)(?:null|true|false|\d[\d.]*|([\w$]+|\.|~([\w$]+)|#(view|([\w$]+))?)([\w$.^]*?)(?:[.[^]([\w$]+)\]?)?)$/g,
                        rPrm: /(\()(?=\s*\()|(?:([([])\s*)?(?:(\^?)(~?[\w$.^]+)?\s*((\+\+|--)|\+|-|~(?![\w$])|&&|\|\||===|!==|==|!=|<=|>=|[<>%*:?\/]|(=))\s*|(!*?(@)?[#~]?[\w$.^]+)([([])?)|(,\s*)|(?:(\()\s*)?\\?(?:(')|("))|(?:\s*(([)\]])(?=[.^]|\s*$|[^([])|[)\]])([([]?))|(\s+)/g,
                        View: he,
                        Err: re,
                        tmplFn: Ce,
                        parse: Ee,
                        extend: ie,
                        extendCtx: Le,
                        syntaxErr: Se,
                        onStore: {
                            template: function (e, t) {
                                null === t ? delete G[e] : e && (G[e] = t)
                            }
                        },
                        addSetting: ye,
                        settings: {allowCode: !1},
                        advSet: ne,
                        _thp: te,
                        _gm: ee,
                        _tg: function () {
                        },
                        _cnvt: function (e, t, a, n) {
                            var r, i, s, o, l, d = "number" == typeof a && t.tmpl.bnds[a - 1];
                            void 0 === n && d && d._lr && (n = "");
                            void 0 !== n ? a = n = {props: {}, args: [n]} : d && (a = d(t.data, t, m));
                            if (d = d._bd && d, e || d) {
                                if (r = (i = t._lc) && i.tag, a.view = t, !r) {
                                    if (r = ie(new m._tg, {
                                        _: {bnd: d, unlinked: !0, lt: a.lt},
                                        inline: !i,
                                        tagName: ":",
                                        convert: e,
                                        onArrayChange: !0,
                                        flow: !0,
                                        tagCtx: a,
                                        tagCtxs: [a],
                                        _is: "tag"
                                    }), (o = a.args.length) > 1) for (l = r.bindTo = []; o--;) l.unshift(o);
                                    i && (i.tag = r, r.linkCtx = i), a.ctx = Le(a.ctx, (i ? i.view : t).ctx), te(r, a)
                                }
                                r._er = n && s, r.ctx = a.ctx || r.ctx || {}, a.ctx = void 0, s = r.cvtArgs()[0], r._er = n && s
                            } else s = a.args[0];
                            return null != (s = d && t._.onRender ? t._.onRender(s, t, r) : s) ? s : ""
                        },
                        _tag: function (e, t, a, n, r, s) {
                            function o(e) {
                                var t = l[e];
                                if (void 0 !== t) for (t = d(t) ? t : [t], v = t.length; v--;) I = t[v], isNaN(parseInt(I)) || (t[v] = parseInt(I));
                                return t || [0]
                            }

                            var l, c, p, h, g, f, v, y, w, b, $, k, S, C, M, T, E, _, L, P, x, D, j, A, I, N, O, R, B,
                                q = 0, J = "", H = (t = t || i)._lc || !1, V = t.ctx, W = a || t.tmpl,
                                z = "number" == typeof n && t.tmpl.bnds[n - 1];
                            "tag" === e._is ? (e = (l = e).tagName, n = l.tagCtxs, l.template) : (c = t.getRsc("tags", e) || ke("Unknown tag: {{" + e + "}} ")).template;
                            void 0 === s && z && (z._lr = c.lateRender && !1 !== z._lr || z._lr) && (s = "");
                            void 0 !== s ? (J += s, n = s = [{
                                props: {},
                                args: [],
                                params: {props: {}}
                            }]) : z && (n = z(t.data, t, m));
                            for (f = n.length; q < f; q++) T = (b = n[q]).tmpl, (!H || !H.tag || q && !H.tag.inline || l._er || T && +T === T) && (T && W.tmpls && (b.tmpl = b.content = W.tmpls[T - 1]), b.index = q, b.ctxPrm = de, b.render = be, b.cvtArgs = ce, b.bndArgs = pe, b.view = t, b.ctx = Le(Le(b.ctx, c && c.ctx), V)), (a = b.props.tmpl) && (b.tmpl = t._getTmpl(a), b.content = b.content || b.tmpl), l ? H && H.fn._lr && (E = !!l.init) : (E = !!(l = new c._ctr).init, l.parent = g = V && V.tag, l.tagCtxs = n, H && (l.inline = !1, H.tag = l), l.linkCtx = H, (l._.bnd = z || H.fn) ? (l._.ths = b.params.props.this, l._.lt = n.lt, l._.arrVws = {}) : l.dataBoundOnly && ke(e + " must be data-bound:\n{^{" + e + "}}")), j = l.dataMap, b.tag = l, j && n && (b.map = n[q].map), l.flow || ($ = b.ctx = b.ctx || {}, p = l.parents = $.parentTags = V && Le($.parentTags, V.parentTags) || {}, g && (p[g.tagName] = g), p[l.tagName] = $.tag = l, $.tagCtx = b);
                            if (!(l._er = s)) {
                                for (te(l, n[0]), l.rendering = {rndr: l.rendering}, q = 0; q < f; q++) {
                                    if (D = (b = l.tagCtx = n[q]).props, l.ctx = b.ctx, !q) {
                                        if (E && (l.init(b, H, l.ctx), E = void 0), b.args.length || !1 === b.argDefault || !1 === l.argDefault || (b.args = P = [b.view.data], b.params.args = ["#data"]), S = o("bindTo"), void 0 !== l.bindTo && (l.bindTo = S), void 0 !== l.bindFrom ? l.bindFrom = o("bindFrom") : l.bindTo && (l.bindFrom = l.bindTo = S), C = l.bindFrom || S, O = S.length, N = C.length, l._.bnd && (R = l.linkedElement) && (l.linkedElement = R = d(R) ? R : [R], O !== R.length && ke("linkedElement not same length as bindTo")), (R = l.linkedCtxParam) && (l.linkedCtxParam = R = d(R) ? R : [R], N !== R.length && ke("linkedCtxParam not same length as bindFrom/bindTo")), C) for (l._.fromIndex = {}, l._.toIndex = {}, y = N; y--;) for (I = C[y], v = O; v--;) I === S[v] && (l._.fromIndex[v] = y, l._.toIndex[y] = v);
                                        H && (H.attr = l.attr = H.attr || l.attr || H._dfAt), h = l.attr, l._.noVws = h && h !== U
                                    }
                                    if (P = l.cvtArgs(q), l.linkedCtxParam) for (x = l.cvtArgs(q, 1), v = N, B = l.constructor.prototype.ctx; v--;) (k = l.linkedCtxParam[v]) && (I = C[v], M = x[v], b.ctx[k] = m._cp(B && void 0 === M ? B[k] : M, void 0 !== M && ue(b.params, I), b.view, l._.bnd && {
                                        tag: l,
                                        cvt: l.convert,
                                        ind: v,
                                        tagElse: q
                                    }));
                                    (_ = D.dataMap || j) && (P.length || D.dataMap) && ((L = b.map) && L.src === P[0] && !r || (L && L.src && L.unmap(), _.map(P[0], b, L, !l._.bnd), L = b.map), P = [L.tgt]), w = void 0, l.render && (w = l.render.apply(l, P), t.linked && w && !F.test(w) && ((a = {links: []}).render = a.fn = function () {
                                        return w
                                    }, w = $e(a, t.data, void 0, !0, t, void 0, void 0, l))), P.length || (P = [t]), void 0 === w && (A = P[0], l.contentCtx && (A = !0 === l.contentCtx ? t : l.contentCtx(A)), w = b.render(A, !0) || (r ? void 0 : "")), J = J ? J + (w || "") : void 0 !== w ? "" + w : void 0
                                }
                                l.rendering = l.rendering.rndr
                            }
                            l.tagCtx = n[0], l.ctx = l.tagCtx.ctx, l._.noVws && l.inline && (J = "text" === h ? u.html(J) : "");
                            return z && t._.onRender ? t._.onRender(J, t, l) : J
                        },
                        _er: ke,
                        _err: function (e, t, a) {
                            var n = void 0 !== a ? l(a) ? a.call(t.data, e, t) : a || "" : "{Error: " + (e.message || e) + "}";
                            g.onError && void 0 !== (a = g.onError.call(t.data, e, a && n, t)) && (n = a);
                            return t && !t._lc ? u.html(n) : n
                        },
                        _cp: ae,
                        _sq: function (e) {
                            return "constructor" === e && Se(""), e
                        }
                    }, settings: {
                        delimiters: function e(t, a, n) {
                            if (!t) return g.delimiters;
                            if (d(t)) return e.apply(s, t);
                            k = n ? n[0] : k, /^(\W|_){5}$/.test(t + a + k) || ke("Invalid delimiters");
                            return y = t[0], w = t[1], b = a[0], $ = a[1], g.delimiters = [y + w, b + $, k], t = "\\" + y + "(\\" + k + ")?\\" + w, a = "\\" + b + "\\" + $, r = "(?:(\\w+(?=[\\/\\s\\" + b + "]))|(\\w+)?(:)|(>)|(\\*))\\s*((?:[^\\" + b + "]|\\" + b + "(?!\\" + $ + "))*?)", m.rTag = "(?:" + r + ")", r = new RegExp("(?:" + t + r + "(\\/)?|\\" + y + "(\\" + k + ")?\\" + w + "(?:(?:\\/(\\w+))\\s*|!--[\\s\\S]*?--))" + a, "g"), m.rTmpl = new RegExp("^\\s|\\s$|<.*>|([^\\\\]|^)[{}]|" + t + ".*" + a), v
                        }, advanced: function (e) {
                            return e ? (ie(f, e), m.advSet(), v) : f
                        }
                    }, map: we
                }, (re.prototype = new Error).constructor = re, se.depends = function () {
                    return [this.get("item"), "index"]
                }, oe.depends = "index", he.prototype = {
                    get: function (e, t) {
                        t || !0 === e || (t = e, e = void 0);
                        var a, n, r, i, s = this, o = "root" === t;
                        if (e) {
                            if (!(i = t && s.type === t && s)) if (a = s.views, s._.useKey) {
                                for (n in a) if (i = t ? a[n].get(e, t) : a[n]) break
                            } else for (n = 0, r = a.length; !i && n < r; n++) i = t ? a[n].get(e, t) : a[n]
                        } else if (o) i = s.root; else if (t) for (; s && !i;) i = s.type === t ? s : void 0, s = s.parent; else i = s.parent;
                        return i || void 0
                    }, getIndex: oe, ctxPrm: de, getRsc: function (e, t) {
                        var a, n, r = this;
                        if ("" + t === t) {
                            for (; void 0 === a && r;) a = (n = r.tmpl && r.tmpl[e]) && n[t], r = r.parent;
                            return a || s[e][t]
                        }
                    }, _getTmpl: function (e) {
                        return e && (e.fn ? e : this.getRsc("templates", e) || c(e))
                    }, _getOb: le, getCache: function (e) {
                        return g._cchCt > this.cache._ct && (this.cache = {_ct: g._cchCt}), void 0 !== this.cache[e] ? this.cache[e] : this.cache[e] = Y[e](this.data, this, m)
                    }, _is: "view"
                }, m = s.sub, v = s.settings, !(K || t && t.render)) {
                    for (n in Z) ve(n, Z[n]);
                    if (u = s.converters, p = s.helpers, h = s.tags, m._tg.prototype = {
                        baseApply: function (e) {
                            return this.base.apply(this, e)
                        }, cvtArgs: ce, bndArgs: pe, ctxPrm: de
                    }, i = m.topView = new he, t) {
                        if (t.fn.render = xe, o = t.expando, t.observable) {
                            if (M !== (M = t.views.jsviews)) throw"jquery.observable.js requires jsrender.js " + M;
                            ie(m, t.views.sub), s.map = t.views.map
                        }
                    } else t = {}, a && (e.jsrender = t), t.renderFile = t.__express = t.compile = function () {
                        throw"Node.js: use npm jsrender, or jsrender-node.js"
                    }, t.isFunction = function (e) {
                        return "function" == typeof e
                    }, t.isArray = Array.isArray || function (e) {
                        return "[object Array]" === {}.toString.call(e)
                    }, m._jq = function (e) {
                        e !== t && (ie(e, t), (t = e).fn.render = xe, delete t.jsrender, o = t.expando)
                    }, t.jsrender = M;
                    for (S in (g = m.settings).allowCode = !1, l = t.isFunction, t.render = G, t.views = s, t.templates = c = s.templates, g) ye(S);
                    (v.debugMode = function (e) {
                        return void 0 === e ? g.debugMode : (g._clFns && g._clFns(), g.debugMode = e, g.onError = e + "" === e ? function () {
                            return e
                        } : l(e) ? e : void 0, v)
                    })(!1), f = g.advanced = {cache: !0, useViews: !1, _jsv: !1}, h({
                        if: {
                            render: function (e) {
                                var t = this, a = t.tagCtx;
                                return t.rendering.done || !e && (a.args.length || !a.index) ? "" : (t.rendering.done = !0, void (t.selected = a.index))
                            }, contentCtx: !0, flow: !0
                        },
                        for: {
                            sortDataMap: we(Pe), init: function (e, t) {
                                this.setDataMap(this.tagCtxs)
                            }, render: function (e) {
                                var t, a, n, r, i, s = this, o = s.tagCtx, l = !1 === o.argDefault, c = o.props,
                                    u = l || o.args.length, p = "", h = 0;
                                if (!s.rendering.done) {
                                    if (t = u ? e : o.view.data, l) for (l = c.reverse ? "unshift" : "push", r = +c.end, i = +c.step || 1, t = [], n = +c.start || 0; (r - n) * i > 0; n += i) t[l](n);
                                    void 0 !== t && (a = d(t), p += o.render(t, !u || c.noIteration), h += a ? t.length : 1), (s.rendering.done = h) && (s.selected = o.index)
                                }
                                return p
                            }, setDataMap: function (e) {
                                for (var t, a, n, r = e.length; r--;) a = (t = e[r]).props, n = t.params.props, t.argDefault = void 0 === a.end || t.args.length > 0, a.dataMap = !1 !== t.argDefault && d(t.args[0]) && (n.sort || n.start || n.end || n.step || n.filter || n.reverse || a.sort || a.start || a.end || a.step || a.filter || a.reverse) && this.sortDataMap
                            }, flow: !0
                        },
                        props: {
                            baseTag: "for", dataMap: we((function (e, a) {
                                var n, r, i = a.map, s = i && i.propsArr;
                                if (!s) {
                                    if (s = [], typeof e === H || l(e)) for (n in e) r = e[n], n === o || !e.hasOwnProperty(n) || a.props.noFunctions && t.isFunction(r) || s.push({
                                        key: n,
                                        prop: r
                                    });
                                    i && (i.propsArr = i.options && s)
                                }
                                return Pe(s, a)
                            })), init: ne, flow: !0
                        },
                        include: {flow: !0},
                        "*": {render: ae, flow: !0},
                        ":*": {render: ae, flow: !0},
                        dbg: p.dbg = u.dbg = function (e) {
                            try {
                                throw console.log("JsRender dbg breakpoint: " + e), "dbg breakpoint"
                            } catch (e) {
                            }
                            return this.base ? this.baseApply(arguments) : e
                        }
                    }), u({
                        html: Ae, attr: Ae, encode: function (e) {
                            return "" + e === e ? e.replace(N, De) : e
                        }, unencode: function (e) {
                            return "" + e === e ? e.replace(O, je) : e
                        }, url: function (e) {
                            return null != e ? encodeURI("" + e) : null === e ? e : ""
                        }
                    })
                }
                return g = m.settings, d = (t || K).isArray, v.delimiters("{{", "}}", "^"), Q && K.views.sub._jq(t), t || K
            }), window)
        }
    }, __webpack_module_cache__ = {};

    function __webpack_require__(e) {
        var t = __webpack_module_cache__[e];
        if (void 0 !== t) return t.exports;
        var a = __webpack_module_cache__[e] = {exports: {}};
        return __webpack_modules__[e].call(a.exports, a, a.exports, __webpack_require__), a.exports
    }

    __webpack_require__.n = e => {
        var t = e && e.__esModule ? () => e.default : () => e;
        return __webpack_require__.d(t, {a: t}), t
    }, __webpack_require__.d = (e, t) => {
        for (var a in t) __webpack_require__.o(t, a) && !__webpack_require__.o(e, a) && Object.defineProperty(e, a, {
            enumerable: !0,
            get: t[a]
        })
    }, __webpack_require__.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), __webpack_require__.r = e => {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(e, "__esModule", {value: !0})
    };
    var __webpack_exports__ = {};
    (() => {
        "use strict";
        var e = {};
        __webpack_require__.r(e), __webpack_require__.d(e, {
            PageRenderer: () => le,
            PageSnapshot: () => H,
            clearCache: () => $e,
            connectStreamSource: () => ye,
            disconnectStreamSource: () => we,
            navigator: () => me,
            registerAdapter: () => fe,
            renderStreamMessage: () => be,
            session: () => he,
            setConfirmMethod: () => Se,
            setProgressBarDelay: () => ke,
            start: () => ge,
            visit: () => ve
        }), function () {
            if (void 0 === window.Reflect || void 0 === window.customElements || window.customElements.polyfillWrapFlushCallback) return;
            const e = HTMLElement, t = function () {
                return Reflect.construct(e, [], this.constructor)
            };
            window.HTMLElement = t, HTMLElement.prototype = e.prototype, HTMLElement.prototype.constructor = HTMLElement, Object.setPrototypeOf(HTMLElement, e)
        }(), function (e) {
            function t(e, t, a) {
                throw new e("Failed to execute 'requestSubmit' on 'HTMLFormElement': " + t + ".", a)
            }

            "function" != typeof e.requestSubmit && (e.requestSubmit = function (e) {
                e ? (!function (e, a) {
                    e instanceof HTMLElement || t(TypeError, "parameter 1 is not of type 'HTMLElement'"), "submit" == e.type || t(TypeError, "The specified element is not a submit button"), e.form == a || t(DOMException, "The specified element is not owned by this form element", "NotFoundError")
                }(e, this), e.click()) : ((e = document.createElement("input")).type = "submit", e.hidden = !0, this.appendChild(e), e.click(), this.removeChild(e))
            })
        }(HTMLFormElement.prototype);
        const t = new WeakMap;

        function a(e) {
            const a = function (e) {
                const t = e instanceof Element ? e : e instanceof Node ? e.parentElement : null,
                    a = t ? t.closest("input, button") : null;
                return "submit" == (null == a ? void 0 : a.type) ? a : null
            }(e.target);
            a && a.form && t.set(a.form, a)
        }

        var n, r, i, s, o, l;
        !function () {
            if ("submitter" in Event.prototype) return;
            let e;
            if ("SubmitEvent" in window && /Apple Computer/.test(navigator.vendor)) e = window.SubmitEvent.prototype; else {
                if ("SubmitEvent" in window) return;
                e = window.Event.prototype
            }
            addEventListener("click", a, !0), Object.defineProperty(e, "submitter", {
                get() {
                    if ("submit" == this.type && this.target instanceof HTMLFormElement) return t.get(this.target)
                }
            })
        }(), function (e) {
            e.eager = "eager", e.lazy = "lazy"
        }(n || (n = {}));

        class d extends HTMLElement {
            constructor() {
                super(), this.loaded = Promise.resolve(), this.delegate = new d.delegateConstructor(this)
            }

            static get observedAttributes() {
                return ["disabled", "loading", "src"]
            }

            connectedCallback() {
                this.delegate.connect()
            }

            disconnectedCallback() {
                this.delegate.disconnect()
            }

            reload() {
                const {src: e} = this;
                this.src = null, this.src = e
            }

            attributeChangedCallback(e) {
                "loading" == e ? this.delegate.loadingStyleChanged() : "src" == e ? this.delegate.sourceURLChanged() : this.delegate.disabledChanged()
            }

            get src() {
                return this.getAttribute("src")
            }

            set src(e) {
                e ? this.setAttribute("src", e) : this.removeAttribute("src")
            }

            get loading() {
                return function (e) {
                    if ("lazy" === e.toLowerCase()) return n.lazy;
                    return n.eager
                }(this.getAttribute("loading") || "")
            }

            set loading(e) {
                e ? this.setAttribute("loading", e) : this.removeAttribute("loading")
            }

            get disabled() {
                return this.hasAttribute("disabled")
            }

            set disabled(e) {
                e ? this.setAttribute("disabled", "") : this.removeAttribute("disabled")
            }

            get autoscroll() {
                return this.hasAttribute("autoscroll")
            }

            set autoscroll(e) {
                e ? this.setAttribute("autoscroll", "") : this.removeAttribute("autoscroll")
            }

            get complete() {
                return !this.delegate.isLoading
            }

            get isActive() {
                return this.ownerDocument === document && !this.isPreview
            }

            get isPreview() {
                var e, t;
                return null === (t = null === (e = this.ownerDocument) || void 0 === e ? void 0 : e.documentElement) || void 0 === t ? void 0 : t.hasAttribute("data-turbo-preview")
            }
        }

        function c(e) {
            return new URL(e.toString(), document.baseURI)
        }

        function u(e) {
            let t;
            return e.hash ? e.hash.slice(1) : (t = e.href.match(/#(.*)$/)) ? t[1] : void 0
        }

        function p(e, t) {
            return c((null == t ? void 0 : t.getAttribute("formaction")) || e.getAttribute("action") || e.action)
        }

        function h(e) {
            return (function (e) {
                return function (e) {
                    return e.pathname.split("/").slice(1)
                }(e).slice(-1)[0]
            }(e).match(/\.[^.]*$/) || [])[0] || ""
        }

        function m(e, t) {
            const a = function (e) {
                return t = e.origin + e.pathname, t.endsWith("/") ? t : t + "/";
                var t
            }(t);
            return e.href === c(a).href || e.href.startsWith(a)
        }

        function g(e, t) {
            return m(e, t) && !!h(e).match(/^(?:|\.(?:htm|html|xhtml))$/)
        }

        function f(e) {
            const t = u(e);
            return null != t ? e.href.slice(0, -(t.length + 1)) : e.href
        }

        function v(e) {
            return f(e)
        }

        class y {
            constructor(e) {
                this.response = e
            }

            get succeeded() {
                return this.response.ok
            }

            get failed() {
                return !this.succeeded
            }

            get clientError() {
                return this.statusCode >= 400 && this.statusCode <= 499
            }

            get serverError() {
                return this.statusCode >= 500 && this.statusCode <= 599
            }

            get redirected() {
                return this.response.redirected
            }

            get location() {
                return c(this.response.url)
            }

            get isHTML() {
                return this.contentType && this.contentType.match(/^(?:text\/([^\s;,]+\b)?html|application\/xhtml\+xml)\b/)
            }

            get statusCode() {
                return this.response.status
            }

            get contentType() {
                return this.header("Content-Type")
            }

            get responseText() {
                return this.response.clone().text()
            }

            get responseHTML() {
                return this.isHTML ? this.response.clone().text() : Promise.resolve(void 0)
            }

            header(e) {
                return this.response.headers.get(e)
            }
        }

        function w(e, {target: t, cancelable: a, detail: n} = {}) {
            const r = new CustomEvent(e, {cancelable: a, bubbles: !0, detail: n});
            return t && t.isConnected ? t.dispatchEvent(r) : document.documentElement.dispatchEvent(r), r
        }

        function b() {
            return new Promise((e => requestAnimationFrame((() => e()))))
        }

        function $(e = "") {
            return (new DOMParser).parseFromString(e, "text/html")
        }

        function k(e, ...t) {
            const a = function (e, t) {
                return e.reduce(((e, a, n) => e + a + (null == t[n] ? "" : t[n])), "")
            }(e, t).replace(/^\n/, "").split("\n"), n = a[0].match(/^\s+/), r = n ? n[0].length : 0;
            return a.map((e => e.slice(r))).join("\n")
        }

        function S() {
            return Array.apply(null, {length: 36}).map(((e, t) => 8 == t || 13 == t || 18 == t || 23 == t ? "-" : 14 == t ? "4" : 19 == t ? (Math.floor(4 * Math.random()) + 8).toString(16) : Math.floor(15 * Math.random()).toString(16))).join("")
        }

        function C(e, ...t) {
            for (const a of t.map((t => null == t ? void 0 : t.getAttribute(e)))) if ("string" == typeof a) return a;
            return null
        }

        function M(...e) {
            for (const t of e) "turbo-frame" == t.localName && t.setAttribute("busy", ""), t.setAttribute("aria-busy", "true")
        }

        function T(...e) {
            for (const t of e) "turbo-frame" == t.localName && t.removeAttribute("busy"), t.removeAttribute("aria-busy")
        }

        !function (e) {
            e[e.get = 0] = "get", e[e.post = 1] = "post", e[e.put = 2] = "put", e[e.patch = 3] = "patch", e[e.delete = 4] = "delete"
        }(r || (r = {}));

        class E {
            constructor(e, t, a, n = new URLSearchParams, r = null) {
                this.abortController = new AbortController, this.resolveRequestPromise = e => {
                }, this.delegate = e, this.method = t, this.headers = this.defaultHeaders, this.body = n, this.url = a, this.target = r
            }

            get location() {
                return this.url
            }

            get params() {
                return this.url.searchParams
            }

            get entries() {
                return this.body ? Array.from(this.body.entries()) : []
            }

            cancel() {
                this.abortController.abort()
            }

            async perform() {
                var e, t;
                const {fetchOptions: a} = this;
                null === (t = (e = this.delegate).prepareHeadersForRequest) || void 0 === t || t.call(e, this.headers, this), await this.allowRequestToBeIntercepted(a);
                try {
                    this.delegate.requestStarted(this);
                    const e = await fetch(this.url.href, a);
                    return await this.receive(e)
                } catch (e) {
                    if ("AbortError" !== e.name) throw this.delegate.requestErrored(this, e), e
                } finally {
                    this.delegate.requestFinished(this)
                }
            }

            async receive(e) {
                const t = new y(e);
                return w("turbo:before-fetch-response", {
                    cancelable: !0,
                    detail: {fetchResponse: t},
                    target: this.target
                }).defaultPrevented ? this.delegate.requestPreventedHandlingResponse(this, t) : t.succeeded ? this.delegate.requestSucceededWithResponse(this, t) : this.delegate.requestFailedWithResponse(this, t), t
            }

            get fetchOptions() {
                var e;
                return {
                    method: r[this.method].toUpperCase(),
                    credentials: "same-origin",
                    headers: this.headers,
                    redirect: "follow",
                    body: this.isIdempotent ? null : this.body,
                    signal: this.abortSignal,
                    referrer: null === (e = this.delegate.referrer) || void 0 === e ? void 0 : e.href
                }
            }

            get defaultHeaders() {
                return {Accept: "text/html, application/xhtml+xml"}
            }

            get isIdempotent() {
                return this.method == r.get
            }

            get abortSignal() {
                return this.abortController.signal
            }

            async allowRequestToBeIntercepted(e) {
                const t = new Promise((e => this.resolveRequestPromise = e));
                w("turbo:before-fetch-request", {
                    cancelable: !0,
                    detail: {fetchOptions: e, url: this.url, resume: this.resolveRequestPromise},
                    target: this.target
                }).defaultPrevented && await t
            }
        }

        class _ {
            constructor(e, t) {
                this.started = !1, this.intersect = e => {
                    const t = e.slice(-1)[0];
                    (null == t ? void 0 : t.isIntersecting) && this.delegate.elementAppearedInViewport(this.element)
                }, this.delegate = e, this.element = t, this.intersectionObserver = new IntersectionObserver(this.intersect)
            }

            start() {
                this.started || (this.started = !0, this.intersectionObserver.observe(this.element))
            }

            stop() {
                this.started && (this.started = !1, this.intersectionObserver.unobserve(this.element))
            }
        }

        class L {
            constructor(e) {
                this.templateElement = document.createElement("template"), this.templateElement.innerHTML = e
            }

            static wrap(e) {
                return "string" == typeof e ? new this(e) : e
            }

            get fragment() {
                const e = document.createDocumentFragment();
                for (const t of this.foreignElements) e.appendChild(document.importNode(t, !0));
                return e
            }

            get foreignElements() {
                return this.templateChildren.reduce(((e, t) => "turbo-stream" == t.tagName.toLowerCase() ? [...e, t] : e), [])
            }

            get templateChildren() {
                return Array.from(this.templateElement.content.children)
            }
        }

        L.contentType = "text/vnd.turbo-stream.html", function (e) {
            e[e.initialized = 0] = "initialized", e[e.requesting = 1] = "requesting", e[e.waiting = 2] = "waiting", e[e.receiving = 3] = "receiving", e[e.stopping = 4] = "stopping", e[e.stopped = 5] = "stopped"
        }(i || (i = {})), function (e) {
            e.urlEncoded = "application/x-www-form-urlencoded", e.multipart = "multipart/form-data", e.plain = "text/plain"
        }(s || (s = {}));

        class P {
            constructor(e, t, a, n = !1) {
                this.state = i.initialized, this.delegate = e, this.formElement = t, this.submitter = a, this.formData = function (e, t) {
                    const a = new FormData(e), n = null == t ? void 0 : t.getAttribute("name"),
                        r = null == t ? void 0 : t.getAttribute("value");
                    n && null != r && a.get(n) != r && a.append(n, r);
                    return a
                }(t, a), this.location = c(this.action), this.method == r.get && function (e, t) {
                    const a = new URLSearchParams;
                    for (const [e, n] of t) n instanceof File || a.append(e, n);
                    e.search = a.toString()
                }(this.location, [...this.body.entries()]), this.fetchRequest = new E(this, this.method, this.location, this.body, this.formElement), this.mustRedirect = n
            }

            static confirmMethod(e, t) {
                return confirm(e)
            }

            get method() {
                var e;
                return function (e) {
                    switch (e.toLowerCase()) {
                        case"get":
                            return r.get;
                        case"post":
                            return r.post;
                        case"put":
                            return r.put;
                        case"patch":
                            return r.patch;
                        case"delete":
                            return r.delete
                    }
                }(((null === (e = this.submitter) || void 0 === e ? void 0 : e.getAttribute("formmethod")) || this.formElement.getAttribute("method") || "").toLowerCase()) || r.get
            }

            get action() {
                var e;
                const t = "string" == typeof this.formElement.action ? this.formElement.action : null;
                return (null === (e = this.submitter) || void 0 === e ? void 0 : e.getAttribute("formaction")) || this.formElement.getAttribute("action") || t || ""
            }

            get body() {
                return this.enctype == s.urlEncoded || this.method == r.get ? new URLSearchParams(this.stringFormData) : this.formData
            }

            get enctype() {
                var e;
                return function (e) {
                    switch (e.toLowerCase()) {
                        case s.multipart:
                            return s.multipart;
                        case s.plain:
                            return s.plain;
                        default:
                            return s.urlEncoded
                    }
                }((null === (e = this.submitter) || void 0 === e ? void 0 : e.getAttribute("formenctype")) || this.formElement.enctype)
            }

            get isIdempotent() {
                return this.fetchRequest.isIdempotent
            }

            get stringFormData() {
                return [...this.formData].reduce(((e, [t, a]) => e.concat("string" == typeof a ? [[t, a]] : [])), [])
            }

            get confirmationMessage() {
                return this.formElement.getAttribute("data-turbo-confirm")
            }

            get needsConfirmation() {
                return null !== this.confirmationMessage
            }

            async start() {
                const {initialized: e, requesting: t} = i;
                if (this.needsConfirmation) {
                    if (!P.confirmMethod(this.confirmationMessage, this.formElement)) return
                }
                if (this.state == e) return this.state = t, this.fetchRequest.perform()
            }

            stop() {
                const {stopping: e, stopped: t} = i;
                if (this.state != e && this.state != t) return this.state = e, this.fetchRequest.cancel(), !0
            }

            prepareHeadersForRequest(e, t) {
                if (!t.isIdempotent) {
                    const t = function (e) {
                        if (null != e) {
                            const t = (document.cookie ? document.cookie.split("; ") : []).find((t => t.startsWith(e)));
                            if (t) {
                                const e = t.split("=").slice(1).join("=");
                                return e ? decodeURIComponent(e) : void 0
                            }
                        }
                    }(x("csrf-param")) || x("csrf-token");
                    t && (e["X-CSRF-Token"] = t), e.Accept = [L.contentType, e.Accept].join(", ")
                }
            }

            requestStarted(e) {
                var t;
                this.state = i.waiting, null === (t = this.submitter) || void 0 === t || t.setAttribute("disabled", ""), w("turbo:submit-start", {
                    target: this.formElement,
                    detail: {formSubmission: this}
                }), this.delegate.formSubmissionStarted(this)
            }

            requestPreventedHandlingResponse(e, t) {
                this.result = {success: t.succeeded, fetchResponse: t}
            }

            requestSucceededWithResponse(e, t) {
                if (t.clientError || t.serverError) this.delegate.formSubmissionFailedWithResponse(this, t); else if (this.requestMustRedirect(e) && function (e) {
                    return 200 == e.statusCode && !e.redirected
                }(t)) {
                    const e = new Error("Form responses must redirect to another location");
                    this.delegate.formSubmissionErrored(this, e)
                } else this.state = i.receiving, this.result = {
                    success: !0,
                    fetchResponse: t
                }, this.delegate.formSubmissionSucceededWithResponse(this, t)
            }

            requestFailedWithResponse(e, t) {
                this.result = {success: !1, fetchResponse: t}, this.delegate.formSubmissionFailedWithResponse(this, t)
            }

            requestErrored(e, t) {
                this.result = {success: !1, error: t}, this.delegate.formSubmissionErrored(this, t)
            }

            requestFinished(e) {
                var t;
                this.state = i.stopped, null === (t = this.submitter) || void 0 === t || t.removeAttribute("disabled"), w("turbo:submit-end", {
                    target: this.formElement,
                    detail: Object.assign({formSubmission: this}, this.result)
                }), this.delegate.formSubmissionFinished(this)
            }

            requestMustRedirect(e) {
                return !e.isIdempotent && this.mustRedirect
            }
        }

        function x(e) {
            const t = document.querySelector(`meta[name="${e}"]`);
            return t && t.content
        }

        class D {
            constructor(e) {
                this.element = e
            }

            get children() {
                return [...this.element.children]
            }

            hasAnchor(e) {
                return null != this.getElementForAnchor(e)
            }

            getElementForAnchor(e) {
                return e ? this.element.querySelector(`[id='${e}'], a[name='${e}']`) : null
            }

            get isConnected() {
                return this.element.isConnected
            }

            get firstAutofocusableElement() {
                return this.element.querySelector("[autofocus]")
            }

            get permanentElements() {
                return [...this.element.querySelectorAll("[id][data-turbo-permanent]")]
            }

            getPermanentElementById(e) {
                return this.element.querySelector(`#${e}[data-turbo-permanent]`)
            }

            getPermanentElementMapForSnapshot(e) {
                const t = {};
                for (const a of this.permanentElements) {
                    const {id: n} = a, r = e.getPermanentElementById(n);
                    r && (t[n] = [a, r])
                }
                return t
            }
        }

        class j {
            constructor(e, t) {
                this.submitBubbled = e => {
                    const t = e.target;
                    if (!e.defaultPrevented && t instanceof HTMLFormElement && t.closest("turbo-frame, html") == this.element) {
                        const a = e.submitter || void 0;
                        "dialog" != ((null == a ? void 0 : a.getAttribute("formmethod")) || t.method) && this.delegate.shouldInterceptFormSubmission(t, a) && (e.preventDefault(), e.stopImmediatePropagation(), this.delegate.formSubmissionIntercepted(t, a))
                    }
                }, this.delegate = e, this.element = t
            }

            start() {
                this.element.addEventListener("submit", this.submitBubbled)
            }

            stop() {
                this.element.removeEventListener("submit", this.submitBubbled)
            }
        }

        class A {
            constructor(e, t) {
                this.resolveRenderPromise = e => {
                }, this.resolveInterceptionPromise = e => {
                }, this.delegate = e, this.element = t
            }

            scrollToAnchor(e) {
                const t = this.snapshot.getElementForAnchor(e);
                t ? (this.scrollToElement(t), this.focusElement(t)) : this.scrollToPosition({x: 0, y: 0})
            }

            scrollToAnchorFromLocation(e) {
                this.scrollToAnchor(u(e))
            }

            scrollToElement(e) {
                e.scrollIntoView()
            }

            focusElement(e) {
                e instanceof HTMLElement && (e.hasAttribute("tabindex") ? e.focus() : (e.setAttribute("tabindex", "-1"), e.focus(), e.removeAttribute("tabindex")))
            }

            scrollToPosition({x: e, y: t}) {
                this.scrollRoot.scrollTo(e, t)
            }

            scrollToTop() {
                this.scrollToPosition({x: 0, y: 0})
            }

            get scrollRoot() {
                return window
            }

            async render(e) {
                const {isPreview: t, shouldRender: a, newSnapshot: n} = e;
                if (a) try {
                    this.renderPromise = new Promise((e => this.resolveRenderPromise = e)), this.renderer = e, this.prepareToRenderSnapshot(e);
                    const a = new Promise((e => this.resolveInterceptionPromise = e));
                    this.delegate.allowsImmediateRender(n, this.resolveInterceptionPromise) || await a, await this.renderSnapshot(e), this.delegate.viewRenderedSnapshot(n, t), this.finishRenderingSnapshot(e)
                } finally {
                    delete this.renderer, this.resolveRenderPromise(void 0), delete this.renderPromise
                } else this.invalidate()
            }

            invalidate() {
                this.delegate.viewInvalidated()
            }

            prepareToRenderSnapshot(e) {
                this.markAsPreview(e.isPreview), e.prepareToRender()
            }

            markAsPreview(e) {
                e ? this.element.setAttribute("data-turbo-preview", "") : this.element.removeAttribute("data-turbo-preview")
            }

            async renderSnapshot(e) {
                await e.render()
            }

            finishRenderingSnapshot(e) {
                e.finishRendering()
            }
        }

        class F extends A {
            invalidate() {
                this.element.innerHTML = ""
            }

            get snapshot() {
                return new D(this.element)
            }
        }

        class I {
            constructor(e, t) {
                this.clickBubbled = e => {
                    this.respondsToEventTarget(e.target) ? this.clickEvent = e : delete this.clickEvent
                }, this.linkClicked = e => {
                    this.clickEvent && this.respondsToEventTarget(e.target) && e.target instanceof Element && this.delegate.shouldInterceptLinkClick(e.target, e.detail.url) && (this.clickEvent.preventDefault(), e.preventDefault(), this.delegate.linkClickIntercepted(e.target, e.detail.url)), delete this.clickEvent
                }, this.willVisit = () => {
                    delete this.clickEvent
                }, this.delegate = e, this.element = t
            }

            start() {
                this.element.addEventListener("click", this.clickBubbled), document.addEventListener("turbo:click", this.linkClicked), document.addEventListener("turbo:before-visit", this.willVisit)
            }

            stop() {
                this.element.removeEventListener("click", this.clickBubbled), document.removeEventListener("turbo:click", this.linkClicked), document.removeEventListener("turbo:before-visit", this.willVisit)
            }

            respondsToEventTarget(e) {
                const t = e instanceof Element ? e : e instanceof Node ? e.parentElement : null;
                return t && t.closest("turbo-frame, html") == this.element
            }
        }

        class N {
            constructor(e) {
                this.permanentElementMap = e
            }

            static preservingPermanentElements(e, t) {
                const a = new this(e);
                a.enter(), t(), a.leave()
            }

            enter() {
                for (const e in this.permanentElementMap) {
                    const [, t] = this.permanentElementMap[e];
                    this.replaceNewPermanentElementWithPlaceholder(t)
                }
            }

            leave() {
                for (const e in this.permanentElementMap) {
                    const [t] = this.permanentElementMap[e];
                    this.replaceCurrentPermanentElementWithClone(t), this.replacePlaceholderWithPermanentElement(t)
                }
            }

            replaceNewPermanentElementWithPlaceholder(e) {
                const t = function (e) {
                    const t = document.createElement("meta");
                    return t.setAttribute("name", "turbo-permanent-placeholder"), t.setAttribute("content", e.id), t
                }(e);
                e.replaceWith(t)
            }

            replaceCurrentPermanentElementWithClone(e) {
                const t = e.cloneNode(!0);
                e.replaceWith(t)
            }

            replacePlaceholderWithPermanentElement(e) {
                const t = this.getPlaceholderById(e.id);
                null == t || t.replaceWith(e)
            }

            getPlaceholderById(e) {
                return this.placeholders.find((t => t.content == e))
            }

            get placeholders() {
                return [...document.querySelectorAll("meta[name=turbo-permanent-placeholder][content]")]
            }
        }

        class O {
            constructor(e, t, a, n = !0) {
                this.currentSnapshot = e, this.newSnapshot = t, this.isPreview = a, this.willRender = n, this.promise = new Promise(((e, t) => this.resolvingFunctions = {
                    resolve: e,
                    reject: t
                }))
            }

            get shouldRender() {
                return !0
            }

            prepareToRender() {
            }

            finishRendering() {
                this.resolvingFunctions && (this.resolvingFunctions.resolve(), delete this.resolvingFunctions)
            }

            createScriptElement(e) {
                if ("false" == e.getAttribute("data-turbo-eval")) return e;
                {
                    const t = document.createElement("script");
                    return this.cspNonce && (t.nonce = this.cspNonce), t.textContent = e.textContent, t.async = !1, function (e, t) {
                        for (const {name: a, value: n} of [...t.attributes]) e.setAttribute(a, n)
                    }(t, e), t
                }
            }

            preservingPermanentElements(e) {
                N.preservingPermanentElements(this.permanentElementMap, e)
            }

            focusFirstAutofocusableElement() {
                const e = this.connectedSnapshot.firstAutofocusableElement;
                (function (e) {
                    return e && "function" == typeof e.focus
                })(e) && e.focus()
            }

            get connectedSnapshot() {
                return this.newSnapshot.isConnected ? this.newSnapshot : this.currentSnapshot
            }

            get currentElement() {
                return this.currentSnapshot.element
            }

            get newElement() {
                return this.newSnapshot.element
            }

            get permanentElementMap() {
                return this.currentSnapshot.getPermanentElementMapForSnapshot(this.newSnapshot)
            }

            get cspNonce() {
                var e;
                return null === (e = document.head.querySelector('meta[name="csp-nonce"]')) || void 0 === e ? void 0 : e.getAttribute("content")
            }
        }

        class R extends O {
            get shouldRender() {
                return !0
            }

            async render() {
                await b(), this.preservingPermanentElements((() => {
                    this.loadFrameElement()
                })), this.scrollFrameIntoView(), await b(), this.focusFirstAutofocusableElement(), await b(), this.activateScriptElements()
            }

            loadFrameElement() {
                var e;
                const t = document.createRange();
                t.selectNodeContents(this.currentElement), t.deleteContents();
                const a = this.newElement,
                    n = null === (e = a.ownerDocument) || void 0 === e ? void 0 : e.createRange();
                n && (n.selectNodeContents(a), this.currentElement.appendChild(n.extractContents()))
            }

            scrollFrameIntoView() {
                if (this.currentElement.autoscroll || this.newElement.autoscroll) {
                    const a = this.currentElement.firstElementChild,
                        n = (e = this.currentElement.getAttribute("data-autoscroll-block"), t = "end", "end" == e || "start" == e || "center" == e || "nearest" == e ? e : t);
                    if (a) return a.scrollIntoView({block: n}), !0
                }
                var e, t;
                return !1
            }

            activateScriptElements() {
                for (const e of this.newScriptElements) {
                    const t = this.createScriptElement(e);
                    e.replaceWith(t)
                }
            }

            get newScriptElements() {
                return this.currentElement.querySelectorAll("script")
            }
        }

        class B {
            constructor() {
                this.hiding = !1, this.value = 0, this.visible = !1, this.trickle = () => {
                    this.setValue(this.value + Math.random() / 100)
                }, this.stylesheetElement = this.createStylesheetElement(), this.progressElement = this.createProgressElement(), this.installStylesheetElement(), this.setValue(0)
            }

            static get defaultCSS() {
                return k`
      .turbo-progress-bar {
        position: fixed;
        display: block;
        top: 0;
        left: 0;
        height: 3px;
        background: #0076ff;
        z-index: 9999;
        transition:
          width ${B.animationDuration}ms ease-out,
          opacity ${B.animationDuration / 2}ms ${B.animationDuration / 2}ms ease-in;
        transform: translate3d(0, 0, 0);
      }
    `
            }

            show() {
                this.visible || (this.visible = !0, this.installProgressElement(), this.startTrickling())
            }

            hide() {
                this.visible && !this.hiding && (this.hiding = !0, this.fadeProgressElement((() => {
                    this.uninstallProgressElement(), this.stopTrickling(), this.visible = !1, this.hiding = !1
                })))
            }

            setValue(e) {
                this.value = e, this.refresh()
            }

            installStylesheetElement() {
                document.head.insertBefore(this.stylesheetElement, document.head.firstChild)
            }

            installProgressElement() {
                this.progressElement.style.width = "0", this.progressElement.style.opacity = "1", document.documentElement.insertBefore(this.progressElement, document.body), this.refresh()
            }

            fadeProgressElement(e) {
                this.progressElement.style.opacity = "0", setTimeout(e, 1.5 * B.animationDuration)
            }

            uninstallProgressElement() {
                this.progressElement.parentNode && document.documentElement.removeChild(this.progressElement)
            }

            startTrickling() {
                this.trickleInterval || (this.trickleInterval = window.setInterval(this.trickle, B.animationDuration))
            }

            stopTrickling() {
                window.clearInterval(this.trickleInterval), delete this.trickleInterval
            }

            refresh() {
                requestAnimationFrame((() => {
                    this.progressElement.style.width = 10 + 90 * this.value + "%"
                }))
            }

            createStylesheetElement() {
                const e = document.createElement("style");
                return e.type = "text/css", e.textContent = B.defaultCSS, e
            }

            createProgressElement() {
                const e = document.createElement("div");
                return e.className = "turbo-progress-bar", e
            }
        }

        B.animationDuration = 300;

        class q extends D {
            constructor() {
                super(...arguments), this.detailsByOuterHTML = this.children.filter((e => !function (e) {
                    const t = e.tagName.toLowerCase();
                    return "noscript" == t
                }(e))).map((e => function (e) {
                    e.hasAttribute("nonce") && e.setAttribute("nonce", "");
                    return e
                }(e))).reduce(((e, t) => {
                    const {outerHTML: a} = t, n = a in e ? e[a] : {type: J(t), tracked: U(t), elements: []};
                    return Object.assign(Object.assign({}, e), {[a]: Object.assign(Object.assign({}, n), {elements: [...n.elements, t]})})
                }), {})
            }

            get trackedElementSignature() {
                return Object.keys(this.detailsByOuterHTML).filter((e => this.detailsByOuterHTML[e].tracked)).join("")
            }

            getScriptElementsNotInSnapshot(e) {
                return this.getElementsMatchingTypeNotInSnapshot("script", e)
            }

            getStylesheetElementsNotInSnapshot(e) {
                return this.getElementsMatchingTypeNotInSnapshot("stylesheet", e)
            }

            getElementsMatchingTypeNotInSnapshot(e, t) {
                return Object.keys(this.detailsByOuterHTML).filter((e => !(e in t.detailsByOuterHTML))).map((e => this.detailsByOuterHTML[e])).filter((({type: t}) => t == e)).map((({elements: [e]}) => e))
            }

            get provisionalElements() {
                return Object.keys(this.detailsByOuterHTML).reduce(((e, t) => {
                    const {type: a, tracked: n, elements: r} = this.detailsByOuterHTML[t];
                    return null != a || n ? r.length > 1 ? [...e, ...r.slice(1)] : e : [...e, ...r]
                }), [])
            }

            getMetaValue(e) {
                const t = this.findMetaElementByName(e);
                return t ? t.getAttribute("content") : null
            }

            findMetaElementByName(e) {
                return Object.keys(this.detailsByOuterHTML).reduce(((t, a) => {
                    const {elements: [n]} = this.detailsByOuterHTML[a];
                    return function (e, t) {
                        const a = e.tagName.toLowerCase();
                        return "meta" == a && e.getAttribute("name") == t
                    }(n, e) ? n : t
                }), void 0)
            }
        }

        function J(e) {
            return function (e) {
                const t = e.tagName.toLowerCase();
                return "script" == t
            }(e) ? "script" : function (e) {
                const t = e.tagName.toLowerCase();
                return "style" == t || "link" == t && "stylesheet" == e.getAttribute("rel")
            }(e) ? "stylesheet" : void 0
        }

        function U(e) {
            return "reload" == e.getAttribute("data-turbo-track")
        }

        class H extends D {
            constructor(e, t) {
                super(e), this.headSnapshot = t
            }

            static fromHTMLString(e = "") {
                return this.fromDocument($(e))
            }

            static fromElement(e) {
                return this.fromDocument(e.ownerDocument)
            }

            static fromDocument({head: e, body: t}) {
                return new this(t, new q(e))
            }

            clone() {
                return new H(this.element.cloneNode(!0), this.headSnapshot)
            }

            get headElement() {
                return this.headSnapshot.element
            }

            get rootLocation() {
                var e;
                return c(null !== (e = this.getSetting("root")) && void 0 !== e ? e : "/")
            }

            get cacheControlValue() {
                return this.getSetting("cache-control")
            }

            get isPreviewable() {
                return "no-preview" != this.cacheControlValue
            }

            get isCacheable() {
                return "no-cache" != this.cacheControlValue
            }

            get isVisitable() {
                return "reload" != this.getSetting("visit-control")
            }

            getSetting(e) {
                return this.headSnapshot.getMetaValue(`turbo-${e}`)
            }
        }

        !function (e) {
            e.visitStart = "visitStart", e.requestStart = "requestStart", e.requestEnd = "requestEnd", e.visitEnd = "visitEnd"
        }(o || (o = {})), function (e) {
            e.initialized = "initialized", e.started = "started", e.canceled = "canceled", e.failed = "failed", e.completed = "completed"
        }(l || (l = {}));
        const V = {
            action: "advance", historyChanged: !1, visitCachedSnapshot: () => {
            }, willRender: !0
        };
        var W, z;
        !function (e) {
            e[e.networkFailure = 0] = "networkFailure", e[e.timeoutFailure = -1] = "timeoutFailure", e[e.contentTypeMismatch = -2] = "contentTypeMismatch"
        }(W || (W = {}));

        class Y {
            constructor(e, t, a, n = {}) {
                this.identifier = S(), this.timingMetrics = {}, this.followedRedirect = !1, this.historyChanged = !1, this.scrolled = !1, this.snapshotCached = !1, this.state = l.initialized, this.delegate = e, this.location = t, this.restorationIdentifier = a || S();
                const {
                    action: r,
                    historyChanged: i,
                    referrer: s,
                    snapshotHTML: o,
                    response: d,
                    visitCachedSnapshot: c,
                    willRender: u
                } = Object.assign(Object.assign({}, V), n);
                this.action = r, this.historyChanged = i, this.referrer = s, this.snapshotHTML = o, this.response = d, this.isSamePage = this.delegate.locationWithActionIsSamePage(this.location, this.action), this.visitCachedSnapshot = c, this.willRender = u, this.scrolled = !u
            }

            get adapter() {
                return this.delegate.adapter
            }

            get view() {
                return this.delegate.view
            }

            get history() {
                return this.delegate.history
            }

            get restorationData() {
                return this.history.getRestorationDataForIdentifier(this.restorationIdentifier)
            }

            get silent() {
                return this.isSamePage
            }

            start() {
                this.state == l.initialized && (this.recordTimingMetric(o.visitStart), this.state = l.started, this.adapter.visitStarted(this), this.delegate.visitStarted(this))
            }

            cancel() {
                this.state == l.started && (this.request && this.request.cancel(), this.cancelRender(), this.state = l.canceled)
            }

            complete() {
                this.state == l.started && (this.recordTimingMetric(o.visitEnd), this.state = l.completed, this.adapter.visitCompleted(this), this.delegate.visitCompleted(this), this.followRedirect())
            }

            fail() {
                this.state == l.started && (this.state = l.failed, this.adapter.visitFailed(this))
            }

            changeHistory() {
                var e;
                if (!this.historyChanged) {
                    const t = this.location.href === (null === (e = this.referrer) || void 0 === e ? void 0 : e.href) ? "replace" : this.action,
                        a = this.getHistoryMethodForAction(t);
                    this.history.update(a, this.location, this.restorationIdentifier), this.historyChanged = !0
                }
            }

            issueRequest() {
                this.hasPreloadedResponse() ? this.simulateRequest() : this.shouldIssueRequest() && !this.request && (this.request = new E(this, r.get, this.location), this.request.perform())
            }

            simulateRequest() {
                this.response && (this.startRequest(), this.recordResponse(), this.finishRequest())
            }

            startRequest() {
                this.recordTimingMetric(o.requestStart), this.adapter.visitRequestStarted(this)
            }

            recordResponse(e = this.response) {
                if (this.response = e, e) {
                    const {statusCode: t} = e;
                    G(t) ? this.adapter.visitRequestCompleted(this) : this.adapter.visitRequestFailedWithStatusCode(this, t)
                }
            }

            finishRequest() {
                this.recordTimingMetric(o.requestEnd), this.adapter.visitRequestFinished(this)
            }

            loadResponse() {
                if (this.response) {
                    const {statusCode: e, responseHTML: t} = this.response;
                    this.render((async () => {
                        this.cacheSnapshot(), this.view.renderPromise && await this.view.renderPromise, G(e) && null != t ? (await this.view.renderPage(H.fromHTMLString(t), !1, this.willRender), this.adapter.visitRendered(this), this.complete()) : (await this.view.renderError(H.fromHTMLString(t)), this.adapter.visitRendered(this), this.fail())
                    }))
                }
            }

            getCachedSnapshot() {
                const e = this.view.getCachedSnapshotForLocation(this.location) || this.getPreloadedSnapshot();
                if (e && (!u(this.location) || e.hasAnchor(u(this.location))) && ("restore" == this.action || e.isPreviewable)) return e
            }

            getPreloadedSnapshot() {
                if (this.snapshotHTML) return H.fromHTMLString(this.snapshotHTML)
            }

            hasCachedSnapshot() {
                return null != this.getCachedSnapshot()
            }

            loadCachedSnapshot() {
                const e = this.getCachedSnapshot();
                if (e) {
                    const t = this.shouldIssueRequest();
                    this.render((async () => {
                        this.cacheSnapshot(), this.isSamePage ? this.adapter.visitRendered(this) : (this.view.renderPromise && await this.view.renderPromise, await this.view.renderPage(e, t, this.willRender), this.adapter.visitRendered(this), t || this.complete())
                    }))
                }
            }

            followRedirect() {
                var e;
                this.redirectedToLocation && !this.followedRedirect && (null === (e = this.response) || void 0 === e ? void 0 : e.redirected) && (this.adapter.visitProposedToLocation(this.redirectedToLocation, {
                    action: "replace",
                    response: this.response
                }), this.followedRedirect = !0)
            }

            goToSamePageAnchor() {
                this.isSamePage && this.render((async () => {
                    this.cacheSnapshot(), this.adapter.visitRendered(this)
                }))
            }

            requestStarted() {
                this.startRequest()
            }

            requestPreventedHandlingResponse(e, t) {
            }

            async requestSucceededWithResponse(e, t) {
                const a = await t.responseHTML, {redirected: n, statusCode: r} = t;
                null == a ? this.recordResponse({
                    statusCode: W.contentTypeMismatch,
                    redirected: n
                }) : (this.redirectedToLocation = t.redirected ? t.location : void 0, this.recordResponse({
                    statusCode: r,
                    responseHTML: a,
                    redirected: n
                }))
            }

            async requestFailedWithResponse(e, t) {
                const a = await t.responseHTML, {redirected: n, statusCode: r} = t;
                null == a ? this.recordResponse({
                    statusCode: W.contentTypeMismatch,
                    redirected: n
                }) : this.recordResponse({statusCode: r, responseHTML: a, redirected: n})
            }

            requestErrored(e, t) {
                this.recordResponse({statusCode: W.networkFailure, redirected: !1})
            }

            requestFinished() {
                this.finishRequest()
            }

            performScroll() {
                this.scrolled || ("restore" == this.action ? this.scrollToRestoredPosition() || this.scrollToAnchor() || this.view.scrollToTop() : this.scrollToAnchor() || this.view.scrollToTop(), this.isSamePage && this.delegate.visitScrolledToSamePageLocation(this.view.lastRenderedLocation, this.location), this.scrolled = !0)
            }

            scrollToRestoredPosition() {
                const {scrollPosition: e} = this.restorationData;
                if (e) return this.view.scrollToPosition(e), !0
            }

            scrollToAnchor() {
                const e = u(this.location);
                if (null != e) return this.view.scrollToAnchor(e), !0
            }

            recordTimingMetric(e) {
                this.timingMetrics[e] = (new Date).getTime()
            }

            getTimingMetrics() {
                return Object.assign({}, this.timingMetrics)
            }

            getHistoryMethodForAction(e) {
                switch (e) {
                    case"replace":
                        return history.replaceState;
                    case"advance":
                    case"restore":
                        return history.pushState
                }
            }

            hasPreloadedResponse() {
                return "object" == typeof this.response
            }

            shouldIssueRequest() {
                return !this.isSamePage && ("restore" == this.action ? !this.hasCachedSnapshot() : this.willRender)
            }

            cacheSnapshot() {
                this.snapshotCached || (this.view.cacheSnapshot().then((e => e && this.visitCachedSnapshot(e))), this.snapshotCached = !0)
            }

            async render(e) {
                this.cancelRender(), await new Promise((e => {
                    this.frame = requestAnimationFrame((() => e()))
                })), await e(), delete this.frame, this.performScroll()
            }

            cancelRender() {
                this.frame && (cancelAnimationFrame(this.frame), delete this.frame)
            }
        }

        function G(e) {
            return e >= 200 && e < 300
        }

        class K {
            constructor(e) {
                this.progressBar = new B, this.showProgressBar = () => {
                    this.progressBar.show()
                }, this.session = e
            }

            visitProposedToLocation(e, t) {
                this.navigator.startVisit(e, S(), t)
            }

            visitStarted(e) {
                e.loadCachedSnapshot(), e.issueRequest(), e.changeHistory(), e.goToSamePageAnchor()
            }

            visitRequestStarted(e) {
                this.progressBar.setValue(0), e.hasCachedSnapshot() || "restore" != e.action ? this.showVisitProgressBarAfterDelay() : this.showProgressBar()
            }

            visitRequestCompleted(e) {
                e.loadResponse()
            }

            visitRequestFailedWithStatusCode(e, t) {
                switch (t) {
                    case W.networkFailure:
                    case W.timeoutFailure:
                    case W.contentTypeMismatch:
                        return this.reload();
                    default:
                        return e.loadResponse()
                }
            }

            visitRequestFinished(e) {
                this.progressBar.setValue(1), this.hideVisitProgressBar()
            }

            visitCompleted(e) {
            }

            pageInvalidated() {
                this.reload()
            }

            visitFailed(e) {
            }

            visitRendered(e) {
            }

            formSubmissionStarted(e) {
                this.progressBar.setValue(0), this.showFormProgressBarAfterDelay()
            }

            formSubmissionFinished(e) {
                this.progressBar.setValue(1), this.hideFormProgressBar()
            }

            showVisitProgressBarAfterDelay() {
                this.visitProgressBarTimeout = window.setTimeout(this.showProgressBar, this.session.progressBarDelay)
            }

            hideVisitProgressBar() {
                this.progressBar.hide(), null != this.visitProgressBarTimeout && (window.clearTimeout(this.visitProgressBarTimeout), delete this.visitProgressBarTimeout)
            }

            showFormProgressBarAfterDelay() {
                null == this.formProgressBarTimeout && (this.formProgressBarTimeout = window.setTimeout(this.showProgressBar, this.session.progressBarDelay))
            }

            hideFormProgressBar() {
                this.progressBar.hide(), null != this.formProgressBarTimeout && (window.clearTimeout(this.formProgressBarTimeout), delete this.formProgressBarTimeout)
            }

            reload() {
                window.location.reload()
            }

            get navigator() {
                return this.session.navigator
            }
        }

        class Q {
            constructor() {
                this.started = !1
            }

            start() {
                this.started || (this.started = !0, addEventListener("turbo:before-cache", this.removeStaleElements, !1))
            }

            stop() {
                this.started && (this.started = !1, removeEventListener("turbo:before-cache", this.removeStaleElements, !1))
            }

            removeStaleElements() {
                const e = [...document.querySelectorAll('[data-turbo-cache="false"]')];
                for (const t of e) t.remove()
            }
        }

        class Z {
            constructor(e) {
                this.started = !1, this.submitCaptured = () => {
                    removeEventListener("submit", this.submitBubbled, !1), addEventListener("submit", this.submitBubbled, !1)
                }, this.submitBubbled = e => {
                    if (!e.defaultPrevented) {
                        const t = e.target instanceof HTMLFormElement ? e.target : void 0, a = e.submitter || void 0;
                        if (t) {
                            "dialog" != ((null == a ? void 0 : a.getAttribute("formmethod")) || t.getAttribute("method")) && this.delegate.willSubmitForm(t, a) && (e.preventDefault(), this.delegate.formSubmitted(t, a))
                        }
                    }
                }, this.delegate = e
            }

            start() {
                this.started || (addEventListener("submit", this.submitCaptured, !0), this.started = !0)
            }

            stop() {
                this.started && (removeEventListener("submit", this.submitCaptured, !0), this.started = !1)
            }
        }

        class X {
            constructor(e) {
                this.element = e, this.linkInterceptor = new I(this, e), this.formInterceptor = new j(this, e)
            }

            start() {
                this.linkInterceptor.start(), this.formInterceptor.start()
            }

            stop() {
                this.linkInterceptor.stop(), this.formInterceptor.stop()
            }

            shouldInterceptLinkClick(e, t) {
                return this.shouldRedirect(e)
            }

            linkClickIntercepted(e, t) {
                const a = this.findFrameElement(e);
                a && a.delegate.linkClickIntercepted(e, t)
            }

            shouldInterceptFormSubmission(e, t) {
                return this.shouldSubmit(e, t)
            }

            formSubmissionIntercepted(e, t) {
                const a = this.findFrameElement(e, t);
                a && (a.removeAttribute("reloadable"), a.delegate.formSubmissionIntercepted(e, t))
            }

            shouldSubmit(e, t) {
                var a;
                const n = p(e, t), r = this.element.ownerDocument.querySelector('meta[name="turbo-root"]'),
                    i = c(null !== (a = null == r ? void 0 : r.content) && void 0 !== a ? a : "/");
                return this.shouldRedirect(e, t) && g(n, i)
            }

            shouldRedirect(e, t) {
                const a = this.findFrameElement(e, t);
                return !!a && a != e.closest("turbo-frame")
            }

            findFrameElement(e, t) {
                const a = (null == t ? void 0 : t.getAttribute("data-turbo-frame")) || e.getAttribute("data-turbo-frame");
                if (a && "_top" != a) {
                    const e = this.element.querySelector(`#${a}:not([disabled])`);
                    if (e instanceof d) return e
                }
            }
        }

        class ee {
            constructor(e) {
                this.restorationIdentifier = S(), this.restorationData = {}, this.started = !1, this.pageLoaded = !1, this.onPopState = e => {
                    if (this.shouldHandlePopState()) {
                        const {turbo: t} = e.state || {};
                        if (t) {
                            this.location = new URL(window.location.href);
                            const {restorationIdentifier: e} = t;
                            this.restorationIdentifier = e, this.delegate.historyPoppedToLocationWithRestorationIdentifier(this.location, e)
                        }
                    }
                }, this.onPageLoad = async e => {
                    await Promise.resolve(), this.pageLoaded = !0
                }, this.delegate = e
            }

            start() {
                this.started || (addEventListener("popstate", this.onPopState, !1), addEventListener("load", this.onPageLoad, !1), this.started = !0, this.replace(new URL(window.location.href)))
            }

            stop() {
                this.started && (removeEventListener("popstate", this.onPopState, !1), removeEventListener("load", this.onPageLoad, !1), this.started = !1)
            }

            push(e, t) {
                this.update(history.pushState, e, t)
            }

            replace(e, t) {
                this.update(history.replaceState, e, t)
            }

            update(e, t, a = S()) {
                const n = {turbo: {restorationIdentifier: a}};
                e.call(history, n, "", t.href), this.location = t, this.restorationIdentifier = a
            }

            getRestorationDataForIdentifier(e) {
                return this.restorationData[e] || {}
            }

            updateRestorationData(e) {
                const {restorationIdentifier: t} = this, a = this.restorationData[t];
                this.restorationData[t] = Object.assign(Object.assign({}, a), e)
            }

            assumeControlOfScrollRestoration() {
                var e;
                this.previousScrollRestoration || (this.previousScrollRestoration = null !== (e = history.scrollRestoration) && void 0 !== e ? e : "auto", history.scrollRestoration = "manual")
            }

            relinquishControlOfScrollRestoration() {
                this.previousScrollRestoration && (history.scrollRestoration = this.previousScrollRestoration, delete this.previousScrollRestoration)
            }

            shouldHandlePopState() {
                return this.pageIsLoaded()
            }

            pageIsLoaded() {
                return this.pageLoaded || "complete" == document.readyState
            }
        }

        class te {
            constructor(e) {
                this.started = !1, this.clickCaptured = () => {
                    removeEventListener("click", this.clickBubbled, !1), addEventListener("click", this.clickBubbled, !1)
                }, this.clickBubbled = e => {
                    if (this.clickEventIsSignificant(e)) {
                        const t = e.composedPath && e.composedPath()[0] || e.target,
                            a = this.findLinkFromClickTarget(t);
                        if (a) {
                            const t = this.getLocationForLink(a);
                            this.delegate.willFollowLinkToLocation(a, t) && (e.preventDefault(), this.delegate.followedLinkToLocation(a, t))
                        }
                    }
                }, this.delegate = e
            }

            start() {
                this.started || (addEventListener("click", this.clickCaptured, !0), this.started = !0)
            }

            stop() {
                this.started && (removeEventListener("click", this.clickCaptured, !0), this.started = !1)
            }

            clickEventIsSignificant(e) {
                return !(e.target && e.target.isContentEditable || e.defaultPrevented || e.which > 1 || e.altKey || e.ctrlKey || e.metaKey || e.shiftKey)
            }

            findLinkFromClickTarget(e) {
                if (e instanceof Element) return e.closest("a[href]:not([target^=_]):not([download])")
            }

            getLocationForLink(e) {
                return c(e.getAttribute("href") || "")
            }
        }

        function ae(e) {
            return "advance" == e || "replace" == e || "restore" == e
        }

        class ne {
            constructor(e) {
                this.delegate = e
            }

            proposeVisit(e, t = {}) {
                this.delegate.allowsVisitingLocationWithAction(e, t.action) && (g(e, this.view.snapshot.rootLocation) ? this.delegate.visitProposedToLocation(e, t) : window.location.href = e.toString())
            }

            startVisit(e, t, a = {}) {
                this.stop(), this.currentVisit = new Y(this, c(e), t, Object.assign({referrer: this.location}, a)), this.currentVisit.start()
            }

            submitForm(e, t) {
                this.stop(), this.formSubmission = new P(this, e, t, !0), this.formSubmission.start()
            }

            stop() {
                this.formSubmission && (this.formSubmission.stop(), delete this.formSubmission), this.currentVisit && (this.currentVisit.cancel(), delete this.currentVisit)
            }

            get adapter() {
                return this.delegate.adapter
            }

            get view() {
                return this.delegate.view
            }

            get history() {
                return this.delegate.history
            }

            formSubmissionStarted(e) {
                "function" == typeof this.adapter.formSubmissionStarted && this.adapter.formSubmissionStarted(e)
            }

            async formSubmissionSucceededWithResponse(e, t) {
                if (e == this.formSubmission) {
                    const a = await t.responseHTML;
                    if (a) {
                        e.method != r.get && this.view.clearSnapshotCache();
                        const {statusCode: n, redirected: i} = t, s = {
                            action: this.getActionForFormSubmission(e),
                            response: {statusCode: n, responseHTML: a, redirected: i}
                        };
                        this.proposeVisit(t.location, s)
                    }
                }
            }

            async formSubmissionFailedWithResponse(e, t) {
                const a = await t.responseHTML;
                if (a) {
                    const e = H.fromHTMLString(a);
                    t.serverError ? await this.view.renderError(e) : await this.view.renderPage(e), this.view.scrollToTop(), this.view.clearSnapshotCache()
                }
            }

            formSubmissionErrored(e, t) {
                console.error(t)
            }

            formSubmissionFinished(e) {
                "function" == typeof this.adapter.formSubmissionFinished && this.adapter.formSubmissionFinished(e)
            }

            visitStarted(e) {
                this.delegate.visitStarted(e)
            }

            visitCompleted(e) {
                this.delegate.visitCompleted(e)
            }

            locationWithActionIsSamePage(e, t) {
                const a = u(e), n = u(this.view.lastRenderedLocation), r = "restore" === t && void 0 === a;
                return "replace" !== t && f(e) === f(this.view.lastRenderedLocation) && (r || null != a && a !== n)
            }

            visitScrolledToSamePageLocation(e, t) {
                this.delegate.visitScrolledToSamePageLocation(e, t)
            }

            get location() {
                return this.history.location
            }

            get restorationIdentifier() {
                return this.history.restorationIdentifier
            }

            getActionForFormSubmission(e) {
                const {formElement: t, submitter: a} = e, n = C("data-turbo-action", a, t);
                return ae(n) ? n : "advance"
            }
        }

        !function (e) {
            e[e.initial = 0] = "initial", e[e.loading = 1] = "loading", e[e.interactive = 2] = "interactive", e[e.complete = 3] = "complete"
        }(z || (z = {}));

        class re {
            constructor(e) {
                this.stage = z.initial, this.started = !1, this.interpretReadyState = () => {
                    const {readyState: e} = this;
                    "interactive" == e ? this.pageIsInteractive() : "complete" == e && this.pageIsComplete()
                }, this.pageWillUnload = () => {
                    this.delegate.pageWillUnload()
                }, this.delegate = e
            }

            start() {
                this.started || (this.stage == z.initial && (this.stage = z.loading), document.addEventListener("readystatechange", this.interpretReadyState, !1), addEventListener("pagehide", this.pageWillUnload, !1), this.started = !0)
            }

            stop() {
                this.started && (document.removeEventListener("readystatechange", this.interpretReadyState, !1), removeEventListener("pagehide", this.pageWillUnload, !1), this.started = !1)
            }

            pageIsInteractive() {
                this.stage == z.loading && (this.stage = z.interactive, this.delegate.pageBecameInteractive())
            }

            pageIsComplete() {
                this.pageIsInteractive(), this.stage == z.interactive && (this.stage = z.complete, this.delegate.pageLoaded())
            }

            get readyState() {
                return document.readyState
            }
        }

        class ie {
            constructor(e) {
                this.started = !1, this.onScroll = () => {
                    this.updatePosition({x: window.pageXOffset, y: window.pageYOffset})
                }, this.delegate = e
            }

            start() {
                this.started || (addEventListener("scroll", this.onScroll, !1), this.onScroll(), this.started = !0)
            }

            stop() {
                this.started && (removeEventListener("scroll", this.onScroll, !1), this.started = !1)
            }

            updatePosition(e) {
                this.delegate.scrollPositionChanged(e)
            }
        }

        class se {
            constructor(e) {
                this.sources = new Set, this.started = !1, this.inspectFetchResponse = e => {
                    const t = function (e) {
                        var t;
                        const a = null === (t = e.detail) || void 0 === t ? void 0 : t.fetchResponse;
                        if (a instanceof y) return a
                    }(e);
                    t && function (e) {
                        var t;
                        const a = null !== (t = e.contentType) && void 0 !== t ? t : "";
                        return a.startsWith(L.contentType)
                    }(t) && (e.preventDefault(), this.receiveMessageResponse(t))
                }, this.receiveMessageEvent = e => {
                    this.started && "string" == typeof e.data && this.receiveMessageHTML(e.data)
                }, this.delegate = e
            }

            start() {
                this.started || (this.started = !0, addEventListener("turbo:before-fetch-response", this.inspectFetchResponse, !1))
            }

            stop() {
                this.started && (this.started = !1, removeEventListener("turbo:before-fetch-response", this.inspectFetchResponse, !1))
            }

            connectStreamSource(e) {
                this.streamSourceIsConnected(e) || (this.sources.add(e), e.addEventListener("message", this.receiveMessageEvent, !1))
            }

            disconnectStreamSource(e) {
                this.streamSourceIsConnected(e) && (this.sources.delete(e), e.removeEventListener("message", this.receiveMessageEvent, !1))
            }

            streamSourceIsConnected(e) {
                return this.sources.has(e)
            }

            async receiveMessageResponse(e) {
                const t = await e.responseHTML;
                t && this.receiveMessageHTML(t)
            }

            receiveMessageHTML(e) {
                this.delegate.receivedMessageFromStream(new L(e))
            }
        }

        class oe extends O {
            async render() {
                this.replaceHeadAndBody(), this.activateScriptElements()
            }

            replaceHeadAndBody() {
                const {documentElement: e, head: t, body: a} = document;
                e.replaceChild(this.newHead, t), e.replaceChild(this.newElement, a)
            }

            activateScriptElements() {
                for (const e of this.scriptElements) {
                    const t = e.parentNode;
                    if (t) {
                        const a = this.createScriptElement(e);
                        t.replaceChild(a, e)
                    }
                }
            }

            get newHead() {
                return this.newSnapshot.headSnapshot.element
            }

            get scriptElements() {
                return [...document.documentElement.querySelectorAll("script")]
            }
        }

        class le extends O {
            get shouldRender() {
                return this.newSnapshot.isVisitable && this.trackedElementsAreIdentical
            }

            prepareToRender() {
                this.mergeHead()
            }

            async render() {
                this.willRender && this.replaceBody()
            }

            finishRendering() {
                super.finishRendering(), this.isPreview || this.focusFirstAutofocusableElement()
            }

            get currentHeadSnapshot() {
                return this.currentSnapshot.headSnapshot
            }

            get newHeadSnapshot() {
                return this.newSnapshot.headSnapshot
            }

            get newElement() {
                return this.newSnapshot.element
            }

            mergeHead() {
                this.copyNewHeadStylesheetElements(), this.copyNewHeadScriptElements(), this.removeCurrentHeadProvisionalElements(), this.copyNewHeadProvisionalElements()
            }

            replaceBody() {
                this.preservingPermanentElements((() => {
                    this.activateNewBody(), this.assignNewBody()
                }))
            }

            get trackedElementsAreIdentical() {
                return this.currentHeadSnapshot.trackedElementSignature == this.newHeadSnapshot.trackedElementSignature
            }

            copyNewHeadStylesheetElements() {
                for (const e of this.newHeadStylesheetElements) document.head.appendChild(e)
            }

            copyNewHeadScriptElements() {
                for (const e of this.newHeadScriptElements) document.head.appendChild(this.createScriptElement(e))
            }

            removeCurrentHeadProvisionalElements() {
                for (const e of this.currentHeadProvisionalElements) document.head.removeChild(e)
            }

            copyNewHeadProvisionalElements() {
                for (const e of this.newHeadProvisionalElements) document.head.appendChild(e)
            }

            activateNewBody() {
                document.adoptNode(this.newElement), this.activateNewBodyScriptElements()
            }

            activateNewBodyScriptElements() {
                for (const e of this.newBodyScriptElements) {
                    const t = this.createScriptElement(e);
                    e.replaceWith(t)
                }
            }

            assignNewBody() {
                document.body && this.newElement instanceof HTMLBodyElement ? document.body.replaceWith(this.newElement) : document.documentElement.appendChild(this.newElement)
            }

            get newHeadStylesheetElements() {
                return this.newHeadSnapshot.getStylesheetElementsNotInSnapshot(this.currentHeadSnapshot)
            }

            get newHeadScriptElements() {
                return this.newHeadSnapshot.getScriptElementsNotInSnapshot(this.currentHeadSnapshot)
            }

            get currentHeadProvisionalElements() {
                return this.currentHeadSnapshot.provisionalElements
            }

            get newHeadProvisionalElements() {
                return this.newHeadSnapshot.provisionalElements
            }

            get newBodyScriptElements() {
                return this.newElement.querySelectorAll("script")
            }
        }

        class de {
            constructor(e) {
                this.keys = [], this.snapshots = {}, this.size = e
            }

            has(e) {
                return v(e) in this.snapshots
            }

            get(e) {
                if (this.has(e)) {
                    const t = this.read(e);
                    return this.touch(e), t
                }
            }

            put(e, t) {
                return this.write(e, t), this.touch(e), t
            }

            clear() {
                this.snapshots = {}
            }

            read(e) {
                return this.snapshots[v(e)]
            }

            write(e, t) {
                this.snapshots[v(e)] = t
            }

            touch(e) {
                const t = v(e), a = this.keys.indexOf(t);
                a > -1 && this.keys.splice(a, 1), this.keys.unshift(t), this.trim()
            }

            trim() {
                for (const e of this.keys.splice(this.size)) delete this.snapshots[e]
            }
        }

        class ce extends A {
            constructor() {
                super(...arguments), this.snapshotCache = new de(10), this.lastRenderedLocation = new URL(location.href)
            }

            renderPage(e, t = !1, a = !0) {
                const n = new le(this.snapshot, e, t, a);
                return this.render(n)
            }

            renderError(e) {
                const t = new oe(this.snapshot, e, !1);
                return this.render(t)
            }

            clearSnapshotCache() {
                this.snapshotCache.clear()
            }

            async cacheSnapshot() {
                if (this.shouldCacheSnapshot) {
                    this.delegate.viewWillCacheSnapshot();
                    const {snapshot: e, lastRenderedLocation: t} = this;
                    await new Promise((e => setTimeout((() => e()), 0)));
                    const a = e.clone();
                    return this.snapshotCache.put(t, a), a
                }
            }

            getCachedSnapshotForLocation(e) {
                return this.snapshotCache.get(e)
            }

            get snapshot() {
                return H.fromElement(this.element)
            }

            get shouldCacheSnapshot() {
                return this.snapshot.isCacheable
            }
        }

        function ue(e) {
            Object.defineProperties(e, pe)
        }

        const pe = {
            absoluteURL: {
                get() {
                    return this.toString()
                }
            }
        }, he = new class {
            constructor() {
                this.navigator = new ne(this), this.history = new ee(this), this.view = new ce(this, document.documentElement), this.adapter = new K(this), this.pageObserver = new re(this), this.cacheObserver = new Q, this.linkClickObserver = new te(this), this.formSubmitObserver = new Z(this), this.scrollObserver = new ie(this), this.streamObserver = new se(this), this.frameRedirector = new X(document.documentElement), this.drive = !0, this.enabled = !0, this.progressBarDelay = 500, this.started = !1
            }

            start() {
                this.started || (this.pageObserver.start(), this.cacheObserver.start(), this.linkClickObserver.start(), this.formSubmitObserver.start(), this.scrollObserver.start(), this.streamObserver.start(), this.frameRedirector.start(), this.history.start(), this.started = !0, this.enabled = !0)
            }

            disable() {
                this.enabled = !1
            }

            stop() {
                this.started && (this.pageObserver.stop(), this.cacheObserver.stop(), this.linkClickObserver.stop(), this.formSubmitObserver.stop(), this.scrollObserver.stop(), this.streamObserver.stop(), this.frameRedirector.stop(), this.history.stop(), this.started = !1)
            }

            registerAdapter(e) {
                this.adapter = e
            }

            visit(e, t = {}) {
                this.navigator.proposeVisit(c(e), t)
            }

            connectStreamSource(e) {
                this.streamObserver.connectStreamSource(e)
            }

            disconnectStreamSource(e) {
                this.streamObserver.disconnectStreamSource(e)
            }

            renderStreamMessage(e) {
                document.documentElement.appendChild(L.wrap(e).fragment)
            }

            clearCache() {
                this.view.clearSnapshotCache()
            }

            setProgressBarDelay(e) {
                this.progressBarDelay = e
            }

            get location() {
                return this.history.location
            }

            get restorationIdentifier() {
                return this.history.restorationIdentifier
            }

            historyPoppedToLocationWithRestorationIdentifier(e, t) {
                this.enabled ? this.navigator.startVisit(e, t, {
                    action: "restore",
                    historyChanged: !0
                }) : this.adapter.pageInvalidated()
            }

            scrollPositionChanged(e) {
                this.history.updateRestorationData({scrollPosition: e})
            }

            willFollowLinkToLocation(e, t) {
                return this.elementDriveEnabled(e) && g(t, this.snapshot.rootLocation) && this.applicationAllowsFollowingLinkToLocation(e, t)
            }

            followedLinkToLocation(e, t) {
                const a = this.getActionForLink(e);
                this.convertLinkWithMethodClickToFormSubmission(e) || this.visit(t.href, {action: a})
            }

            convertLinkWithMethodClickToFormSubmission(e) {
                const t = e.getAttribute("data-turbo-method");
                if (t) {
                    const a = document.createElement("form");
                    a.method = t, a.action = e.getAttribute("href") || "undefined", a.hidden = !0, e.hasAttribute("data-turbo-confirm") && a.setAttribute("data-turbo-confirm", e.getAttribute("data-turbo-confirm"));
                    const n = this.getTargetFrameForLink(e);
                    return n ? (a.setAttribute("data-turbo-frame", n), a.addEventListener("turbo:submit-start", (() => a.remove()))) : a.addEventListener("submit", (() => a.remove())), document.body.appendChild(a), w("submit", {
                        cancelable: !0,
                        target: a
                    })
                }
                return !1
            }

            allowsVisitingLocationWithAction(e, t) {
                return this.locationWithActionIsSamePage(e, t) || this.applicationAllowsVisitingLocation(e)
            }

            visitProposedToLocation(e, t) {
                ue(e), this.adapter.visitProposedToLocation(e, t)
            }

            visitStarted(e) {
                ue(e.location), e.silent || this.notifyApplicationAfterVisitingLocation(e.location, e.action)
            }

            visitCompleted(e) {
                this.notifyApplicationAfterPageLoad(e.getTimingMetrics())
            }

            locationWithActionIsSamePage(e, t) {
                return this.navigator.locationWithActionIsSamePage(e, t)
            }

            visitScrolledToSamePageLocation(e, t) {
                this.notifyApplicationAfterVisitingSamePageLocation(e, t)
            }

            willSubmitForm(e, t) {
                const a = p(e, t);
                return this.elementDriveEnabled(e) && (!t || this.elementDriveEnabled(t)) && g(c(a), this.snapshot.rootLocation)
            }

            formSubmitted(e, t) {
                this.navigator.submitForm(e, t)
            }

            pageBecameInteractive() {
                this.view.lastRenderedLocation = this.location, this.notifyApplicationAfterPageLoad()
            }

            pageLoaded() {
                this.history.assumeControlOfScrollRestoration()
            }

            pageWillUnload() {
                this.history.relinquishControlOfScrollRestoration()
            }

            receivedMessageFromStream(e) {
                this.renderStreamMessage(e)
            }

            viewWillCacheSnapshot() {
                var e;
                (null === (e = this.navigator.currentVisit) || void 0 === e ? void 0 : e.silent) || this.notifyApplicationBeforeCachingSnapshot()
            }

            allowsImmediateRender({element: e}, t) {
                return !this.notifyApplicationBeforeRender(e, t).defaultPrevented
            }

            viewRenderedSnapshot(e, t) {
                this.view.lastRenderedLocation = this.history.location, this.notifyApplicationAfterRender()
            }

            viewInvalidated() {
                this.adapter.pageInvalidated()
            }

            frameLoaded(e) {
                this.notifyApplicationAfterFrameLoad(e)
            }

            frameRendered(e, t) {
                this.notifyApplicationAfterFrameRender(e, t)
            }

            applicationAllowsFollowingLinkToLocation(e, t) {
                return !this.notifyApplicationAfterClickingLinkToLocation(e, t).defaultPrevented
            }

            applicationAllowsVisitingLocation(e) {
                return !this.notifyApplicationBeforeVisitingLocation(e).defaultPrevented
            }

            notifyApplicationAfterClickingLinkToLocation(e, t) {
                return w("turbo:click", {target: e, detail: {url: t.href}, cancelable: !0})
            }

            notifyApplicationBeforeVisitingLocation(e) {
                return w("turbo:before-visit", {detail: {url: e.href}, cancelable: !0})
            }

            notifyApplicationAfterVisitingLocation(e, t) {
                return M(document.documentElement), w("turbo:visit", {detail: {url: e.href, action: t}})
            }

            notifyApplicationBeforeCachingSnapshot() {
                return w("turbo:before-cache")
            }

            notifyApplicationBeforeRender(e, t) {
                return w("turbo:before-render", {detail: {newBody: e, resume: t}, cancelable: !0})
            }

            notifyApplicationAfterRender() {
                return w("turbo:render")
            }

            notifyApplicationAfterPageLoad(e = {}) {
                return T(document.documentElement), w("turbo:load", {detail: {url: this.location.href, timing: e}})
            }

            notifyApplicationAfterVisitingSamePageLocation(e, t) {
                dispatchEvent(new HashChangeEvent("hashchange", {oldURL: e.toString(), newURL: t.toString()}))
            }

            notifyApplicationAfterFrameLoad(e) {
                return w("turbo:frame-load", {target: e})
            }

            notifyApplicationAfterFrameRender(e, t) {
                return w("turbo:frame-render", {detail: {fetchResponse: e}, target: t, cancelable: !0})
            }

            elementDriveEnabled(e) {
                const t = null == e ? void 0 : e.closest("[data-turbo]");
                return this.drive ? !t || "false" != t.getAttribute("data-turbo") : !!t && "true" == t.getAttribute("data-turbo")
            }

            getActionForLink(e) {
                const t = e.getAttribute("data-turbo-action");
                return ae(t) ? t : "advance"
            }

            getTargetFrameForLink(e) {
                const t = e.getAttribute("data-turbo-frame");
                if (t) return t;
                {
                    const t = e.closest("turbo-frame");
                    if (t) return t.id
                }
            }

            get snapshot() {
                return this.view.snapshot
            }
        }, {navigator: me} = he;

        function ge() {
            he.start()
        }

        function fe(e) {
            he.registerAdapter(e)
        }

        function ve(e, t) {
            he.visit(e, t)
        }

        function ye(e) {
            he.connectStreamSource(e)
        }

        function we(e) {
            he.disconnectStreamSource(e)
        }

        function be(e) {
            he.renderStreamMessage(e)
        }

        function $e() {
            he.clearCache()
        }

        function ke(e) {
            he.setProgressBarDelay(e)
        }

        function Se(e) {
            P.confirmMethod = e
        }

        var Ce = Object.freeze({
            __proto__: null,
            navigator: me,
            session: he,
            PageRenderer: le,
            PageSnapshot: H,
            start: ge,
            registerAdapter: fe,
            visit: ve,
            connectStreamSource: ye,
            disconnectStreamSource: we,
            renderStreamMessage: be,
            clearCache: $e,
            setProgressBarDelay: ke,
            setConfirmMethod: Se
        });

        class Me {
            constructor(e) {
                this.visitCachedSnapshot = ({element: e}) => {
                    var t;
                    const {id: a, clone: n} = this;
                    null === (t = e.querySelector("#" + a)) || void 0 === t || t.replaceWith(n)
                }, this.clone = e.cloneNode(!0), this.id = e.id
            }
        }

        function Te(e) {
            if (null != e) {
                const t = document.getElementById(e);
                if (t instanceof d) return t
            }
        }

        function Ee(e, t) {
            if (e) {
                const n = e.getAttribute("src");
                if (null != n && null != t && (a = t, c(n).href == c(a).href)) throw new Error(`Matching <turbo-frame id="${e.id}"> element has a source URL which references itself`);
                if (e.ownerDocument !== document && (e = document.importNode(e, !0)), e instanceof d) return e.connectedCallback(), e.disconnectedCallback(), e
            }
            var a
        }

        const _e = {
            after() {
                this.targetElements.forEach((e => {
                    var t;
                    return null === (t = e.parentElement) || void 0 === t ? void 0 : t.insertBefore(this.templateContent, e.nextSibling)
                }))
            }, append() {
                this.removeDuplicateTargetChildren(), this.targetElements.forEach((e => e.append(this.templateContent)))
            }, before() {
                this.targetElements.forEach((e => {
                    var t;
                    return null === (t = e.parentElement) || void 0 === t ? void 0 : t.insertBefore(this.templateContent, e)
                }))
            }, prepend() {
                this.removeDuplicateTargetChildren(), this.targetElements.forEach((e => e.prepend(this.templateContent)))
            }, remove() {
                this.targetElements.forEach((e => e.remove()))
            }, replace() {
                this.targetElements.forEach((e => e.replaceWith(this.templateContent)))
            }, update() {
                this.targetElements.forEach((e => {
                    e.innerHTML = "", e.append(this.templateContent)
                }))
            }
        };

        class Le extends HTMLElement {
            async connectedCallback() {
                try {
                    await this.render()
                } catch (e) {
                    console.error(e)
                } finally {
                    this.disconnect()
                }
            }

            async render() {
                var e;
                return null !== (e = this.renderPromise) && void 0 !== e ? e : this.renderPromise = (async () => {
                    this.dispatchEvent(this.beforeRenderEvent) && (await b(), this.performAction())
                })()
            }

            disconnect() {
                try {
                    this.remove()
                } catch (e) {
                }
            }

            removeDuplicateTargetChildren() {
                this.duplicateChildren.forEach((e => e.remove()))
            }

            get duplicateChildren() {
                var e;
                const t = this.targetElements.flatMap((e => [...e.children])).filter((e => !!e.id)),
                    a = [...null === (e = this.templateContent) || void 0 === e ? void 0 : e.children].filter((e => !!e.id)).map((e => e.id));
                return t.filter((e => a.includes(e.id)))
            }

            get performAction() {
                if (this.action) {
                    const e = _e[this.action];
                    if (e) return e;
                    this.raise("unknown action")
                }
                this.raise("action attribute is missing")
            }

            get targetElements() {
                return this.target ? this.targetElementsById : this.targets ? this.targetElementsByQuery : void this.raise("target or targets attribute is missing")
            }

            get templateContent() {
                return this.templateElement.content.cloneNode(!0)
            }

            get templateElement() {
                if (this.firstElementChild instanceof HTMLTemplateElement) return this.firstElementChild;
                this.raise("first child element must be a <template> element")
            }

            get action() {
                return this.getAttribute("action")
            }

            get target() {
                return this.getAttribute("target")
            }

            get targets() {
                return this.getAttribute("targets")
            }

            raise(e) {
                throw new Error(`${this.description}: ${e}`)
            }

            get description() {
                var e, t;
                return null !== (t = (null !== (e = this.outerHTML.match(/<[^>]+>/)) && void 0 !== e ? e : [])[0]) && void 0 !== t ? t : "<turbo-stream>"
            }

            get beforeRenderEvent() {
                return new CustomEvent("turbo:before-stream-render", {bubbles: !0, cancelable: !0})
            }

            get targetElementsById() {
                var e;
                const t = null === (e = this.ownerDocument) || void 0 === e ? void 0 : e.getElementById(this.target);
                return null !== t ? [t] : []
            }

            get targetElementsByQuery() {
                var e;
                const t = null === (e = this.ownerDocument) || void 0 === e ? void 0 : e.querySelectorAll(this.targets);
                return 0 !== t.length ? Array.prototype.slice.call(t) : []
            }
        }

        d.delegateConstructor = class {
            constructor(e) {
                this.fetchResponseLoaded = e => {
                }, this.currentFetchRequest = null, this.resolveVisitPromise = () => {
                }, this.connected = !1, this.hasBeenLoaded = !1, this.settingSourceURL = !1, this.element = e, this.view = new F(this, this.element), this.appearanceObserver = new _(this, this.element), this.linkInterceptor = new I(this, this.element), this.formInterceptor = new j(this, this.element)
            }

            connect() {
                this.connected || (this.connected = !0, this.reloadable = !1, this.loadingStyle == n.lazy && this.appearanceObserver.start(), this.linkInterceptor.start(), this.formInterceptor.start(), this.sourceURLChanged())
            }

            disconnect() {
                this.connected && (this.connected = !1, this.appearanceObserver.stop(), this.linkInterceptor.stop(), this.formInterceptor.stop())
            }

            disabledChanged() {
                this.loadingStyle == n.eager && this.loadSourceURL()
            }

            sourceURLChanged() {
                (this.loadingStyle == n.eager || this.hasBeenLoaded) && this.loadSourceURL()
            }

            loadingStyleChanged() {
                this.loadingStyle == n.lazy ? this.appearanceObserver.start() : (this.appearanceObserver.stop(), this.loadSourceURL())
            }

            async loadSourceURL() {
                if (!this.settingSourceURL && this.enabled && this.isActive && (this.reloadable || this.sourceURL != this.currentURL)) {
                    const e = this.currentURL;
                    if (this.currentURL = this.sourceURL, this.sourceURL) try {
                        this.element.loaded = this.visit(c(this.sourceURL)), this.appearanceObserver.stop(), await this.element.loaded, this.hasBeenLoaded = !0
                    } catch (t) {
                        throw this.currentURL = e, t
                    }
                }
            }

            async loadResponse(e) {
                (e.redirected || e.succeeded && e.isHTML) && (this.sourceURL = e.response.url);
                try {
                    const t = await e.responseHTML;
                    if (t) {
                        const {body: a} = $(t), n = new D(await this.extractForeignFrameElement(a)),
                            r = new R(this.view.snapshot, n, !1, !1);
                        this.view.renderPromise && await this.view.renderPromise, await this.view.render(r), he.frameRendered(e, this.element), he.frameLoaded(this.element), this.fetchResponseLoaded(e)
                    }
                } catch (e) {
                    console.error(e), this.view.invalidate()
                } finally {
                    this.fetchResponseLoaded = () => {
                    }
                }
            }

            elementAppearedInViewport(e) {
                this.loadSourceURL()
            }

            shouldInterceptLinkClick(e, t) {
                return !e.hasAttribute("data-turbo-method") && this.shouldInterceptNavigation(e)
            }

            linkClickIntercepted(e, t) {
                this.reloadable = !0, this.navigateFrame(e, t)
            }

            shouldInterceptFormSubmission(e, t) {
                return this.shouldInterceptNavigation(e, t)
            }

            formSubmissionIntercepted(e, t) {
                this.formSubmission && this.formSubmission.stop(), this.reloadable = !1, this.formSubmission = new P(this, e, t);
                const {fetchRequest: a} = this.formSubmission;
                this.prepareHeadersForRequest(a.headers, a), this.formSubmission.start()
            }

            prepareHeadersForRequest(e, t) {
                e["Turbo-Frame"] = this.id
            }

            requestStarted(e) {
                M(this.element)
            }

            requestPreventedHandlingResponse(e, t) {
                this.resolveVisitPromise()
            }

            async requestSucceededWithResponse(e, t) {
                await this.loadResponse(t), this.resolveVisitPromise()
            }

            requestFailedWithResponse(e, t) {
                console.error(t), this.resolveVisitPromise()
            }

            requestErrored(e, t) {
                console.error(t), this.resolveVisitPromise()
            }

            requestFinished(e) {
                T(this.element)
            }

            formSubmissionStarted({formElement: e}) {
                M(e, this.findFrameElement(e))
            }

            formSubmissionSucceededWithResponse(e, t) {
                const a = this.findFrameElement(e.formElement, e.submitter);
                this.proposeVisitIfNavigatedWithAction(a, e.formElement, e.submitter), a.delegate.loadResponse(t)
            }

            formSubmissionFailedWithResponse(e, t) {
                this.element.delegate.loadResponse(t)
            }

            formSubmissionErrored(e, t) {
                console.error(t)
            }

            formSubmissionFinished({formElement: e}) {
                T(e, this.findFrameElement(e))
            }

            allowsImmediateRender(e, t) {
                return !0
            }

            viewRenderedSnapshot(e, t) {
            }

            viewInvalidated() {
            }

            async visit(e) {
                var t;
                const a = new E(this, r.get, e, new URLSearchParams, this.element);
                return null === (t = this.currentFetchRequest) || void 0 === t || t.cancel(), this.currentFetchRequest = a, new Promise((e => {
                    this.resolveVisitPromise = () => {
                        this.resolveVisitPromise = () => {
                        }, this.currentFetchRequest = null, e()
                    }, a.perform()
                }))
            }

            navigateFrame(e, t, a) {
                const n = this.findFrameElement(e, a);
                this.proposeVisitIfNavigatedWithAction(n, e, a), n.setAttribute("reloadable", ""), n.src = t
            }

            proposeVisitIfNavigatedWithAction(e, t, a) {
                const n = C("data-turbo-action", a, t, e);
                if (ae(n)) {
                    const {visitCachedSnapshot: t} = new Me(e);
                    e.delegate.fetchResponseLoaded = a => {
                        if (e.src) {
                            const {statusCode: r, redirected: i} = a, s = {
                                statusCode: r,
                                redirected: i,
                                responseHTML: e.ownerDocument.documentElement.outerHTML
                            };
                            he.visit(e.src, {action: n, response: s, visitCachedSnapshot: t, willRender: !1})
                        }
                    }
                }
            }

            findFrameElement(e, t) {
                var a;
                return null !== (a = Te(C("data-turbo-frame", t, e) || this.element.getAttribute("target"))) && void 0 !== a ? a : this.element
            }

            async extractForeignFrameElement(e) {
                let t;
                const a = CSS.escape(this.id);
                try {
                    if (t = Ee(e.querySelector(`turbo-frame#${a}`), this.currentURL)) return t;
                    if (t = Ee(e.querySelector(`turbo-frame[src][recurse~=${a}]`), this.currentURL)) return await t.loaded, await this.extractForeignFrameElement(t);
                    console.error(`Response has no matching <turbo-frame id="${a}"> element`)
                } catch (e) {
                    console.error(e)
                }
                return new d
            }

            formActionIsVisitable(e, t) {
                return g(c(p(e, t)), this.rootLocation)
            }

            shouldInterceptNavigation(e, t) {
                const a = C("data-turbo-frame", t, e) || this.element.getAttribute("target");
                if (e instanceof HTMLFormElement && !this.formActionIsVisitable(e, t)) return !1;
                if (!this.enabled || "_top" == a) return !1;
                if (a) {
                    const e = Te(a);
                    if (e) return !e.disabled
                }
                return !!he.elementDriveEnabled(e) && !(t && !he.elementDriveEnabled(t))
            }

            get id() {
                return this.element.id
            }

            get enabled() {
                return !this.element.disabled
            }

            get sourceURL() {
                if (this.element.src) return this.element.src
            }

            get reloadable() {
                return this.findFrameElement(this.element).hasAttribute("reloadable")
            }

            set reloadable(e) {
                const t = this.findFrameElement(this.element);
                e ? t.setAttribute("reloadable", "") : t.removeAttribute("reloadable")
            }

            set sourceURL(e) {
                this.settingSourceURL = !0, this.element.src = null != e ? e : null, this.currentURL = this.element.src, this.settingSourceURL = !1
            }

            get loadingStyle() {
                return this.element.loading
            }

            get isLoading() {
                return void 0 !== this.formSubmission || void 0 !== this.resolveVisitPromise()
            }

            get isActive() {
                return this.element.isActive && this.connected
            }

            get rootLocation() {
                var e;
                const t = this.element.ownerDocument.querySelector('meta[name="turbo-root"]');
                return c(null !== (e = null == t ? void 0 : t.content) && void 0 !== e ? e : "/")
            }
        }, customElements.define("turbo-frame", d), customElements.define("turbo-stream", Le), (() => {
            let e = document.currentScript;
            if (e && !e.hasAttribute("data-turbo-suppress-warning")) for (; e = e.parentElement;) if (e == document.body) return console.warn(k`
        You are loading Turbo from a <script> element inside the <body> element. This is probably not what you meant to do!

        Load your application’s JavaScript bundle inside the <head> element instead. <script> elements in <body> are evaluated with each page change.

        For more information, see: https://turbo.hotwired.dev/handbook/building#working-with-script-elements

        ——
        Suppress this warning by adding a "data-turbo-suppress-warning" attribute to: %s
      `, e.outerHTML)
        })(), window.Turbo = Ce, ge(), window.Turbo = e, ge()
    })(), window.listen = function (e, t, a) {
        $(document).on(e, t, a)
    }, window.listenClick = function (e, t) {
        $(document).on("click", e, t)
    }, window.listenSubmit = function (e, t) {
        $(document).on("submit", e, t)
    }, window.listenHiddenBsModal = function (e, t) {
        $(document).on("hidden.bs.modal", e, t)
    }, window.listenChange = function (e, t) {
        $(document).on("change", e, t)
    }, window.listenKeyup = function (e, t) {
        $(document).on("keyup", e, t)
    }, window.getFormattedDateTime = function (e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        return 1 == e ? t ? "DD MMM, Y" : "d M, Y" : 2 == e ? t ? "MMM DD, Y" : "M d, Y" : 3 == e ? t ? "DD/MM/YYYY" : "d/m/Y" : 4 == e ? t ? "YYYY/MM/DD" : "Y/m/d" : 5 == e ? t ? "MM/DD/YYYY" : "m/d/Y" : 6 == e ? t ? "YYYY-MM-DD" : "Y-m-d" : void 0
    }, (() => {
        "use strict";
        var jsrender = __webpack_require__(2743), csrfToken = $('meta[name="csrf-token"]').attr("content");

        function initAllComponents() {
            select2initialize(), refreshCsrfToken(), alertInitialize(), modalInputFocus(), inputFocus(), IOInitImageComponent(), IOInitSidebar(), togglePassword(), vcardTableCardRemove(), tooltip(), frontTestimonials()
        }

        function tooltip() {
            [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]')).map((function (e) {
                return new bootstrap.Tooltip(e)
            }))
        }

        function togglePassword() {
            $('[data-toggle="password"]').each((function () {
                var e = $(this), t = $(this).parent().find(".input-icon");
                t.css("cursor", "pointer").addClass("input-password-hide"), t.on("click", (function () {
                    t.hasClass("input-password-hide") ? (t.removeClass("input-password-hide").addClass("input-password-show"), t.find(".bi").removeClass("bi-eye-slash-fill").addClass("bi-eye-fill"), e.attr("type", "text")) : (t.removeClass("input-password-show").addClass("input-password-hide"), t.find(".bi").removeClass("bi-eye-fill").addClass("bi-eye-slash-fill"), e.attr("type", "password"))
                }))
            }))
        }

        function alertInitialize() {
            $(".alert").delay(5e3).slideUp(300)
        }

        function refreshCsrfToken() {
            csrfToken = $('meta[name="csrf-token"]').attr("content"), $.ajaxSetup({headers: {"X-CSRF-TOKEN": csrfToken}})
        }

        function select2initialize() {
            $('[data-control="select2"]').each((function () {
                $(this).select2()
            }))
        }

        document.addEventListener("turbo:load", initAllComponents), document.addEventListener("click", (function (e) {
            var t = $(e.target).closest('.show[data-ic-dropdown-btn="true"]'),
                a = $(e.target).closest('.show[data-ic-dropdown="true"]');
            t.length > 0 || a.length > 0 || ($('[data-ic-dropdown-btn="true"]').removeClass("show"), $('[data-ic-dropdown="true"]').removeClass("show"))
        })), document.addEventListener("livewire:load", (function () {
            window.livewire.hook("message.processed", (function () {
                $('[data-control="select2"]').each((function () {
                    $(this).select2()
                }))
            }))
        }));
        var inputFocus = function () {
            $('input:text:not([readonly="readonly"]):not([name="search"]):not(.front-input)').first().focus()
        }, modalInputFocus = function () {
            $((function () {
                $(".modal").on("shown.bs.modal", (function () {
                    $(this).find("input:text")[0] && $(this).find("input:text")[0].focus()
                }))
            }))
        };

        function deleteItemAjax(url, header) {
            var callFunction = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
            $.ajax({
                url, type: "DELETE", dataType: "json", success: function success(obj) {
                    obj.success && (window.livewire.emit("resetPageTable"), livewire.emit("refresh")), swal({
                        icon: "success",
                        title: Lang.get("js.deleted") + " !",
                        text: header + " " + Lang.get("js.has_been_deleted"),
                        timer: 2e3,
                        buttons: {confirm: Lang.get("js.ok")}
                    }), callFunction && eval(callFunction)
                }, error: function (e) {
                    swal({
                        title: Lang.get("js.error"),
                        icon: "error",
                        text: e.responseJSON.message,
                        type: "error",
                        timer: 4e3,
                        buttons: {confirm: Lang.get("js.ok")}
                    })
                }
            })
        }

        function isEmailEditProfile(e) {
            return /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(e)
        }

        function vcardTableCardRemove() {
            listenClick("#vcards-tab", (function () {
                $(".card-check").removeClass("card"), $(".card-body-check").removeClass("card-body")
            })), listenClick("#overview-tab", (function () {
                $(".card-check").addClass("card"), $(".card-body-check").addClass("card-body")
            }))
        }

        function frontTestimonials() {
            $(".pricing-carousel").length > 0 && ($("#toogler-icon").click((function () {
                $(this).toggleClass("open")
            })), $(".pricing-carousel").slick({
                dots: !0,
                centerMode: !0,
                centerPadding: "0",
                slidesToShow: 3,
                slidesToScroll: 1,
                responsive: [{
                    breakpoint: 1400,
                    settings: {slidesToShow: 1, centerMode: !0, centerPadding: "250px"}
                }, {
                    breakpoint: 1200,
                    settings: {slidesToShow: 1, centerMode: !0, centerPadding: "150px"}
                }, {
                    breakpoint: 992,
                    settings: {slidesToShow: 1, centerMode: !0, centerPadding: "100px"}
                }, {
                    breakpoint: 768,
                    settings: {slidesToShow: 1, centerMode: !0, centerPadding: "50px", arrows: !1}
                }, {breakpoint: 576, settings: {slidesToShow: 1, arrows: !1}}]
            }), $(".testimonial-carousel").slick({
                autoplaySpeed: 1e3,
                speed: 600,
                draggable: !0,
                infinite: !0,
                dots: !0,
                centerMode: !0,
                centerPadding: "0",
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: !1,
                responsive: [{breakpoint: 1199, settings: {slidesToShow: 1, centerMode: !0}}, {
                    breakpoint: 992,
                    settings: {slidesToShow: 1}
                }, {breakpoint: 768, settings: {slidesToShow: 1, centerMode: !0}}, {
                    breakpoint: 576,
                    settings: {slidesToShow: 1}
                }]
            }))
        }

        $.ajaxSetup({headers: {"X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content")}}), $(document).on("select2:open", (function () {
            document.querySelector(".select2-search__field").focus()
        })), toastr.options = {
            closeButton: !0,
            debug: !1,
            newestOnTop: !1,
            progressBar: !0,
            positionClass: "toast-top-right",
            preventDuplicates: !1,
            onclick: null,
            showDuration: "300",
            hideDuration: "1000",
            timeOut: "5000",
            extendedTimeOut: "1000",
            showEasing: "swing",
            hideEasing: "linear",
            showMethod: "fadeIn",
            hideMethod: "fadeOut"
        }, window.resetModalForm = function (e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
            $(e)[0].reset(), $("select.select2Selector").each((function (e, t) {
                var a = "#" + $(this).attr("id");
                $(a).val(""), $(a).trigger("change")
            })), $(t).hide()
        }, window.printErrorMessage = function (e, t) {
            $(e).show().html(""), $(e).text(t.responseJSON.message)
        }, window.manageAjaxErrors = function (e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "editValidationErrorsBox";
            404 == e.status ? toastr.error(e.responseJSON.message) : printErrorMessage("#" + t, e)
        }, window.displaySuccessMessage = function (e) {
            toastr.success(e, Lang.get("js.successful"))
        }, window.displayErrorMessage = function (e) {
            toastr.error(e, Lang.get("js.error"))
        }, window.deleteItem = function (e, t) {
            var a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
            swal({
                title: Lang.get("js.delete") + " !",
                text: Lang.get("js.are_you_sure") + ' "' + t + '" ?',
                buttons: {confirm: Lang.get("js.yes"), cancel: Lang.get("js.no")},
                reverseButtons: !0,
                icon: sweetAlertIcon
            }).then((function (n) {
                n && deleteItemAjax(e, t, a)
            }))
        }, window.format = function (e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "DD-MMM-YYYY";
            return moment(e).format(t)
        }, window.processingBtn = function (e, t) {
            var a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null, n = $(e).find(t);
            "loading" === a ? n.button("loading") : n.button("reset")
        }, window.prepareTemplateRender = function (e, t) {
            return jsrender.templates(e).render(t)
        }, window.changeImg = function (e, t, a, n) {
            isValidFile($(e), t) ? displayPhoto(e, a) : $("#servicePreview").attr("src", n)
        }, window.isValidFile = function (e, t) {
            var a = $(e).val().split(".").pop().toLowerCase();
            return -1 == $.inArray(a, ["png", "jpg", "jpeg"]) ? ($(e).val(""), $(t).removeClass("d-none"), $(t).html("The image must be a file of type: jpeg, jpg, png.").show(), $(t).delay(5e3).slideUp(300), !1) : ($(t).hide(), !0)
        }, window.displayPhoto = function (e, t) {
            var a = !0;
            if (e.files && e.files[0]) {
                var n = new FileReader;
                n.onload = function (e) {
                    var n = new Image;
                    n.src = e.target.result, n.onload = function () {
                        $(t).attr("src", e.target.result), a = !0
                    }
                }, a && (n.readAsDataURL(e.files[0]), $(t).show())
            }
        }, window.removeCommas = function (e) {
            return e.replace(/,/g, "")
        }, window.DatetimepickerDefaults = function (e) {
            return $.extend({}, {
                sideBySide: !0,
                ignoreReadonly: !0,
                icons: {
                    close: "fa fa-times",
                    time: "fa fa-clock-o",
                    date: "fa fa-calendar",
                    up: "fa fa-arrow-up",
                    down: "fa fa-arrow-down",
                    previous: "fa fa-chevron-left",
                    next: "fa fa-chevron-right",
                    today: "fa fa-clock-o",
                    clear: "fa fa-trash-o"
                }
            }, e)
        }, window.isEmpty = function (e) {
            return null == e || "" === e
        }, window.screenLock = function () {
            $("#overlay-screen-lock").show(), $("body").css({"pointer-events": "none", opacity: "0.6"})
        }, window.screenUnLock = function () {
            $("body").css({"pointer-events": "auto", opacity: "1"}), $("#overlay-screen-lock").hide()
        }, window.onload = function () {
            window.startLoader = function () {
                $(".infy-loader").show()
            }, window.stopLoader = function () {
                $(".infy-loader").hide()
            }, stopLoader()
        }, $(document).ready((function () {
            $(document).find(".nav-item.dropdown ul li").hasClass("active") && ($(document).find(".nav-item.dropdown ul li.active").parent("ul").css("display", "block"), $(document).find(".nav-item.dropdown ul li.active").parent("ul").parent("li").addClass("active"))
        })), window.urlValidation = function (e, t) {
            return !("" != e && !e.match(t))
        }, listenClick(".languageSelection", (function () {
            var e = $(this).data("prefix-value");
            $.ajax({
                type: "POST",
                url: "/change-language",
                headers: {"X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content")},
                data: {languageName: e},
                success: function () {
                    location.reload()
                }
            })
        })), $(window).width() > 992 && $(".no-hover").on("click", (function () {
            $(this).toggleClass("open")
        })), $(document).on("click", "#readNotification", (function (e) {
            e.preventDefault();
            var t = $(this).data("id"), a = $(this);
            $.ajax({
                type: "POST",
                url: readNotification + "/" + t + "/read",
                data: {notificationId: t},
                success: function () {
                    a.remove(), 0 == document.getElementsByClassName("readNotification").length && ($("#readAllNotification").addClass("d-none"), $(".empty-state").removeClass("d-none"), $(".notification-toggle").removeClass("beep"))
                },
                error: function (e) {
                    manageAjaxErrors(e)
                }
            })
        })), $("#register").on("click", (function (e) {
            e.preventDefault(), $(".open #dropdownLanguage").trigger("click"), $(".open #dropdownLogin").trigger("click")
        })), $("#language").on("click", (function (e) {
            e.preventDefault(), $(".open #dropdownRegister").trigger("click"), $(".open #dropdownLogin").trigger("click")
        })), $("#login").on("click", (function (e) {
            e.preventDefault(), $(".open #dropdownRegister").trigger("click"), $(".open #dropdownLanguage").trigger("click")
        })), window.preparedTemplate = function () {
            var e = $("#actionTemplate").html();
            window.preparedTemplate = Handlebars.compile(e)
        }, $(document).delegate("textarea", "keydown", (function (e) {
            if (9 === (e.keyCode || e.which)) {
                e.preventDefault();
                var t = this.selectionStart, a = this.selectionEnd, n = $(this).val(), r = n.substring(t, a);
                $(this).val(n.substring(0, t) + "\t" + r.replace(/\n/g, "\n\t") + n.substring(a)), this.selectionStart = this.selectionEnd = t + 1
            }
        })), $(document).ready((function () {
            $("#languageDropdown").click((function (e) {
                e.stopPropagation()
            }))
        })), listenSubmit("#userProfileEditForm", (function () {
            return "" == $.trim($("#editProfileFirstName").val()) ? (displayErrorMessage(Lang.get("js.first_name_required")), !1) : "" == $.trim($("#editProfileLastName").val()) ? (displayErrorMessage(Lang.get("js.last_name_required")), !1) : isEmailEditProfile($("#isEmailEditProfile").val()) ? !!$("#userProfileEditForm").find("#error-msg").hasClass("d-none") && void 0 : (displayErrorMessage(Lang.get("js.enter_valid_email")), !1)
        })), window.openDropdownManually = function (e, t) {
            e.hasClass("show") ? (e.removeClass("show"), t.removeClass("show")) : (e.addClass("show"), t.addClass("show"))
        }, window.hideDropdownManually = function (e, t) {
            e.removeClass("show"), t.removeClass("show")
        }, window.checkPhpFile = function (e, t) {
            var a = $(e).val().split(".").pop().toLowerCase();
            return -1 !== $.inArray(a, ["php"]) ? ($(e).val(""), $(t).removeClass("d-none"), $(t).html("PHP file is not valid type for attachment").show(), $(t).delay(5e3).slideUp(300), !1) : ($(t).hide(), !0)
        }, window.allowAlphaNumeric = function (e) {
            e.value = e.value.toUpperCase().split(/[^a-zA-Z0-9_-]/).join("")
        }, window.getCurrencyAmount = function (e, t) {
            var a = t + "" + e;
            return 1 == currencyAfterAmount && (a = e + "" + t), a
        }, $(document).ready((function () {
            var e = $('[data-ic-class="search-trigger"]'), t = $('[data-ic-class="search-input"]'),
                a = $('[data-ic-class="search-clear"]');
            e.click((function () {
                $(".share-wp-btn").addClass("d-none"), $('[data-ic-class="search-trigger"]').addClass("active"), t.focus()
            })), t.blur((function () {
                if (t.val().length > 0) return !1;
                e.removeClass("active")
            })), a.click((function () {
                t.val("")
            })), t.focus((function () {
                e.addClass("active")
            }))
        })), listenChange(".file-validation", (function () {
            var e = $(this).val().split(".").pop().toLowerCase();
            -1 == $.inArray(e, ["png", "jpg", "jpeg"]) && (displayErrorMessage(Lang.get("js.allowed_file_types")), $(this).val(""))
        })), document.addEventListener("bulk-delete-vcard", (function (e) {
            var t = e.detail;
            if (!(t.length > 0)) return displayErrorMessage("Please select one or more records for multiples delete."), !1;
            swal({
                title: "Delete !",
                text: 'Are you sure want to delete selected "Vcards"?',
                buttons: {confirm: "Yes", cancel: "No"},
                reverseButtons: !0,
                icon: sweetAlertIcon
            }).then((function (e) {
                e && window.livewire.emit("deleteVcard", t)
            }))
        })), document.addEventListener("delete-vcard-success", (function () {
            window.livewire.emit("refresh"), window.livewire.emit("resetPageTable"), swal({
                icon: "success",
                title: Lang.get("js.deleted") + " !",
                text: "Vcards " + Lang.get("js.has_been_deleted"),
                timer: 3e3,
                buttons: {confirm: Lang.get("js.ok")}
            })
        })), document.addEventListener("bulk-delete-error", (function () {
            displayErrorMessage("Please select one or more records for multiples delete.")
        })), document.addEventListener("bulk-delete-vcard", (function (e) {
            var t = e.detail;
            if (!(t.length > 0)) return displayErrorMessage("Please select one or more records for multiples delete."), !1;
            swal({
                title: "Delete !",
                text: 'Are you sure want to delete selected "Vcards"?',
                buttons: {confirm: "Yes", cancel: "No"},
                reverseButtons: !0,
                icon: sweetAlertIcon
            }).then((function (e) {
                e && window.livewire.emit("deleteVcard", t)
            }))
        })), document.addEventListener("delete-vcard-success", (function () {
            window.livewire.emit("refresh"), window.livewire.emit("resetPageTable"), swal({
                icon: "success",
                title: Lang.get("messages.common.deleted") + " !",
                text: "Vcards " + Lang.get("messages.common.has_been_deleted"),
                timer: 3e3,
                buttons: {confirm: Lang.get("messages.common.ok")}
            })
        })), document.addEventListener("bulk-delete-error", (function () {
            displayErrorMessage("Please select one or more records for multiples delete.")
        })), document.addEventListener("bulk-delete-vcard", (function (e) {
            var t = e.detail;
            if (!(t.length > 0)) return displayErrorMessage("Please select one or more records for multiples delete."), !1;
            swal({
                title: "Delete !",
                text: 'Are you sure want to delete selected "Vcards"?',
                buttons: {confirm: "Yes", cancel: "No"},
                reverseButtons: !0,
                icon: sweetAlertIcon
            }).then((function (e) {
                e && window.livewire.emit("deleteVcard", t)
            }))
        })), document.addEventListener("delete-vcard-success", (function () {
            window.livewire.emit("refresh"), window.livewire.emit("resetPageTable"), swal({
                icon: "success",
                title: Lang.get("js.deleted") + " !",
                text: "Vcards " + Lang.get("js.has_been_deleted"),
                timer: 3e3,
                buttons: {confirm: Lang.get("js.ok")}
            })
        })), document.addEventListener("bulk-delete-error", (function () {
            displayErrorMessage("Please select one or more records for multiples delete.")
        })), listenChange("#primary_color", (function () {
            var e = $("#primary_color").val();
            $(".icon-color").attr("fill", e), document.documentElement.style.setProperty("--primary-color", e)
        })), listenChange("#back_color", (function () {
            var e = $("#back_color").val();
            document.documentElement.style.setProperty("--green-100", e)
        })), listenChange("#back_seconds_color", (function () {
            var e = $("#back_seconds_color").val();
            document.documentElement.style.setProperty("--green", e)
        })), listenChange("#cards_back", (function () {
            var e = $("#cards_back").val();
            document.documentElement.style.setProperty("--light", e)
        })), listenChange("#button_text_color", (function () {
            var e = $("#button_text_color").val();
            document.documentElement.style.setProperty("--black", e)
        })), listenChange("#text_description_color", (function () {
            var e = $("#text_description_color").val();
            document.documentElement.style.setProperty("--gray-100", e)
        })), listenChange("#text_label_color", (function () {
            var e = $("#text_label_color").val();
            $(".soical-icon-color").attr("fill", e), document.documentElement.style.setProperty("--white", e)
        })), listenClick(".sticky-btn", (function () {
            1 == $(this).val() ? $("#sticky-dynamic-btn").removeClass("dynamic-sticky-left").addClass("dynamic-sticky-right") : $("#sticky-dynamic-btn").removeClass("dynamic-sticky-right").addClass("dynamic-sticky-left")
        })), window.onload = function () {
            var e = $("#primary_color").val();
            $(".icon-color").attr("fill", e), document.documentElement.style.setProperty("--primary-color", e);
            var t = $("#back_color").val();
            document.documentElement.style.setProperty("--green-100", t);
            var a = $("#back_seconds_color").val();
            document.documentElement.style.setProperty("--green", a);
            var n = $("#button_text_color").val();
            document.documentElement.style.setProperty("--black", n);
            var r = $("#cards_back").val();
            document.documentElement.style.setProperty("--light", r);
            var i = $("#text_description_color").val();
            document.documentElement.style.setProperty("--gray-100", i);
            var s = $("#text_label_color").val();
            $(".soical-icon-color").attr("fill", s), document.documentElement.style.setProperty("--white", s)
        }
    })(), (() => {
        function e(e) {
            7 === e ? $("#checkAllPermission").prop("checked", !0) : $("#checkAllPermission").prop("checked", !1)
        }

        $(".permission:checkbox:checked").length && e($(".permission:checkbox:checked").length);
        $(document).on("click", "#checkAllPermission", (function () {
            $("#checkAllPermission").is(":checked") ? $(".permission").each((function () {
                $(this).prop("checked", !0)
            })) : $(".permission").each((function () {
                $(this).prop("checked", !1)
            }))
        })), $(document).on("click", ".form-check", (function () {
            e($(".permission:checkbox:checked").length)
        }))
    })(), listen("click", ".email-subscribe-delete-btn", (function (e) {
        var t = $(e.currentTarget).attr("data-id"), a = route("email.sub.destroy", {emailSubscription: t});
        deleteItem(a, Lang.get("js.subscriptions"))
    })), (() => {
        var e, t;

        function a() {
            document.getElementById("phoneNumber").setAttribute("value", e), document.getElementById("prefix_code").setAttribute("value", "+" + t)
        }

        document.addEventListener("turbo:load", (function () {
            if (function () {
                if (!$("#termConditionId").length || !$("#privacyPolicyId").length) return;
                quill1 = new Quill("#termConditionId", {
                    modules: {toolbar: [[{header: [1, 2, !1]}], ["bold", "italic", "underline"], ["image", "code-block"]]},
                    placeholder: Lang.get("js.term_condition").replace(/&amp;/g, "&"),
                    theme: "snow"
                }), quill1.on("text-change", (function (e, t, a) {
                    0 === quill1.getText().trim().length && quill1.setContents([{insert: " "}])
                })), quill2 = new Quill("#privacyPolicyId", {
                    modules: {toolbar: [[{header: [1, 2, !1]}], ["bold", "italic", "underline"], ["image", "code-block"]]},
                    placeholder: Lang.get("js.privacy_policy"),
                    theme: "snow"
                }), quill2.on("text-change", (function (e, t, a) {
                    0 === quill2.getText().trim().length && quill2.setContents([{insert: ""}])
                }));
                var e = document.createElement("textarea");
                e.innerHTML = $("#termConditionData").val(), quill1.root.innerHTML = e.value, e.innerHTML = $("#privacyPolicyData").val(), quill2.root.innerHTML = e.value, listenSubmit("#TermsConditions", (function () {
                    var e = document.createElement("textarea"), t = quill1.root.innerHTML;
                    e.innerHTML = t;
                    var a = quill2.root.innerHTML;
                    0 === quill1.getText().trim().length && (t = ""), 0 === quill2.getText().trim().length && (a = ""), $("#termData").val(JSON.stringify(t)), $("#privacyData").val(JSON.stringify(a))
                }))
            }(), function () {
                if (!$("#manualPaymentGuideId").length) return;
                quill = new Quill("#manualPaymentGuideId", {
                    modules: {toolbar: [[{header: [1, 2, 3, 4, 5, 6, !1]}], ["bold", "italic", "underline", "strike"], ["blockquote", "code-block"], [{list: "ordered"}, {list: "bullet"}], [{script: "sub"}, {script: "super"}], [{indent: "-1"}, {indent: "+1"}], [{direction: "rtl"}], [{color: []}, {background: []}], [{font: []}], [{align: []}], ["image", "code-block"]]},
                    placeholder: Lang.get("js.manual_payment_guide"),
                    theme: "snow"
                }), quill.on("text-change", (function (e, t, a) {
                    0 === quill.getText().trim().length && quill.setContents([{insert: ""}])
                }));
                var e = document.createElement("textarea");
                e.innerHTML = $("#manualPaymentGuideData").val(), quill.root.innerHTML = e.value, listenSubmit("#SuperAdminCredentialsSettings", (function () {
                    var e = document.createElement("textarea"), t = quill.root.innerHTML;
                    e.innerHTML = t, 0 === quill.getText().trim().length && (t = ""), $("#guideData").val(t)
                })), listenSubmit("#UserCredentialsSettings", (function () {
                    var e = document.createElement("textarea"), t = quill.root.innerHTML;
                    e.innerHTML = t, 0 === quill.getText().trim().length && (t = ""), $("#guideData").val(t)
                }))
            }(), !$("#createSetting").length) return;
            document.getElementById("createSetting").addEventListener("reset", a), e = document.getElementById("phoneNumber").value, t = document.getElementById("prefix_code").value;
            var n = document.querySelector("#defaultCountryData"), r = window.intlTelInput(n, {
                initialCountry: defaultCountryCodeValue,
                separateDialCode: !0,
                geoIpLookup: function (e, t) {
                    $.get("https://ipinfo.io", (function () {
                    }), "jsonp").always((function (t) {
                        var a = t && t.country ? t.country : "";
                        e(a)
                    }))
                },
                utilsScript: "../../public/assets/js/inttel/js/utils.min.js"
            }), i = r.selectedCountryData.name + "+" + r.selectedCountryData.dialCode;
            $("#defaultCountryData").val(i)
        })), listenKeyup("#defaultCountryData", (function () {
            var e = $(this).val().slice(0, -1) + "";
            return $(this).val(e)
        })), listenClick(".iti__standard,.iti__preferred", (function () {
            $("#defaultCountryData").val($(this).text()), $("#defaultCountryCode").val($(this).attr("data-country-code"))
        })), listenChange("#appLogo", (function () {
            displayPhoto(this, "#appLogoPreview")
        })), listenClick(".cancel-app-logo", (function () {
            $("#appLogoPreview").attr("src", defaultAppLogoUrl)
        })), listenChange("#favicon", (function () {
            displayPhoto(this, "#faviconPreview", !0)
        })), listenClick(".cancel-favicon", (function () {
            $("#faviconPreview").attr("src", defaultFaviconUrl)
        })), listenSubmit("#createSetting", (function () {
            return "" == $.trim($("#settingAppName").val()) ? (displayErrorMessage(Lang.get("js.app_name_required")), !1) : (e = $("#settingEmail").val(), /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(e) ? "" == $.trim($("#phoneNumber").val()) ? (displayErrorMessage(Lang.get("js.phone_number_required")), !1) : "" == $.trim($("#settingPlanExpireNotification").val()) ? (displayErrorMessage(Lang.get("js.plan_expire_notification")), !1) : "" == $.trim($("#settingAddress").val()) ? (displayErrorMessage(Lang.get("js.address_field")), !1) : ($("#paypal_payment").prop("checked") && $(""), void ($("#defaultCountryCode").val() != defaultCountryCodeValue && $("#createSetting")[0].submit())) : (displayErrorMessage(Lang.get("js.enter_valid_email")), !1));
            var e
        })), listenChange("#mobileValidation", (function (e) {
            e.preventDefault(), $.ajax({
                url: route("update.mobile.validation"), method: "POST", success: function (e) {
                    window.location.reload()
                }
            })
        })), listen("click", ".stripe-enable", (function () {
            $(".stripe-div").toggleClass("d-none")
        })), listen("click", ".paystack-enable", (function () {
            $(".paystack-div").toggleClass("d-none")
        })), listen("click", ".phonepe-enable", (function () {
            $(".phonepe-div").toggleClass("d-none")
        })), listen("click", ".paypal-enable", (function () {
            $(".paypal-div").toggleClass("d-none")
        })), listen("click", "#paypal_payment", (function () {
            console.log("true"), $(".paypal-cred").toggleClass("d-none")
        })), listen("click", "#stripe_payment", (function () {
            $(".stripe-cred").toggleClass("d-none")
        })), listen("click", "#phonepe_payment", (function () {
            $(".phonepe-cred").toggleClass("d-none")
        })), listen("click", "#paystack_payment", (function () {
            $(".paystack-cred").toggleClass("d-none")
        })), listen("click", "#manually_payment", (function () {
            $(".manually-cred").toggleClass("d-none")
        })), $(document).on("click", "#userManualPaymentSetting", (function () {
            $(".user-manually-cred").toggleClass("d-none", !this.checked)
        })), listen("click", "#razorpay_payment", (function () {
            $(".razorpay-cred").toggleClass("d-none")
        })), listen("click", "#rozorpayEnable", (function () {
            $(".razorpay-cred").toggleClass("d-none")
        })), listen("submit", "#UserCredentialsSettings", (function () {
            if ($("#stripeEnable").prop("checked")) {
                if (0 === $("#stripeKey").val().trim().length) return displayErrorMessage(Lang.get("js.stripe_secret")), !1;
                if (0 === $("#stripeSecret").val().trim().length) return displayErrorMessage(Lang.get("js.stripe_secret")), !1
            }
            if ($("#paystackEnable").prop("checked")) {
                if (0 === $("#paystackKey").val().trim().length) return displayErrorMessage(Lang.get("js.paystack_key")), !1;
                if (0 === $("#paystackSecret").val().trim().length) return displayErrorMessage(Lang.get("js.paystack_secret")), !1
            }
            if ($("#paypalEnable").prop("checked")) {
                if (0 === $("#paypalKey").val().trim().length) return displayErrorMessage(Lang.get("js.paypal_key")), !1;
                if (0 === $("#paypalSecret").val().trim().length) return displayErrorMessage(Lang.get("js.paypal_secret")), !1;
                if (0 === $("#paypalMode").val().trim().length) return displayErrorMessage(Lang.get("js.paypal_mode")), !1
            }
            if ($("#rozorpayEnable").prop("checked")) {
                if (0 === $("#razorpayKey").val().trim().length) return displayErrorMessage(Lang.get("js.razorpay_key")), !1;
                if (0 === $("#razorpaySecret").val().trim().length) return displayErrorMessage(Lang.get("js.razorpay_secret")), !1
            }
            if ($("#phonepeEnable").prop("checked")) {
                if (0 === $("#phonepeMerchantId").val().trim().length) return displayErrorMessage(Lang.get("js.phonepe_merchant_id_required")), !1;
                if (0 === $("#phonepeMerchantUserId").val().trim().length) return displayErrorMessage(Lang.get("js.phonepe_merchant_user_id_required")), !1;
                if (0 === $("#phonepeEnv").val().trim().length) return displayErrorMessage(Lang.get("js.phonepe_env_required")), !1;
                if (0 === $("#phonepeSaltKey").val().trim().length) return displayErrorMessage(Lang.get("js.phonepe_salt_key_required")), !1;
                if (0 === $("#phonepeSaltIndex").val().trim().length) return displayErrorMessage(Lang.get("js.phonepe_salt_index_required")), !1
            }
            processingBtn("#UserCredentialsSettings", "#userCredentialSettingBtn", "loading"), $("#userCredentialSettingBtn").prop("disabled", !0)
        })), listenChange("#appLogo", (function () {
            if (-1 === $.inArray($(this).val().split(".").pop().toLowerCase(), ["jpeg", "jpg", "png", "gif", "bmp"])) return displayErrorMessage("The app logo must be a file of type: jpg, jpeg, png, gif, bmp."), $(this).val(""), !1
        })), listenChange("#favicon", (function () {
            if (-1 === $.inArray($(this).val().split(".").pop().toLowerCase(), ["jpeg", "jpg", "png", "gif", "bmp"])) return displayErrorMessage("The favicon must be a file of type: jpg, jpeg, png, gif, bmp."), $(this).val(""), !1
        }))
    })(), (() => {
        function e(t) {
            return e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }, e(t)
        }

        function t(t, a, n) {
            return (a = function (t) {
                var a = function (t, a) {
                    if ("object" !== e(t) || null === t) return t;
                    var n = t[Symbol.toPrimitive];
                    if (void 0 !== n) {
                        var r = n.call(t, a || "default");
                        if ("object" !== e(r)) return r;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === a ? String : Number)(t)
                }(t, "string");
                return "symbol" === e(a) ? a : String(a)
            }(a)) in t ? Object.defineProperty(t, a, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[a] = n, t
        }

        document.addEventListener("turbo:load", (function () {
            (function () {
                if (!$("#dayData").length) return;
                $("#dayData").click()
            })(), function () {
                if (!$("#appointmentReport").length) return;
                $.ajax({
                    url: route("appointmentsData.data"), type: "GET", success: function (e) {
                        $(document).find("#appointmentReport").children().remove(), "" != e.data.data ? $.each(e.data.data, (function (e, t) {
                            var a = [{
                                vcardname: t.vcard.name,
                                name: t.name,
                                phone: isEmpty(t.phone) ? "N/A" : "+" + t.phone,
                                email: t.email
                            }];
                            $(document).find("#appointmentReport").append(prepareTemplateRender("#appointmentTemplate", a))
                        })) : $(document).find("#appointmentReport").append('\n                    <tr class="text-center">\n                        <td colspan="5" class="text-muted fw-bold">'.concat(noData, "</td>\n                    </tr>"))
                    }, error: function (e) {
                        displayErrorMessage(e.responseJSON.message)
                    }
                })
            }(), l(), function () {
                if (!$("#incomeChartCanvas").length) return;
                u = $("#incomeChartCanvas"), p(), g()
            }()
        }));
        var a = "line", n = !1, r = "", i = "";
        listenClick("#dayData", (function (e) {
            e.preventDefault(), $.ajax({
                url: route("usersData.dashboard"),
                type: "GET",
                data: {day: "day"},
                success: function (e) {
                    e.success && ($("#dailyReport").empty(), $(document).find("#month").removeClass("show active"), $(document).find("#week").removeClass("show active"), $(document).find("#day").addClass("show active"), "" != e.data.users.data ? $.each(e.data.users.data, (function (e, t) {
                        var a = [{
                            name: t.first_name + " " + t.last_name,
                            email: t.email,
                            contact: isEmpty(t.contact) ? "N/A" : "+" + t.region_code + " " + t.contact,
                            registered: moment.parseZone(t.created_at).format(getFormattedDateTime(userDateFormate, 1) + " hh:mm A")
                        }];
                        $(document).find("#dailyReport").append(prepareTemplateRender("#sadminDashboardTemplate", a))
                    })) : $(document).find("#dailyReport").append('\n                    <tr class="text-center">\n                        <td colspan="5" class="text-muted fw-bold">'.concat(noData, "</td>\n                    </tr>")))
                },
                error: function (e) {
                    displayErrorMessage(e.responseJSON.message)
                }
            })
        })), listenClick("#weekData", (function (e) {
            e.preventDefault(), $.ajax({
                url: route("usersData.dashboard"),
                type: "GET",
                data: {week: "week"},
                success: function (e) {
                    e.success && ($("#weeklyReport").empty(), $(document).find("#month").removeClass("show active"), $(document).find("#week").addClass("show active"), $(document).find("#day").removeClass("show active"), "" != e.data.users.data ? $.each(e.data.users.data, (function (e, t) {
                        var a = [{
                            name: t.first_name + " " + t.last_name,
                            email: t.email,
                            contact: isEmpty(t.contact) ? "N/A" : "+" + t.region_code + " " + t.contact,
                            registered: moment.parseZone(t.created_at).format(getFormattedDateTime(userDateFormate, 1) + " hh:mm A")
                        }];
                        $(document).find("#weeklyReport").append(prepareTemplateRender("#sadminDashboardTemplate", a))
                    })) : $(document).find("#weeklyReport").append('\n                    <tr class="text-center">\n                        <td colspan="5" class="text-muted fw-bold">'.concat(noData, "</td>\n                    </tr>")))
                },
                error: function (e) {
                    displayErrorMessage(e.responseJSON.message)
                }
            })
        })), listenClick("#monthData", (function (e) {
            e.preventDefault(), $.ajax({
                url: route("usersData.dashboard"),
                type: "GET",
                data: {month: "month"},
                success: function (e) {
                    e.success && ($("#monthlyReport").empty(), $(document).find("#month").addClass("show active"), $(document).find("#week").removeClass("show active"), $(document).find("#day").removeClass("show active"), "" != e.data.users.data ? $.each(e.data.users.data, (function (e, t) {
                        var a = [{
                            name: t.first_name + " " + t.last_name,
                            email: t.email,
                            contact: isEmpty(t.contact) ? "N/A" : "+" + t.region_code + " " + t.contact,
                            registered: moment.parseZone(t.created_at).format(getFormattedDateTime(userDateFormate, 1) + " hh:mm A")
                        }];
                        $(document).find("#monthlyReport").append(prepareTemplateRender("#sadminDashboardTemplate", a))
                    })) : $(document).find("#monthlyReport").append('\n                    <tr class="text-center">\n                        <td colspan="5" class="text-muted fw-bold">'.concat(noData, "</td>\n                    </tr>")))
                },
                error: function (e) {
                    displayErrorMessage(e.responseJSON.message)
                }
            })
        }));
        var s = "", o = "", l = function () {
            var e;
            if ($("#dashboardTimeRange").length) {
                var a = $("#dashboardTimeRange"), n = moment();
                s = moment().subtract("7", "days"), o = n.clone().endOf("days"), a.on("apply.daterangepicker", (function (e, t) {
                    !0, s = t.startDate, o = t.endDate, d(s.format("YYYY-MM-D  H:mm:ss"), o.format("YYYY-MM-D  H:mm:ss"))
                })), window.cb = function (e, t) {
                    a.find("span").html(e.format("MMM D, YYYY") + " - " + t.format("MMM D, YYYY"))
                }, a.daterangepicker({
                    startDate: s,
                    endDate: o,
                    opens: "left",
                    showDropdowns: !0,
                    autoUpdateInput: !1,
                    locale: {
                        customRangeLabel: Lang.get("js.custom"),
                        applyLabel: Lang.get("js.apply"),
                        cancelLabel: Lang.get("js.cancel"),
                        fromLabel: Lang.get("js.from"),
                        toLabel: Lang.get("js.to"),
                        monthNames: [Lang.get("js.jan"), Lang.get("js.feb"), Lang.get("js.mar"), Lang.get("js.apr"), Lang.get("js.may"), Lang.get("js.jun"), Lang.get("js.jul"), Lang.get("js.aug"), Lang.get("js.sep"), Lang.get("js.oct"), Lang.get("js.nov"), Lang.get("js.dec")],
                        daysOfWeek: [Lang.get("js.sun"), Lang.get("js.mon"), Lang.get("js.tue"), Lang.get("js.wed"), Lang.get("js.thu"), Lang.get("js.fri"), Lang.get("js.sat")]
                    },
                    ranges: (e = {}, t(e, Lang.get("js.this_week"), [moment().startOf("week"), moment().endOf("week")]), t(e, Lang.get("js.last_week"), [moment().startOf("week").subtract(7, "days"), moment().startOf("week").subtract(1, "days")]), e)
                }, cb), cb(s, o), d(s.format("YYYY-MM-D H:mm:ss"), o.format("YYYY-MM-D H:mm:ss"))
            }
        }, d = function (e, t) {
            $.ajax({
                type: "GET",
                url: route("dashboard.vcard.chart"),
                dataType: "json",
                data: {start_date: e, end_date: t},
                success: function (e) {
                    r = e, c(e)
                },
                cache: !1
            })
        }, c = function (e) {
            var t = $("#dashboardWeeklyUserBarChartContainer");
            if (t.length) {
                t.html(""), $("canvas#dashboardWeeklyUserBarChart").remove(), t.append('<canvas id="dashboardWeeklyUserBarChart" height="275" width="905" style="display: block; width: 905px; height: 500px;"></canvas>');
                var r = e.data, i = {labels: r.weeklyLabels, datasets: r.data}, s = $("#dashboardWeeklyUserBarChart");
                new Chart(s, {
                    type: a,
                    data: i,
                    options: {
                        plugins: {legend: {display: !1}},
                        scales: {y: {stacked: n, ticks: {min: 0, precision: 0}, min: 0}, x: {stacked: n}}
                    }
                })
            }
        };
        listenClick("#dashboardChangeChart", (function () {
            "bar" === a ? (a = "line", n = !1, $(".chart").removeClass("fa-chart-line"), $(".chart").addClass("fa-chart-column"), c(r)) : (a = "bar", n = !0, $(".chart").addClass("fa-chart-line"), $(".chart").removeClass("fa-chart-column"), c(r))
        })), window.statiscticsColors = ["rgb(245, 158, 11)", "rgb(77, 124, 15)", "rgb(254, 199, 2)", "rgb(80, 205, 137)", "rgb(16, 158, 247)", "rgb(241, 65, 108)", "rgb(80, 205, 137)", "rgb(245, 152, 280)", "rgb(13, 148, 136)", "rgb(59, 130, 246)"];
        var u = "";
        var p = function () {
            $.ajax({
                type: "post", url: route("dashboard.plan-chart"), dataType: "json", success: function (e) {
                    h(e.data.breakDown, e.data.labels)
                }, cache: !1
            })
        }, h = function (e, t) {
            if ($("#dashboardPlanPieChart").length) {
                var a = document.getElementById("dashboardPlanPieChart").getContext("2d");
                new Chart(a, {
                    type: "pie",
                    options: {
                        responsive: !0,
                        maintainAspectRatio: !1,
                        responsiveAnimationDuration: 500,
                        plugins: {
                            tooltip: {
                                callbacks: {
                                    label: function (e) {
                                        return t[e.dataIndex] + " " + e.formattedValue + "%"
                                    }
                                }
                            }
                        }
                    },
                    data: {datasets: [{data: e, backgroundColor: statiscticsColors}]}
                })
            }
        }, m = "line", g = function () {
            $.ajax({
                type: "post", url: route("dashboard.income-chart"), dataType: "json", success: function (e) {
                    u.empty(), i = e.data, f(i)
                }, cache: !1
            })
        }, f = function (e) {
            u.empty(), u.append('<canvas id="dashboardIncomeChart" class="mh-350px pt-0"></canvas>');
            var t = document.getElementById("dashboardIncomeChart").getContext("2d");
            new Chart(t, {
                type: m,
                options: {
                    responsive: !0,
                    maintainAspectRatio: !1,
                    responsiveAnimationDuration: 500,
                    plugins: {
                        legend: {display: !1}, tooltip: {
                            callbacks: {
                                label: function (e) {
                                    var t = e.dataset.label || "";
                                    return t && (t += ": "), null !== e.parsed.y && (t += getCurrencyAmount(e.parsed.y.toFixed(2), getCurrencyCode)), t
                                }
                            }
                        }
                    },
                    scales: {
                        y: {title: {display: !0, text: Lang.get("js.amount")}, min: 0},
                        x: {title: {display: !0, text: Lang.get("js.month")}}
                    }
                },
                data: {labels: e.labels, datasets: e.breakDown}
            }).canvas.parentNode.style.height = "334px"
        };
        listenClick("#dashboardChangeIncomeChart", (function () {
            "bar" === m ? (m = "line", $(".income-chart").removeClass("fa-chart-line"), $(".income-chart").addClass("fa-chart-bar"), f(i)) : (m = "bar", $(".income-chart").addClass("fa-chart-line"), $(".income-chart").removeClass("fa-chart-bar"), f(i))
        }))
    })(), (() => {
        listenClick(".user-is-verified", (function () {
            var e = $(this).data("id"), t = route("users.email-verified", e);
            $.ajax({
                type: "get", url: t, success: function (e) {
                    Livewire.emit("refresh"), displaySuccessMessage(e.message)
                }
            })
        })), listenClick(".user-active", (function () {
            var e = $(this).data("id"), t = route("users.status", e);
            $.ajax({
                type: "get", url: t, success: function (e) {
                    Livewire.emit("refresh"), displaySuccessMessage(e.message)
                }
            })
        })), listenClick(".vcards-verified", (function () {
            var e = $(this).data("id"), t = route("vcard.verified", e);
            $.ajax({
                type: "get", url: t, success: function (e) {
                    Livewire.emit("refresh"), displaySuccessMessage(e.message)
                }, error: function (e) {
                    displayErrorMessage(e.responseJSON.message)
                }
            })
        })),

            listenClick(".card-category-delete-btn", (function (e) {
                var t = $(e.currentTarget).data("id"),
                    a = "superAdmin" == $(e.currentTarget).data("name") ? Lang.get("js.admin") : Lang.get("Card.Category");
                deleteItem(route("card.category.destroy", t), a)
            })),

            listenClick(".nfc-category-delete-btn", (function (e) {
                var t = $(e.currentTarget).data("id"),
                    a = "superAdmin" == $(e.currentTarget).data("name") ? Lang.get("js.admin") : Lang.get("Card.Category");
                deleteItem(route("sadmin.nfc.category.destroy", t), a)
            })),

            listenClick(".template-delete-btn", (function (e) {
                var t = $(e.currentTarget).data("id"),
                    a = "superAdmin" == $(e.currentTarget).data("name") ? Lang.get("js.admin") : Lang.get("Card.Category");
                deleteItem(route("template.destroy", t), a)
            })),

            listenClick(".user-delete-btn", (function (e) {
            var t = $(e.currentTarget).data("id"),
                a = "superAdmin" == $(e.currentTarget).data("name") ? Lang.get("js.admin") : Lang.get("js.user");
            deleteItem(route("users.destroy", t), a)
        })), listenClick(".admin-delete-btn", (function (e) {
            var t = $(e.currentTarget).data("id"),
                a = "superAdmin" == $(e.currentTarget).data("name") ? Lang.get("js.admin") : Lang.get("js.user");
            deleteItem(route("admins.destroy", t), a)
        })), listen("contextmenu", ".user-impersonate", (function (e) {
            return e.preventDefault(), !1
        }));
        var e = !1;

        function t(e) {
            return /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(e)
        }

        listen("keyup keydown", (function (t) {
            e = t.ctrlKey
        })), listenClick(".user-impersonate", (function () {
            if (e) return !1;
            var t = $(this).data("id"), a = document.createElement("a");
            a.setAttribute("href", route("impersonate", t)), a.setAttribute("data-turbo", !1), document.body.appendChild(a), a.click(), document.body.removeChild(a), $(".user-impersonate").prop("disabled", !0)
        })), listenSubmit("#userCreateForm", (function () {
            if ("" == $.trim($("#userFirstName").val())) return displayErrorMessage(Lang.get("js.first_name_required")), !1;
            if ("" == $.trim($("#userLastName").val())) return displayErrorMessage(Lang.get("js.last_name_required")), !1;
            if (!t($("#email").val())) return displayErrorMessage(Lang.get("js.enter_valid_email")), !1;
            var e = $("#password").val();
            return "" == $.trim(e) ? (displayErrorMessage(Lang.get("js.passwords")), !1) : e.length < 8 ? (displayErrorMessage(Lang.get("js.password_character")), !1) : e !== $("#cPassword").val() ? (displayErrorMessage(Lang.get("js.password_must_match")), !1) : void 0
        })), listenSubmit("#userEditForm", (function () {
            return "" == $.trim($("#userFirstName").val()) ? (displayErrorMessage(Lang.get("js.first_name_required")), !1) : t($("#email").val()) ? "" == $.trim($("#userLastName").val()) ? (displayErrorMessage(Lang.get("js.last_name_required")), !1) : void 0 : (displayErrorMessage(Lang.get("js.enter_valid_email")), !1)
        })), listenClick(".user-change-password", (function () {
            var e = $(this).attr("data-id");
            $("#changePasswordUserId").val(e), $("#changeUserPasswordModal").modal("show").appendTo("body")
        })), listenClick("#UserPasswordChangeBtn", (function () {
            var e = $("#changePasswordUserId").val();
            $(this).attr("disabled", !0), $.ajax({
                url: route("changePassword", e),
                type: "PUT",
                data: $("#changeUserPasswordForm").serialize(),
                success: function (e) {
                    $("#changeUserPasswordModal").modal("hide"), displaySuccessMessage(e.message), $("#UserPasswordChangeBtn").attr("disabled", !1)
                },
                error: function (e) {
                    $("#UserPasswordChangeBtn").attr("disabled", !1), displayErrorMessage(e.responseJSON.message)
                }
            })
        })), listenHiddenBsModal("#changeUserPasswordModal", (function () {
            $("#changeUserPasswordForm")[0].reset()
        })), listen("change", "#userStatus", (function () {
            hideDropdownManually($("#userFilterBtn"), $("#userFilter")), window.livewire.emit("statusFilter", $(this).val())
        })), listen("click", "#userResetFilter", (function () {
            $("#userStatus").val(2).change(), window.livewire.emit("statusFilter", ""), hideDropdownManually($("#userFilterBtn"), $("#userFilter"))
        }))
    })(), listenChange("#profile", (function () {
        isValidFile($(this), "#profileValidationErrors") ? displayPhoto(this, "#profilePreview") : $("#profilePreview").attr("src", defaultProfileUrl)
    })), listenClick(".cancel-profile", (function () {
        $("#profilePreview").attr("src", defaultProfileUrl)
    })), (() => {
        function deleteVcardAjax(url, header) {
            var callFunction = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
            $.ajax({
                url, type: "DELETE", dataType: "json", success: function success(obj) {
                    obj.success && Livewire.emit("refresh"), obj.data.make_vcard ? $(".create-vcard-btn").removeClass("d-none") : $(".create-vcard-btn").addClass("d-none"), Swal.fire({
                        title: Lang.get("js.deleted") + " !",
                        text: header + Lang.get("js.has_been_deleted"),
                        icon: "success",
                        timer: 2e3,
                        confirmButtonColor: "#009ef7"
                    }), callFunction && eval(callFunction)
                }, error: function (e) {
                    Swal.fire({
                        title: "Error",
                        icon: "error",
                        text: e.responseJSON.message,
                        type: "error",
                        timer: 5e3,
                        confirmButtonColor: "#009ef7"
                    })
                }
            })
        }

        function duplicateItemAjax(e, t) {
            $.ajax({
                url: t, type: "POST", dataType: "json", success: function (e) {
                    e.success && (window.livewire.emit("resetPageTable"), livewire.emit("refresh")), swal({
                        icon: "success",
                        title: Lang.get("js.duplicate_vcard"),
                        text: Lang.get("js.duplicate_vcard_create"),
                        timer: 2e3,
                        buttons: {confirm: Lang.get("js.ok")}
                    })
                }, error: function (e) {
                    swal({title: "Error", icon: "error", text: e.responseJSON.message, type: "error", timer: 4e3})
                }
            })
        }

        function loadVcardQRCode() {
            setTimeout((function () {
                $(".vcard-qr-code-btn").each((function () {
                    var e = this, t = $(this).parent().find("svg")[0], a = t.viewBox.baseVal, n = a.x, r = a.y,
                        i = a.width, s = a.height, o = new Blob([t.outerHTML], {type: "image/svg+xml"}),
                        l = URL.createObjectURL(o), d = document.createElement("img");
                    d.src = l, d.addEventListener("load", (function () {
                        var t = document.createElement("canvas");
                        t.width = i, t.height = s, t.getContext("2d").drawImage(d, n, r, i, s), $(e).attr("href", t.toDataURL()), URL.revokeObjectURL(l)
                    }))
                }))
            }), 200)
        }

        $(document).on("click", ".vcardStatus", (function () {
            var e = $(this).data("id"), t = route("vcard.status", e);
            $.ajax({
                type: "get", url: t, success: function (e) {
                    displaySuccessMessage(e.message), Livewire.emit("refresh")
                }
            })
        })), listen("click", ".vcard_delete-btn", (function (e) {
            var t = $(e.currentTarget).data("id"), a = route("vcards.destroy", {vcard: t});
            deleteItem(a, "VCard")
        })), window.deleteVcard = function (e, t) {
            var a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
            Swal.fire({
                title: Lang.get("js.delete") + " !",
                text: Lang.get("js.are_you_sure") + '"' + t + '" ?',
                type: "warning",
                icon: "warning",
                showCancelButton: !0,
                closeOnConfirm: !1,
                showLoaderOnConfirm: !0,
                cancelButtonText: Lang.get("js.no"),
                confirmButtonText: Lang.get("js.yes"),
                confirmButtonColor: "#009ef7"
            }).then((function (n) {
                n.isConfirmed && deleteVcardAjax(e, t, a)
            }))
        }, listen("click", ".duplicate-vcard-btn", (function (e) {
            var t = $(e.currentTarget).data("id");
            swal({
                title: Lang.get("js.duplicate"),
                text: Lang.get("js.are_you_sure_dublicate_vcard"),
                buttons: {confirm: Lang.get("js.duplicate"), cancel: Lang.get("js.no")},
                reverseButtons: !0,
                icon: "warning"
            }).then((function (e) {
                e && duplicateItemAjax(t, route("duplicate.vcard", t))
            }))
        })), document.addEventListener("turbo:load", loadVcardQRCode), listen("change", "#verified", (function () {
            window.livewire.emit("verifiedFilter", $(this).val()), hideDropdownManually($("#vcardFilterBtn"), $("#userFilter"))
        })), listen("change", "#status", (function () {
            window.livewire.emit("statusFilter", $(this).val()), hideDropdownManually($("#vcardFilterBtn"), $("#userFilter"))
        })), listen("click", "#vcardResetFilter", (function () {
            $("#verified").val(2).change(), $("#status").val(2).change(), window.livewire.emit("verifiedFilter", ""), window.livewire.emit("statusFilter", ""), hideDropdownManually($("#vcardFilterBtn"), $("#userFilter"))
        })), listen("click", "#vcardFilterBtn", (function () {
            openDropdownManually($("#vcardFilterBtn"), $("#userFilter"))
        }))
    })(), listenClick(".copy-clipboard", (function () {
        var e = $(this).data("id"), t = $("<input>");
        $("body").append(t), t.val($("#vcardUrl" + e).text()).select(), document.execCommand("copy"), t.remove(), displaySuccessMessage(Lang.get("js.copied_successfully"))
    })), (() => {
        "use strict";
        listenChange("#profileImg", (function () {
            isValidFile($(this), "#profileImageValidationErrors") ? displayPhoto(this, "#profilePreview") : $("#profilePreview").attr("src", defaultProfileUrl)
        })), listenClick(".cancel-profile", (function () {
            $("#profilePreview").attr("src", defaultProfileUrl)
        })), listenClick(".cancel-cover", (function () {
            $("#coverPreview").attr("src", defaultCoverUrl)
        })), document.addEventListener("DOMContentLoaded", (function () {
            var e = document.getElementById("coverImg");
            e && e.addEventListener("change", (function () {
                var e = this.files[0], t = e.type;
                if (-1 !== $.inArray(t, ["video/mp4", "video/mpeg", "video/quicktime", "video/x-msvideo"])) $("#coverPreview").css("background-image", "url(" + defaultVideoCoverImg + ")"); else if (-1 !== $.inArray(t, ["image/jpeg", "image/png", "image/jpg"])) {
                    var a = new FileReader;
                    a.onload = function (e) {
                        $("#coverPreview").css("background-image", "url(" + e.target.result + ")")
                    }, a.readAsDataURL(e)
                }
            }))
        })), listenClick(".theme-img-radio ", (function () {
            $(".theme-img-radio").removeClass("img-border"), $(this).addClass("img-border"), $("#themeInput").val($(this).attr("data-id"))
        })), listenClick(".img-radio ", (function () {
            $(".img-radio").removeClass("img-border"), $(this).addClass("img-border"), $("#templateId").val($(this).attr("data-id"))
        })), listenClick(".template-save", (function () {
            var e = $("#templateId").val();
            if (isEmpty(e)) return displayErrorMessage(Lang.get("js.choose_one_template")), !1
        })), listenChange('select[name^="startTime"]', (function (e) {
            var t = $(this)[0].selectedIndex,
                a = $(this).closest(".buisness_end").find('select[name^="endTime"] option');
            a.eq(t + 1).prop("selected", !0).trigger("change"), a.each((function (e) {
                e <= t ? $(this).attr("disabled", !0) : $(this).attr("disabled", !1)
            }))
        })), document.addEventListener("turbo:load", (function () {
            if (!$("#vcardCreateEditIsTrue").length) return;
            $("#vcardCreateEditIsTrue").length && $("#vcardCreateEditIsTrue").val() && $('select[name^="startTime"]').each((function () {
                var e = $(this)[0].selectedIndex,
                    t = $(this).closest(".buisness_end").find('select[name^="endTime"] option:selected')[0].index,
                    a = $(this).closest(".buisness_end").find('select[name^="endTime"] option');
                e >= t && a.eq(e + 1).prop("selected", !0).trigger("change"), a.each((function (t) {
                    t <= e ? $(this).attr("disabled", !0) : $(this).attr("disabled", !1)
                }))
            }));
            if ($("#privacyPolicyQuill").length) {
                window.quillPrivacyPolicy = new Quill("#privacyPolicyQuill", {
                    modules: {toolbar: [[{header: [1, 2, !1]}], ["bold", "italic", "underline"]]},
                    theme: "snow",
                    placeholder: Lang.get("js.privacy_policy")
                }), quillPrivacyPolicy.on("text-change", (function (e, t, a) {
                    0 === quillPrivacyPolicy.getText().trim().length && quillPrivacyPolicy.setContents([{insert: ""}])
                }));
                var e = document.createElement("textarea");
                e.innerHTML = $("#privacyData").val(), quillPrivacyPolicy.root.innerHTML = e.value
            }
            if ($("#termConditionQuill").length) {
                window.termConditionQuill = new Quill("#termConditionQuill", {
                    modules: {toolbar: [[{header: [1, 2, !1]}], ["bold", "italic", "underline"]]},
                    placeholder: Lang.get("js.term_condition").replace(/&amp;/g, "&"),
                    theme: "snow"
                }), termConditionQuill.on("text-change", (function (e, t, a) {
                    0 === termConditionQuill.getText().trim().length && termConditionQuill.setContents([{insert: ""}])
                }));
                var t = document.createElement("textarea");
                t.innerHTML = $("#conditionData").val(), termConditionQuill.root.innerHTML = t.value
            }
            if ($("#vcardDescriptionQuill").length) {
                window.quillVcardDescription = new Quill("#vcardDescriptionQuill", {
                    modules: {toolbar: [["bold", "italic", "underline", "strike"], ["blockquote", "code-block"], [{header: [1, 2, 3, 4, 5, 6, !1]}], [{color: []}, {background: []}]]},
                    theme: "snow",
                    placeholder: Lang.get("js.description")
                }), quillVcardDescription.on("text-change", (function (e, t, a) {
                    0 === quillVcardDescription.getText().trim().length && quillVcardDescription.setContents([{insert: ""}])
                }));
                var a = document.createElement("textarea");
                a.innerHTML = $("#vcardDescriptionData").val(), quillVcardDescription.root.innerHTML = a.value
            }
            listenClick("#vcardSaveBtn", (function () {
                var e = quillVcardDescription.root.innerHTML;
                $("#vcardDescriptionData").val(e)
            })), $('select[name^="endTimes"]').each((function () {
                var e = $(this)[0].selectedIndex;
                $(this).closest(".timeSlot").next().find('select[name^="startTimes"] option').each((function (t) {
                    t < e ? $(this).attr("disabled", !0) : $(this).attr("disabled", !1)
                }))
            })), $('select[name^="startTimes"]').each((function () {
                var e = $(this)[0].selectedIndex,
                    t = $(this).closest(".add-slot").find('select[name^="endTimes"] option:selected')[0].index,
                    a = $(this).closest(".add-slot").find('select[name^="endTimes"] option');
                e >= t && a.eq(e + 1).prop("selected", !0).trigger("change"), a.each((function (t) {
                    t <= e ? $(this).attr("disabled", !0) : $(this).attr("disabled", !1)
                }))
            }))
        })), listenClick("#privacyPolicySave", (function () {
            var e = document.createElement("textarea"), t = quillPrivacyPolicy.root.innerHTML;
            if (e.innerHTML = t, "privacy-policy" == $("#privacyPolicyPartName").val()) {
                if (0 === quillPrivacyPolicy.getText().trim().length) return displayErrorMessage(Lang.get("js.privacy_policy")), !1;
                var a = JSON.stringify(t);
                $("#privacyData").val(a.replace(/"/g, ""))
            }
            return !0
        })), listenClick("#termConditionSave", (function () {
            var e = document.createElement("textarea"), t = termConditionQuill.root.innerHTML;
            if (e.innerHTML = t, "term-condition" == $("#termConditionPartName").val()) {
                var a = JSON.stringify(t);
                return $("#conditionData").val(a.replace(/"/g, "")), 0 !== termConditionQuill.getText().trim().length || (displayErrorMessage(Lang.get("js.the_term_conditions")), !1)
            }
        })), listenClick(".add-session-time", (function () {
            var e = 0, t = $(this).data("day");
            $(this).parent().prev().children(".session-times").find(".timeSlot:last-child").length > 0 && (e = $(this).parent().prev().children(".session-times").find(".timeSlot:last-child").children(".add-slot").find('select[name^="endTimes"] option:selected')[0].index);
            var a = $(this).closest(".weekly-content").attr("data-day"), n = $(this),
                r = $(this).closest(".weekly-content");
            $.ajax({
                url: route("get.slot"), data: {day: a}, success: function (a) {
                    r.find(".unavailable-time").remove(), r.find('input[name="checked_week_days[]"').prop("checked", !0).prop("disabled", !1), n.closest(".weekly-content").find(".session-times").append(a.data), r.find('select[data-control="select2"]').select2(), $("#add-session-" + t).parent().prev().children(".session-times").find(".timeSlot:last-child").children(".add-slot").find('select[name^="startTimes"] option').each((function (t) {
                        t < e ? $(this).attr("disabled", !0) : $(this).attr("disabled", !1)
                    }))
                }
            })
        })), listenClick(".deleteBtn", (function () {
            var e = 0;
            ($(this).closest(".timeSlot").prev().length > 0 && (e = $(this).closest(".timeSlot").prev().children(".add-slot").find('select[name^="endTimes"] option:selected')[0].index), 2 === $(this).closest(".weekly-row").find(".session-times").find("select").length) && ($(this).closest(".weekly-row").find('input[name="checked_week_days[]"').prop("checked", !1).prop("disabled", !0), $(this).closest(".weekly-row").children().next().append('<div class="unavailable-time">' + Lang.get("js.unavailable") + "</div>"));
            $(this).closest(".timeSlot").next().children(".add-slot").find('select[name^="startTimes"] option').each((function (t) {
                t <= e ? $(this).attr("disabled", !0) : $(this).attr("disabled", !1)
            })), $(this).parent().siblings(".error-msg").remove(), $(this).parent().closest(".timeSlot").remove(), $(this).parent().remove()
        })), listenChange('select[name^="startTimes"]', (function (e) {
            var t = $(this)[0].selectedIndex, a = $(this).closest(".add-slot").find('select[name^="endTimes"] option'),
                n = $(this).closest(".add-slot").find('select[name^="endTimes"] option:selected')[0].index;
            t >= n && a.eq(t + 1).prop("selected", !0).trigger("change"), a.each((function (e) {
                e <= t ? $(this).attr("disabled", !0) : $(this).attr("disabled", !1)
            }))
        })), listenChange('select[name^="endTimes"]', (function (e) {
            var t = $(this)[0].selectedIndex;
            $(this).closest(".timeSlot").next().find('select[name^="startTimes"] option').each((function (e) {
                e <= t ? $(this).attr("disabled", !0) : $(this).attr("disabled", !1)
            }))
        })), listenClick("#freeButton", (function () {
            $(this).removeClass("btn-light btn-active-light-primary").addClass("btn-primary"), $("#paidButton").removeClass("btn-primary").addClass("btn-light btn-active-light-primary"), $("#userPaidInputDiv").addClass("d-none"), $("#userPaymentAmount").val(""), $("#userPaymentAmount").prop("required", !1), $("#isUserPaidId").val(0), $("#userPaymentAmount").removeAttr("required")
        })), listenClick("#paidButton", (function () {
            $(this).removeClass("btn-light btn-active-light-primary").addClass("btn-primary"), $("#freeButton").removeClass("btn-primary").addClass("btn-light btn-active-light-primary"), $("#userPaidInputDiv").removeClass("d-none"), $("#userPaymentAmount").prop("required", !0), $("#isUserPaidId").val(1), $("#isUserPaidId").addClass("required")
        })), listenClick("#generate-url-alias", (function () {
            $.ajax({
                url: route("vcards.get-unique-url-alias"), type: "GET", success: function (e) {
                    $("#vcard-url-alias").val(e)
                }
            })
        })), listen("blur", "#vcard-url-alias", (function () {
            var e = $("#vcardId").length ? $("#vcardId").val() : "";
            $(this).val().trim().length && $.ajax({
                url: route("vcards.check-unique-url-alias", $(this).val()),
                type: "GET",
                success: function (t) {
                    var a = t.data;
                    a.isUnique || a.usedInVcard == e || $("#error-url-alias-msg").removeClass("d-none"), setTimeout((function () {
                        $("#error-url-alias-msg").addClass("d-none")
                    }), 3e3)
                }
            })
        }))
    })(), (() => {
        listenClick("#addServiceBtn", (function () {
            $("#addServiceModal").modal("show")
        })), listenHiddenBsModal("#addServiceModal", (function () {
            resetModalForm("#addServiceForm"), $("#servicePreview").css("background-image", "url(" + defaultServiceIconUrl + ")"), $(".cancel-service").hide()
        })), listenHiddenBsModal("#showServiceModal", (function () {
            $("#showName,#showDesc,#showURL").empty(), $("#servicePreview").attr("src", defaultServiceIconUrl)
        })), listenHiddenBsModal("#editServiceModal", (function () {
            $(".cancel-edit-service").hide()
        })), listenClick(".cancel-service", (function () {
            $("#servicePreview").attr("src", defaultServiceIconUrl)
        })), listenSubmit("#addServiceForm", (function (e) {
            e.preventDefault(), $("#serviceSave").prop("disabled", !0), $.ajax({
                url: route("vcard.service.store"),
                type: "POST",
                data: new FormData(this),
                contentType: !1,
                processData: !1,
                success: function (e) {
                    e.success && (displaySuccessMessage(e.message), $("#addServiceModal").modal("hide"), Livewire.emit("refresh"), $("#serviceSave").prop("disabled", !1))
                },
                error: function (e) {
                    displayErrorMessage(e.responseJSON.message), $("#serviceSave").prop("disabled", !1)
                }
            })
        })), listenClick(".service-edit-btn", (function (t) {
            var a, n = $(t.currentTarget).data("id");
            a = n, $.ajax({
                url: route("vcard.service.edit", a), type: "GET", success: function (t) {
                    if (t.success) {
                        $("#serviceId").val(t.data.id);
                        var a = t.data.name.replaceAll("&amp;", "&");
                        $("#editName").val(a), $("#editServiceURL").val(t.data.service_url);
                        var n = t.data.description.replaceAll("&amp;", "&");
                        $("#editDescription").val(n), $("#editServicePreview").css("background-image", 'url("' + t.data.service_icon + '")'), $("#editServiceModal").modal("show"), e = t.data.service_icon, $("#serviceUpdate").prop("disabled", !1)
                    }
                }, error: function (e) {
                    displayErrorMessage(e.responseJSON.message)
                }
            })
        }));
        var e = "";
        listenChange("#editServiceIcon", (function () {
            $(".cancel-edit-service").show()
        })), listenClick(".cancel-edit-service", (function () {
            $("#editServicePreview").attr("src", e)
        })), listenSubmit("#editServiceForm", (function (e) {
            $("#serviceUpdate").prop("disabled", !0), e.preventDefault();
            var t = $("#serviceId").val();
            $.ajax({
                url: route("vcard.service.update", t),
                type: "POST",
                data: new FormData(this),
                contentType: !1,
                processData: !1,
                success: function (e) {
                    e.success && (displaySuccessMessage(e.message), $("#editServiceModal").modal("hide"), Livewire.emit("refresh"), $(".cancel-edit-service").hide(), $("#serviceUpdate").prop("disabled", !1))
                },
                error: function (e) {
                    displayErrorMessage(e.responseJSON.message), $("#serviceUpdate").prop("disabled", !1)
                }
            })
        })), listenClick(".service-delete-btn", (function (e) {
            var t = $(e.currentTarget).attr("data-id");
            deleteItem(route("vcard.service.destroy", t), "Vcard Service")
        })), listenClick(".service-view-btn", (function (e) {
            var t, a = $(e.currentTarget).data("id");
            t = a, $.ajax({
                url: route("vcard.service.edit", t), type: "GET", success: function (e) {
                    if (e.success) {
                        $("#showName").append(e.data.name), null != e.data.service_url ? $("#showURL").append('<a href="' + e.data.service_url + '" target="_blank">' + e.data.service_url + "</a>") : $("#showURL").append("N/A");
                        var t = document.createElement("textarea");
                        t.innerHTML = e.data.description, $("#showDesc").append(t.value), $("#showServiceIcon").css("background-image", 'url("' + e.data.service_icon + '")'), $("#showServiceModal").modal("show")
                    }
                }, error: function (e) {
                    displayErrorMessage(e.responseJSON.message)
                }
            })
        }))
    })(), (() => {
        document.addEventListener("turbo:load", (function () {
            if (!$("#blogDescription").length && !$("#editBlogDescription").length) return;
            $("#blogDescription, #editBlogDescription").summernote({
                placeholder: "Description",
                tabsize: 2,
                height: 120,
                toolbar: [["style", ["style"]], ["font", ["bold", "underline", "clear"]], ["color", ["color"]], ["para", ["ul", "ol", "paragraph"]], ["table", ["table"]]]
            })
        })), listenClick("#addBolgBtn", (function () {
            $("#addBlogModal").modal("show"), $("#blogDescription").summernote("reset")
        })), listenSubmit("#addBlogForm", (function (e) {
            e.preventDefault(), $("#blogSave").prop("disabled", !0), $.ajax({
                url: route("vcard.blog.store"),
                type: "POST",
                data: new FormData(this),
                contentType: !1,
                processData: !1,
                success: function (e) {
                    e.success && (displaySuccessMessage(e.message), $("#addBlogModal").modal("hide"), Livewire.emit("refresh"), $("#blogSave").prop("disabled", !1))
                },
                error: function (e) {
                    displayErrorMessage(e.responseJSON.message), $("#blogSave").prop("disabled", !1)
                }
            })
        })), listenClick(".blog-edit-btn", (function (t) {
            var a, n = $(t.currentTarget).data("id");
            a = n, $.ajax({
                url: route("vcard.blog.edit", a), type: "GET", success: function (t) {
                    t.success && ($("#blogId").val(t.data.id), $("#editTitle").val(t.data.title), $("#editBlogDescription").summernote("code", t.data.description), $("#editBlogPreview").css("background-image", 'url("' + t.data.blog_icon + '")'), $("#editBlogModal").modal("show"), e = t.data.blog_icon)
                }, error: function (e) {
                    displayErrorMessage(e.responseJSON.message)
                }
            })
        }));
        var e = "";
        listenClick(".cancel-edit-blog", (function () {
            $("#editBlogPreview").attr("src", e)
        })), listenSubmit("#editBlogForm", (function (e) {
            e.preventDefault();
            var t = $("#blogId").val();
            $.ajax({
                url: route("vcard.blog.update", t),
                type: "POST",
                data: new FormData(this),
                contentType: !1,
                processData: !1,
                success: function (e) {
                    e.success && (displaySuccessMessage(e.message), $("#editBlogModal").modal("hide"), Livewire.emit("refresh"), $(".cancel-edit-blog").hide())
                },
                error: function (e) {
                    displayErrorMessage(e.responseJSON.message)
                }
            })
        })), listenClick(".blog-delete-btn", (function (e) {
            var t = $(e.currentTarget).data("id");
            deleteItem(route("vcard.blog.destroy", t), "Blog")
        })), listenClick(".blog-view-btn", (function (e) {
            var t, a = $(e.currentTarget).data("id");
            t = a, $.ajax({
                url: route("vcard.blog.edit", t), type: "GET", success: function (e) {
                    if (e.success) {
                        $("#showTitle").html(e.data.title);
                        var t = document.createElement("textarea");
                        t.innerHTML = e.data.description, $("#showDesc").html(t.value), $("#showBlogIcon").css("background-image", 'url("' + e.data.blog_icon + '")'), $("#showBlogModal").modal("show")
                    }
                }, error: function (e) {
                    displayErrorMessage(e.responseJSON.message)
                }
            })
        })), listenHiddenBsModal("#addBlogModal", (function () {
            $("#addBlogForm")[0].reset(), $("#blogPreview").css("background-image", "url(" + defaultGalleryUrl + ")"), $(".cancel-blog").hide()
        })), listenHiddenBsModal("#editBlogModal", (function () {
            $(".cancel-edit-blog").hide()
        }))
    })(), (() => {
        listenClick("#addGalleryBtn", (function () {
            $("#addGalleryModal").modal("show")
        })), listenHiddenBsModal("#addGalleryModal", (function (e) {
            $("#addGalleryForm")[0].reset(), $("#typeId").val(null).trigger("change"), $("#videoUploadFileName").text(""), $("#audioUploadFileName").text(""), $("#addGalleryPreview").css("background-image", "url(" + defaultGalleryUrl + ")"), $(".youtube_link").addClass("d-none"), $(".image_link").removeClass("d-none"), $("#createUploadFileName").text(""), $(".cancel-gallery").hide()
        })), listenClick(".cancel-gallery", (function () {
            $("#addGalleryPreview").css("background-image", "url(" + defaultGalleryUrl + ")")
        })), listenChange("#typeId", (function () {
            var e = $(this).val();
            0 == e ? ($(".youtube_link").addClass("d-none"), $(".image_link").removeClass("d-none"), $(".file_upload_button").addClass("d-none"), $("#linkRequired").attr("required", !1), $(".video_upload_button").addClass("d-none"), $(".audio_upload_button").addClass("d-none")) : 1 == e ? ($(".image_link").addClass("d-none"), $(".youtube_link").removeClass("d-none"), $(".file_upload_button").addClass("d-none"), $("#linkRequired").attr("required", !0), $(".video_upload_button").addClass("d-none"), $(".audio_upload_button").addClass("d-none")) : 2 == e ? ($(".image_link").addClass("d-none"), $(".youtube_link").addClass("d-none"), $(".file_upload_button").removeClass("d-none"), $(".video_upload_button").addClass("d-none"), $("#linkRequired").attr("required", !1), $(".audio_upload_button").addClass("d-none")) : 3 == e ? ($(".image_link").addClass("d-none"), $(".youtube_link").addClass("d-none"), $(".file_upload_button").addClass("d-none"), $(".video_upload_button").removeClass("d-none"), $(".audio_upload_button").addClass("d-none"), $("#linkRequired").attr("required", !1)) : 4 == e && ($(".image_link").addClass("d-none"), $(".youtube_link").addClass("d-none"), $(".file_upload_button").addClass("d-none"), $(".video_upload_button").addClass("d-none"), $(".audio_upload_button").removeClass("d-none"), $("#linkRequired").attr("required", !1))
        })), listenChange("#editTypeId", (function () {
            var e = $(this).val();
            $(".file_upload_button").addClass("d-none"), 0 == e ? ($("#editGalleryPreview").css("background-image", "url(" + defaultGalleryUrl + ")"), $(".editYouTubeLink").addClass("d-none"), $(".edit-image").removeClass("d-none"), $(".video_upload_button").addClass("d-none"), $(".audio_upload_button").addClass("d-none"), $("#editYouTube_Link").attr("required", !1)) : 1 == e ? ($(".editYouTubeLink").removeClass("d-none"), $(".edit-image").addClass("d-none"), $(".video_upload_button").addClass("d-none"), $(".audio_upload_button").addClass("d-none"), $("#editYouTube_Link").attr("required", !0)) : 2 == e ? ($(".editYouTubeLink").addClass("d-none"), $(".edit-image").addClass("d-none"), $(".video_upload_button").addClass("d-none"), $(".file_upload_button").removeClass("d-none"), $(".audio_upload_button").addClass("d-none"), $("#editYouTube_Link").attr("required", !1), $("#uploadFileName").text(""), $("#editGalleryUploadFile").val("")) : 3 == e ? ($(".editYouTubeLink").addClass("d-none"), $(".edit-image").addClass("d-none"), $(".video_upload_button").removeClass("d-none"), $(".audio_upload_button").addClass("d-none"), $("#editYouTube_Link").attr("required", !1), $("#videoUploadFileName").text(""), $("#editVideoUploadFileName").val("")) : 4 == e && ($(".editYouTubeLink").addClass("d-none"), $(".edit-image").addClass("d-none"), $(".video_upload_button").addClass("d-none"), $(".audio_upload_button").removeClass("d-none"), $("#editYouTube_Link").attr("required", !1), $("#audioUploadFileName").text(""), $("#editAudioUploadFileName").val(""))
        })), listenSubmit("#addGalleryForm", (function (e) {
            if (e.preventDefault(), 0 == $("#galleryUploadFile").val() && 2 == $("#typeId").val()) return displayErrorMessage(Lang.get("js.upload_required")), !1;
            $("#GallerySave").prop("disabled", !0), $.ajax({
                url: route("gallery.store"),
                type: "POST",
                data: new FormData(this),
                contentType: !1,
                processData: !1,
                success: function (e) {
                    console.log(e), e.success && (displaySuccessMessage(e.message), $("#createUploadFileName").text(""), $("#addGalleryModal").modal("hide"), $("#addGalleryForm").trigger("reset"), $("#GallerySave").prop("disabled", !1), $("#videoUploadFileName").text(""), $("#audioUploadFileName").text(""), Livewire.emit("refresh"))
                },
                error: function (e) {
                    displayErrorMessage(e.responseJSON.message), $("#GallerySave").prop("disabled", !1)
                }
            })
        })), listenClick(".gallery-edit-btn", (function (t) {
            var a, n = $(t.currentTarget).data("id");
            a = n, $.ajax({
                url: route("gallery.edit", a), type: "GET", success: function (t) {
                    if (t.success) {
                        $("#galleryId").val(t.data.id), $("#editTypeId").val(t.data.type).trigger("change"), $("#editGalleryPreview").css("background-image", 'url("' + t.data.gallery_image + '")'), $("#editYouTube_Link").val(t.data.link);
                        var a = t.data.type;
                        2 == a && $("#uploadFileName").text(t.data.media[0].file_name), 3 == a && $("#editVideoUploadFileName").text(t.data.media[0].file_name), 4 == a && $("#editAudioUploadFileName").text(t.data.media[0].file_name), $("#editGalleryModal").modal("show"), e = t.data.gallery_image
                    }
                }, error: function (e) {
                    displayErrorMessage(e.responseJSON.message)
                }
            })
        })), listenChange("#galleryUploadFile", (function (e) {
            var t = e.target.files[0].name;
            $("#createUploadFileName").text(t)
        })), listenChange("#editGalleryUploadFile", (function (e) {
            var t = e.target.files[0].name;
            $("#uploadFileName").text(t)
        })), listenChange("#videoUploadFile", (function (e) {
            var t = e.target.files[0].name;
            $("#videoUploadFileName").text(t)
        })), listenChange("#editVideoUploadFile", (function (e) {
            var t = e.target.files[0].name;
            $("#editVideoUploadFileName").text(t)
        })), listenChange("#audioUploadFile", (function (e) {
            var t = e.target.files[0].name;
            $("#audioUploadFileName").text(t)
        })), listenChange("#editAudioUploadFile", (function (e) {
            var t = e.target.files[0].name;
            $("#editAudioUploadFileName").text(t)
        }));
        var e = "";
        listenHiddenBsModal("#editGalleryModal", (function () {
            $(".edit-cancel-gallery").hide()
        })), listenClick(".edit-cancel-gallery", (function () {
            $("#editGalleryPreview").css("background-image", "url(" + e + ")")
        })), listenSubmit("#editGalleryForm", (function (e) {
            if (e.preventDefault(), null == $("#editGalleryUploadFile").val()) return displayErrorMessage("Please upload file"), !1;
            $("#editGallerySave").prop("disabled", !0);
            var t = $("#galleryId").val();
            $.ajax({
                url: route("gallery.update", t),
                type: "POST",
                data: new FormData(this),
                contentType: !1,
                processData: !1,
                success: function (e) {
                    e.success && (displaySuccessMessage(e.message), $("#editGalleryModal").modal("hide"), $("#editGalleryForm").trigger("reset"), $("#editGallerySave").prop("disabled", !1), Livewire.emit("refresh"), $(".edit-cancel-gallery").hide())
                },
                error: function (e) {
                    $("#editGallerySave").prop("disabled", !1), displayErrorMessage(e.responseJSON.message)
                }
            })
        })), listenClick(".gallery-delete-btn", (function (e) {
            var t = $(e.currentTarget).attr("data-id");
            deleteItem(route("gallery.destroy", t), Lang.get("js.gallery"))
        }))
    })(), listenClick("#addInstaBtn", (function () {
        $("#addInstaModal").modal("show")
    })), listenHiddenBsModal("#addInstaModal", (function (e) {
        $("#addInstaForm")[0].reset(), $("#typeId").val(null).trigger("change")
    })), listenSubmit("#addInstaForm", (function (e) {
        e.preventDefault(), $("#InstagramEmbedSave").prop("disabled", !0), $.ajax({
            url: route("instagram-embed.store"),
            type: "POST",
            data: new FormData(this),
            contentType: !1,
            processData: !1,
            success: function (e) {
                console.log(e), e.success && (displaySuccessMessage(e.message), $("#addInstaModal").modal("hide"), $("#addInstaForm").trigger("reset"), $("#InstagramEmbedSave").prop("disabled", !1), Livewire.emit("refresh"))
            },
            error: function (e) {
                displayErrorMessage(e.responseJSON.message), $("#InstagramEmbedSave").prop("disabled", !1)
            }
        })
    })), listenClick(".instagramembed-edit-btn", (function (e) {
        var t, a = $(e.currentTarget).attr("data-id");
        t = a, $.ajax({
            url: route("instagram-embed.edit", t), type: "GET", success: function (e) {
                e.success && ($("#editTypeId").val(e.data.type).trigger("change"), $("#editEmbedtag").val(e.data.embedtag), $("#editVcard").val(e.data.vcard_id), $("#editEmbedId").val(e.data.id), $("#editInstagramEmbedModal").modal("show"))
            }, error: function (e) {
                displayErrorMessage(e.responseJSON.message)
            }
        })
    })), listenSubmit("#EditInstaForm", (function (e) {
        e.preventDefault(), $("#editInstagramEmbedSave").prop("disabled", !0);
        var t = $("#editEmbedId").val();
        $.ajax({
            url: route("instagram-embed.update", t),
            type: "POST",
            data: new FormData(this),
            contentType: !1,
            processData: !1,
            success: function (e) {
                e.success && (displaySuccessMessage(e.message), $("#editInstagramEmbedModal").modal("hide"), $("#EditInstaForm").trigger("reset"), $("#editInstagramEmbedSave").prop("disabled", !1), Livewire.emit("refresh"))
            },
            error: function (e) {
                $("#editInstagramEmbedSave").prop("disabled", !1), displayErrorMessage(e.responseJSON.message)
            }
        })
    })), listenClick(".instagramembed-delete-btn", (function (e) {
        var t = $(e.currentTarget).attr("data-id");
        console.log(t), deleteItem(route("instagram-embed.destroy", t), Lang.get("messages.vcard.embedtag"))
    })), listenClick("#instaEmbedGuideBtn", (function () {
        $("#instaEmbedGuideModal").modal("show")
    })), (() => {
        listenClick("#addProductBtn", (function () {
            $("#addProductModal").modal("show")
        })), listenHiddenBsModal("#addProductModal", (function (e) {
            $("#addProductForm")[0].reset(), $("#vcardProduct").val(null).trigger("change"), $("#productPreview").css("background-image", "url(" + defaultServiceIconUrl + ")"), $("#productSave").prop("disabled", !1), $(".cancel-service").hide()
        })), listenHiddenBsModal("#showProductModal", (function () {
            $("#showName,#showDesc,#showPrice,#showProductUrl").empty(), $("#productPreview").css("background-image", "url(" + defaultServiceIconUrl + ")")
        })), listenChange("#productIcon", (function () {
            changeImg(this, "#productIconValidationErrors", "#productPreview", defaultServiceIconUrl), $(".cancel-service").show()
        })), listenClick(".cancel-service", (function () {
            $("#productPreview").css("background-image", "url(" + defaultServiceIconUrl + ")")
        })), listenSubmit("#addProductForm", (function (e) {
            e.preventDefault(), $("#productSave").prop("disabled", !0), $.ajax({
                url: route("vcard.products.store"),
                type: "POST",
                data: new FormData(this),
                contentType: !1,
                processData: !1,
                success: function (e) {
                    e.success && (displaySuccessMessage(e.message), $("#addProductModal").modal("hide"), Livewire.emit("refresh"), $("#productSave").prop("disabled", !0))
                },
                error: function (e) {
                    displayErrorMessage(e.responseJSON.message), $("#productSave").prop("disabled", !1)
                }
            })
        })), listenHiddenBsModal("#editProductModal", (function (e) {
            $(".cancel-edit-service").hide()
        })), listenClick(".product-delete-btn", (function (e) {
            var t = $(e.currentTarget).attr("data-id");
            deleteItem(route("vcard.products.destroy", t), "Products")
        })), listenClick(".product-edit-btn", (function (t) {
            var a, n = $(t.currentTarget).data("id");
            a = n, $.ajax({
                url: route("vcard.products.edit", a), type: "GET", success: function (t) {
                    t.success && ($("#productId").val(t.data.id), $("#editName").val(t.data.name), null != t.data.currency_id && $("#editCurrencyId").val(t.data.currency.id).trigger("change"), $("#editPrice").val(t.data.price), $("#editDescription").val(t.data.description), $("#editProductUrl").val(t.data.product_url), $("#editProductPreview").css("background-image", 'url("' + t.data.product_icon + '")'), $("#editProductModal").modal("show"), e = t.data.product_icon, $("#productUpdateBtn").prop("disabled", !1))
                }, error: function (e) {
                    displayErrorMessage(e.responseJSON.message)
                }
            })
        }));
        var e = "";
        listenChange("#editProductIcon", (function () {
            changeImg(this, "#editProductIconValidation", "#editProductPreview", e), $(".cancel-edit-service").show()
        })), listenClick(".cancel-edit-service", (function () {
            $("#editProductPreview").attr("src", e)
        })), listenSubmit("#editProductForm", (function (e) {
            e.preventDefault(), $("#productUpdateBtn").prop("disabled", !0);
            var t = $("#productId").val();
            $.ajax({
                url: route("vcard.products.update", t),
                type: "POST",
                data: new FormData(this),
                contentType: !1,
                processData: !1,
                success: function (e) {
                    e.success && (displaySuccessMessage(e.message), $("#editProductModal").modal("hide"), Livewire.emit("refresh"), $("#productUpdateBtn").prop("disabled", !0))
                },
                error: function (e) {
                    displayErrorMessage(e.responseJSON.message), $("#productUpdateBtn").prop("disabled", !1)
                }
            })
        })), listenClick(".product-view-btn", (function (e) {
            var t, a = $(e.currentTarget).data("id");
            t = a, $.ajax({
                url: route("vcard.products.edit", t), type: "GET", success: function (e) {
                    if (e.success) {
                        $("#showName").append(e.data.name), e.data.formatted_amount ? "$" === e.data.currency.currency_icon ? $("#showPrice").append(e.data.currency.currency_icon + e.data.price) : $("#showPrice").append(e.data.formatted_amount) : null != e.data.price ? $("#showPrice").append(e.data.price) : $("#showPrice").append("N/A");
                        var t = document.createElement("textarea");
                        t.innerHTML = e.data.description, $("#showDesc").append(t.value), null != e.data.product_url ? $("#showProductUrl").append('<a href="' + e.data.product_url + '">' + e.data.product_url + "</a>") : $("#showProductUrl").append("N/A"), $("#showProductIcon").attr("style", 'background-image:url("' + e.data.product_icon + '")'), $("#showProductModal").modal("show")
                    }
                }, error: function (e) {
                    displayErrorMessage(e.responseJSON.message)
                }
            })
        })), listen("change", "#productPaymentType", (function () {
            window.livewire.emit("changeFilter", $(this).val())
        })), listen("click", "#productOrderResetFilter", (function () {
            $("#productPaymentType").val(0).change(), window.livewire.emit("changeFilter", "")
        }))
    })(), (() => {
        function e(t) {
            return e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }, e(t)
        }

        function t(t, a, n) {
            return (a = function (t) {
                var a = function (t, a) {
                    if ("object" !== e(t) || null === t) return t;
                    var n = t[Symbol.toPrimitive];
                    if (void 0 !== n) {
                        var r = n.call(t, a || "default");
                        if ("object" !== e(r)) return r;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === a ? String : Number)(t)
                }(t, "string");
                return "symbol" === e(a) ? a : String(a)
            }(a)) in t ? Object.defineProperty(t, a, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[a] = n, t
        }

        document.addEventListener("turbo:load", (function () {
            var e, a = $("#timeRange"), s = moment();
            n = moment().subtract("30", "days"), r = s.clone().endOf("days"), a.on("apply.daterangepicker", (function (e, t) {
                !0, n = t.startDate, r = t.endDate, i(n.format("YYYY-MM-D  H:mm:ss"), r.format("YYYY-MM-D  H:mm:ss"))
            })), window.cb = function (e, t) {
                a.find("span").html(e.format("MMM D, YYYY") + " - " + t.format("MMM D, YYYY"))
            }, a.daterangepicker({
                startDate: n,
                endDate: r,
                opens: "left",
                showDropdowns: !0,
                autoUpdateInput: !1,
                locale: {
                    customRangeLabel: Lang.get("js.custom"),
                    applyLabel: Lang.get("js.apply"),
                    cancelLabel: Lang.get("js.cancel"),
                    fromLabel: Lang.get("js.from"),
                    toLabel: Lang.get("js.to"),
                    monthNames: [Lang.get("js.jan"), Lang.get("js.feb"), Lang.get("js.mar"), Lang.get("js.apr"), Lang.get("js.may"), Lang.get("js.jun"), Lang.get("js.jul"), Lang.get("js.aug"), Lang.get("js.sep"), Lang.get("js.oct"), Lang.get("js.nov"), Lang.get("js.dec")],
                    daysOfWeek: [Lang.get("js.sun"), Lang.get("js.mon"), Lang.get("js.tue"), Lang.get("js.wed"), Lang.get("js.thu"), Lang.get("js.fri"), Lang.get("js.sat")]
                },
                ranges: (e = {}, t(e, Lang.get("js.this_week"), [moment().startOf("week"), moment().endOf("week")]), t(e, Lang.get("js.last_week"), [moment().startOf("week").subtract(7, "days"), moment().startOf("week").subtract(1, "days")]), e)
            }, cb), cb(n, r), i(n.format("YYYY-MM-D H:mm:ss"), r.format("YYYY-MM-D H:mm:ss"));
            var o = $(".range_inputs > button.applyBtn");
            $(document).on("click", ".ranges li", (function () {
                "Custom Range" === $(this).data("range-key") ? o.css("display", "initial") : o.css("display", "none")
            })), o.css("display", "none")
        }));
        var a = "line", n = "", r = "";

        function i(e, t) {
            if ($("#analyticVcardId").length) {
                var n = $("#analyticVcardId").val();
                $.ajax({
                    type: "GET",
                    url: route("vcard.chart", n),
                    dataType: "json",
                    data: {start_date: e, end_date: t, vcardId: n},
                    success: function (e) {
                        !function (e) {
                            if (!$("#weeklyUserBarChartContainer").length) return;
                            var t = $("#analyticVisitors").val();
                            $("#weeklyUserBarChartContainer").html(""), $("canvas#weeklyUserBarChart").remove(), $("#weeklyUserBarChartContainer").append('<canvas id="weeklyUserBarChart" height="275" width="905" style="display: block; width: 905px; height: 500px;"></canvas>');
                            var n = e.data, r = {
                                labels: n.weeklyLabels,
                                datasets: [{
                                    label: t,
                                    backgroundColor: "rgba(0,158,247)",
                                    data: n.totalVisitorCount,
                                    lineTension: .5,
                                    borderColor: "#009EF7A3",
                                    radius: 4
                                }]
                            }, i = $("#weeklyUserBarChart");
                            new Chart(i, {
                                type: a,
                                data: r,
                                options: {scales: {y: {ticks: {min: 0, precision: 0}, min: 0}}}
                            })
                        }(e)
                    },
                    cache: !1
                })
            }
        }

        listenClick("#changeChart", (function () {
            "bar" === a ? (a = "line", $(".chart").removeClass("fa-chart-line"), $(".chart").addClass("fa-chart-bar"), i(n.format("YYYY-MM-D H:mm:ss"), r.format("YYYY-MM-D H:mm:ss"))) : (a = "bar", $(".chart").addClass("fa-chart-line"), $(".chart").removeClass("fa-chart-bar"), i(n.format("YYYY-MM-D H:mm:ss"), r.format("YYYY-MM-D H:mm:ss")))
        }))
    })(), (() => {
        listenClick("#addTestimonialBtn", (function () {
            $("#addTestimonialModal").modal("show")
        })), listenHiddenBsModal("#addTestimonialModal", (function () {
            resetModalForm("#addTestimonialForm"), $("#testimonialPreview").css("background-image", "url(" + defaultProfileUrl + ")"), $(".cancel-testimonial").hide(), $("#testimonialSave").prop("disabled", !1)
        })), listenHiddenBsModal("#editTestimonialModal", (function () {
            $(".cancel-edit-testimonial").hide()
        })), listenClick(".cancel-testimonial", (function () {
            $("#testimonialPreview").attr("src", defaultProfileUrl)
        })), listenSubmit("#addTestimonialForm", (function (e) {
            e.preventDefault(), $("#testimonialSave").prop("disabled", !0), $.ajax({
                url: route("testimonial.store"),
                type: "POST",
                data: new FormData(this),
                contentType: !1,
                processData: !1,
                success: function (e) {
                    e.success && (displaySuccessMessage(e.message), $("#addTestimonialModal").modal("hide"), Livewire.emit("refresh"), $("#testimonialSave").prop("disabled", !0))
                },
                error: function (e) {
                    displayErrorMessage(e.responseJSON.message), $("#testimonialSave").prop("disabled", !1)
                }
            })
        })), listenClick(".testimonial-edit-btn", (function (t) {
            var a, n = $(t.currentTarget).data("id");
            a = n, $.ajax({
                url: route("testimonial.edit", a), type: "GET", success: function (t) {
                    t.success && ($("#testimonialId").val(t.data.id), $("#editName").val(t.data.name), $("#editDescription").val(t.data.description), $("#editTestimonialPreview").css("background-image", 'url("' + t.data.image_url + '")'), $("#editTestimonialModal").modal("show"), e = t.data.image_url, $("#testimonialUpdate").prop("disabled", !1))
                }, error: function (e) {
                    displayErrorMessage(e.responseJSON.message)
                }
            })
        }));
        var e = "";
        listenClick(".cancel-edit-testimonial", (function () {
            $("#editTestimonialPreview").attr("src", e)
        })), listenHiddenBsModal("#showTestimonialModal", (function () {
            $("#showName,#showDesc").empty(), $("#servicePreview").attr("src", defaultProfileUrl)
        })), listenSubmit("#editTestimonialForm", (function (e) {
            $("#testimonialUpdate").prop("disabled", !0), e.preventDefault();
            var t = $("#testimonialId").val();
            $.ajax({
                url: route("testimonial.update", t),
                type: "POST",
                data: new FormData(this),
                contentType: !1,
                processData: !1,
                success: function (e) {
                    e.success && ($("#testimonialUpdate").prop("disabled", !0), displaySuccessMessage(e.message), $("#editTestimonialModal").modal("hide"), Livewire.emit("refresh"))
                },
                error: function (e) {
                    displayErrorMessage(e.responseJSON.message), $("#testimonialUpdate").prop("disabled", !1)
                }
            })
        })), listen("click", ".testimonial-delete-btn", (function (e) {
            var t = $(e.currentTarget).data("id"), a = route("testimonial.destroy", {testimonial: t});
            deleteItem(a, "Vcard Testimonial")
        })), listenClick(".testimonial-view-btn", (function (e) {
            var t, a = $(e.currentTarget).data("id");
            t = a, $.ajax({
                url: route("testimonial.edit", t), type: "GET", success: function (e) {
                    if (e.success) {
                        $("#showName").append(e.data.name);
                        var t = document.createElement("textarea");
                        t.innerHTML = e.data.description, $("#showDesc").append(t.value), $("#showTestimonialIcon").css("background-image", 'url("' + e.data.image_url + '")'), $("#showTestimonialModal").modal("show")
                    }
                }, error: function (e) {
                    displayErrorMessage(e.responseJSON.message)
                }
            })
        }))
    })(), (() => {
        "use strict";
        __webpack_require__(7908);
        listenClick(".subscriptionPlanStatus", (function () {
            $(this).attr("disabled", !0);
            var e = $(this).data("id"), t = $(this).data("tenant"), a = $(this).data("status"),
                n = route("subscription.status", e);
            $.ajax({
                type: "get", url: n, data: {id: e, tenant_id: t, status: a}, success: function (e) {
                    displaySuccessMessage(e.message), Livewire.emit("resetPageTable")
                }
            })
        })), listenClick(".subscribed-user-plan-edit-btn", (function (e) {
            var t, a, n = $(e.currentTarget).data("id");
            $("#editSubscriptionModal").modal("show"), t = n, a = route("subscription.user.plan.edit", t), $.ajax({
                url: a,
                type: "GET",
                data: {id: t},
                success: function (e) {
                    e.success && (Livewire.emit("refresh", "refresh"), $("#SubscriptionId").val(e.data.id), $("#EndDate").val(e.data.ends_at)), $("#EndDate").flatpickr({
                        minDate: e.data.ends_at,
                        disableMobile: !0,
                        locale: getLoggedInUserLang,
                        dateFormat: getFormattedDateTime(userDateFormate)
                    })
                },
                error: function (e) {
                    displayErrorMessage(e.responseJSON.message)
                }
            })
        })), listenSubmit("#editSubscriptionForm", (function (e) {
            e.preventDefault();
            var t = $("#SubscriptionId").val(), a = route("subscription.user.plan.update", t);
            $.ajax({
                url: a, type: "get", data: $(this).serialize(), success: function (e) {
                    e.success && (displaySuccessMessage(e.message), $("#editSubscriptionModal").modal("hide"), Livewire.emit("resetPageTable"))
                }, error: function (e) {
                    displayErrorMessage(e.responseJSON.message)
                }
            })
        })), listenHiddenBsModal("#editSubscriptionModal", (function (e) {
            $("#editSubscriptionForm")[0].reset(), $("#editSubscriptionId").attr("disabled", !1), $("#UnlimitedNote").text("")
        })), listenClick(".subscribed-user-plan-view-btn", (function (e) {
            var t = $(e.currentTarget).attr("data-id"), a = route("subscription.user.plan.edit", t);
            $.ajax({
                url: a, type: "GET", data: {id: t}, success: function (e) {
                    var t = e.data.coupon_code_meta, a = e.data.plan.currency.currency_icon,
                        n = e.message || e.data.payment_type;
                    $("#subscriptionUserName").text(e.data.tenant.user.full_name), $("#subscriptionPlanName").text(e.data.plan.name), null == n && (n = "Default Plan"), $("#subscriptionPaymentType").text(n), $("#subscriptionPlanPrice").text("$" === a ? "$" + (e.data.plan_amount ? parseFloat(e.data.plan_amount).toFixed(2) : 0) : getCurrencyAmount(e.data.plan_amount ? parseFloat(e.data.plan_amount).toFixed(2) : 0, a)), $("#subscriptionPayableAmount").text("$" === a ? "$" + (e.data.payable_amount ? parseFloat(e.data.payable_amount).toFixed(2) : 0) : getCurrencyAmount(e.data.payable_amount ? parseFloat(e.data.payable_amount).toFixed(2) : 0, a)), $("#subscriptionEndDate").text(moment(e.data.ends_at).format(getFormattedDateTime(userDateFormate, 1))), t ? ($(".coupon-data-div").removeClass("d-none"), $("#subscriptionCouponDiscount").text(a + e.data.discount), $("#subscriptionCouponName").text(getCurrencyAmount(t.couponCode))) : $(".coupon-data-div").addClass("d-none"), $("#showSubscriptionModal").modal("show")
                }, error: function (e) {
                    displayErrorMessage(e.responseJSON.message)
                }
            })
        }))
    })(), listenClick(".makePayment", (function () {
        var e = this, t = {
            planId: $(this).data("id"),
            from_pricing: "undefined" != typeof fromPricing ? fromPricing : null,
            price: $(this).data("plan-price"),
            payment_type: $("#paymentType option:selected").val(),
            couponCode: $("#couponCode").val(),
            couponCodeId: $("#couponCodeId").val()
        };
        $(this).addClass("disabled"), $(".makePayment").text("Please Wait..."), $.post(route("purchase-subscription"), t).done((function (e) {
            if (void 0 === e.data) return displaySuccessMessage(e.message), setTimeout((function () {
                Turbo.visit(route("subscription.index"))
            }), 3e3), !0;
            var t = e.data.sessionId;
            stripe.redirectToCheckout({sessionId: t}).then((function (e) {
                $(this).html(Lang.get("js.purchase")).removeClass("disabled"), $(".makePayment").attr("disabled", !1), displaySuccessMessage(e.message)
            }))
        })).catch((function (t) {
            $(e).html(Lang.get("js.purchase")).removeClass("disabled"), $(".makePayment").attr("disabled", !1), displayErrorMessage(t.responseJSON.message)
        }))
    })), listenChange("#paymentType", (function () {
        var e = $(this).val();
        isEmpty(e) && ($(".proceed-to-payment").addClass("d-none"), $(".RazorPayPayment").addClass("d-none"), $(".stripePayment").addClass("d-none"), $(".ManuallyPayment").addClass("d-none"), $(".manuallyPayAttachment").addClass("d-none")), 1 == e && ($(".proceed-to-payment").addClass("d-none"), $(".RazorPayPayment").addClass("d-none"), $(".stripePayment").removeClass("d-none"), $(".ManuallyPayment").addClass("d-none"), $(".manuallyPayAttachment").addClass("d-none")), 2 == e && ($(".proceed-to-payment").addClass("d-none"), $(".paypalPayment").removeClass("d-none"), $(".RazorPayPayment").addClass("d-none"), $(".ManuallyPayment").addClass("d-none"), $(".manuallyPayAttachment").addClass("d-none")), 3 == e && ($(".proceed-to-payment").addClass("d-none"), $(".paypalPayment").addClass("d-none"), $(".RazorPayPayment").removeClass("d-none"), $(".ManuallyPayment").addClass("d-none"), $(".manuallyPayAttachment").addClass("d-none")), 4 == e && ($(".proceed-to-payment").addClass("d-none"), $(".paypalPayment").addClass("d-none"), $(".RazorPayPayment").addClass("d-none"), $(".ManuallyPayment").removeClass("d-none"), $(".manuallyPayAttachment").removeClass("d-none")), 5 == e && ($(".proceed-to-payment").addClass("d-none"), $(".paystackPayment").removeClass("d-none"), $(".RazorPayPayment").addClass("d-none"), $(".ManuallyPayment").addClass("d-none"), $(".manuallyPayAttachment").addClass("d-none")), 6 == e && ($(".proceed-to-payment").addClass("d-none"), $(".phonepePayment").removeClass("d-none"), $(".paystackPayment").addClass("d-none"), $(".RazorPayPayment").addClass("d-none"), $(".ManuallyPayment").addClass("d-none"), $(".manuallyPayAttachment").addClass("d-none"))
    })), listenClick(".manuallyPay", (function () {
        $(this).addClass("disabled")
    })), listenClick(".paymentByPaypal", (function () {
        $(".paymentByPaypal").text("Please Wait...");
        var e = "undefined" != typeof fromPricing ? fromPricing : null;
        $(this).addClass("disabled"), $.ajax({
            type: "GET",
            url: route("paypal.init"),
            data: {
                planId: $(this).data("id"),
                from_pricing: e,
                payment_type: $("#paymentType option:selected").val(),
                couponCode: $("#couponCode").val(),
                couponCodeId: $("#couponCodeId").val()
            },
            success: function (e) {
                if (e.link && (window.location.href = e.link), 201 === e.statusCode) {
                    var t = "";
                    $.each(e.result.links, (function (e, a) {
                        "approve" == a.rel && (t = a.href)
                    })), location.href = t
                }
            },
            error: function (e) {
                displayErrorMessage(e.responseJSON.message), $(".paymentByPaypal").text("Pay / Switch Plan")
            },
            complete: function () {
            }
        })
    })), listenClick(".paymentByRazorPay", (function () {
        var e = "undefined" != typeof fromPricing ? fromPricing : null;
        $(".paymentByRazorPay").text("Please Wait..."), $(this).addClass("disabled"), $.ajax({
            type: "GET",
            url: route("razorpay.init"),
            data: {
                planId: $(this).data("id"),
                from_pricing: e,
                payment_type: $("#paymentType option:selected").val(),
                couponCode: $("#couponCode").val(),
                couponCodeId: $("#couponCodeId").val()
            },
            success: function (e) {
                if (e.success) {
                    var t = e.data, a = t.id, n = t.amount, r = t.name, i = t.email, s = t.contact;
                    options.amount = n, options.order_id = a, options.prefill.name = r, options.prefill.email = i, options.prefill.contact = s;
                    var o = new Razorpay(options);
                    o.open(), o.on("payment.failed")
                }
            },
            error: function (e) {
                displayErrorMessage(e.responseJSON.message)
            },
            complete: function () {
            }
        })
    })), listenClick(".paymentBypaystack", (function () {
        var e = void 0 !== $(".fromPricing").val() ? $(".fromPricing").val() : null;
        window.location.replace(route("paystack.init", {
            planId: $(this).data("id"),
            from_pricing: e,
            payment_type: $("#paymentType option:selected").val(),
            couponCode: $("#couponCode").val(),
            couponCodeId: $("#couponCodeId").val()
        }))
    })), listenClick(".paymentByPhonepe", (function () {
        var e = void 0 !== $(".fromPricing").val() ? $(".fromPricing").val() : null;
        window.location.replace(route("phonepe-subscription", {
            planId: $(this).data("id"),
            from_pricing: e,
            payment_type: $("#paymentType option:selected").val(),
            couponCode: $("#couponCode").val(),
            couponCodeId: $("#couponCodeId").val()
        }))
    })), listenSubmit(".manuallyPaymentForm", (function (e) {
        if (e.preventDefault(), !checkPhpFile("#manual_payment_attachment", "#manualPaymentValidationErrorsBox")) return !1;
        $(".paymentByRazorPay").text("Please Wait..."), $(this).addClass("disabled");
        var t = $(".manuallyPaymentPlanId").val(), a = new FormData($(".manuallyPaymentForm")[0]);
        $.ajax({
            type: "POST",
            url: route("subscription.manual", t),
            data: a,
            processData: !1,
            contentType: !1,
            success: function (e) {
                displaySuccessMessage(e.message), Turbo.visit(route("subscription.index"))
            },
            error: function (e) {
                displayErrorMessage(e.responseJSON.message)
            },
            complete: function () {
            }
        })
    })), listenChange("#manual_payment_attachment", (function () {
        if (!checkPhpFile("#manual_payment_attachment", "#manualPaymentValidationErrorsBox")) return !1
    })), listenClick(".plan-zero", (function () {
        var e = this, t = $(this).attr("data-id");
        $(this).html('\n            <div class="spinner-border spinner-border-sm" role="status">\n                <span class="sr-only"> </span>\n            </div> '.concat(Lang.get("js.loading"))).addClass("disabled"), $.post(route("subscription.plan-zero", t)).done((function (e) {
            displaySuccessMessage(e.message), setTimeout((function () {
                Turbo.visit(route("subscription.index"))
            }), 2e3)
        })).catch((function (t) {
            $(e).attr("disabled", !1), $(e).html(Lang.get("js.purchase")).removeClass("disabled"), displayErrorMessage(t.responseJSON.message)
        }))
    })), listenClick(".freePayment", (function () {
        var e = this;
        if ("undefined" != typeof getLoggedInUserdata && "" == getLoggedInUserdata) return window.location.href = route("login"), !0;
        if (0 === $(this).data("plan-price")) {
            $(this).addClass("disabled");
            var t = {planId: $(this).data("id"), price: $(this).data("plan-price")};
            return $.post(route("purchase-subscription"), t).done((function (e) {
                displaySuccessMessage(e.message), setTimeout((function () {
                    Turbo.visit(window.location.href)
                }), 5e3)
            })).catch((function (t) {
                $(e).html(Lang.get("js.choose_plan")).removeClass("disabled"), $(".freePayment").attr("disabled", !1), displayErrorMessage(t.responseJSON.message)
            })), !0
        }
    })), listenKeyup("#paymentCouponCode", (function () {
        var e = $(this), t = $("#applyCouponCodeBtn");
        e.val(e.val().toUpperCase().split(/[^a-zA-Z0-9_]/).join("")), e.val().trim().length ? t.removeClass("disabled") : t.addClass("disabled")
    })), listenClick("#applyCouponCodeBtn", (function () {
        var e, t = $(this).attr("data-id"), a = $(this).attr("data-plan-price");
        e = $(this).hasClass("apply-coupon-code-btn") ? route("apply-coupon-code", $("#paymentCouponCode").val()) : route("apply-coupon-code"), $(this).addClass("disabled"), function (e, t, a) {
            $.ajax({
                url: e, type: "post", data: {planId: t, planPrice: a}, success: function (e) {
                    if (e.data.afterDiscount) {
                        var t = e.data.afterDiscount, a = $("#currencyIcon").val();
                        $(".coupon-discount").text(getCurrencyAmount(t.discount, a)).parent().parent().removeClass("d-none"), $("#couponCodeId").val(t.couponId), $("#couponCode").val(t.couponCode), $("#amountToPay").val(t.amountToPay), $(".payable-amount").text(getCurrencyAmount(t.amountToPay.toFixed(2), a)), 0 == t.amountToPay && ($(".plan-payment-type").addClass("d-none"), $(".switch-plan-btn").removeClass("d-none"), $(".manuallyPayAttachment").addClass("d-none"), $(".RazorPayPayment").addClass("d-none"), $(".paypalPayment").addClass("d-none"), $(".stripePayment").addClass("d-none")), swal({
                            icon: "success",
                            title: '"' + t.couponCode + '" Coupon Code Applied successfully.',
                            timer: 2e3
                        }), $("#paymentCouponCode").attr("disabled", !0), $("#applyCouponCodeBtn").removeClass("disabled apply-coupon-code-btn bg-primary").addClass("remove-coupon-code-btn bg-secondary").text(Lang.get("js.remove"))
                    } else $(".coupon-discount").text("").parent().parent().addClass("d-none"), $(".payable-amount").text(e.data.amountToPay), $("#couponCodeId").val(""), $("#couponCode").val(""), $("#amountToPay").val(e.data.amountToPay), $("#paymentCouponCode").attr("disabled", !1).val(""), $("#applyCouponCodeBtn").removeClass("disabled remove-coupon-code-btn bg-secondary").addClass("apply-coupon-code-btn bg-primary").text(Lang.get("js.apply")), $("#paymentCouponCode").trigger("keyup"), $(".plan-payment-type").removeClass("d-none"), $(".switch-plan-btn").addClass("d-none"), $("#paymentType").val("").trigger("change")
                }, error: function (e) {
                    $("#applyCouponCodeBtn").removeClass("disabled"), displayErrorMessage(e.responseJSON.message)
                }
            })
        }(e, t, a)
    })), listenClick("#planStatus", (function () {
        var e = $(this).data("id"), t = route("plan.status", e);
        $.ajax({
            type: "get", url: t, success: function (e) {
                displaySuccessMessage(e.message), $("#userTable").DataTable().ajax.reload()
            }
        })
    })), listen("click", ".plan-delete-btn", (function (e) {
        var t = $(e.currentTarget).data("id"), a = route("plans.destroy", {plan: t});
        deleteItem(a, "Plan")
    })), listenChange(".is_default", (function (e) {
        var t = $(e.currentTarget).data("id");
        $.ajax({
            url: route("make.plan.default", t), method: "post", cache: !1, success: function (e) {
                e.success && (displaySuccessMessage(e.message), Livewire.emit("refresh"))
            }
        })
    })), listenChange(".status", (function (e) {
        var t = $(e.currentTarget).data("id");
        $.ajax({
            url: route("plan-status", t), method: "post", cache: !1, success: function (e) {
                e.success && (displaySuccessMessage(e.message), Livewire.emit("refresh"))
            }
        })
    })), listenKeyup(".price-format-input", (function (e) {
        var t;
        if (e.keyCode <= 95 && e.keyCode >= 106 && (46 != e.which || -1 != $(this).val().indexOf(".")) && (e.which < 48 || e.which > 57)) {
            e.preventDefault();
            var a = $(this).val().slice(0, -1) + "";
            return $(this).val(a)
        }
        var n = e.which ? e.which : e.keyCode;
        if (n <= 95 && n >= 106 && (n > 64 && n < 91 || n > 96 && n < 123 || 8 == n || 32 == n)) {
            var r = $(this).val().slice(0, -1) + "";
            return $(this).val(r)
        }
        var i = (null === (t = $(this).val().match(/\./g)) || void 0 === t ? void 0 : t.length) || 0;
        if (2 == i) {
            var s = $(this).val().slice(0, -1) + "";
            return $(this).val(s)
        }
        var o = this.value;
        if (o = o.replace(/,/g, ""), 0 == i) if (o.length > 3) {
            for (var l = Math.ceil(o.length / 3) - 1, d = o.length - 3 * l, c = [], u = 0; u < l; u++) c.unshift(o.substr(o.length - 3 * u - 3, 3));
            c.unshift(o.substr(0, d)), this.value = c
        } else this.value = o
    })), window.featureChecked = function (e) {
        e === $(".feature:checkbox").length ? $("#featureAll").prop("checked", !0) : $("#featureAll").prop("checked", !1)
    }, document.addEventListener("turbo:load", (function () {
        var e = $(".feature:checkbox:checked").length;
        featureChecked(e)
    })), listenClick("#featureAll", (function () {
        $("#featureAll").is(":checked") ? $(".feature").each((function () {
            $(this).prop("checked", !0)
        })) : $(".feature").each((function () {
            $(this).prop("checked", !1)
        }))
    })), listenClick(".feature", (function () {
        var e = $(".feature:checkbox:checked").length;
        featureChecked(e)
    })), listenClick(".screen.image", (function () {
        var e = $(this).prev(), t = e[0].defaultValue;
        e.is(":checked") && 22 == t ? (e.prop("checked", !1), $(this).removeClass("template-border"), $("input[name='dynamic_vcard']").prop("checked", !1)) : (e.prop("checked", !0), $(this).addClass("template-border"), 22 == t && $("input[name='dynamic_vcard']").prop("checked", !0));
        var a = $(".feature:checkbox").length === $(".feature:checkbox:checked").length;
        e.is(":checked") && $("input[name='dynamic_vcard']").prop("checked") && a ? $("#featureAll").prop("checked", !0) : $("#featureAll").prop("checked", !1)
    })), listenClick("#isTrial", (function () {
        $(this).is(":checked") ? ($("#duration_type").val(1).trigger("change"), $("#price").val(0), $("#duration_type, #price").prop("disabled", !0)) : ($("#price").val(""), $("#duration_type, #price").prop("disabled", !1))
    })), listenClick("#planFormSubmit", (function (e) {
        return $(".templateIds").is(":checked") ? $(".feature").is(":checked") ? void 0 : (displayErrorMessage(Lang.get("js.select_one_or_more")), !1) : (displayErrorMessage(Lang.get("js.multi_templates")), !1)
    })), listenClick(".view-btn", (function (e) {
        var t, a = $(e.currentTarget).data("id");
        t = a, $.ajax({
            url: route("enquiry.show", t), type: "GET", success: function (e) {
                e.success && ($("#showName").text(e.data.name), $("#showEmail").text(e.data.email), null != e.data.phone ? $("#showPhone").text(e.data.phone) : $("#showPhone").text("N/A"), $("#showMessage").text(e.data.message), $("#showEnquiryModal").modal("show"))
            }, error: function (e) {
                displayErrorMessage(e.responseJSON.message)
            }
        })
    })), listenClick(".enquiries-view-btn", (function (e) {
        var t = $(e.currentTarget).data("id");
        $.ajax({
            url: route("enquiry.show", t), type: "GET", success: function (e) {
                e.success && ($("#vcardName").text(e.data.vcard.name), $("#showName").text(e.data.name), $("#showEmail").text(e.data.email), null != e.data.phone ? $("#showPhone").text(e.data.phone) : $("#showPhone").text("N/A"), $("#showMessage").text(e.data.message), $("#showEnquiriesModal").modal("show"))
            }, error: function (e) {
                displayErrorMessage(e.responseJSON.message)
            }
        })
    })), listenClick(".enquiries-delete-btn", (function (e) {
        var t = $(e.currentTarget).data("id");
        deleteItem(route("enquiry.destroy", t), "Enquiry")
    })), (() => {
        var popover;
        document.addEventListener("turbo:load", loadAppointmentCalendar);
        var popoverState = !1, calendar, data = {
                id: "",
                uId: "",
                eventName: "",
                eventDescription: "",
                eventStatus: "",
                startDate: "",
                endDate: "",
                vcardName: "",
                email: "",
                phone: "",
                startDateTime: "",
                endDateTime: ""
            }, viewEventName, viewEventDescription, viewEventStatus, viewStartDate, viewEndDate, viewModal, viewEditButton,
            viewDeleteButton, viewVcardName, viewEmail, viewPhone;

        function loadAppointmentCalendar() {
            if (appointmentStatusUpdate(), $("#appointmentCalendar").length) {
                initCalendarApp();
                var e = document.getElementById("appointmentCalendar");
                isEmpty(e) || init()
            }
        }

        var initCalendarApp = function () {
            var e = document.getElementById("appointmentCalendar");
            (calendar = new FullCalendar.Calendar(e, {
                buttonText: {today: Lang.get("js.today"), month: Lang.get("js.month")},
                themeSystem: "bootstrap5",
                height: 750,
                locale: getLoggedInUserLang,
                headerToolbar: {left: "title", center: "prev,next today", right: "dayGridMonth"},
                initialDate: new Date,
                timeZone: "UTC",
                dayMaxEvents: !0,
                events: function (e, t, a) {
                    $.ajax({
                        url: route("appointments.calendar"), type: "GET", data: e, success: function (e) {
                            e.success && t(e.data)
                        }, error: function (e) {
                            displayErrorMessage(e.responseJSON.message), a()
                        }
                    })
                },
                eventMouseEnter: function (e) {
                    formatArgs({
                        id: e.event.id,
                        title: e.event.title,
                        startStr: e.event.startStr,
                        endStr: e.event.endStr,
                        description: e.event.extendedProps.description,
                        name: e.event.extendedProps.name,
                        vcardName: e.event.extendedProps.vcardName,
                        email: e.event.extendedProps.email,
                        phone: e.event.extendedProps.phone,
                        startDateTime: e.event.extendedProps.startDateTime,
                        endDateTime: e.event.extendedProps.endDateTime
                    }), initPopovers(e.el)
                },
                eventMouseLeave: function () {
                    hidePopovers()
                },
                eventClick: function (e) {
                    hidePopovers(), formatArgs({
                        id: e.event.id,
                        title: e.event.title,
                        startStr: e.event.startStr,
                        endStr: e.event.endStr,
                        description: e.event.extendedProps.description,
                        name: e.event.extendedProps.name,
                        vcardName: e.event.extendedProps.vcardName,
                        email: e.event.extendedProps.email,
                        phone: e.event.extendedProps.phone,
                        startDateTime: e.event.extendedProps.startDateTime,
                        endDateTime: e.event.extendedProps.endDateTime
                    }), handleViewEvent()
                }
            })).render()
        }, init = function () {
            var e = document.getElementById("patientEventModal");
            viewModal = new bootstrap.Modal(e), viewEventName = e.querySelector('[data-calendar="event_name"]'), viewEventDescription = e.querySelector('[data-calendar="event_description"]'), viewEventStatus = e.querySelector('[data-calendar="event_status"]'), viewVcardName = e.querySelector('[data-calendar="event_vcard_name"]'), viewEmail = e.querySelector('[data-calendar="event_email"]'), viewPhone = e.querySelector('[data-calendar="event_phone"]'), viewStartDate = e.querySelector('[data-calendar="event_start_date"]'), viewEndDate = e.querySelector('[data-calendar="event_end_date"]'), viewEditButton = e.querySelector("#modal_view_event_edit"), viewDeleteButton = e.querySelector("#modal_view_event_delete")
        }, formatArgs = function (e) {
            data.id = e.id, data.eventName = e.title, data.eventDescription = e.description, data.startDate = e.startStr, data.endDate = e.endStr, data.name = e.name, data.vcardName = e.vcardName, data.email = e.email, data.phone = e.phone, data.startDateTime = e.startDateTime, data.endDateTime = e.endDateTime
        }, initPopovers = function (e) {
            hidePopovers();
            var t = data.allDay ? moment(data.startDate).format("Do MMM, YYYY") : moment(data.startDate).format("Do MMM, YYYY - h:mm a"),
                a = data.allDay ? moment(data.endDate).format("Do MMM, YYYY") : moment(data.endDate).format("Do MMM, YYYY - h:mm a");
            data.name, Lang.get("js.vcard_name"), data.vcardName
        }, hidePopovers = function () {
            popoverState && (popover.dispose(), popoverState = !1)
        }, handleViewButton = function () {
            document.querySelector("#calendar_event_view_button").addEventListener("click", (function (e) {
                e.preventDefault(), hidePopovers(), handleViewEvent()
            }))
        }, handleViewEvent = function () {
            var e, t;
            $(".fc-popover").addClass("hide"), viewModal.show(), e = data.startDateTime, t = data.endDateTime, viewEndDate.innerText = ": " + t, viewStartDate.innerText = ": " + e, viewEventName.innerText = Lang.get("js.user") + ": " + data.name, $(viewEventStatus).val(data.eventStatus), viewVcardName.innerText = Lang.get("js.vcard_name") + ": " + data.vcardName, viewEmail.innerText = Lang.get("js.email") + ": " + data.email, viewPhone.innerText = Lang.get("js.phone") + ": " + data.phone
        };

        function appointmentStatusUpdate() {
            function appointmentItem(e, t) {
                var a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
                swal({
                    title: Lang.get("js.completed") + " !",
                    text: Lang.get("js.are_you_completed"),
                    buttons: {confirm: Lang.get("js.Yes_Change"), cancel: Lang.get("js.no")},
                    reverseButtons: !0,
                    icon: sweetCompletedAlertIcon
                }).then((function (n) {
                    n && appointmentItemAjax(e, t, a)
                }))
            }

            function appointmentItemAjax(url, header) {
                var callFunction = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                screenLock(), $.ajax({
                    url, type: "post", dataType: "json", success: function success(obj) {
                        screenUnLock(), obj.success && window.livewire.emit("resetPageTable"), swal({
                            icon: "success",
                            title: Lang.get("js.completed") + " !",
                            text: header + " " + Lang.get("js.has_been_completed"),
                            timer: 4e3
                        }), callFunction && eval(callFunction)
                    }, error: function (e) {
                        swal({title: "Error", icon: "error", text: e.responseJSON.message, type: "error", timer: 4e3})
                    }
                })
            }

            listenClick(".completed-appointment", (function (e) {
                var t = $(e.currentTarget).data("id");
                appointmentItem(route("appointments.update", {appointment: t}), Lang.get("js.appointments"))
            }))
        }

        listen("change", "#appointmentType", (function () {
            window.livewire.emit("changeFilter", $(this).val()), hideDropdownManually($("#appointmentFilterBtn"), $("#appointmentFilter"))
        })), listen("change", "#appointmentStatus", (function () {
            window.livewire.emit("changeFilterStatus", $(this).val()), hideDropdownManually($("#appointmentFilterBtn"), $("#appointmentFilter"))
        })), listen("click", "#appointmentResetFilter", (function () {
            $("#appointmentType").val(3).change(), $("#appointmentStatus").val(3).change(), window.livewire.emit("changeFilter", ""), window.livewire.emit("changeFilterStatus", ""), hideDropdownManually($("#appointmentFilterBtn"), $("#appointmentFilter"))
        })), listen("click", "#appointmentFilterBtn", (function () {
            openDropdownManually($("#appointmentFilterBtn"), $("#appointmentFilter"))
        })), listenClick(".appointment-delete-btn", (function (e) {
            var t = $(e.currentTarget).data("id");
            deleteItem(route("appointments.destroy", t), Lang.get("js.appointment"))
        })), listenClick(".appointmentPaymentStatus", (function () {
            $(this).attr("disabled", !0);
            var e = $(this).data("id"), t = $(this).data("tenant"), a = $(this).data("status"),
                n = route("payment.status", e);
            $.ajax({
                type: "get", url: n, data: {id: e, tenant_id: t, status: a}, success: function (e) {
                    displaySuccessMessage(e.message), Livewire.emit("resetPageTable")
                }, error: function (e) {
                    displayErrorMessage(e.responseJSON.message)
                }
            })
        }))
    })(), listenSubmit("#myForm", (function (e) {
        e.preventDefault(), $.ajax({
            url: route("contact.store"),
            type: "POST",
            data: $(this).serialize(),
            success: function (e) {
                e.success && (displaySuccessMessage(e.message), $("#myForm")[0].reset())
            },
            error: function (e) {
                var t, a, n;
                t = "#contactError", a = e.responseJSON.message, (n = $(t)).removeClass("d-none"), n.show(), n.text(a), setTimeout((function () {
                    $(t).slideUp()
                }), 3e3)
            }
        })
    })), listenClick(".contact-enquiry-delete-btn", (function (e) {
        var t = $(e.currentTarget).attr("data-id");
        deleteItem(route("contactus.destroy", t), "Enquiry")
    })), listenClick("#newCountryBtn", (function () {
        $("#addCountryModal").modal("show")
    })), listenHiddenBsModal("#addCountryModal", (function () {
        resetModalForm("#addCountryForm")
    })), listenSubmit("#addCountryForm", (function (e) {
        e.preventDefault();
        var t = route("countries.store");
        $.ajax({
            url: t, type: "POST", data: $(this).serialize(), success: function (e) {
                e.success && (displaySuccessMessage(e.message), $("#addCountryModal").modal("hide"), Livewire.emit("refresh"))
            }, error: function (e) {
                displayErrorMessage(e.responseJSON.message)
            }
        })
    })), listenClick(".country-edit-btn", (function (e) {
        var t, a = $(e.currentTarget).data("id");
        t = route("countries.edit", a), $.ajax({
            url: t, type: "GET", success: function (e) {
                e.success && ($("#countryId").val(e.data.id), $("#editName").val(e.data.name), $("#editShortCode").val(e.data.short_code), $("#editPhoneCode").val(e.data.phone_code), $("#editCountryModal").modal("show"))
            }, error: function (e) {
                displayErrorMessage(e.responseJSON.message)
            }
        })
    })), listenSubmit("#editCountryForm", (function (e) {
        e.preventDefault();
        var t = $("#countryId").val(), a = route("countries.update", t);
        $.ajax({
            url: a, type: "put", data: $(this).serialize(), success: function (e) {
                e.success && (displaySuccessMessage(e.message), $("#editCountryModal").modal("hide"), Livewire.emit("refresh"))
            }, error: function (e) {
                displayErrorMessage(e.responseJSON.message)
            }
        })
    })), listen("click", ".country-delete-btn", (function (e) {
        var t = $(e.currentTarget).data("id"), a = route("countries.destroy", {country: t});
        deleteItem(a, "Country")
    })), listenClick("#superadminguideNfc", (function () {
        $("#superadminguideNfcModal").modal("show")
    })), listenClick("#adminguideNfc", (function () {
        $("#adminguideNfcModal").modal("show")
    })), listenClick("#newNfc", (function () {
        $("#addNfcModal").modal("show"), resetModalForm("#addNfcForm")
    })), listenHiddenBsModal("#addNfcModal", (function () {
        resetModalForm("#addNfcForm")
    })), listenSubmit("#addNfcForm", (function (e) {
        e.preventDefault(), $.ajax({
            url: route("nfc.store"),
            type: "POST",
            data: new FormData(this),
            contentType: !1,
            processData: !1,
            success: function (e) {
                e.success && (displaySuccessMessage(e.message), $("#addNfcModal").modal("hide"), Livewire.emit("refresh"))
            },
            error: function (e) {
                displayErrorMessage(e.responseJSON.message)
            }
        })
    })), listenHiddenBsModal("#addNfcModal", (function () {
        $("#addNfcForm")[0].reset();
        var e = $("#defaultNfcImgUrl").val();
        $("#nfcPreview").css("background-image", "url(" + e + ")")
    })), listenClick(".nfc-delete-btn", (function (e) {
        var t = $(e.currentTarget).data("id");
        deleteItem(route("nfc.delete", t), "NFC Card")
    })), listenClick(".nfc-view-btn", (function (e) {
        var t, a = $(e.currentTarget).data("id");
        t = a, $.ajax({
            url: route("nfc.edit", {id: t}), type: "GET", success: function (e) {
                e.success && ($("#nfcId").val(e.data.id), $("#editNfcTitle").val(e.data.name), $("#editNfcDescription").val(e.data.description), $("#editNfcPrice").val(e.data.price), $("#editNfcPreview").css("background-image", 'url("' + e.data.nfc_image + '")'), $("#editNfcModal").modal("show"))
            }, error: function (e) {
                displayErrorMessage(e.responseJSON.message)
            }
        })
    })), listenSubmit("#editNfcForm", (function (e) {
        e.preventDefault();
        var t = $("#nfcId").val();
        $.ajax({
            url: route("nfc.update", t),
            type: "POST",
            data: new FormData(this),
            contentType: !1,
            processData: !1,
            success: function (e) {
                e.success && (displaySuccessMessage(e.message), $("#editNfcModal").modal("hide"), Livewire.emit("refresh"))
            },
            error: function (e) {
                displayErrorMessage(e.responseJSON.message)
            }
        })
    })), (() => {
        listenClick("#addTestimonialBtn", (function () {
            $("#addFrontTestimonialModal").modal("show"), $("#testimonialSave").prop("disabled", !1)
        })), listenHiddenBsModal("#addFrontTestimonialModal", (function () {
            resetModalForm("#addFrontTestimonialForm"), $("#testimonialInputImage").css("background-image", "url(" + defaultProfileUrl + ")"), $(".cancel-testimonial").hide()
        })), listenHiddenBsModal("#editTestimonialModal", (function () {
            $(".cancel-edit-testimonial").hide()
        })), listenClick(".cancel-testimonial", (function () {
            $("#testimonialPreview").attr("src", defaultProfileUrl)
        })), listenClick(".view-testimonial-btn", (function (e) {
            var t, a = $(e.currentTarget).data("id");
            t = a, $.ajax({
                url: route("frontTestimonials.edit", t), type: "GET", success: function (e) {
                    if (e.success) {
                        $("#showName").append(e.data.name);
                        var t = document.createElement("textarea");
                        t.innerHTML = e.data.description, $("#showDesc").append(t.value), $("#showTestimonialIcon").attr("src", e.data.testimonial_url), $("#showTestimonialModal").modal("show")
                    }
                }, error: function (e) {
                    displayErrorMessage(e.responseJSON.message)
                }
            })
        })), listenSubmit("#addFrontTestimonialForm", (function (e) {
            $("#testimonialSave").prop("disabled", !0), e.preventDefault(), $.ajax({
                url: route("frontTestimonials.store"),
                type: "POST",
                data: new FormData(this),
                contentType: !1,
                processData: !1,
                success: function (e) {
                    e.success && (displaySuccessMessage(e.message), $("#addFrontTestimonialModal").modal("hide"), Livewire.emit("refresh"), $("#testimonialSave").prop("disabled", !0))
                },
                error: function (e) {
                    displayErrorMessage(e.responseJSON.message), $("#testimonialSave").prop("disabled", !1)
                }
            })
        }));
        var e = "";
        listenHiddenBsModal("#showTestimonialModal", (function () {
            $("#showName,#showDesc").empty(), $("#servicePreview").attr("src", defaultProfileUrl)
        })), listenClick(".cancel-edit-testimonial", (function () {
            $("#editTestimonialPreview").attr("src", e)
        })), listenClick(".front-testimonial-edit-btn", (function (t) {
            var a, n = $(t.currentTarget).data("id");
            a = n, $.ajax({
                url: route("frontTestimonials.edit", a), type: "GET", success: function (t) {
                    t.success && ($("#testimonialId").val(t.data.id), $("#editName").val(t.data.name), $("#editDescription").val(t.data.description), $("#editTestimonialPreview").css("background-image", 'url("' + t.data.testimonial_url + '")'), $("#editTestimonialModal").modal("show"), e = t.data.testimonial_url, $("#testimonialUpdate").prop("disabled", !1))
                }, error: function (e) {
                    displayErrorMessage(e.responseJSON.message)
                }
            })
        })), listenSubmit("#editFrontTestimonialForm", (function (e) {
            e.preventDefault(), $("#testimonialUpdate").prop("disabled", !0);
            var t = $("#testimonialId").val();
            $.ajax({
                url: route("frontTestimonial.updateData", t),
                method: "post",
                processData: !1,
                contentType: !1,
                data: new FormData(this),
                success: function (e) {
                    e.success && (displaySuccessMessage(e.message), $("#editTestimonialModal").modal("hide"), Livewire.emit("refresh"), $("#testimonialUpdate").prop("disabled", !0))
                },
                error: function (e) {
                    displayErrorMessage(e.responseJSON.message), $("#testimonialUpdate").prop("disabled", !1)
                }
            })
        })), listen("click", ".front-testimonial-delete-btn", (function (e) {
            var t = $(e.currentTarget).data("id"), a = route("frontTestimonials.destroy", {frontTestimonial: t});
            deleteItem(a, Lang.get("js.testimonial"))
        }))
    })(), listenClick("#addFaqsBtn", (function () {
        $("#addFrontFaqsModal").modal("show"), $("#faqsSave").prop("disabled", !1)
    })), listenHiddenBsModal("#addFrontFaqsModal", (function () {
        resetModalForm("#addFrontFaqsForm"), $(".cancel-testimonial").hide()
    })), listenSubmit("#addFrontFaqsForm", (function (e) {
        $("#faqsSave").prop("disabled", !0), e.preventDefault(), $.ajax({
            url: route("frontFaqs.store"),
            type: "POST",
            data: new FormData(this),
            contentType: !1,
            processData: !1,
            success: function (e) {
                e.success && (displaySuccessMessage(e.message), $("#addFrontFaqsModal").modal("hide"), Livewire.emit("refresh"), $("#faqsSave").prop("disabled", !0))
            },
            error: function (e) {
                displayErrorMessage(e.responseJSON.message), $("#faqsSave").prop("disabled", !1)
            }
        })
    })), listenHiddenBsModal("#showFaqsModal", (function () {
        $("#showTitle,#showDesc").empty()
    })), listenClick(".view-faqs-btn", (function (e) {
        var t, a = $(e.currentTarget).attr("data-id");
        t = a, $.ajax({
            url: route("frontFaqs.edit", t), type: "GET", success: function (e) {
                if (e.success) {
                    $("#showTitle").append(e.data.title);
                    var t = document.createElement("textarea");
                    t.innerHTML = e.data.description, $("#showDesc").append(t.value), $("#showFaqsModal").modal("show")
                }
            }, error: function (e) {
                displayErrorMessage(e.responseJSON.message)
            }
        })
    })), listenClick(".front-faqs-edit-btn", (function (e) {
        var t, a = $(e.currentTarget).attr("data-id");
        t = a, $.ajax({
            url: route("frontFaqs.edit", t), type: "GET", success: function (e) {
                e.success && ($("#FaqsId").val(e.data.id), $("#editTitle").val(e.data.title), $("#editDescription").val(e.data.description), $("#editFaqsModal").modal("show"), $("#faqsUpdate").prop("disabled", !1))
            }, error: function (e) {
                displayErrorMessage(e.responseJSON.message)
            }
        })
    })), listenSubmit("#editFrontFaqsForm", (function (e) {
        e.preventDefault(), $("#faqsUpdate").prop("disabled", !0);
        var t = $("#FaqsId").val();
        $.ajax({
            url: route("frontFaqs.updateData", t),
            method: "POST",
            processData: !1,
            contentType: !1,
            data: new FormData(this),
            success: function (e) {
                e.success && (displaySuccessMessage(e.message), $("#editFaqsModal").modal("hide"), Livewire.emit("refresh"), $("#faqsUpdate").prop("disabled", !0))
            },
            error: function (e) {
                displayErrorMessage(e.responseJSON.message), $("#faqsUpdate").prop("disabled", !1)
            }
        })
    })), listen("click", ".front-faqs-delete-btn", (function (e) {
        var t = $(e.currentTarget).attr("data-id"), a = route("frontFaqs.destroy", t);
        deleteItem(a, Lang.get("js.faqs"))
    })), listenClick("#newStateBtn", (function () {
        $("#name").focus(), $("#addStateModal").modal("show")
    })), listenHiddenBsModal("#addStateModal", (function (e) {
        $("#addStateForm")[0].reset(), $("#countryState").val(null).trigger("change")
    })), listenSubmit("#addStateForm", (function (e) {
        e.preventDefault();
        var t = route("states.store");
        $.ajax({
            url: t, type: "POST", data: $(this).serialize(), success: function (e) {
                e.success && (displaySuccessMessage(e.message), $("#addStateModal").modal("hide"), Livewire.emit("refresh"))
            }, error: function (e) {
                displayErrorMessage(e.responseJSON.message)
            }
        })
    })), listenClick(".state-edit-btn", (function (e) {
        var t, a = $(e.currentTarget).data("id");
        t = route("states.edit", a), $.ajax({
            url: t, type: "GET", success: function (e) {
                e.success && (Livewire.emit("refresh", "refresh"), $("#stateId").val(e.data.id), $("#editName").val(e.data.name), $("#editCountryId").val(e.data.country_id).trigger("change"), $("#editStateModal").modal("show"))
            }, error: function (e) {
                displayErrorMessage(e.responseJSON.message)
            }
        })
    })), listenSubmit("#editStateForm", (function (e) {
        e.preventDefault();
        var t = $("#stateId").val(), a = route("states.update", t);
        $.ajax({
            url: a, type: "put", data: $(this).serialize(), success: function (e) {
                e.success && (displaySuccessMessage(e.message), $("#editStateModal").modal("hide"), Livewire.emit("refresh"))
            }, error: function (e) {
                displayErrorMessage(e.responseJSON.message)
            }
        })
    })), listen("click", ".state-delete-btn", (function (e) {
        var t = $(e.currentTarget).data("id"), a = route("states.destroy", {state: t});
        deleteItem(a, "State")
    })), listenClick("#newCityBtn", (function () {
        $("#addCityModal").modal("show")
    })), listenHiddenBsModal("#addCityModal", (function (e) {
        $("#addCityForm")[0].reset(), $("#StateCity").val(null).trigger("change")
    })), listenSubmit("#addCityForm", (function (e) {
        e.preventDefault();
        var t = route("cities.store");
        $.ajax({
            url: t, type: "POST", data: $(this).serialize(), success: function (e) {
                e.success && (displaySuccessMessage(e.message), $("#addCityModal").modal("hide"), Livewire.emit("refresh"))
            }, error: function (e) {
                displayErrorMessage(e.responseJSON.message)
            }
        })
    })), listenClick(".city-edit-btn", (function (e) {
        var t, a = $(e.currentTarget).data("id");
        t = route("cities.edit", a), $.ajax({
            url: t, type: "GET", success: function (e) {
                e.success && ($("#cityId").val(e.data.id), $("#editName").val(e.data.name), $("#editStateId").val(e.data.state_id).trigger("change"), $("#editCityModal").modal("show"))
            }, error: function (e) {
                displayErrorMessage(e.responseJSON.message)
            }
        })
    })), listenSubmit("#editCityForm", (function (e) {
        e.preventDefault();
        var t = $("#cityId").val(), a = route("cities.update", t);
        $.ajax({
            url: a, type: "put", data: $(this).serialize(), success: function (e) {
                e.success && (displaySuccessMessage(e.message), $("#editCityModal").modal("hide"), Livewire.emit("refresh"))
            }, error: function (e) {
                displayErrorMessage(e.responseJSON.message)
            }
        })
    })), listen("click", ".city-delete-btn", (function (e) {
        var t = $(e.currentTarget).data("id"), a = route("cities.destroy", {city: t});
        deleteItem(a, "City")
    })), document.addEventListener("turbo:load", (function () {
        (function () {
            if (!$("#phoneNumber").length) return !1;
            var e = document.querySelector("#phoneNumber"), t = document.querySelector("#error-msg"),
                a = document.querySelector("#valid-msg"),
                n = [Lang.get("js.invalid_number"), Lang.get("js.invalid_country_number"), Lang.get("js.too_short"), Lang.get("js.too_long"), Lang.get("js.invalid_number")],
                r = window.intlTelInput(e, {
                    initialCountry: defaultCountryCodeValue,
                    separateDialCode: !0,
                    geoIpLookup: function (e, t) {
                        $.get("https://ipinfo.io", (function () {
                        }), "jsonp").always((function (t) {
                            var a = t && t.country ? t.country : "";
                            e(a)
                        }))
                    },
                    utilsScript: "../../public/assets/js/inttel/js/utils.min.js"
                }), i = function () {
                    e.classList.remove("error"), t.innerHTML = "", t.classList.add("d-none"), a.classList.add("d-none")
                };
            1 == mobileValidation && e.addEventListener("blur", (function () {
                if (i(), e.value.trim()) if (r.isValidNumber()) a.classList.remove("d-none"); else {
                    e.classList.add("error");
                    var s = r.getValidationError();
                    t.innerHTML = n[s], t.classList.remove("d-none")
                }
            })), e.addEventListener("change", i), e.addEventListener("keyup", i), "undefined" != typeof phoneNo && "" !== phoneNo && setTimeout((function () {
                $("#phoneNumber").trigger("change")
            }), 500), $("#phoneNumber").on("blur keyup change countrychange", (function () {
                "undefined" != typeof phoneNo && "" !== phoneNo && (r.setNumber("+" + phoneNo), phoneNo = "");
                var e = r.selectedCountryData.dialCode;
                $("#prefix_code").val(e);
                var t = $(this).val();
                t = t.replace(/-/g, ""), $(this).val(t)
            }));
            var s = r.selectedCountryData.dialCode;
            $("#prefix_code").val(s);
            var o = $("#phoneNumber").val().replace(/\s/g, "");
            $("#phoneNumber").val(o), $("#phoneNumber").focus(), $("#phoneNumber").trigger("blur")
        })(), function () {
            if (!$("#userCreateForm").length) return !1;
            1 == mobileValidation && $("#userCreateForm").submit((function () {
                if ("" !== $("#error-msg").text()) return $("#phoneNumber").focus(), !1
            }))
        }(), function () {
            if (!$("#userEditForm").length) return !1;
            1 == mobileValidation && $("#userEditForm").submit((function () {
                if ("" !== $("#error-msg").text()) return $("#phoneNumber").focus(), !1
            }))
        }(), function () {
            if (!$("#editForm").length) return !1;
            1 == mobileValidation && $("#editForm").submit((function () {
                if ("" !== $("#error-msg").text()) return $("#phoneNumber").focus(), $("#alternativePhone").focus(), !1
            }))
        }(), function () {
            if (!$("#createSetting").length) return !1;
            1 == mobileValidation && $("#createSetting").submit((function () {
                if ("" !== $("#error-msg").text()) return $("#phoneNumber").focus(), !1
            }))
        }(), function () {
            if (!$("#alternativePhone").length) return !1;
            var e = document.querySelector("#alternativePhone"), t = document.querySelector("#alter-error-msg"),
                a = document.querySelector("#alter-valid-msg"),
                n = [Lang.get("js.invalid_number"), Lang.get("js.invalid_country_number"), Lang.get("js.too_short"), Lang.get("js.too_long"), Lang.get("js.invalid_number")],
                r = window.intlTelInput(e, {
                    initialCountry: defaultCountryCodeValue,
                    separateDialCode: !0,
                    geoIpLookup: function (e, t) {
                        $.get("https://ipinfo.io", (function () {
                        }), "jsonp").always((function (t) {
                            var a = t && t.country ? t.country : "";
                            e(a)
                        }))
                    },
                    utilsScript: "../../public/assets/js/inttel/js/utils.min.js"
                }), i = function () {
                    e.classList.remove("error"), t.innerHTML = "", t.classList.add("d-none"), a.classList.add("d-none")
                };
            1 == mobileValidation && e.addEventListener("blur", (function () {
                if (i(), e.value.trim()) if (r.isValidNumber()) a.classList.remove("d-none"); else {
                    e.classList.add("error");
                    var s = r.getValidationError();
                    t.innerHTML = n[s], t.classList.remove("d-none")
                }
            })), e.addEventListener("change", i), e.addEventListener("keyup", i), "undefined" != typeof phoneNo && "" !== phoneNo && setTimeout((function () {
                $("#alternativePhone").trigger("change")
            }), 500), $("#alternativePhone").on("blur keyup change countrychange", (function () {
                "undefined" != typeof phoneNo && "" !== phoneNo && (r.setNumber("+" + phoneNo), phoneNo = "");
                var e = r.selectedCountryData.dialCode;
                $("#alternative_prefix_code").val(e);
                var t = $(this).val();
                t = t.replace(/-/g, ""), $(this).val(t)
            }));
            var s = r.selectedCountryData.dialCode;
            $("#alternative_prefix_code").val(s);
            var o = $("#alternativePhone").val().replace(/\s/g, "");
            $("#alternativePhone").val(o), $("#alternativePhone").focus(), $("#alternativePhone").trigger("blur")
        }()
    })),listenClick("#changePassword", (function () {
        $("#changePasswordModal").modal("show").appendTo("body"), $(".dropdown-menu").removeClass("show")
    })),listenHiddenBsModal(["#changeLanguageModal", "#changePasswordModal"], (function () {
        $("#changeLanguageForm")[0].reset(), $("#changePasswordForm")[0].reset(), $("select.select2Selector").each((function (e, t) {
            var a = "#" + $(this).attr("id");
            $(a).val(getLoggedInUserLang), $(a).trigger("change")
        }))
    })),listenClick("#languageChangeBtn", (function () {
        $.ajax({
            url: route("user.changeLanguage"),
            type: "PUT",
            data: $("#changeLanguageForm").serialize(),
            success: function (e) {
                $("#changeLanguageModal").modal("hide"), displaySuccessMessage(e.message), setTimeout((function () {
                    location.reload(!0), Turbo.visit(window.location.href)
                }), 2e3)
            },
            error: function (e) {
                displayErrorMessage(e.responseJSON.message)
            }
        })
    })),listenClick("#changeLanguage", (function () {
        $(".dropdown-menu").removeClass("show");
        var e = route("get.all.language");
        $.ajax({
            url: e, type: "GET", success: function (e) {
                if (e.success) {
                    Livewire.emit("refresh", "refresh"), $("#selectLanguage").empty();
                    var t = [];
                    $.each(e.data.getAllLanguage, (function (e, a) {
                        t += '<option value="' + a.iso_code + '">' + a.name + "</option>"
                    })), $("#selectLanguage").html(t), $("#selectLanguage").val(e.data.currentLanguage).trigger("change"), $("#changeLanguageModal").modal("show")
                }
            }, error: function (e) {
                displayErrorMessage(e.message)
            }
        })
    })),$(document).on("select2:open", (function () {
        document.querySelector(".select2-search__field").focus()
    })),listenClick("#passwordChangeBtn", (function () {
        $.ajax({
            url: route("user.changePassword"),
            type: "PUT",
            data: $("#changePasswordForm").serialize(),
            success: function (e) {
                $("#changePasswordModal").modal("hide"), displaySuccessMessage(e.message)
            },
            error: function (e) {
                displayErrorMessage(e.responseJSON.message)
            }
        })
    })),listen("click", "#addLanguage", (function () {
        $("#languagePreview").css("background-image", 'url("' + appUrl + '/web/media/avatars/redflag.jpeg")'), $("#addLanguageModal").appendTo("body").modal("show"), resetModalForm("#addLanguageForm")
    })),listen("click", ".language-delete-btn", (function (e) {
        var t = $(e.currentTarget).attr("data-id");
        deleteItem(route("languages.destroy", t), "Language")
    })),listen("hidden.bs.modal", "#addLanguageModal", (function () {
        resetModalForm("#addLanguageForm", "#languageValidationErrorsBox")
    })),listen("hidden.bs.modal", "#editLanguageModal", (function () {
        resetModalForm("#editLanguageForm", "#editValidationErrorsBox")
    })),listen("submit", "#addLanguageForm", (function (e) {
        e.preventDefault(), processingBtn("#addLanguageForm", "#languageBtnSave", "loading"), $.ajax({
            url: route("languages.store"),
            type: "POST",
            data: new FormData(this),
            contentType: !1,
            processData: !1,
            success: function (e) {
                e.success && (displaySuccessMessage(e.message), $("#addLanguageModal").modal("hide"), window.livewire.emit("refresh"), setTimeout((function () {
                    $("#languageBtnSave").button("reset")
                }), 1e3))
            },
            error: function (e) {
                displayErrorMessage(e.responseJSON.message), setTimeout((function () {
                    $("#languageBtnSave").button("reset")
                }), 1e3)
            },
            complete: function () {
                setTimeout((function () {
                    processingBtn("#addLanguageForm", "#languageBtnSave")
                }), 1e3)
            }
        })
    })),listen("click", ".edit-language-btn", (function (e) {
        var t, a, n = $(e.currentTarget).data("id");
        t = n, a = {
            ar: "assets/img/LanguageImage/arabic.svg",
            en: "assets/img/LanguageImage/english.png",
            zh: "assets/img/LanguageImage/china.png",
            fr: "assets/img/LanguageImage/france.png",
            de: "assets/img/LanguageImage/german.png",
            pt: "assets/img/LanguageImage/portuguese.png",
            ru: "assets/img/LanguageImage/russian.jpeg",
            es: "assets/img/LanguageImage/spain.png",
            tr: "assets/img/LanguageImage/turkish.png"
        }, $.ajax({
            url: route("languages.edit", t), type: "GET", success: function (e) {
                if (e.success) {
                    var t = e.data.iso_code;
                    e.data.iso_code in a ? $.each(a, (function (e, a) {
                        if (t == e) return $("#editlanguagePreview").css("background-image", 'url("' + appUrl + "/" + a + '")'), $(".edit-btn").addClass("d-none"), !1
                    })) : ($("#editlanguagePreview").css("background-image", 'url("' + e.data.image_url + '")'), $(".edit-btn").removeClass("d-none")), $("#languageId").val(e.data.id), $("#editLanguage").val(e.data.name), $("#editIso").val(e.data.iso_code), $("#editLanguageModal").appendTo("body").modal("show")
                }
            }, error: function (e) {
                displayErrorMessage(e.responseJSON.message)
            }
        })
    })),listen("submit", "#editLanguageForm", (function (e) {
        e.preventDefault(), processingBtn("#editLanguageForm", "#btnEditSave", "loading");
        var t = $("#languageId").val();
        $.ajax({
            url: route("language.update", t),
            type: "post",
            data: new FormData(this),
            contentType: !1,
            processData: !1,
            success: function (e) {
                e.success && (displaySuccessMessage(e.message), $("#editLanguageModal").modal("hide"), window.livewire.emit("refresh"))
            },
            error: function (e) {
                displayErrorMessage(e.responseJSON.message)
            },
            complete: function () {
                processingBtn("#editLanguageForm", "#btnEditSave")
            }
        })
    })),listen("change", ".translateLanguage", (function () {
        "" == $(this).val() ? Turbo.visit(route("languages.translation", $("#indexLanguageId").val())) : Turbo.visit(route("languages.translation", $("#indexLanguageId").val()) + "?name=" + $("#indexSelectedLang").val() + "&file=" + file)
    })),listen("change", "#subFolderFiles", (function () {
        var e = $(this).val();
        "" == e ? Turbo.visit(route("languages.translation", $("#indexLanguageId").val())) : Turbo.visit(route("languages.translation", $("#indexLanguageId").val()) + "?name=" + $("#indexSelectedLang").val() + "&file=" + e)
    })),listen("click", ".addLanguageModal", (function () {
        $("#addModal").appendTo("body").modal("show")
    })),listen("hidden.bs.modal", "#addModal", (function () {
        resetModalForm("#addNewForm", "#validationErrorsBox")
    })),listenKeyup("#menuSearch", (function () {
        var e = $(this).val().toLowerCase();
        $(".nav-item").filter((function () {
            $(".no-record").addClass("d-none"), $(this).toggle($(this).text().toLowerCase().indexOf(e) > -1), 0 == $(".nav-item:visible").last().length && $(".no-record").removeClass("d-none")
        }))
    })),listenClick(".sidebar-aside-toggle", (function () {
        !0 === $(this).hasClass("active") ? $(".sidebar-search-box").addClass("d-none") : $(".sidebar-search-box").removeClass("d-none")
    })),(() => {
        function e(e, t) {
            var a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
                n = $("#rejectionNote").val();
            $.ajax({
                url: route("sadmin.change-withdrawal-status", {id: e, isApproved: t}),
                data: {rejectionNote: n, meta: a},
                type: "post",
                success: function (e) {
                    e.success && (livewire.emit("refresh"), displaySuccessMessage(e.message), $(".modal").modal("hide"))
                },
                error: function (e) {
                    displayErrorMessage(e.responseJSON.message)
                }
            })
        }

        listenSubmit("#withdrawAmountForm", (function (e) {
            e.preventDefault(), $.ajax({
                url: route("withdraw-amount"),
                type: "Post",
                data: $(this).serialize(),
                success: function (e) {
                    e.success && (displaySuccessMessage(e.message), livewire.emit("refresh"), $("#withdrawAmountModal").modal("hide"))
                },
                error: function (e) {
                    displayErrorMessage(e.responseJSON.message)
                }
            })
        })), listen("hidden.bs.modal", "#withdrawAmountModal", (function () {
            $("#withdrawAmountForm")[0].reset()
        })), listen("hidden.bs.modal", "#rejectWithdrawalModal", (function () {
            $("#rejectionNote").val("")
        })), listenClick("#rejectWithdrawalBtn", (function (e) {
            e.preventDefault();
            var t = $(this).attr("data-id");
            $("#rejectWithdrawalStatus").attr("data-id", t), $("#rejectWithdrawalModal").appendTo("body").modal("show")
        })), listenClick("#approveWithdrawalBtn", (function (e) {
            e.preventDefault();
            var t = $(this).attr("data-id"), a = $(this).attr("data-amount");
            $("#approveWithdrawalStatus").attr("data-id", t), $("#withdrawAmount").html(a), $("#approveWithdrawalModal").appendTo("body").modal("show")
        })), listenHiddenBsModal("#approveWithdrawalModal", (function () {
            $("#withdrawPaymentMethod").val(0).trigger("change")
        })), listenClick("#showAffiliationWithdrawBtn", (function () {
            var e = $(this).attr("data-id"), t = route("sadmin.withdraw-transactions.show", {id: e});
            $.ajax({
                url: t, type: "Get", success: function (e) {
                    if (e.success) {
                        var t = e.data, a = t.user;
                        $("#withdrawalUsername").text(a.full_name), $("#withdrawalAmount").text(t.formattedAmount), 1 == t.is_approved ? $("#withdrawalIsApproved").text("Approved").removeClass("bg-danger bg-warning").addClass("bg-success") : 2 == t.is_approved ? $("#withdrawalIsApproved").text("Rejected").removeClass("bg-success bg-warning").addClass("bg-danger") : $("#withdrawalIsApproved").text("In Process").removeClass("bg-success bg-danger").addClass("bg-warning"), $("#withdrawalDate").text(moment(t.created_at).format(getFormattedDateTime(userDateFormate, 1))), t.rejection_note ? ($("#withdrawalRejectionDiv").removeClass("d-none"), $("#withdrawalRejectionNote").text(t.rejection_note)) : $("#withdrawalRejectionDiv").addClass("d-none"), $("#showAffiliationWithdrawModal").appendTo("body").modal("show")
                    }
                }, error: function (e) {
                    displayErrorMessage(e.responseJSON.message)
                }
            })
        })), listenClick("#approveWithdrawalStatus", (function () {
            var t = $(this).attr("data-id"), a = $(this).attr("data-status");
            1 == a && "1" == $("#withdrawPaymentMethod").val() ? $.ajax({
                type: "GET",
                url: route("paypal.payout"),
                data: {withdrawalId: t},
                success: function (n) {
                    n.success && e(t, a, n.data)
                },
                error: function (e) {
                    displayErrorMessage(e.responseJSON.message)
                }
            }) : e(t, a)
        })), listenClick("#rejectWithdrawalStatus", (function () {
            if (0 == $("#rejectionNote").val().trim().length) return displayErrorMessage("Rejection note field is required"), !1;
            e($(this).attr("data-id"), $(this).attr("data-status"))
        })), listenClick(".sendInviteBtn", (function () {
            $("#sendRferralMail").modal("show")
        })), listenSubmit("#sendReferralForm", (function () {
            $("#sendRferralMail").modal("hide")
        })), listenHiddenBsModal("#sendRferralMail", (function () {
            resetModalForm("#sendReferralForm")
        })), listenClick("#copyLinkBtn", (function () {
            $("#urlLink").select();
            document.execCommand("copy"), displaySuccessMessage(Lang.get("js.copied_successfully"))
        }))
    })(),document.addEventListener("turbo:load", (function () {
        var e = getFormattedDateTime(userDateFormate);
        window.couponExpireAt = $("#couponExpireAt").flatpickr({
            locale: getLoggedInUserLang,
            minDate: (new Date).fp_incr(1),
            dateFormat: e
        }), window.editCouponExpireAt = $("#editCouponExpireAt").flatpickr({
            locale: getLoggedInUserLang,
            minDate: (new Date).fp_incr(1),
            dateFormat: e
        })
    })),listenSubmit("#addCouponCodeForm", (function (e) {
        if (e.preventDefault(), 1 == $("#percentageType").prop("checked") && $("#couponDiscount").val() > 100) return displayErrorMessage(Lang.get("js.coupon_code_percent_validation")), !1;
        $("#couponCodeSaveBtn").attr("disabled", !0), $("#couponName").trigger("keyup"), $.ajax({
            url: route("coupon-codes.store"),
            type: "post",
            data: $(this).serialize(),
            success: function (e) {
                $("#couponCodeSaveBtn").attr("disabled", !1), livewire.emit("refresh"), displaySuccessMessage(e.message), $("#couponCodeModal").modal("hide")
            },
            error: function (e) {
                $("#couponCodeSaveBtn").attr("disabled", !1), displayErrorMessage(e.responseJSON.message)
            }
        })
    })),listenSubmit("#editCouponCodeForm", (function (e) {
        if (e.preventDefault(), 1 == $("#editCouponPercentageType").prop("checked") && $("#editCouponDiscount").val() > 100) return displayErrorMessage(Lang.get("js.coupon_code_percent_validation")), !1;
        $("#editCouponCodeSaveBtn").attr("disabled", !0);
        var t = $("#editCouponId").val();
        $("#editCouponName").trigger("keyup"), $.ajax({
            url: route("coupon-codes.update", t),
            type: "put",
            data: $(this).serialize(),
            success: function (e) {
                $("#editCouponCodeSaveBtn").attr("disabled", !1), livewire.emit("refresh"), displaySuccessMessage(e.message), $("#editCouponCodeModal").modal("hide")
            },
            error: function (e) {
                $("#editCouponCodeSaveBtn").attr("disabled", !1), displayErrorMessage(e.responseJSON.message)
            }
        })
    })),listenClick(".edit-coupon-code", (function () {
        var e = $(this).attr("data-id");
        $.ajax({
            url: route("coupon-codes.edit", e), success: function (e) {
                var t = e.data;
                $("#editCouponId").val(t.id), $("#editCouponName").val(t.coupon_name), 1 == t.type ? ($("#editCouponFixedType").prop("checked", !0), $("#editDiscountTypeIcon").text("Flat")) : ($("#editCouponPercentageType").prop("checked", !0), $("#editDiscountTypeIcon").text("%")), $("#editCouponDiscount").val(t.discount), editCouponExpireAt.setDate(moment(t.expire_at).format(getFormattedDateTime(userDateFormate, 1))), $("#editCouponExpireAt").val(moment(t.expire_at).format(getFormattedDateTime(userDateFormate, 1))), $("#editCouponStatus").prop("checked", t.status), $("#editCouponCodeModal").modal("show")
            }, error: function (e) {
                displayErrorMessage(e.responseJSON.message)
            }
        })
    })),listenClick(".delete-coupon-code", (function () {
        var e = $(this).attr("data-id"), t = route("coupon-codes.destroy", e);
        deleteItem(t, Lang.get("js.coupon_code"))
    })),listenKeyup("#couponName, #editCouponName", (function () {
        $(this).val($(this).val().toUpperCase().replace(/-/g, ""))
    })),listenHiddenBsModal("#couponCodeModal", (function () {
        $("#addCouponCodeForm")[0].reset(), $("#discountTypeIcon").text("%"), couponExpireAt.clear()
    })),listenClick("#changeCouponStatus", (function () {
        var e = $(this).attr("data-id"), t = $(this).prop("checked"), a = route("coupon-codes.change-status", e);
        $.ajax({
            url: a, type: "post", data: {status: t}, success: function (e) {
                displaySuccessMessage(e.message), livewire.emit("refresh")
            }, error: function (e) {
                displayErrorMessage(e.responseJSON.message)
            }
        })
    })),listenChange('input[name="type"]', (function () {
        var e = $("#discountTypeIcon"), t = $("#editDiscountTypeIcon");
        1 == $(this).val() ? (e.text(Lang.get("js.flat")), t.text(Lang.get("js.flat"))) : (e.text("%"), t.text("%"))
    })),document.addEventListener("turbo:load", (function () {
    })),listenClick(".social-links", (function () {
        $(".social-links-add").append('        <div class="col-lg-6 mb-7 social-links-div">\n                            <div class="d-flex">\n                                <div class="mb-3 mb-sm-0 me-5">\n                                    <div class="" io-image-input="true">\n                                        <div class="    ">\n                                            <div class="image-picker">\n                                                <div class="image previewImage " id="exampleInputImage"\n                                                     style="background-image: url(' + defaultProfileUrl + ') ;width: 40px; height: 40px"></div>\n                                                <span class="picker-edit rounded-circle text-gray-500 fs-small" data-bs-toggle="tooltip"\n                                                      data-placement="top" data-bs-original-title="{{__(\'messages.tooltip.profile\')}}" style="width: 22px; height: 22px">\n                                                    <label>\n                                                    <i class="fa-solid fa-pen" id="profileImageIcon" ></i>\n                                                        <input type="file" id="profile_image" name="social_links_image[]"\n                                                               class="image-upload d-none social_links_image" accept="image/*"/>\n                                                    </label>\n                                                </span>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class="d-flex ml-2 w-100">\n                                    <input type="text" class="form-control social_links" name="social_links[]">\n  <input type="hidden" name="social_link_id[]" class="socialLinkId" value="">                                    <a href="javascript:void(0)"  title="{{ __(\'messages.common.delete\') }}"\n                                       class="btn px-1 text-danger fs-3 social-links-delete-btn">\n                                        <i class="fa-solid fa-trash"></i>\n                                    </a>\n                                </div>\n                            </div>\n                        </div>'), IOInitImageComponent()
    })),listenClick(".social-links-delete-btn", (function () {
        $(this).closest(".social-links-div").remove()
    })),listenClick(".social_link_save", (function (e) {
        e.preventDefault();
        for (var t = $(".social_links"), a = $(".social_links_image"), n = 0; n < t.length; n++) if ("" == $.trim($(t[n]).val())) return displayErrorMessage(Lang.get("js.social_links_is_required")), !1;
        for (n = 0; n < a.length; n++) {
            var r = void 0;
            if ("" == (r = "" != $(a[n]).prop("defaultValue") && "" == $(a[n]).val() ? $(a[n]).prop("defaultValue") : $(a[n]).val())) return displayErrorMessage(Lang.get("js.social_links_img_is_required")), !1;
            var i = r.split(".").pop().toLowerCase();
            if (-1 == $.inArray(i, ["png", "jpg", "jpeg"])) return displayErrorMessage(Lang.get("js.allowed_image")), !1;
            var s = void 0;
            if (s = "" != $(t[n]).prop("defaultValue") && "" == $(t[n]).val() ? $(t[n]).prop("defaultValue") : $(t[n]).val(), "" == $.trim(s)) return displayErrorMessage(Lang.get("js.social_links_img_is_required")), !1
        }
        $("#editForm").submit()
    })),document.addEventListener("turbo:load", (function () {
        $("#e-vcard-id").select2({placeholder: "Select Vcard"})
    })),listenChange("#e-vcard-id", (function (e) {
        e.preventDefault();
        var t = $("#e-vcard-id").val();
        $.ajax({
            url: route("get-vcard-data"), type: "GET", data: {vcardId: t}, success: function (e) {
                e.success && ($("#e-card-first-name").val(e.data.first_name), $("#e-card-last-name").val(e.data.last_name), $("#e-card-email").val(e.data.email), $("#e-card-occupation").val(e.data.occupation), $("#e-card-location").val(e.data.location), $("#prefix_code").val(e.data.region_code), $("#phoneNumber").val(e.data.phone), $("#e-card-website").val(e.data.website))
            }, error: function (e) {
                displayErrorMessage(e.responseJSON.message)
            }
        })
    })),document.addEventListener("turbo:load", (function () {
        $("#vcard-id").select2({dropdownParent: $("#nfcOrderFormModal")}), $(".paymentType").select2({dropdownParent: $("#nfcOrderFormModal")}), $("#NFC-card-type").select2({placeholder: "Select Card Type"})
    })),listenChange("#vcard-id", (function (e) {
        e.preventDefault();
        var t = $("#vcard-id").val();
        $.ajax({
            url: route("vcard-data"), type: "GET", data: {vcardId: t}, success: function (e) {
                if (e.success) {
                    var t = e.data.first_name + " " + e.data.last_name;
                    $("#e-card-name").val(t), $("#e-card-email").val(e.data.email), $("#e-card-occupation").val(e.data.occupation), $("#e-card-location").val(e.data.location), $("#phoneNumber").val(e.data.phone), $("#regionCode").val(e.data.region_code), $("#companyName").val(e.data.company)
                }
            }, error: function (e) {
                displayErrorMessage(e.responseJSON.message)
            }
        })
    })),listenChange("#paymentType", (function () {
        var e = $("#paymentType").val(), t = $(".order-nfc-card-form");
        4 == e ? (t.removeAttr("id"), t.attr("action", route("nfc.order.store"))) : (t.removeAttr("action"), t.attr("id", "orderNfcForm"))
    })),listenClick(".nfc-img-radio", (function () {
        $(".nfc-img-radio").removeClass("img-border"), $(this).addClass("img-border"), $("#card-id").val($(this).attr("data-id"))
    })),listenSubmit("#orderNfcForm", (function (e) {
        e.preventDefault(), $("#order-btn").prop("disabled", !0), $.ajax({
            url: route("nfc.order.store"),
            type: "POST",
            data: new FormData(this),
            contentType: !1,
            processData: !1,
            success: function (e) {
                if (e.success) {
                    if (!isEmpty(e.data)) {
                        if (1 == e.data.payment_method) {
                            var t = e.data[0].sessionId;
                            stripe.redirectToCheckout({sessionId: t})
                        }
                        if (3 == e.data.payment_method) {
                            var a = e.data[0], n = a.id, r = a.amount, i = a.name, s = a.email, o = a.contact;
                            options.amount = r, options.order_id = n, options.prefill.name = i, options.prefill.email = s, options.prefill.contact = o;
                            var l = new Razorpay(options);
                            return l.open(), l.on("nfc.payment.failed"), !1
                        }
                        if (2 == e.data.payment_method && (e.data[0].original.link && (window.location.href = e.data[0].original.link), 201 === e.data[0].original.statusCode)) {
                            var d = "";
                            $.each(e.data[0].original.result.links, (function (e, t) {
                                "approve" == t.rel && (d = t.href)
                            })), location.href = d
                        }
                        if (5 == e.data.payment_method && (window.location.href = e.data[0]), 6 == e.data.payment_method && (e.data[0].original.link && (window.location.href = e.data[0].original.link), 201 === e.data[0].original.statusCode)) {
                            var c = "";
                            $.each(e.data[0].original.result.links, (function (e, t) {
                                "approve" == t.rel && (c = t.href)
                            })), location.href = c
                        }
                        4 == e.data.payment_method && (location.href = route("user.orders"))
                    }
                    $("#order-btn").prop("disabled", !1), resetModalForm("#orderNfcForm"), displaySuccessMessage(e.message)
                }
            },
            error: function (e) {
                displayErrorMessage(e.responseJSON.message), $("#order-btn").prop("disabled", !1)
            }
        })
    })),listenClick("#paymentStatus", (function () {
        var e = $(this).data("id"), t = route("nfc.payment.status", e);
        $.ajax({
            type: "get", url: t, success: function (e) {
                displaySuccessMessage(e.message), Livewire.emit("resetPageTable")
            }
        })
    })),listenClick(".order-status", (function () {
        var e = $(this).data("status"), t = $(this).parents("ul").next().val(), a = route("nfc.order.status", t);
        $.ajax({
            type: "get", url: a, data: {status: e}, success: function (e) {
                displaySuccessMessage(e.message), Livewire.emit("resetPageTable")
            }
        })
    })),listen("change", "#cardType", (function () {
        window.livewire.emit("changeFilter", $(this).val()), hideDropdownManually($("#cardTypeFilterBtn"), $("#cardTypeFilter"))
    })),listen("change", "#appointmentStatus", (function () {
        window.livewire.emit("changeFilterStatus", $(this).val()), hideDropdownManually($("#cardTypeFilterBtn"), $("#cardTypeFilter"))
    })),listen("click", "#cardTypeResetFilter", (function () {
        $("#cardType").val(0), window.livewire.emit("changeFilter", ""), window.livewire.emit("changeFilterStatus", ""), hideDropdownManually($("#cardTypeFilterBtn"), $("#cardTypeFilter"))
    })),listenClick(".nfccard", (function (e) {
        var t = $(e.currentTarget).attr("data-id"), a = route("nfc-details", t);
        $.ajax({
            url: a, type: "GET", data: {id: t}, success: function (e) {
                var t = e.data.price.toFixed(2);
                $("#name").text(e.data.name), $("#description").text(e.data.description), $("#nfcProductImg").attr("src", e.data.nfc_image), $("#price").text(e.message + t), $("#nfcCardDetailModal").modal("show")
            }, error: function (e) {
                displayErrorMessage(e.responseJSON.message)
            }
        })
    })),listenClick(".increaseCount", (function () {
        var e = this.previousElementSibling, t = parseInt(e.value, 10);
        t = isNaN(t) ? 0 : t, t++, e.value = t
    })),listenClick(".decreaseCount", (function () {
        var e = this.nextElementSibling, t = parseInt(e.value, 10);
        t > 1 && (t = isNaN(t) ? 0 : t, t--, e.value = t)
    })),listenKeyup(".quantity", (function () {
        parseInt($(this).val()) < 1 && $(this).val(1)
    })),listenClick("#addiframeBtn", (function () {
        $("#addiframelModal").modal("show")
    })),listenHiddenBsModal("#addiframelModal", (function (e) {
        resetModalForm("#addiframeForm"), $("#addiframeForm")[0].reset(), $("#iframeSave").prop("disabled", !1)
    })),listenSubmit("#addiframeForm", (function (e) {
        e.preventDefault(), $("#iframeSave").prop("disabled", !0);
        var t = new FormData(this);
        $.ajax({
            url: route("iframe.store"),
            type: "POST",
            data: t,
            contentType: !1,
            processData: !1,
            success: function (e) {
                e.success && (displaySuccessMessage(e.message), $("#addiframeForm")[0].reset(), $("#addiframelModal").modal("hide"), Livewire.emit("refresh"), $("#iframeSave").prop("disabled", !0))
            },
            error: function (e) {
                displayErrorMessage(e.responseJSON.message), $("#iframeSave").prop("disabled", !1)
            }
        })
    })),listenSubmit("#editiframeForm", (function (e) {
        $("#iframeUpdate").prop("disabled", !0), e.preventDefault();
        var t = $("#iframe_id").val();
        $.ajax({
            url: route("iframe.update", t),
            type: "POST",
            data: new FormData(this),
            contentType: !1,
            processData: !1,
            success: function (e) {
                e.success && ($("#iframeUpdate").prop("disabled", !0), displaySuccessMessage(e.message), $("#editiframeModal").modal("hide"), Livewire.emit("refresh"))
            },
            error: function (e) {
                displayErrorMessage(e.responseJSON.message), $("#iframeUpdate").prop("disabled", !1)
            }
        })
    })),listenClick(".iframe-edit-btn", (function () {
        var e = $(this).attr("data-id");
        $.ajax({
            url: route("iframe.edit", e), type: "GET", success: function (e) {
                e.success && ($("#editUrl").val(e.data.url), $("#iframeUpdate").prop("disabled", !1), $("#iframe_id").val(e.data.id), $("#editiframeModal").modal("show"))
            }, error: function (e) {
                displayErrorMessage(e.responseJSON.message)
            }
        })
    })),listen("click", ".iframe-delete-btn", (function (e) {
        var t = $(e.currentTarget).attr("data-id"), a = route("iframe.destroy", {iframe: t});
        deleteItem(a, "Vcard iframes")
    })),document.addEventListener("turbo:load", (function () {
        authUser && roleAdmin && $.ajax({
            type: "post",
            url: route("user.storage.chart"),
            dataType: "json",
            success: function (e) {
                !function (e, t) {
                    var a = document.getElementById("storagePieChart");
                    if (a) {
                        var n = a.getContext("2d");
                        new Chart(n, {
                            type: "pie",
                            options: {
                                responsive: !0,
                                maintainAspectRatio: !1,
                                responsiveAnimationDuration: 500,
                                plugins: {
                                    tooltip: {
                                        callbacks: {
                                            label: function (e) {
                                                var a = t[e.dataIndex] || "";
                                                return a + " " + Math.round(e.parsed) + "%"
                                            }
                                        }
                                    }
                                }
                            },
                            data: {datasets: [{data: e, backgroundColor: window.statisticsColors}]}
                        })
                    }
                }(e.data.data, e.data.labels)
            },
            cache: !1
        })
    })),window.statisticsColors = ["#6571FF", "#C1C6FF"]
})();
