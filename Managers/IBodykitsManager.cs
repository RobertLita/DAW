using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using proiect_daw.Entities;
using proiect_daw.Models;


namespace proiect_daw.Managers
{
    public interface IBodykitsManager
    {
        List<Bodykit> GetBodykits();
        Bodykit GetBodykitById(int id);
        void Create(BodykitModel model);
        void Update(BodykitModel model);
        void Delete(int id);
        List<int> GetBodykitsIdsList();
        List<Bodykit> GetBodykitsFiltered(string brand);
        List<Bodykit> GetOrderedBodykits();
    }
}
