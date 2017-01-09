using FitnessProjectTwo.Models;
using FitnessProjectTwo.Repository;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FitnessProjectTwo.Services
{
    public class TopicService : ITopicService
    {
        private IGenericRepository _repo;

        public TopicService(IGenericRepository repo)
        {
            _repo = repo;
        }

        public List<Topic> GetAllTopics()
        {
            List<Topic> topics = (from t in _repo.Query<Topic>()
                                  select new Topic
                                  {
                                      Id = t.Id,
                                      Description = t.Description,
                                      Subject = t.Subject,
                                      SubTopic = t.SubTopic
                                  }).ToList();

            return topics;
        }

        public void AddTopic(Topic topic)
        {
            if (topic.Id == 0)
            {
                _repo.Add(topic);
            }
            else
            {
                _repo.Update(topic);
            }
        }

        public void DeleteTopic(int id)
        {
            Topic topic = _repo.Query<Topic>().Where(t => t.Id == id).FirstOrDefault();
            _repo.Delete(topic);

        }

        public Topic GetTopic(int id)
        {
            Topic getTopic = _repo.Query<Topic>().Where(t => t.Id == id).Select(t => new Topic
            {
                Id = t.Id,
                Subject = t.Subject,
                Description = t.Description,
                SubTopic = t.SubTopic
            }).FirstOrDefault();
            return getTopic;
        }

        public SubTopic GetDisscussion(int id)
        {
            SubTopic comments = _repo.Query<SubTopic>().Where(t => t.Id == id).Select(t => new SubTopic
            {
                Id = t.Id,
                Subject = t.Subject,
                Description = t.Description,
                Comments = t.Comments
            }).FirstOrDefault();
            return comments;
        }
    }
}
