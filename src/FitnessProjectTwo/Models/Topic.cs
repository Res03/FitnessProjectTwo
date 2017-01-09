using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FitnessProjectTwo.Models
{
    public class Topic
    {
        public int Id { get; set; }
        public string Subject { get; set; }
        public string Description { get; set; }
        public ICollection<SubTopic> SubTopic { get; set; }
    }
}
