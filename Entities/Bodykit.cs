using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace proiect_daw.Entities
{
    public class Bodykit
    {
        //[Key]
        public int BodykitID { get; set; }
        //[Required(ErrorMessage = "Brandul bodykit-ului este obligatoriu!")]
        public string Brand { get; set; }
        //[Required(ErrorMessage = "Modelul bodykit-ului este obligatoriu!")]
        public string CarBrand { get; set; }
        //[Required(ErrorMessage = "Modelul bodykit-ului este obligatoriu!")]
        public string CarModel { get; set; }
        //[Required(ErrorMessage = "Prețul bodykit-ului este obligatoriu!")]
        public int Price { get; set; }
        public int CarID { get; set; }
        public virtual Car Car { get; set; }
    }
}
