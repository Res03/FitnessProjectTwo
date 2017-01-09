using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FitnessProjectTwo.Models
{
    public class Forum
    {
        public int Id { get; set; }
        public string Subject { get; set; }
        public string Description { get; set; }
        public ICollection<Topic> Topics { get; set; }
    }
}
