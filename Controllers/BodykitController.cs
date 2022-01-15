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
    public class BodykitController : ControllerBase
    {
        private readonly IBodykitsManager manager;

        public BodykitController(IBodykitsManager bodykitsManager)
        {
            this.manager = bodykitsManager;
        }


        [HttpGet]
        //[Authorize(Policy = "BasicUser")]
        public async Task<IActionResult> GetRims()
        {
            var bodykits = manager.GetBodykits();

            return Ok(bodykits);
        }
        [HttpGet("select-id")]
        //[Authorize(Policy = "Admin")]
        public async Task<IActionResult> GetIds()
        {
            var idList = manager.GetBodykitsIdsList();

            return Ok(idList);
        }
        [HttpGet("filter/{brand}")]
        public async Task<IActionResult> Filtered([FromRoute] string brand)
        {
            var bodykitsFiltered = manager.GetBodykitsFiltered(brand);

            return Ok(bodykitsFiltered);
        }

        [HttpGet("byId/{id}")]
        public async Task<IActionResult> GetById([FromRoute] int id)
        {
            var bodykit = manager.GetBodykitById(id);

            return Ok(bodykit);
        }
        [HttpGet("order-by-asc")]
        public async Task<IActionResult> OrderByAsc()
        {
            var orderedBodykits = manager.GetOrderedBodykits();

            return Ok(orderedBodykits);
        }
        [HttpPost("withobj")]
        public async Task<IActionResult> Create([FromBody] BodykitModel bodykitModel)
        {
            manager.Create(bodykitModel);

            return Ok();
        }
        [HttpPut]
        public async Task<IActionResult> Update([FromBody] BodykitModel bodykitModel)
        {
            manager.Update(bodykitModel);

            return Ok();
        }
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete([FromRoute] int id)
        {
            manager.Delete(id);

            return Ok();
        }
    }
}
