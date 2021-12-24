using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;


namespace proiect_daw.Entities
{
    public class Car
    {
        [Key]
        public string CarID { get; set; }
        [Required(ErrorMessage = "Brandul mașinii este obligatoriu!")]
        public string Brand { get; set; }
        [Required(ErrorMessage = "Modelul mașinii este obligatoriu!")]
        public string Model { get; set; }
        [Required(ErrorMessage = "Prețul mașinii este obligatoriu!")]
        public float Price { get; set; }
        [Required(ErrorMessage = "Anul mașinii este obligatoriu!")]
        public ushort Year { get; set; }
        [Required(ErrorMessage = "Numărul de kilometrii al mașinii este obligatoriu!")]
        public uint Mileage { get; set; }
        [Required(ErrorMessage = "Culoarea mașinii este obligatorie!")]
        public string Color { get; set; }
        [Required(ErrorMessage = "Combustibilul mașinii este obligatoriu!")]
        public string Fuel { get; set; }
        [Required(ErrorMessage = "Puterea mașinii este obligatorie!")]
        public ushort HP { get; set; }
        public ushort Cubic_Capacity { get; set; }
        public ushort Baterry_Capacity { get; set; }
        [Required(ErrorMessage = "Transimisia mașinii este obligatorie!")]
        public string Transmission { get; set; }
        [Required(ErrorMessage = "Seria de șasiu a mașinii este obligatorie!")]
        public string VIN { get; set; }
        [Required(ErrorMessage = "Tipul de caroserie al mașinii este obligatoriu!")]
        public string Type { get; set; }
        public string RimsID { get; set; }
        public string OwnerID { get; set; }
        public string HistoryID { get; set; }
    }
}
