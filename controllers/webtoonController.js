const Webtoon = require('../models/Webtoon');

// Fetch all webtoons
exports.getWebtoons = async (req, res) => {
  try {
    const webtoons = await Webtoon.find();
    res.json(webtoons);
  } catch (err) {
    res.status(500).send('Server error');
  }
};

// Add webtoon
exports.addWebtoon = async (req, res) => {
  try {
    const { title, description, characters } = req.body;

    if (!title || !description || !characters) {
      console.log('Missing fields');
      return res.status(400).json({ msg: 'Please include all fields' });
    }

    const newWebtoon = new Webtoon({
      title,
      description,
      characters,
    });

    await newWebtoon.save();

    res.status(201).json(newWebtoon);
  } catch (err) {
    res.status(500).json({ msg: 'Server Error' });
  }
};

// Fetch by ID
exports.getWebtoonById = async (req, res) => {
  try {

    const webtoon = await Webtoon.findById(req.params.id);
    if (!webtoon) return res.status(404).json({ msg: 'Webtoon not found' });
    res.json(webtoon);
  } catch (err) {
    res.status(500).json({ msg: err });
  }
};

// Delete 
exports.deleteWebtoon = async (req, res) => {
  try {
    const webtoon = await Webtoon.findByIdAndDelete(req.params.id);
    if (!webtoon) {
      return res.status(404).json({ msg: "Webtoon not found" });
    }
    res.json({ msg: "Webtoon removed successfully" });
  } catch (err) {
    res.status(500).send('Server error');
  }
};
