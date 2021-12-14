using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;


namespace proiect_daw.Models
{
    public class Car
    {
        [Key]
        public int CarID { get; set; }
        public string Brand { get; set; }
        public string Model { get; set; }
        public float Price { get; set; }
        public ushort Year { get; set; }
        public uint Km { get; set; }
        public string Color { get; set; }
        public string Fuel { get; set; }
        public ushort HP { get; set; }
        public string Transmission { get; set; }
        public string VIN { get; set; }
        public string Type { get; set; }
    }
}
