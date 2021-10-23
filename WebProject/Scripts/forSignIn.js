/*
This function gets the name
Input: none
Output: name
*/
function getName() {
    return document.register.uName.value;
}

/*
This function gets the mail
Input: none
Output: mail
*/
function getMail() {
    return document.register.uMail.value;
}

/*
This function gets the password
Input: none
Output: password
*/
function getPass() {
    return document.register.uPass.value;
}

/*
This function gets the repeated password
Input: none
Output: repeated password
*/
function getPassAg() {
    return document.register.uPassAg.value;
}

/*
This function gets the place where the person lives
Input: none
Output: place
*/
function getPlace() {
    return document.getElementById("uPlace").value;
}

/*
This function checks how many letters are in the name
Input: none
Output: count - how many letters
*/
function twoChars() {
    var str = getName();
    var i = 0;
    var count = 0;
    for (i = 0; i < str.length; i++) {
        if ((str[i] >= "a" && str[i] <= "z") || (str[i] >= "A" && str[i] <= "Z")) {
            count++;
        }
    }
    return count;
}

/*
This function checks if the name is valid
Input: none
Output: false or true
*/
function checkName() {
    var count = 0;
    count = twoChars();
    if (getName().length > 0) {
        if ((getName().length < 2) || (count < 2)) {
            document.register.uName.style.borderColor = "red";
            document.getElementById("errName").style.display = "block";
            document.getElementById("errName").innerHTML = "Name have to be at least 2 chars";
            return false;
        }
        else {
            document.register.uName.style.borderColor = "green";
            document.getElementById("errName").style.display = "none";
            return true;
        }
    } else {
        document.register.uName.style.borderColor = "grey";
        document.getElementById("errName").style.display = "none"
        return false;
    }
}

/*
This function checks if there is letters before the @
Input: str - the str
Output: false or true
*/
function isLetterBe(str) {
    var i = 0;
    var count = 0;
    for (i = 0; str[i] != "@"; i++) {
        if ((str[i] >= "a" && str[i] <= "z") || (str[i] >= "A" && str[i] <= "Z"))
            count++;
    }
    return (count > 0);
}

/*
This function change the page if there is error
Input: str - the str error
Output: none
*/
function errMail(str) {
    document.register.uMail.style.borderColor = "red";
    document.getElementById("errMail").innerHTML = str;
    document.getElementById("errMail").style.display = "block";
}

/*
This function change the page if everything ok
Input: none
Output: none
*/
function notErrMail() {
    document.register.uMail.style.borderColor = "green";
    document.getElementById("errMail").style.display = "none";
}

/*
This function cheks if the mail have only one @
Input: none
Output: true or false
*/
function isSignSame() {
    if (getMail().indexOf('@') == getMail().lastIndexOf('@')) {
        notErrMail();
        return true;
    }
    else {
        errMail("Only one '@' can be");
        return false;
    }

}

/*
This function cheks if the mail have @
Input: none
Output: true or false
*/
function isSignExist() {
    if (getMail().indexOf('@') != -1) {
        notErrMail();
        return true;
    } else {
        errMail("Mail have to include '@' ")
        return false;
    }
}

/*
This function cheks if there is chars before sign
Input: none
Output: true or false
*/
function isCharbefSign() {
    var lastI = getMail().indexOf('@');
    var i = 0;
    var count = 0;
    for (i = 0; i < lastI; i++) {
        if (getMail()[i] >= 'a' && getMail()[i] <= 'z' || getMail()[i] >= 'A' && getMail()[i] <= 'Z') {
            count++;
        }
    }
    if (count > 0) {
        notErrMail();
        return true;
    } else {
        errMail("You have to put letters before the '@'");
        return false;
    }
}

/*
This function cheks if the mail have only one '.'
Input: none
Output: true or false
*/
function isDotSame() {
    if (getMail().indexOf('.') == getMail().lastIndexOf('.')) {
        notErrMail();
        return true;
    }
    else {
        errMail("Only one '.' can be");
        return false;
    }

}

/*
This function cheks if the mail have '.'
Input: none
Output: true or false
*/
function isDotExist() {
    if (getMail().indexOf('.') != -1) {
        notErrMail();
        return true;
    } else {
        errMail("Mail have to include '.' ")
        return false;
    }
}

/*
This function cheks if there is chars before the dot
Input: none
Output: true or false
*/
function isCharbefDotAfSign() {
    var firstI = getMail().indexOf('@');
    var lastI = getMail().lastIndexOf('.');
    var i = 0;
    var count = 0;
    for (i = firstI; i < lastI; i++) {
        if (getMail()[i] >= 'a' && getMail()[i] <= 'z' || getMail()[i] >= 'A' && getMail()[i] <= 'Z') {
            count++;
        }
    }
    if (count > 0) {
        notErrMail();
        return true;
    } else {
        errMail("You have to put letters after the '@'");
        return false;
    }
}

/*
This function cheks if there is chars after the dot
Input: none
Output: true or false
*/
function isAfterDot() {
    var firstI = getMail().lastIndexOf('.');
    var i = 0;
    var count = 0;
    for (i = firstI; i < getMail().length; i++) {
        if (getMail()[i] >= 'a' && getMail()[i] <= 'z' || getMail()[i] >= 'A' && getMail()[i] <= 'Z') {
            count++;
        }
    }
    if (count > 0) {
        notErrMail();
        return true;
    } else {
        errMail("You have to put letters after the '.'");
        return false;
    }
}

