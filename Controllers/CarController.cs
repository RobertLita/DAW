using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using proiect_daw.Entities;
using proiect_daw.Managers;

namespace proiect_daw.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CarController : ControllerBase
    {
        private readonly ICarsManager manager;

        public CarController(ICarsManager carsManager)
        {
            this.manager = carsManager;
        }


        [HttpGet]
        [Authorize(Policy = "BasicUser")]
        public async Task<IActionResult> GetCars()
        {
            var cars = manager.GetCars();

            return Ok(cars);
        }

        [HttpGet("byId/{id}")]
        public async Task<IActionResult> GetById([FromRoute] string id)
        {
            var car = manager.GetCarById(id);

            return Ok(car);
        }
    }
}
