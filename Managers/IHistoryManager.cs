using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using proiect_daw.Entities;
using proiect_daw.Models;

namespace proiect_daw.Managers
{
    public interface IHistoryManager
    {
        List<History> GetHistory();
        History GetHistoryById(int id);
        void Create(HistoryModel model);
        void Delete(int id);
        List<int> GetHistoryIdsList();
 
    }
}
