using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using proiect_daw.Entities;
using proiect_daw.Models;


namespace proiect_daw.Managers
{
    public interface IOwnersManager
    {
        List<Owner> GetOwners();
        Owner GetOwnerById(int id);
        void Create(OwnerModel model);
        void Update(OwnerModel model);
        void Delete(int id);
        List<int> GetOwnersIdsList();
        
    }
}
