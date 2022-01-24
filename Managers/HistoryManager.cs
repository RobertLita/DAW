using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using proiect_daw.Entities;
using proiect_daw.Repositories;
using proiect_daw.Models;

namespace proiect_daw.Managers
{
    public class HistoryManager: IHistoryManager
    {
        private readonly IHistoryRepository historyRepository;
        public HistoryManager(IHistoryRepository historyRepository)
        {
            this.historyRepository = historyRepository;
        }
        public List<History> GetHistory()
        {
            return historyRepository.GetHistoryIQueryable().ToList();
        }
        public History GetHistoryById(int id)
        {
            var history = historyRepository.GetHistoryIQueryable()
                .FirstOrDefault(x => x.CarID == id);

            return history;
        }
        public void Delete(int id)
        {
            var history = GetHistoryById(id);

            historyRepository.Delete(history);
        }
        public List<int> GetHistoryIdsList()
        {
            var history = historyRepository.GetHistoryIQueryable();
            var idList = history.Select(x => x.HistoryID)
                .ToList();

            return idList;
        }
        public void Create(HistoryModel model)
        {
            var newHistory = new History
            {
                //HistoryID = model.HistoryID,
                CarHistory = model.CarHistory,
                CarID = model.CarID
            };

            historyRepository.Create(newHistory);
        }
    }
}
