﻿using System.Linq;

namespace FitnessProjectTwo.Repository
{
    public interface IGenericRepository
    {
        void Add<T>(T entityToCreate) where T : class;
        void Delete<T>(T entityToDelete) where T : class;
        IQueryable<T> Query<T>() where T : class;
        void Update<T>(T entityToUpdate) where T : class;
    }
}