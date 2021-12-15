using System;
using System.Collections.Generic;
using System.Linq;
using System.ComponentModel.DataAnnotations;
using System.Threading.Tasks;

namespace proiect_daw.Models
{
    public class Rim
    {
        [Key]
        public int RimID { get; set; }
        [Required(ErrorMessage = "Dimensiunea este obligatorie!")]
        public ushort Size { get; set; }
        public int Type { get; set; }
        public int Price { get; set; }
        public int ET { get; set; }
        public int J { get; set; }
        public int HubSize { get; set; }
    }
}
