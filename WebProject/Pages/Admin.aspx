<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Admin.aspx.cs" Inherits="WebProject.Pages.Admin" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <meta charset="utf-8" />
    <link rel="stylesheet" href="../Content/style.css" type="text/css" />
    <link href="https://fonts.googleapis.com/css?family=Comfortaa&display=swap" rel="stylesheet" />
    <script src="/Scripts/forSignIn.js" defer></script>
    <link rel="icon" href="../Images/logoTab.png" />
    <title>Shhhh(The admin is here)</title>
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
    <br />
    <div>
        Enter the username you would like to delete.
        <form method="post" action="">
            <input type="text" name="txtUsername" placeholder="Enter username" /><br />
            <input type="submit" value="Delete user" name="btnDeleteUser" id="btnDeleteUser" />
        </form>
        <br />
        <span style="color: red"><%=ErrString %></span>
    </div>
    <br />
    <div>
        <form method="post" action="">
            <input type="submit" value="Show All" name="btnShowAll" id="btnShowAll" />
        </form><br />
        Enter the username you would like to find.
        <form method="post" action="">
            <input type="text" name="txtName" placeholder="Enter username to search" /><br />
            <input type="submit" value="Search" name="btnName" id="btnName" />
        </form><br />
        Search users by place.
        <form method="post" action="" onsubmit="return checkPlace()">
            <select name="place" id="uPlace">
                                        <option value="choose" selected="selected">choose</option>
                                        <option value="Europe">Europe</option>
                                        <option value="Asia">Asia</option>
                                        <option value="Antarctica">Antarctica</option>
                                        <option value="Africa">Africa</option>
                                        <option value="Australia">Australia</option>
                                        <option value="North America">North America</option>
                                        <option value="South America">South America</option>
                                    </select>
                                <span id="errPlace" style="font-size: smaller; color: red"></span>
            <input type="submit" value="Search" name="btnPlace" id="btnPlace" />
        </form><br />     
        Users Found:
   <%=usersList %>
    </div>
</body>
</html>
