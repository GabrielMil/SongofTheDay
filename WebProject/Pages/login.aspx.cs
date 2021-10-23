using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace WebProject
{
    public partial class login : System.Web.UI.Page
    {
        public string fileName = "myDB.mdf";
        public string ErrorMessage = "";

        protected void Page_Load(object sender, EventArgs e)
        {
            if (Session["userName"] != null)
            {
                if ((string)Session["userName"] == "Admin")
                {
                    Response.Write("<script>alert('ברוך הבא מנהל מהולל ומדהים שכמוך');window.location = 'Admin.aspx';</script>");
                }
                else
                {
                    Response.Write("<script>alert('שלום לך . " + Session["userName"] + "');window.location = 'Editing.aspx';</script>");
                }
                Response.End();
                return;
            }
            if (Request.Form["submit"] != null)
            {
                string username = Request.Form["uUsername"];
                string password = Request.Form["uPass"];

                if (!IsUserExists(username))
                {
                    ErrorMessage = "המשתמש אינו קיים";
                    return;
                }
                if (!IsCorrectPassword(username, password))
                {
                    ErrorMessage = "סיסמה שגויה";
                    return;
                }
                ErrorMessage = "";
                Session["userName"] = username;
                if (username == "Admin" && password == "admin123")
                {
                    Response.Write("<script>alert('ברוך הבא מנהל מהולל ומדהים שכמוך');window.location = 'Admin.aspx';</script>");
                    Response.End();
                    return;
                }
                Response.Write("<script>alert('שלום לך . " + Session["userName"] + "');window.location = 'Editing.aspx';</script>");
                Response.End();

            }
        }

        private bool IsUserExists(string username)
        {
            string sql = "SELECT * FROM Person WHERE userName='" + username + "'";
            return MyAdoHelper.IsExist(fileName, sql);
        }

        private bool IsCorrectPassword(string username, string password)
        {
            string sql = "SELECT password FROM Person WHERE userName='" + username + "'";
            sql += " AND password='" + password + "'";
            return MyAdoHelper.IsExist(fileName, sql);

            string passInDB = (string)MyAdoHelper.ExecuteDataTable(fileName, sql).Rows[0].ItemArray[0];
            return passInDB == password;
        }
    }
}