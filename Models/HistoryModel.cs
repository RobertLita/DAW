using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;
using proiect_daw.Entities;

namespace proiect_daw.Models
{
    public class HistoryModel
    {
        [Key]
        public int HistoryID { get; set; }
        public string CarHistory { get; set; }
        public int CarID { get; set; }
        public virtual Car Car { get; set; }

    }
}
