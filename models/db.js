const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/db_alumni', { 
	useNewUrlParser: true, 
	useUnifiedTopology: true 
}, (error) => {
	if (!error) {console.log('Koneksi Sukses ke Mongodb...') }
	else {console.log('Gagal terkoneksi ke mongodb : ' + error)}
});

require('./DBalumni_model');