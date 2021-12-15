const { Hewan } = require("../models");

class HewanController {
  static async getAllHewan(req, res) {
    try {
      const hewan = await Hewan.findAll();

      res.status(200).json(hewan);
    } catch (err) {
      res.sendStatus(500);
    }
  }

  static async getHewanById(req, res) {
    try {
      const { id } = req.params;
      const hewan = await Hewan.findByPk(id);

      if (hewan === null) return res.sendStatus(404);

      res.status(200).json(hewan);
    } catch (err) {
      res.sendStatus(500);
    }
  }

  static async createHewan(req, res) {
    try {
      const { nama, namaSpesies, umur } = req.body;
      const newHewan = {
        nama: nama,
        namaSpesies: namaSpesies,
        umur: umur,
      };

      const hewan = await Hewan.create(newHewan);

      res.status(201).json(hewan);
    } catch (err) {
      res.sendStatus(500);
    }
  }

  static async updateHewan(req, res) {
    try {
      const { id } = req.params;
      const { nama, namaSpesies, umur } = req.body;
      const updateHewan = {
        nama: nama,
        namaSpesies: namaSpesies,
        umur: umur,
      };

      const hewan = await Hewan.update(updateHewan, {
        where: { id: id },
      });

      if (hewan < 1) return res.sendStatus(404);

      const updatedHewan = await Hewan.findByPk(id);

      res.status(200).json(updatedHewan);
    } catch (err) {
      res.sendStatus(500);
    }
  }

  static async deleteHewan(req, res) {
    try {
      const { id } = req.params;

      const hewan = await Hewan.destroy({
        where: { id: id },
      });

      if (hewan < 1) return res.sendStatus(404);

      res.status(200).json({
        message: "Hewan was deleted successfully!",
      });
    } catch (err) {
      res.sendStatus(500);
    }
  }
}

module.exports = HewanController;
