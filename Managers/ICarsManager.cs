using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using proiect_daw.Entities;


namespace proiect_daw.Managers
{
    public interface ICarsManager
    {
        List<Car> GetCars();
        Car GetCarById(string id);
        void Delete(string id);
    }
}
