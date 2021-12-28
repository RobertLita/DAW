using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace proiect_daw.Entities
{
    public class BestOf
    {
        public int BestOfID { get; set; }
        //[Required(ErrorMessage = "Categoria pentru top este obligatorie!")]
        public string Category { get; set; }
        public string CarList { get; set; }
    }
}
