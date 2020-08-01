var mongoose = require('mongoose');

//skema data alumni
var alumni_skema = mongoose.Schema({
	NIM: String,
	nama: String,
	jurusan: String,
	jk: String,
	tempat_lahir: String,
	tgl_lahir: String,
	tahun_masuk: Number,
	tahun_keluar: Number,
	IPK: String
});

var datanya = module.exports = mongoose.model('datanya', alumni_skema, 'daftar_alumni');