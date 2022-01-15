using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using proiect_daw.Entities;
using proiect_daw.Models;

namespace proiect_daw.Repositories
{
    public interface IBodykitsRepository
    {
        IQueryable<Bodykit> GetBodykitsIQueryable();
        void Create(Bodykit bodykit);
        void Update(Bodykit bodykit);
        void Delete(Bodykit bodykit);
    }
}
