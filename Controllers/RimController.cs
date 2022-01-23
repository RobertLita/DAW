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
using proiect_daw.Models;

namespace proiect_daw.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RimController : ControllerBase
    {
        private readonly IRimsManager manager;

        public RimController(IRimsManager rimsManager)
        {
            this.manager = rimsManager;
        }


        [HttpGet]
        //[Authorize(Policy = "BasicUser")]
        public async Task<IActionResult> GetRims()
        {
            var rims = manager.GetRims();

            return Ok(rims);
        }
        [HttpGet("select-id")]
        //[Authorize(Policy = "Admin")]
        public async Task<IActionResult> GetIds()
        {
            var idList = manager.GetRimsIdsList();

            return Ok(idList);
        }
        [HttpGet("filter/{brand}")]
        public async Task<IActionResult> Filtered([FromRoute] string brand)
        {
            var rimsFiltered = manager.GetRimsFiltered(brand);

            return Ok(rimsFiltered);
        }

        [HttpGet("byId/{id}")]
        public async Task<IActionResult> GetById([FromRoute] int id)
        {
            var rim = manager.GetRimById(id);

            return Ok(rim);
        }
        [HttpGet("order-by-asc")]
        public async Task<IActionResult> OrderByAsc()
        {
            var orderedRims = manager.GetOrderedRims();

            return Ok(orderedRims);
        }
        [HttpPost("withobj")]
        public async Task<IActionResult> Create([FromBody] RimModel rimModel)
        {
            manager.Create(rimModel);

            return Ok();
        }
        [HttpPut]
        public async Task<IActionResult> Update([FromBody] RimModel rimModel)
        {
            manager.Update(rimModel);

            return Ok();
        }
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete([FromRoute] int id)
        {
            manager.Delete(id);
            var rims = manager.GetRims();
            return Ok(rims);
        }
    }
}
