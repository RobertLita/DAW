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
    public class HistoryController : ControllerBase
    {
        private readonly IHistoryManager manager;

        public HistoryController(IHistoryManager historyManager)
        {
            this.manager = historyManager;
        }


        [HttpGet]
        //[Authorize(Policy = "BasicUser")]
        public async Task<IActionResult> GetHistory()
        {
            var history = manager.GetHistory();

            return Ok(history);
        }
        [HttpGet("select-id")]
        //[Authorize(Policy = "Admin")]
        public async Task<IActionResult> GetIds()
        {
            var idList = manager.GetHistoryIdsList();

            return Ok(idList);
        }
       

        [HttpGet("byId/{id}")]
        public async Task<IActionResult> GetById([FromRoute] int id)
        {
            var history = manager.GetHistoryById(id);

            return Ok(history);
        }

        [HttpPost("withobj")]
        public async Task<IActionResult> Create([FromBody] HistoryModel historyModel)
        {
            manager.Create(historyModel);

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
