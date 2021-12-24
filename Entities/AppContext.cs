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
    }
}
