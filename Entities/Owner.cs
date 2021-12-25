using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace proiect_daw.Entities
{
    public class Owner
    {
        [Key]
        public int OwnerID { get; set; }
        [Required(ErrorMessage = "Username-ul este obligatoriu!")]
        public string Username { get; set; }
        [Required(ErrorMessage = "Email-ul este obligatoriu!")]
        public string Email { get; set; }
        [Required(ErrorMessage = "Numărul de telefon este obligatoriu!")]
        public string Telephone { get; set; }
        public string City { get; set; }
        public virtual ICollection<Car> Cars { get; set; }
    }
}
