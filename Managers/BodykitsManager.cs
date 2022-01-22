using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using proiect_daw.Entities;
using proiect_daw.Repositories;
using proiect_daw.Models;

namespace proiect_daw.Managers
{
    public class BodykitsManager: IBodykitsManager
    {
        private readonly IBodykitsRepository bodykitsRepository;
        public BodykitsManager(IBodykitsRepository bodykitsRepository)
        {
            this.bodykitsRepository = bodykitsRepository;
        }
        public List<Bodykit> GetBodykits()
        {
            return bodykitsRepository.GetBodykitsIQueryable().ToList();
        }
        public Bodykit GetBodykitById(int id)
        {
            var bodykit = bodykitsRepository.GetBodykitsIQueryable()
                .FirstOrDefault(x => x.BodykitID == id);

            return bodykit;
        }
        public void Delete(int id)
        {
            var bodykit = GetBodykitById(id);

            bodykitsRepository.Delete(bodykit);
        }
        public List<int> GetBodykitsIdsList()
        {
            var bodykit = bodykitsRepository.GetBodykitsIQueryable();
            var idList = bodykit.Select(x => x.BodykitID)
                .ToList();

            return idList;
        }
        public List<Bodykit> GetBodykitsFiltered(string brand)
        {
            var bodykits = bodykitsRepository.GetBodykitsIQueryable();
            var filtered = bodykits.Where(x => x.Brand == brand)
                .ToList();

            return filtered;
        }
        public List<Bodykit> GetOrderedBodykits()
        {
            var orderedBodykits = bodykitsRepository.GetBodykitsIQueryable()
                .OrderBy(x => x.Price)
                .ToList();

            return orderedBodykits;
        }
        public void Create(BodykitModel model)
        {
            var newBodykit = new Bodykit
            {
                BodykitID = model.BodykitID,
                Brand = model.Brand,
                CarBrand = model.CarBrand,
                CarModel = model.CarModel,
                Type = model.Type,
                Price = model.Price,
                CarID = model.CarID,
            };

            bodykitsRepository.Create(newBodykit);
        }
        public void Update(BodykitModel model)
        {
            var bodykit = GetBodykitById(model.BodykitID);

            bodykit.Brand = model.Brand;
            bodykit.CarBrand = model.CarBrand;
            bodykit.CarModel = model.CarModel;
            bodykit.Price = model.Price;
            bodykit.Type = model.Type;
            bodykit.CarID = model.CarID;
            bodykitsRepository.Update(bodykit);
        }
    }
}
