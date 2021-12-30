using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using proiect_daw.Entities;
using proiect_daw.Repositories;
using proiect_daw.Models;

namespace proiect_daw.Managers
{
    public class OwnersManager : IOwnersManager
    {
        private readonly IOwnersRepository ownersRepository;
        public OwnersManager(IOwnersRepository ownersRepository)
        {
            this.ownersRepository = ownersRepository;
        }
        public List<Owner> GetOwners()
        {
            return ownersRepository.GetOwnersIQueryable().ToList();
        }
        public Owner GetOwnerById(int id)
        {
            var owner = ownersRepository.GetOwnersIQueryable()
                .FirstOrDefault(x => x.OwnerID == id);

            return owner;
        }
        public void Delete(int id)
        {
            var owner = GetOwnerById(id);

            ownersRepository.Delete(owner);
        }
        public List<int> GetOwnersIdsList()
        {
            var owners = ownersRepository.GetOwnersIQueryable();
            var idList = owners.Select(x => x.OwnerID)
                .ToList();

            return idList;
        }

        public void Create(OwnerModel model)
        {
            var newOwner = new Owner
            {
                OwnerID = model.OwnerID,
                //CarID = model.CarID,
                Username = model.Username,
                Email = model.Email,
                Telephone = model.Telephone,
                City = model.City,
                Cars = model.Cars
            };

            ownersRepository.Create(newOwner);
        }
        public void Update(OwnerModel model)
        {
            var owner = GetOwnerById(model.OwnerID);

            //owner.CarID = model.CarID;
            owner.Username = model.Username;
            owner.Email = model.Email;
            owner.Telephone = model.Telephone;
            owner.City = model.City;
            owner.Cars = model.Cars;
            ownersRepository.Update(owner);
        }
    }
}
