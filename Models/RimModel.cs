using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;
using proiect_daw.Entities;
namespace proiect_daw.Models
{
    public class RimModel
    {
        [Key]
        public int RimID { get; set; }
        [Required(ErrorMessage = "Dimensiunea este obligatorie!")]
        public ushort Size { get; set; }
        public string Brand { get; set; }
        public int Type { get; set; }
        public int Price { get; set; }
        public int ET { get; set; }
        public int J { get; set; }
        public int HubSize { get; set; }
        public virtual ICollection<CarRim> CarRims { get; set; }
    }
}
