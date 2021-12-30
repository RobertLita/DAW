using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;
using proiect_daw.Entities;

namespace proiect_daw.Models
{
    public class OwnerModel
    {
        [Key]
        public int OwnerID { get; set; }
        //public int CarID { get; set; }
        [Required(ErrorMessage = "Username-ul este obligatoriu!")]
        public string Username { get; set; }
        [Required(ErrorMessage = "Email-ul este obligatoriu!")]
        public string Email { get; set; }
        [Required(ErrorMessage = "Numarul de telefon este obligatoriu!")]
        public string Telephone { get; set; }
        public string City { get; set; }
        public virtual ICollection<Car> Cars { get; set; }


    }
}
