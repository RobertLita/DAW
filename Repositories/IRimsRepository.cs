using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using proiect_daw.Entities;
using proiect_daw.Models;

namespace proiect_daw.Repositories
{
    interface IRimsRepository
    {
        IQueryable<Rim> GetRimsIQueryable();
        void Create(Rim rim);
        void Update(Rim rim);
        void Delete(Rim rim);
    }
}
