using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using proiect_daw.Entities;
using proiect_daw.Managers;

namespace proiect_daw.Repositories
{
    public class CarsRepository : ICarsRepository
    {
        private Entities.AppContext db;
        public CarsRepository(Entities.AppContext db)
        {
            this.db = db;
        }
        public IQueryable<Car> GetCarsIQueryable()
        {
            var cars = db.Cars;

            return cars;
        }
        public void Create(Car car)
        {
            db.Cars.Add(car);

            db.SaveChanges();
        }

        public void Update(Car car)
        {
            db.Cars.Update(car);

            db.SaveChanges();
        }

        public void Delete(Car car)
        {
            db.Cars.Remove(car);

            db.SaveChanges();
        }
    }
}
