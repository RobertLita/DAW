using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using proiect_daw.Entities;
using proiect_daw.Managers;
using proiect_daw.Repositories;

namespace proiect_daw.Managers
{
    public class CarsManager : ICarsManager
    {
        private readonly ICarsRepository carsRepository;
        public List<Car> GetCars()
        {
            return carsRepository.GetCarsIQueryable().ToList();
        }
        public Car GetCarById(string id)
        {
            var car = carsRepository.GetCarsIQueryable()
                .FirstOrDefault(x => x.CarID == id);

            return car;
        }
        public void Delete(string id)
        {
            var car = GetCarById(id);

            carsRepository.Delete(car);
        }
    }
}
