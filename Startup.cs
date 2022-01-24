using proiect_daw.Entities;
using proiect_daw.Managers;
using proiect_daw.Repositories;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.IdentityModel.Tokens;
using Microsoft.OpenApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace proiect_daw
{
    public class Startup
    {
        public string SpecificOrigins = "_allowSpecificOrigins";
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {

            //services.AddDbContext<Models.AppContext>(options => options.UseSqlServer(Configuration.GetConnectionString("WebProjectConnString")));
            services.AddControllers();
            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new OpenApiInfo { Title = "proiect_daw", Version = "v1" });


            });
            services.AddCors(options =>
            {
                options.AddPolicy(name: SpecificOrigins,
                                  builder =>
                                  {
                                      builder.WithOrigins("localhost:4200", "http://localhost:4200").AllowAnyMethod().AllowAnyHeader();
                                  });
            });

            services.AddDbContext<Entities.AppContext>(options => options.UseSqlServer(@"Server=(localdb)\MSSQLLocalDB;Initial Catalog=proiect_daw;Integrated Security=True;Connect Timeout=30;Encrypt=False;TrustServerCertificate=False;ApplicationIntent=ReadWrite;MultiSubnetFailover=False"));
            services.AddTransient<ICarsRepository, CarsRepository>();
            services.AddTransient<ICarsManager, CarsManager>();
            services.AddTransient<IRimsRepository, RimsRepository>();
            services.AddTransient<IRimsManager, RimsManager>();
            services.AddTransient<IOwnersRepository, OwnersRepository>();
            services.AddTransient<IOwnersManager, OwnersManager>();
            services.AddTransient<IBodykitsRepository, BodykitsRepository>();
            services.AddTransient<IBodykitsManager, BodykitsManager>();
            services.AddTransient<IHistoryRepository, HistoryRepository>();
            services.AddTransient<IHistoryManager, HistoryManager>();

            services.AddAuthorization(opt =>
            {
                opt.AddPolicy("BasicUser", policy => policy.RequireRole("BasicUser").RequireAuthenticatedUser().AddAuthenticationSchemes("AuthScheme").Build());
                opt.AddPolicy("Admin", policy => policy.RequireRole("Admin").RequireAuthenticatedUser().AddAuthenticationSchemes("AuthScheme").Build());

            });
        }


        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseSwagger();
                app.UseSwaggerUI(c => c.SwaggerEndpoint("/swagger/v1/swagger.json", "proiect_daw v1"));
            }

            app.UseHttpsRedirection();

            app.UseRouting();
            app.UseCors(SpecificOrigins);
            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
