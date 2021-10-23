<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="index.aspx.cs" Inherits="WebProject.Pages.index" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <link rel="stylesheet" href="../Content/style.css" type="text/css" />
    <link href="https://fonts.googleapis.com/css?family=Comfortaa&display=swap" rel="stylesheet" />
    <link rel="icon" href="../Images/logoTab.png" />
    <title>Song of The Day</title>
    <meta charset="utf-8" />
    <script>
        var i = 1;
        function nextImg() {
            i++;
            if (i > 3)
                i = 1;
            inImg.src = "/Images/index" + i + ".jpg";
        }
        function prevImg() {
            i--;
            if (i < 1)
                i = 3;
            inImg.src = "/Images/index" + i + ".jpg";
        }
        function onImg() {
            inImg.src = "/Images/secret.png"
        }
        function outImg() {
            inImg.src = "/Images/index" + i + ".jpg";
        }
    </script>
    <style>
        .imgMy {
            width: 400px;
            height: 225px
        }

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
</head>
<body>
    <%=myTime %>
     Hello <%=Session["userName"] %>
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
    <table border="0" style="width: 100%; height: 100%">
        <tr>
            <td style="width: 40%">
                <h1><u>Welcome to my site!</u></h1>
                <h3>Welcome to STD, Song of The Day.<br />
                    You can read more in the about page.<br />
                    As you can see, the site pretty simple<br />
                    1.You choose what site to visit.<br />
                    2.You click on it.<br />
                    3.You enjoy your new visited page.<br />
                    You can always come back to thi page, all you gotta do is...<br />
                    Press the logo in the left corner.<br />
                </h3>
            </td>
            <td valign="middle" align="center">
                <table border="0">
                    <tr>
                        <td style="width: 5%" valign="middle">
                            <img src="/Images/prev.png" style="display: block; width: 100%" onclick="prevImg()" /></td>
                        <td style="width: 90%" valign="middle" align="center">
                            <img name="inImg" class="imgMy" src="/Images/logo.png" onmouseover="onImg()" onmouseout="outImg()" /></td>
                        <td style="width: 5%" valign="middle">
                            <img src="/Images/next.png" style="display: block; width: 100%" onclick="nextImg()" /></td>
                    </tr>
                </table>
            </td>
        </tr>
        <tr style="height: 15%">
            <td align="left" style="width: 33%">
                <img src="/Images/keyso.png" style="height: 230px" /></td>
            <td align="right" style="width: 33%">
                <img src="/Images/keyso.png" style="height: 230px" /></td>
        </tr>
    </table>
</body>
</html>
