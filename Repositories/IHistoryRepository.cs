using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using proiect_daw.Entities;
using proiect_daw.Models;


namespace proiect_daw.Repositories
{
    public interface IHistoryRepository
    {
        IQueryable<History> GetHistoryIQueryable();
        void Create(History history);
        void Delete(History history);
    }
}
