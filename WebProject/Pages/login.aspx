<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="login.aspx.cs" Inherits="WebProject.login" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <meta charset="utf-8" />
    <link rel="stylesheet" href="../Content/style.css" type="text/css" />
    <link href="https://fonts.googleapis.com/css?family=Comfortaa&display=swap" rel="stylesheet" />
    <link rel="icon" href="../Images/logoTab.png" />
    <title>Log In</title>
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
        function checkLogin() {
            let name = document.login.uUsername.value;
            let pass = document.login.uPass.value;
            if (name == null || name == "" || pass == null || pass == "") {
                alert("one of the fields are missing");
                return false;
            }
            return true;
        }
    </script>
</head>
<body>
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
    <table border="0" style="height: 100%; width: 100%">
        <tr>
            <td align="center" valign="middle" style="height: 100%; width: 100%">
                <div>
                    <form method="post" name="login" onsubmit="return checkLogin();">
                        User name<br />
                        <input type="text" name="uUsername" placeholder="Enter your username" /><br />
                        Enter password<br />
                        <input type="password" name="uPass" placeholder="Enter password" /><br />
                        <br />
                        <input type="submit" name="submit" value="Enter" />
                    </form>
                    <span style="color: red"><%=ErrorMessage %></span>
                </div>
            </td>
        </tr>
    </table>
</body>
</html>
