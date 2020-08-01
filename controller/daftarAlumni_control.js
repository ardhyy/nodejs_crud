const express = require('express');
const mongoose = require('mongoose');
var router = express.Router();
var alumni = require('../models/DBalumni_model.js')


//menampilkan halaman index
router.get('/', (req, res) => {
	res.render("index");
});

//menampilkan halaman list data
router.get('/list', function(req, res){
	alumni.find({}, function(err, arr){
		if(err){
			console.log(err);
		}
		else{
			res.render('alumni/list', {
				list: arr
			});
		}
	});
});

//menampilkan halaman add/edit data
router.get('/data', (req, res) => {
	res.render("alumni/data");
});

//menginput data
router.post('/data', function(req, res){
	if(req.body._id == '')
		insertaja(req, res);
	else
		updateaja(req, res);
});

//fungsi input data
function insertaja(req, res) {
	var field = {
		NIM: req.body.NIM,
		nama: req.body.nama,
		jk: req.body.jk,
		tempat_lahir: req.body.tempat_lahir,
		tgl_lahir: req.body.tgl_lahir,
		jurusan: req.body.jurusan,
		tahun_masuk: req.body.tahun_masuk,
		tahun_keluar: req.body.tahun_keluar,
		IPK: req.body.IPK,
	};
	var ds = new alumni(field);
	ds.save();
	res.redirect('/list');
};

//fungsi update
function updateaja(req, res) {
	alumni.findOneAndUpdate({ _id: req.body._id }, req.body, { new: true }, (err, doc) => {
        if (!err) { res.redirect('/list'); }
        else console.log('Error during record update : ' + err);
    
    });
};

//menampilkan form edit
router.get('/:id', (req, res) => {
    alumni.findById(req.params.id, (err, doc) => {
        if (!err) {
            res.render("alumni/data", {
                alumni: doc
            });
        }
    });
});

//menghapus data
router.get('/delete/:id', (req, res) => {
    alumni.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) {
            res.redirect('/list');
        }
        else { console.log('Error in employee delete :' + err); }
    });
});

module.exports = router;