<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="signIn.aspx.cs" Inherits="WebProject.Pages.signIn" %>

<!DOCTYPE html>
<html>
<head runat="server">
    <meta charset="utf-8" />
    <link rel="stylesheet" href="../Content/style.css" type="text/css" />
    <link href="https://fonts.googleapis.com/css?family=Comfortaa&display=swap" rel="stylesheet" />
    <link rel="icon" href="../Images/logoTab.png">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <script src="/Scripts/forSignIn.js" defer></script>
    <title>Sign In</title>
    <style>
        a:visited {
            color: black;
            text-decoration: none;
        }

        a:link {
            color: black;
            text-decoration: none;
        }

        a:hover {
            color: red;
            text-decoration: none;
        }
    </style>
    <script>
        while (true) {
            checkName();
            checkMail();
            checkPassRepeat();
            checkPlace();
            checkMusic();
        }
    </script>
</head>
<body onload="checkPlace(); checkMusic()">
    <table border="0" style="width: 100%; height: 100%" cellpadding="0" cellspacing="0">
        <tr>
            <td valign="bottom" align="left" width="15%"><a href="index.aspx">
                <img style="height: 90%" src="/Images/logoSiten.png" alt="The Logo Of The Site" /></a></td>
            <td><a href="renegades.html">X Ambassadors - Renegades</a></td>
            <td><a href="judgmentDay.html">Stealth - Judgement Day</a></td>
            <td><a href="heyBrother.html">Avicii - Hey Brother</a></td>
            <td><a href="signIn.aspx">signIn</a>/<a href="login.aspx">logIn</a></td>
            <td><a href="about.html">About</a></td>
        </tr>
    </table>
    <br />
    <br />
    <table border="1" style="height: 100%; width: 100%">
        <tr>
            <td align="center" valign="middle" style="height: 100%; width: 100%">
                <div>
                    <form onreset="resetFunc()" onsubmit="return checkTotal()" method="post" name="register" action="">
                        <table>
                            <tr>
                                <td>User name</td>
                                <td>
                                    <input type="text" name="uName" id="uName" placeholder="Enter user name" onblur="checkName()" onkeypress="checkName()" onkeyup="checkName()" /></td>
                                <td style="width: 45%"><span id="errName" style="display: none; font-size: smaller; color: red"></span></td>
                            </tr>
                            <tr>
                                <td>Mail</td>
                                <td>
                                    <input type="text" name="uMail" id="uMail" placeholder="Enter your mail" onblur="checkMail()" onkeypress="checkMail()" onkeyup="checkMail()" /></td>
                                <td><span id="errMail" style="display: none; font-size: smaller; color: red">NAME</span>
                            </tr>
                            <tr>
                                <td>Enter password</td>
                                <td>
                                    <input type="password" name="uPass" id="uPass" placeholder="Enter password" onblur="checkPass()" onkeypress="checkPass()" onkeyup="checkPass()" />
                                    <button style="height: 10%; background-color: #c9c9c9; border: none" onmouseover="changePassTypeToText()" onmouseout="changePassTypeToPass()"><i class="fa fa-eye"></i></button>
                                </td>
                                <td><span id="errPass" style="font-size: smaller; color: red"></span>
                            </tr>
                            <tr>
                                <td>Enter password again</td>
                                <td>
                                    <input type="password" name="uPassAg" id="uPassAg" placeholder="Enter password again" onblur="checkPassRepeat()" onkeypress="checkPassRepeat()" onkeyup="checkPassRepeat()" />
                                    <button style="height: 10%; background-color: #c9c9c9; border: none" onmouseover="changePassAgTypeToText()" onmouseout="changePassAgTypeToPass()"><i class="fa fa-eye"></i></button>
                                </td>
                                <td><span id="errPassAg" style="font-size: smaller; color: red"></span>
                            </tr>
                            <tr>
                                <td>Gender</td>
                                <td>
                                    <input type="radio" name="gender" value="male" checked="checked" />male<input type="radio" name="gender" value="female" />female<input type="radio" name="gender" value="other" />other</td>
                            </tr>
                            <tr>
                                <td>Where are you from</td>
                                <td>
                                    <select name="place" id="uPlace" onchange="checkPlace()">
                                        <option value="choose" selected="selected">choose</option>
                                        <option value="Europe">Europe</option>
                                        <option value="Asia">Asia</option>
                                        <option value="Antarctica">Antarctica</option>
                                        <option value="Africa">Africa</option>
                                        <option value="Australia">Australia</option>
                                        <option value="North America">North America</option>
                                        <option value="South America">South America</option>
                                    </select></td>
                                <td><span id="errPlace" style="font-size: smaller; color: red"></span>
                            </tr>
                            <tr>
                                <td>Music</td>
                                <td>
                                    <input type="checkbox" name="music0" id="music0" value="pop" onchange="checkMusic()" />pop<input type="checkbox" name="music1" id="music1" value="rock" onchange="checkMusic()" />rock<input type="checkbox" name="music2" id="music2" value="hip pop" onchange="checkMusic()" />hip hop<input type="checkbox" name="music3" id="music3" value="classic" onchange="checkMusic()" />classic</td>
                                <td><span id="errMusic" style="font-size: smaller; color: red"></span>
                            </tr>
                        </table>
                        <input type="submit" name="submit" value="Submit" />
                        <input type="reset" name="reset" value="Reset" />
                    </form>
                </div>
            </td>
        </tr>
    </table>
</body>
</html>
