using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using proiect_daw.Entities;
using proiect_daw.Managers;

namespace proiect_daw.Repositories
{
    public class OwnersRepository
    {
        private Entities.AppContext db;

        public OwnersRepository(Entities.AppContext db)
        {
            this.db = db;
        }

        public IQueryable<Owner> GetOwnersIQueryable()
        {
            var owners = db.Owners;

            return owners;
        }

        public void Create(Owner owner)
        {
            db.Owners.Add(owner);

            db.SaveChanges();
        }

        public void Update(Owner owner)
        {
            db.Owners.Update(owner);

            db.SaveChanges();
        }

        public void Delete(Owner owner)
        {
            db.Owners.Remove(owner);

            db.SaveChanges();
        }

    }
}
