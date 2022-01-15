using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using proiect_daw.Entities;
using proiect_daw.Managers;

namespace proiect_daw.Repositories
{
    public class BodykitsRepository : IBodykitsRepository
    {
        private Entities.AppContext db;
        public BodykitsRepository(Entities.AppContext db)
        {
            this.db = db;
        }
        public IQueryable<Bodykit> GetBodykitsIQueryable()
        {
            var bodykits = db.Bodykits;

            return bodykits;
        }
        public void Create(Bodykit bodykit)
        {
            db.Bodykits.Add(bodykit);

            db.SaveChanges();
        }

        public void Update(Bodykit bodykit)
        {
            db.Bodykits.Update(bodykit);

            db.SaveChanges();
        }

        public void Delete(Bodykit bodykit)
        {
            db.Bodykits.Remove(bodykit);

            db.SaveChanges();
        }
    }
}