/*
This function cheks with other checks if the mail is valid
Input: none
Output: true or false
*/
function checkMail() {
    if (getMail().length > 0) {
        if (isSignExist() && isSignSame() && isCharbefSign() && isDotExist() && isDotSame() && isCharbefDotAfSign() && isAfterDot()) {
            return true;
        }
        else {
            return false;
        }
    }
    //nothing put in mail box
    else {
        document.register.uMail.style.borderColor = "grey";
        document.getElementById("errMail").style.display = "none";
        return false;
    }
}

/*
This function cheks if the givven string build only from letters or numbers
Input: none
Output: true or false
*/
function isLetterOrNum(str) {
    var i = 0;
    var count = 0;
    for (i = 0; i < str.length; i++) {
        if ((str[i] >= "a" && str[i] <= "z") || (str[i] >= "A" && str[i] <= "Z") || (str[i] >= "0" && str[i] <= "9")) {
            count++;
        }
    }
    return (count == str.length);
}

/*
This function cheks with other checks if hte password is valid
Input: none
Output: true or false
*/
function checkPass() {
    checkPassRepeat();
    if (getPass().length > 0) {
        if ((getPass()[0] >= "a" && getPass()[0] <= "z") || (getPass()[0] >= "A" && getPass()[0] <= "Z"))/*if the first char letter and not num*/ {
            if (isLetterOrNum(getPass())) {
                if (getPass().length >= 6)/*password at least 6 chars*/ {
                    document.register.uPass.style.borderColor = "green";
                    document.getElementById("errPass").style.display = "none";
                    return true;
                } else {
                    document.register.uPass.style.borderColor = "red";
                    document.getElementById("errPass").innerHTML = "Password have to be at least 6 chars. Left: " + (6 - getPass().length);
                    document.getElementById("errPass").style.display = "block";
                    return false;
                }
            } else {
                document.register.uPass.style.borderColor = "red";
                document.getElementById("errPass").innerHTML = "Only letters or nums";
                document.getElementById("errPass").style.display = "block";
                return false;
            }
        } else {
            document.register.uPass.style.borderColor = "red";
            document.getElementById("errPass").innerHTML = "First char have to be letter";
            document.getElementById("errPass").style.display = "block";
            return false;
        }
    } else {
        document.register.uPass.style.borderColor = "grey";
        document.getElementById("errPass").style.display = "none";
        return false;
    }
}

/*
This function cheks if hte passwords are the same
Input: none
Output: true or false
*/
function checkPassRepeat() {
    if (getPassAg().length > 0) {
        if (getPass() != getPassAg()) {
            document.register.uPassAg.style.borderColor = "red";
            document.getElementById("errPassAg").innerHTML = "The password dont match";
            document.getElementById("errPassAg").style.display = "block";
            return false;
        } else {
            document.register.uPassAg.style.borderColor = "green";
            document.getElementById("errPassAg").style.display = "none";
            return true;
        }
    } else {
        document.register.uPassAg.style.borderColor = "grey";
        document.getElementById("errPassAg").style.display = "none";
        return false;
    }
}

/*
This function cheks if the user choose any place
Input: none
Output: true or false
*/
function checkPlace() {
    if (getPlace() == "choose") {
        document.getElementById("errPlace").innerHTML = "You have to choose continent";
        document.getElementById("errPlace").style.display = "block";
        return false;
    }
    else {
        document.getElementById("errPlace").style.display = "none";
        return true;
    }
}

/*
This function cheks if the user choose at least one type of music
Input: none
Output: true or false
*/
function checkMusic() {
    var che = 0;
    if (document.register.music0.checked == true)
        che++;
    if (document.register.music1.checked == true)
        che++;
    if (document.register.music2.checked == true)
        che++;
    if (document.register.music3.checked == true)
        che++;
    if (che == 0) {
        document.getElementById("errMusic").innerHTML = "You have to choose at least one";
        document.getElementById("errMusic").style.display = "block";
        return false;
    } else {
        document.getElementById("errMusic").style.display = "none";
        return true;
    }
}

/*
This function change the type of the password to text
Input: none
Output: none
*/
function changePassTypeToText() {
    document.getElementById("uPass").type = "text";
}
/*
This function change the type of the password to password
Input: none
Output: none
*/
function changePassTypeToPass() {
    document.getElementById("uPass").type = "password";
}
/*
This function change the type of the repeated password to text
Input: none
Output: none
*/
function changePassAgTypeToText() {
    document.getElementById("uPassAg").type = "text";
}
/*
This function change the type of the repeated password to password
Input: none
Output: none
*/
function changePassAgTypeToPass() {
    document.getElementById("uPassAg").type = "password";
}

/*
This is reseting function
Input: none
Output: none
*/
function resetFunc() {
    document.register.uName.style.borderColor = "grey";
    document.register.uMail.style.borderColor = "grey";
    document.register.uPass.style.borderColor = "grey";
    document.register.uPassAg.style.borderColor = "grey";
}

/*
This is the final function that checks all the checks and tell if the form is currect
Input: none
Output: true or false
*/
function checkTotal() {
    if (checkName() && checkMail() && checkPass() && checkPassRepeat() && checkPlace() && checkMusic()) {
        var str =
            "Name: " + getName() + "\n" +
            "Gmail: " + getMail() + "\n" +
            "Password: " + getPass() + "\n" +
            "Continent: " + getPlace() + "\n" +
            "Music type: ";
        if (document.register.music0.checked == true)
            str = str + document.register.music0.value + " ";
        if (document.register.music1.checked == true)
            str = str + document.register.music1.value + " ";
        if (document.register.music2.checked == true)
            str = str + document.register.music2.value + " ";
        if (document.register.music3.checked == true)
            str = str + document.register.music3.value + " \n";

        alert(str);
        return true;
    } else {
        alert("Not all of the data correct");
        return false;
    }
}