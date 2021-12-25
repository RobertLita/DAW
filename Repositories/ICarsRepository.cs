using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using proiect_daw.Entities;
using proiect_daw.Models;

namespace proiect_daw.Repositories
{
    public interface ICarsRepository
    {
        IQueryable<Car> GetCarsIQueryable();
        void Create(Car car);
        void Update(Car car);
        void Delete(Car car);
    }
}
