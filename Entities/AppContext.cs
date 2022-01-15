using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace proiect_daw.Entities
{
    public class AppContext : DbContext
    {
        public AppContext(DbContextOptions<AppContext> options)
            : base(options)
        {}
        public DbSet<Car> Cars { get; set; }
        public DbSet<Owner> Owners { get; set; }
        public DbSet<Rim> Rims { get; set; }
        public DbSet<History> Histories { get; set; }
        public DbSet<CarRim> CarRims { get; set; }
        public DbSet<Bodykit> Bodykits { get; set; }
        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);
            //One to One
            builder.Entity<Car>()
                .HasOne(car => car.History)
                .WithOne(history => history.Car)
                .HasForeignKey<History>(h => h.CarID);

            //One to Many
            builder.Entity<Owner>()
                .HasMany(owner => owner.Cars)
                .WithOne(car => car.Owner);

            //Many To Many
            builder.Entity<CarRim>().HasKey(cr => new { cr.CarID, cr.RimID });

            builder.Entity<CarRim>()
                .HasOne(cr => cr.Car)
                .WithMany(car => car.CarRims)
                .HasForeignKey(cr => cr.CarID);

            builder.Entity<CarRim>()
                .HasOne(cr => cr.Rim)
                .WithMany(rim => rim.CarRims)
                .HasForeignKey(cr => cr.RimID);
        }
    }
}
