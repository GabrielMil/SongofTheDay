using System;
using System.Data;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace WebProject.Pages
{
    public partial class signIn : System.Web.UI.Page
    {
        string fileName = "myDB.mdf";
        protected void Page_Load(object sender, EventArgs e)
        {
            if(Request.Form["submit"] != null)
            {
                string userName = Request.Form["uName"];
                string mail = Request.Form["uMail"];
                string password = Request.Form["uPass"];
                string gender = Request.Form["gender"];
                string place = Request.Form["place"];
                string music = "";
                 for(int i=0; i<4;i++)
                 {
                    if (Request.Form["music" + i] != "" && Request.Form["music" + i] != null)
                    {
                        music += Request.Form["music" + i] + ",";
                    }
                 }
                music = (music.Length > 0) ? music.Remove(music.Length - 1, 1) : music;  // remove the last ','

                if (MyAdoHelper.IsExist(fileName, "SELECT * FROM Person WHERE userName = '" + userName + "'"))
                {
                    Response.Write("<script>alert('Username alredy exist!');window.location = 'signIn.aspx';</script>");
                    return;
                }
                 
                string sql = "INSERT INTO Person(userName, email, password, gender, place, music) VALUES('";
                sql += userName + "', '" + mail + "', '" + password + "', '" + gender + "', '" + place + "', '" + music + "')";
                MyAdoHelper.DoQuery(fileName, sql);
                Response.Write("<script>alert('נרשם בהצלחה');window.location = 'index.aspx';</script>"); 
                Response.End();
            }
        }
    }
}