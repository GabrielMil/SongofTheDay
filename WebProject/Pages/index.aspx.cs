using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace WebProject.Pages
{
    public partial class index : System.Web.UI.Page
    {
        public string myTime;
        protected void Page_Load(object sender, EventArgs e)
        {
            myTime = (DateTime.Now.ToString());
        }
    }
}