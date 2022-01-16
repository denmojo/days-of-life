<!-- Begin readable js
function setToday() {
	var f=document.inputform;
	var d=new Date();
	var y=d.getFullYear;
	if (y) {y=d.getFullYear();} else {
	 y=d.getYear();
	 if (y<200) {y+=1900;}
	}
	f["day"].value=d.getDate()-1;
	f["month"].value=d.getMonth()+1;
	f["year"].value=y;
}

function start() {
    document.inputform.day.value = "";
    document.inputform.month.value = "";
    document.inputform.year.value = "";
    document.getElementById('age').innerHTML = "";
    document.getElementById('months').innerHTML = "";
    document.getElementById('weeks').innerHTML = "";
    document.getElementById('answer').innerHTML = "";
    document.getElementById('hours').innerHTML = "";
//    document.getElementById('min').innerHTML = "";
//    document.getElementById('sec').innerHTML = "";
    document.getElementById('bday').innerHTML = "";
}
function run() {
    var ap;
    dd = document.inputform.day.value;
    mm = document.inputform.month.value;
    yy = document.inputform.year.value;
    with(document.inputform) {
        ap = parseInt(ampm.selectedIndex);
        hr = parseInt(hrs.value);
        if (hr <= 0 && hr >= 13) {
            ap = null;
            alert("Invalid hour")
        }
    }
    main = "valid";
    if ((mm < 1) || (mm > 12) || (dd < 1) || (dd > 31) || (yy < 1) || (mm == "") || (dd == "") || (yy == ""))
    main = "Invalid";
    else
    if (((mm == 4) || (mm == 6) || (mm == 9) || (mm == 11)) && (dd > 30))
    main = "Invalid";
    else
    if (mm == 2) {
        if (dd > 29)
        main = "Invalid";
        else if ((dd > 28) && (!lyear(yy)))
        main = "Invalid";
    }
    else
    if ((yy > 9999) || (yy < 0))
    main = "Invalid";
    else
    main = main;
    if (main == "valid") {
        function leapyear(a) {
            if (((a % 4 == 0) && (a % 100 != 0)) || (a % 400 == 0))
            return true;
            else
            return false;
        }
        baseyear = 1900;
        if (navigator.appVersion.indexOf("MSIE") != -1) {
            baseyear = 0;
        }
        days = new Date();
        gdate = days.getDate();
        gmonth = days.getMonth();
        gyear = baseyear + days.getYear();
        age = gyear - yy;
        if ((mm == (gmonth + 1)) && (dd <= parseInt(gdate))) {
            age = age;
        }
        else {
            if (mm <= (gmonth)) {
                age = age;
            }
            else {
                age = age - 1;
            }
        }
        if (age == 0)
        age = age;
        document.getElementById('age').innerHTML = "You are " + age + " years old. ";
        if (mm <= (gmonth + 1))
        age = age - 1;
        if ((mm == (gmonth + 1)) && (dd > parseInt(gdate)))
        age = age + 1;
        var m;
        var n;
        if (mm == 12) {
            n = 31 - dd;
        }
        if (mm == 11) {
            n = 61 - dd;
        }
        if (mm == 10) {
            n = 92 - dd;
        }
        if (mm == 9) {
            n = 122 - dd;
        }
        if (mm == 8) {
            n = 153 - dd;
        }
        if (mm == 7) {
            n = 184 - dd;
        }
        if (mm == 6) {
            n = 214 - dd;
        }
        if (mm == 5) {
            n = 245 - dd;
        }
        if (mm == 4) {
            n = 275 - dd;
        }
        if (mm == 3) {
            n = 306 - dd;
        }
        if (mm == 2) {
            n = 334 - dd;
            if (leapyear(yy)) n = n + 1;
        }
        if (mm == 1) {
            n = 365 - dd;
            if (leapyear(yy)) n = n + 1;
        }
		m = 0;
        if (gmonth == 1) m = 31;
        if (gmonth == 2) {
            m = 59;
            if (leapyear(gyear)) m = m + 1;
        }
        if (gmonth == 3) {
            m = 90;
            if (leapyear(gyear)) m = m + 1;
        }
        if (gmonth == 4) {
            m = 120;
            if (leapyear(gyear)) m = m + 1;
        }
        if (gmonth == 5) {
            m = 151;
            if (leapyear(gyear)) m = m + 1;
        }
        if (gmonth == 6) {
            m = 181;
            if (leapyear(gyear)) m = m + 1;
        }
        if (gmonth == 7) {
            m = 212;
            if (leapyear(gyear)) m = m + 1;
        }
        if (gmonth == 8) {
            m = 243;
            if (leapyear(gyear)) m = m + 1;
        }
        if (gmonth == 9) {
            m = 273;
            if (leapyear(gyear)) m = m + 1;
        }
        if (gmonth == 10) {
            m = 304;
            if (leapyear(gyear)) m = m + 1;
        }
        if (gmonth == 11) {
            m = 334;
            if (leapyear(gyear)) m = m + 1;
        }
        if (gmonth == 12) {
            m = 365;
            if (leapyear(gyear)) m = m + 1;
        }
        totdays = (parseInt(age) * 365);
        totdays += age / 4;
        totdays = parseInt(totdays) + gdate + m + n;
        document.getElementById('answer').innerHTML = "" + totdays + " days ";
	moons = parseInt(totdays / 29.53);
	document.getElementById('moons').innerHTML = "" + moons + " moons";
        months = age * 12;
        months += 12 - parseInt(mm);
        months += gmonth;
        document.getElementById('months').innerHTML = months + " months";
		p = 0;
        if (gmonth == 1) p = 31 + gdate;
        if (gmonth == 2) {
            p = 59 + gdate;
            if (leapyear(gyear)) m = m + 1;
        }
        if (gmonth == 3) {
            p = 90 + gdate;
            if (leapyear(gyear)) p = p + 1;
        }
        if (gmonth == 4) {
            p = 120 + gdate;
            if (leapyear(gyear)) p = p + 1;
        }
        if (gmonth == 5) {
            p = 151 + gdate;
            if (leapyear(gyear)) p = p + 1;
        }
        if (gmonth == 6) {
            p = 181 + gdate;
            if (leapyear(gyear)) p = p + 1;
        }
        if (gmonth == 7) {
            p = 212 + gdate;
            if (leapyear(gyear)) p = p + 1;
        }
        if (gmonth == 8) {
            p = 243 + gdate;
            if (leapyear(gyear)) p = p + 1;
        }
        if (gmonth == 9) {
            p = 273 + gdate;
            if (leapyear(gyear)) p = p + 1;
        }
        if (gmonth == 10) {
            p = 304 + gdate;
            if (leapyear(gyear)) p = p + 1;
        }
        if (gmonth == 11) {
            p = 334 + gdate;
            if (leapyear(gyear)) p = p + 1;
        }
        if (gmonth == 12) {
            p = 365 + gdate;
            if (leapyear(gyear)) p = p + 1;
        }
        weeks = totdays / 7;
        weeks += " weeks";
        weeks = parseInt(weeks);
        document.getElementById('weeks').innerHTML = weeks + " weeks";
        var time = new Date();
        ghour = time.getHours();
        gmin = time.getMinutes();
        gsec = time.getSeconds();
        hour = ((age * 365) + n + p) * 24;
        hour += (parseInt(age / 4) * 24);
        if (ap == 0)
        hour = hour - hr;
        else {
            if (ap == 1) {
                hour = hour - (11 + hr)
            }
        }
        document.getElementById('hours').innerHTML = hour + " hours";
//        var min;
//        min = (hour * 60) + gmin;
//        document.getElementById('min').innerHTML = min + " Minutes";
//        sec = (min * 60) + gsec;
//        document.getElementById('sec').innerHTML = sec + " Seconds";
       
        mm = mm - 1;
        var r;
        if (mm == 0) r = 1;
        if (mm == 1) r = 31;
        if (mm == 2) {
            r = 59;
            if (leapyear(gyear)) m = m + 1;
        }
        if (mm == 3) {
            r = 90;
            if (leapyear(gyear)) r = r + 1;
        }
        if (mm == 4) {
            r = 120;
            if (leapyear(gyear)) r = r + 1;
        }
        if (mm == 5) {
            r = 151;
            if (leapyear(gyear)) r = r + 1;
        }
        if (mm == 6) {
            r = 181;
            if (leapyear(gyear)) r = r + 1;
        }
        if (mm == 7) {
            r = 212;
            if (leapyear(gyear)) r = r + 1;
        }
        if (mm == 8) {
            r = 243;
            if (leapyear(gyear)) r = r + 1;
        }
        if (mm == 9) {
            r = 273;
            if (leapyear(gyear)) r = r + 1;
        }
        if (mm == 10) {
            r = 304;
            if (leapyear(gyear)) r = r + 1;
        }
        if (mm == 11) {
            r = 334;
            if (leapyear(gyear)) r = r + 1;
        }
        if (mm == 12) {
            r = 365;
            if (leapyear(gyear)) r = r + 1;
        }
        mm = mm + 1;
        r = parseInt(r) + parseInt(dd);
        if (mm > (gmonth + 1)) {
            bday = r - m - gdate;
        }
        else {
            if (mm == (gmonth + 1) && (gdate < dd)) {
                bday = (r - m - gdate) - 1; 
            }
            else {
                if ((leapyear(gyear)) && ((mm > 2) && (dd < 29))) {
                    a = 366;
                }
                else {
                    a = 365;
                }
                bday = a + (r - m - gdate) - 1;
            }
        }
        nhour = 24 - parseInt(ghour);
        nmin = 60 - parseInt(gmin);
        nsec = 60 - parseInt(gsec);
		function go() {
            function lyear(a) {
                if (((a % 4 == 0) && (a % 100 != 0)) || (a % 400 == 0)) return true;
                else return false;
            }
            mm = parseInt(mm);
            dd = parseInt(dd);
            yy = parseInt(yy);
            if ((mm < 1) || (mm > 12) || (dd < 1) || (dd > 31) || (yy < 1) || (mm == " ") || (dd == " ") || (yy == " ")) main = "Invalid";
            else
            if (((mm == 4) || (mm == 6) || (mm == 9) || (mm == 11)) && (dd > 30)) main = "Invalid";
            else
            if (mm == 2) {
                if (dd > 29)
                main = "Invalid";
                else
                if ((dd > 28) && (!lyear(yy)))
                main = "Invalid";
            }
            else main = main;
            if (main == "valid") {
                var m;
                if (mm == 1) n = 31;
                if (mm == 2) n = 59 + 1;
                if (mm == 3) n = 90 + 1;
                if (mm == 4) n = 120 + 1;
                if (mm == 5) n = 151 + 1;
                if (mm == 6) n = 181 + 1;
                if (mm == 7) n = 212 + 1;
                if (mm == 8) n = 243 + 1;
                if (mm == 9) n = 273 + 1;
                if (mm == 10) n = 304 + 1;
                if (mm == 11) n = 334 + 1;
                if (mm == 12) n = 365 + 1;
                if ((mm == 1) || (mm == 3) || (mm == 5) || (mm == 7) || (mm == 8) || (mm == 10) || (mm == 12))
                n += 31 + dd;
                else if ((mm == 4) || (mm == 6) || (mm == 9) || (mm == 11))
                n += 31 + dd + 1;
                else if (mm == 2) {
                    if (lyear(yy)) n += 29 + dd - 3;
                    else if (!lyear(yy)) n += 28 + dd - 1;
                }
                fours = yy / 4;
                hunds = yy / 100;
                fhunds = yy / 400;
                var day;
                day = (yy + n + fours - hunds + fhunds) % 7;
                day = parseInt(day)
                switch (day)
                {
                case 1:
                    document.getElementById('age').innerHTML += "You were born on a Sunday."
                    break
                case 2:
                    document.getElementById('age').innerHTML += "You were born on a Monday."
                    break
                case 3:
                    document.getElementById('age').innerHTML += "You were born on a Tuesday."
                    break
                case 4:
                    document.getElementById('age').innerHTML += "You were born on a Wednesday."
                    break
                case 5:
                    document.getElementById('age').innerHTML += "You were born on a Thursday."
                    break
                case 6:
                    document.getElementById('age').innerHTML += "You were born on a Friday."
                    break
                case 7:
                    document.getElementById('age').innerHTML += "You were born on a Saturday."
                    break
                case 0:
                    document.getElementById('age').innerHTML += "You were born on a Saturday."
                    break
                }
            }
            else {
                document.getElementById('age').innerHTML += main + " Date";
            }
        }
        go();
        if (((bday == 366) && (leapyear(yy))) || ((bday == 365) && (!leapyear(yy)))) {
            document.getElementById('bday').innerHTML = "Today is your birthday. Happy Birthday!";
        } else {
            //document.getElementById('bday').innerHTML = bday + " days " + nhour + " hours " + nmin + " minutes " + nsec + " seconds";
			document.getElementById('bday').innerHTML = bday + " days " + nhour + " hours ";
            //setTimeout("run()", 1);
        }
        
    }
    else {
        document.getElementById('age').innerHTML = main + " Date";
    	document.getElementById('months').innerHTML = "";
    	document.getElementById('weeks').innerHTML = "";
    	document.getElementById('answer').innerHTML = "";
    	document.getElementById('hours').innerHTML = "";
//    	document.getElementById('min').innerHTML = "";
//    	document.getElementById('sec').innerHTML = "";
        document.getElementById('bday').innerHTML = "";
    }
}
//  End -->
