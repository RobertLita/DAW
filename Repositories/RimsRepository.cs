using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using proiect_daw.Entities;
using proiect_daw.Managers;

namespace proiect_daw.Repositories
{
    public class RimsRepository : IRimsRepository
    {
        private Entities.AppContext db;
        public RimsRepository(Entities.AppContext db)
        {
            this.db = db;
        }
        public IQueryable<Rim> GetRimsIQueryable()
        {
            var rims = db.Rims;

            return rims;
        }
        public void Create(Rim rim)
        {
            db.Rims.Add(rim);

            db.SaveChanges();
        }

        public void Update(Rim rim)
        {
            db.Rims.Update(rim);

            db.SaveChanges();
        }

        public void Delete(Rim rim)
        {
            db.Rims.Remove(rim);

            db.SaveChanges();
        }

     
    }
}
