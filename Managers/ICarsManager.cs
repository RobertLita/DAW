using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using proiect_daw.Entities;
using proiect_daw.Models;


namespace proiect_daw.Managers
{
    public interface ICarsManager
    {
        List<Car> GetCars();
        Car GetCarById(int id);
        void Create(CarModel model);
        void Update(CarModel model, int id);
        void Delete(int id);
        List<int> GetCarsIdsList();
        List<Car> GetCarsFiltered(string brand);
        List<Car> GetOrderedCars();
    }
}
