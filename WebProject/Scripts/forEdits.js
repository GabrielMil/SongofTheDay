/*
This function gets the mail
Input: none
Output: mail
*/
function getMail() {
    return document.eMail.uMail.value;
}

/*
This function gets the password
Input: none
Output: password
*/
function getPass() {
    return document.ePass.uPass.value;
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
    document.eMail.uMail.style.borderColor = "red";
    document.getElementById("errMail").innerHTML = str;
    document.getElementById("errMail").style.display = "block";
}

/*
This function change the page if everything ok
Input: none
Output: none
*/
function notErrMail() {
    document.eMail.uMail.style.borderColor = "green";
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
        document.eMail.uMail.style.borderColor = "grey";
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
    if (getPass().length > 0) {
        if ((getPass()[0] >= "a" && getPass()[0] <= "z") || (getPass()[0] >= "A" && getPass()[0] <= "Z"))/*if the first char letter and not num*/ {
            if (isLetterOrNum(getPass())) {
                if (getPass().length >= 6)/*password at least 6 chars*/ {
                    document.ePass.uPass.style.borderColor = "green";
                    document.getElementById("errPass").style.display = "none";
                    return true;
                } else {
                    document.ePass.uPass.style.borderColor = "red";
                    document.getElementById("errPass").innerHTML = "Password have to be at least 6 chars. Left: " + (6 - getPass().length);
                    document.getElementById("errPass").style.display = "block";
                    return false;
                }
            } else {
                document.ePass.uPass.style.borderColor = "red";
                document.getElementById("errPass").innerHTML = "Only letters or nums";
                document.getElementById("errPass").style.display = "block";
                return false;
            }
        } else {
            document.ePass.uPass.style.borderColor = "red";
            document.getElementById("errPass").innerHTML = "First char have to be letter";
            document.getElementById("errPass").style.display = "block";
            return false;
        }
    } else {
        document.ePass.uPass.style.borderColor = "grey";
        document.getElementById("errPass").style.display = "none";
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
    if (document.eMusic.music0.checked == true)
        che++;
    if (document.eMusic.music1.checked == true)
        che++;
    if (document.eMusic.music2.checked == true)
        che++;
    if (document.eMusic.music3.checked == true)
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