using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;
using proiect_daw.Entities;

namespace proiect_daw.Models
{
    public class BodykitModel
    {
        [Key]
        public int BodykitID { get; set; }
        //[Required(ErrorMessage = "Brandul bodykit-ului este obligatoriu!")]
        public string Brand { get; set; }
        //[Required(ErrorMessage = "Brandul masinii pentru care este bodykit-ul este obligatoriu!")]
        public string CarBrand { get; set; }
        //[Required(ErrorMessage = "Modelul masinii pentru care este bodykit-ul este obligatoriu!")]
        public string CarModel { get; set; }
        //[Required(ErrorMessage = "Prețul bodykit-ului este obligatoriu!")]
        public int Price { get; set; }
    }
}
