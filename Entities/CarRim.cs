using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace proiect_daw.Entities
{
    public class CarRim
    {
        public int CarID { get; set; }
        public int RimID { get; set; }

        public virtual Car Car { get; set; }
        public virtual Rim Rim { get; set; }
    }
}
