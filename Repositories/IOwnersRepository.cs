using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using proiect_daw.Entities;
using proiect_daw.Models;

namespace proiect_daw.Repositories
{
    public interface IOwnersRepository
    {
        IQueryable<Owner> GetOwnersIQueryable();
        void Create(Owner owner);
        void Update(Owner owner);
        void Delete(Owner owner);
    }
}
