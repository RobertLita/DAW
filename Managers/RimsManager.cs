using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using proiect_daw.Entities;
using proiect_daw.Repositories;
using proiect_daw.Models;

namespace proiect_daw.Managers
{
    public class RimsManager : IRimsManager
    {
        private readonly IRimsRepository rimsRepository;
        public RimsManager(IRimsRepository rimsRepository)
        {
            this.rimsRepository = rimsRepository;
        }
        public List<Rim> GetRims()
        {
            return rimsRepository.GetRimsIQueryable().ToList();
        }
        public Rim GetRimById(int id)
        {
            var rim = rimsRepository.GetRimsIQueryable()
                .FirstOrDefault(x => x.RimID == id);

            return rim;
        }
        public void Delete(int id)
        {
            var rim = GetRimById(id);

            rimsRepository.Delete(rim);
        }
        public List<int> GetRimsIdsList()
        {
            var rims = rimsRepository.GetRimsIQueryable();
            var idList = rims.Select(x => x.RimID)
                .ToList();

            return idList;
        }
        public List<Rim> GetRimsFiltered(string brand)
        {
            var rims = rimsRepository.GetRimsIQueryable();
            var filtered = rims.Where(x => x.Brand == brand)
                .ToList();

            return filtered;
        }
        public List<Rim> GetOrderedRims()
        {
            var orderedRims = rimsRepository.GetRimsIQueryable()
                .OrderBy(x => x.Price)
                .ToList();

            return orderedRims;
        }
        public void Create(RimModel model)
        {
            var newRim = new Rim
            {
                RimID = model.RimID,
                Brand = model.Brand,
                Size = model.Size,
                Type = model.Type,
                Price = model.Price,
                ET = model.ET,
                J = model.J,
                HubSize= model.HubSize,
                CarRims = model.CarRims
            };

            rimsRepository.Create(newRim);
        }
        public void Update(RimModel model)
        {
            var rim = GetRimById(model.RimID);

            rim.Brand = model.Brand;
            rim.Size = model.Size;
            rim.Type = model.Type;
            rim.Price = model.Price;
            rim.ET = model.ET;
            rim.J = model.J;
            rim.HubSize = model.HubSize;
            rim.CarRims = model.CarRims;
            rimsRepository.Update(rim);
        }
    }
}
