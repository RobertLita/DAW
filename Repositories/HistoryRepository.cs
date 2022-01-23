using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using proiect_daw.Entities;
using proiect_daw.Managers;

namespace proiect_daw.Repositories
{
    public class HistoryRepository: IHistoryRepository
    {
        private Entities.AppContext db;
        public HistoryRepository(Entities.AppContext db)
        {
            this.db = db;
        }
        public IQueryable<History> GetHistoryIQueryable()
        {
            var history = db.Histories;

            return history;
        }
        public void Create(History history)
        {
            db.Histories.Add(history);

            db.SaveChanges();
        }


        public void Delete(History history)
        {
            db.Histories.Remove(history);

            db.SaveChanges();
        }
    }
}
