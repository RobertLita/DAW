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
    public class OwnerController
    {
        private readonly IOwnersManager manager;

        public OwnerController(IOwnersManager ownersManager)
        {
            this.manager = ownersManager;
        }


        [HttpGet]
        //[Authorize(Policy = "BasicUser")]
        public async Task<IActionResult> GetOwners()
        {
            var owners = manager.GetOwners();

            return Ok(owners);
        }
        [HttpGet("select-id")]
        //[Authorize(Policy = "Admin")]
        public async Task<IActionResult> GetIds()
        {
            var idList = manager.GetOwnersIdsList();

            return Ok(idList);
        }

        [HttpGet("byId/{id}")]
        public async Task<IActionResult> GetById([FromRoute] int id)
        {
            var owner = manager.GetOwnerById(id);

            return Ok(owner);
        }

        [HttpPost("withobj")]
        public async Task<IActionResult> Create([FromBody] OwnerModel ownerModel)
        {
            manager.Create(ownerModel);

            return Ok();
        }
        [HttpPut]
        public async Task<IActionResult> Update([FromBody] OwnerModel ownerModel)
        {
            manager.Update(ownerModel );

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
