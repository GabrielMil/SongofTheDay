using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace WebProject.Pages
{
    public partial class Admin : System.Web.UI.Page
    {
        public string usersList;
        private  string fileName = "myDB.mdf";
        private string tableName = "Person";
        public string ErrString = "";

        protected void Page_Load(object sender, EventArgs e)
        {
            if (Request.Form["btnShowAll"] != null)
            {
                ShowAll();
            }
            if (Request.Form["btnDeleteUser"] != null)
            {
                string username = Request.Form["txtUsername"];
                DeleteUser(username);
                ShowAll();
            }
            if (Request.Form["btnName"] != null)
            {
                string name = Request.Form["txtName"];
                ShowByName(name);
            }
            if (Request.Form["btnPlace"] != null)
            {
                string place = Request.Form["place"];
                ShowByPlace(place);
            }

        }

        private void ShowByName(string name)
        {
            string sql = "SELECT * FROM " + tableName+ " WHERE userName LIKE '" + name + "%'";
            usersList = MyAdoHelper.printDataTable(fileName, sql);
        }

        private void ShowByPlace(string place)
        {
            string sql = "SELECT * FROM " + tableName + " WHERE place='" + place + "'";
            usersList = MyAdoHelper.printDataTable(fileName, sql);
        }

        private void ShowAll()
        {
            string selectQuery = "SELECT * FROM " + tableName;
            usersList = MyAdoHelper.printDataTable(fileName, selectQuery);
        }

        private void DeleteUser(string username)
        {
            if (!IsUserExists(username))
            {
                ErrString = "User Not Exists!";
                return;
            }
            string sql = "DELETE FROM Person WHERE userName='" + username + "'";
            MyAdoHelper.DoQuery(fileName, sql);
            ErrString = "";
        }

        private bool IsUserExists(string username)
        {
            string sql = "SELECT * FROM Person WHERE userName='" + username + "'";
            return MyAdoHelper.IsExist(fileName, sql);
        }
    }
}
/*DataTable table = MyAdoHelper.ExecuteDataTable(fileName, selectQuery);
            int length = table.Rows.Count;
            if(length>0)
            {
                usersList += "<table style='border:3px double red'>";
                usersList += "<tr>";
                usersList += "<th>User Name:</th>";
                usersList += "<th>Email:</th>";
                usersList += "<th>Password:</th>";
                usersList += "<th>Gender:</th>";
                usersList += "<th>Place:</th>";
                usersList += "<th>Music:</th>";
                usersList += "</tr>";
                for (int i = 0; i < length; i++)
                {
                    usersList += "<th>";
                    usersList += "<td>" + table.Rows[i]["userName"] + "</td>";
                    usersList += "<td>" + table.Rows[i]["email"] + "</td>";
                    usersList += "<td>" + table.Rows[i]["password"] + "</td>";
                    usersList += "<td>" + table.Rows[i]["gender"] + "</td>";
                    usersList += "<td>" + table.Rows[i]["place"] + "</td>";
                    usersList += "<td>" + table.Rows[i]["music"] + "</td>";
                    usersList += "</th>";
                }
                usersList += "</table>";
                usersCount = length.ToString();
            }*/