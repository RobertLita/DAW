using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using proiect_daw.Entities;
using proiect_daw.Repositories;
using proiect_daw.Models;

namespace proiect_daw.Managers
{
    public class CarsManager : ICarsManager
    {
        private readonly ICarsRepository carsRepository;
        public CarsManager(ICarsRepository carsRepository)
        {
            this.carsRepository = carsRepository;
        }
        public List<Car> GetCars()
        {
            return carsRepository.GetCarsIQueryable().ToList();
        }
        public Car GetCarById(int id)
        {
            var car = carsRepository.GetCarsIQueryable()
                .FirstOrDefault(x => x.CarID == id);

            return car;
        }
        public void Delete(int id)
        {
            var car = GetCarById(id);

            carsRepository.Delete(car);
        }
        public List<int> GetCarsIdsList()
        {
            var cars = carsRepository.GetCarsIQueryable();
            var idList = cars.Select(x => x.CarID)
                .ToList();

            return idList;
        }
        public List<Car> GetCarsFiltered(string brand)
        {
            var cars = carsRepository.GetCarsIQueryable();
            var filtered = cars.Where(x => x.Brand == brand)
                .ToList();

            return filtered;
        }
        public List<Car> GetOrderedCars()
        {
            var orderedCars = carsRepository.GetCarsIQueryable()
                .OrderBy(x => x.Price)
                .ToList();

            return orderedCars;
        }
        public void Create(CarModel model)
        {
            var newCar = new Car
            {
                //CarID = model.CarID,
                Brand = model.Brand,
                Model = model.Model,
                Price = model.Price,
                Year = model.Year,
                Mileage = model.Mileage,
                Color = model.Color,
                Fuel = model.Fuel,
                HP = model.HP,
                Cubic_Capacity = model.Cubic_Capacity,
                Battery_Capacity = model.Battery_Capacity,
                Transmission = model.Transmission,
                VIN = model.VIN,
                Type = model.Type,
                OwnerID = 1,
                HistoryID = 9,
                BodykitID = 1
                //CarRims = model.CarRims
            };
            carsRepository.Create(newCar);
        }
        public void Update(CarModel model)
        {
            var car = GetCarById(4);

            car.Brand = model.Brand;
            car.Model = model.Model;
            car.Price = model.Price;
            car.Year = model.Year;
            car.Mileage = model.Mileage;
            car.Color = model.Color;
            car.Fuel = model.Fuel;
            car.HP = model.HP;
            car.Cubic_Capacity = model.Cubic_Capacity;
            car.Battery_Capacity = model.Battery_Capacity;
            car.Transmission = model.Transmission;
            car.VIN = model.VIN;
            car.Type = model.Type;
            //car.OwnerID = model.OwnerID;
           // car.HistoryID = model.HistoryID;
            //car.CarRims = model.CarRims;
            //car.Owner = model.Owner;
            //car.History = model.History;
            carsRepository.Update(car);
        }
    }
}
