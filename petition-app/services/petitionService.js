const repo = require('../repositories/petitionRepository');

exports.getAll = () => repo.getAll();

exports.getById = (id) => repo.getById(id);

exports.create = (data) => repo.create(data);

exports.delete = (id) => repo.delete(id);

exports.vote = (id) => repo.vote(id);