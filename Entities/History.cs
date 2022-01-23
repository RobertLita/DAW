using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace proiect_daw.Entities
{
    public class History
    {
        //[Key]
        public int HistoryID { get; set; }
        public string CarHistory { get; set; }
        public int CarID { get; set; }
        public virtual Car Car { get; set; }

        //public int 
    }
}
