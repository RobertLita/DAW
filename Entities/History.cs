using System;
using System.Collections.Generic;
using System.Linq;
using System.ComponentModel.DataAnnotations;
using System.Threading.Tasks;

namespace proiect_daw.Entities
{
    public class History
    {
        [Key]
        public int HistoryID { get; set; }
        public string CarHistory { get; set; }
    }
}
