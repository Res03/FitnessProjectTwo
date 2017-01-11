using System.Collections.Generic;
using FitnessProjectTwo.Models;

namespace FitnessProjectTwo.Services
{
    public interface ITopicService
    {
        void AddSubTopic(SubTopic topic);
        void AddTopic(Topic topic);
        void DeleteTopic(int id);
        List<Topic> GetAllTopics();
        SubTopic GetDisscussion(int id);
        Topic GetTopic(int id);
    }
}