using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using FitnessProjectTwo.Services;
using FitnessProjectTwo.Models;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace FitnessProjectTwo.API
{
    [Route("api/[controller]")]
    public class CommentController : Controller
    {
        private ITopicService _service;

        public CommentController(ITopicService service)
        {
            _service = service;
        }

       // [HttpGet]
        //public List<SubTopic> Get()
       // {
            //var topics = _service.GetAllTopics();
            //return topics;
       // }

        // GET api/values/5
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            var commentsById = _service.GetDisscussion(id);
            return Ok(commentsById);
        }


        // POST api/values
        [HttpPost]
        public void Post([FromBody]string value)
        {
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }

    }
}