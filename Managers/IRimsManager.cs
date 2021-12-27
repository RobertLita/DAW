using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using proiect_daw.Entities;
using proiect_daw.Models;


namespace proiect_daw.Managers
{
    interface IRimsManager
    {
        List<Rim> GetRims();
        Car GetRimById(int id);
        void Create(RimModel model);
        void Update(RimModel model);
        void Delete(int id);
        List<int> GetRimsIdsList();
        List<Rim> GetRimsFiltered(string brand);
        List<Rim> GetOrderedRims();
    }
}
