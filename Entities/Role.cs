using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace proiect_daw.Entities
{
    public class Role
    {
        public ICollection<UserRole> UserRoles { get; set; }
    }
}
