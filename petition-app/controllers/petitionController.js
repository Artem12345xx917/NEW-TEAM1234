const petitionService = require('../services/petitionService');

exports.index = async (req, res) => {
  const petitions = await petitionService.getAll();
  res.render('index', { petitions });
};

exports.view = async (req, res) => {
  const petition = await petitionService.getById(req.params.id);
  if (!petition) return res.render('message', { message: 'Петицію не знайдено' });
  res.render('petition', { petition });
};

exports.create = async (req, res) => {
  const { title, description } = req.body;
  if (!title || !description) return res.render('message', { message: 'Не заповнено заголовок або опис' });
  await petitionService.create({ title, description });
  res.redirect('/');
};

exports.delete = async (req, res) => {
  const result = await petitionService.delete(req.params.id);
  res.render('message', { message: result ? 'Петицію видалено' : 'Не вдалося видалити петицію' });
};

exports.vote = async (req, res) => {
  const success = await petitionService.vote(req.params.id);
  res.render('message', { message: success ? 'Дякуємо за голос!' : 'Помилка при голосуванні' });
};