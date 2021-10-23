using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace WebProject.Pages
{
    public partial class Editing : System.Web.UI.Page
    {
        private string fileName = "myDB.mdf";
        private string tableName = "Person";

        public string userData;

        protected void Page_Load(object sender, EventArgs e)
        {
            string sql = "SELECT * FROM " + tableName + "  WHERE userName='" + Session["userName"] + "'";
            if (MyAdoHelper.IsExist(fileName, sql))
            {
                userData = MyAdoHelper.printDataTable(fileName, sql);
            }



            if (Request.Form["btnMail"] != null)
            {
                ChangeMail();
            }
            else if (Request.Form["btnPassword"] != null)
            {
                ChangePassword();
            }
            else if (Request.Form["btnGender"] != null)
            {
                ChangeGender();
            }
            else if (Request.Form["btnPlace"] != null)
            {
                ChangePlace();
            }
            else if (Request.Form["btnMusic"] != null)
            {
                ChangeMusic();
            }
            userData = MyAdoHelper.printDataTable(fileName, sql);

        }

        private void ChangeMail()
        {
            string mail = Request.Form["uMail"];

            ChangeField(mail, "email");
        }

        private void ChangePassword()
        {
            string password = Request.Form["uPass"];

            ChangeField(password, "password");
        }

        private void ChangeGender()
        {
            string gender = Request.Form["gender"];

            ChangeField(gender, "gender");
        }

        private void ChangePlace()
        {
            string place = Request.Form["place"];

            ChangeField(place, "place");
        }

        private void ChangeMusic()
        {
            string music = "";
            for (int i = 0; i < 4; i++)
            {
                if (Request.Form["music" + i] != "" && Request.Form["music" + i] != null)
                {
                    music += Request.Form["music" + i] + ",";
                }
            }
            music = (music.Length > 0) ? music.Remove(music.Length - 1, 1) : music;  // remove the last ','

            ChangeField(music, "music");
        }

        private void ChangeField(string newVal, string fieldName)
        {
            string sql = "UPDATE " + tableName + " SET[" + fieldName + "]='" + newVal + "' WHERE userName='" + Session["userName"] + "'";
            MyAdoHelper.DoQuery(fileName, sql);
        }

    }
}