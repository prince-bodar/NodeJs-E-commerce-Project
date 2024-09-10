require('dotenv').config();
const express = require('express');
const server = express();
const port = process.env.PORT || 6060;
const mongoose = require('mongoose');
const morgan = require('morgan');
const path = require('path');
const imagepath = path.join(__dirname, 'public', 'images');

server.use(morgan('dev'));
server.use(express.json());

// routes
const userRoutes = require('./routes/user.routes');
const productRoutes = require('./routes/product.routes');
const cartRoutes = require('./routes/cart.routes');
const whislistRoutes = require('./routes/whislist.routes');
const orderRoutes = require('./routes/order.routes');

server.use('/api/user', userRoutes);
server.use('/api/product', productRoutes);
server.use('/api/cart', cartRoutes);
server.use('/api/whislist', whislistRoutes);
server.use('/api/order', orderRoutes);

server.use('/public/images', express.static(imagepath));

mongoose.connect(process.env.MONGO_DB_URL)
  .then(() => { console.log('connected...') })
  .catch((error) => {
    console.log(error);
  });

server.listen(port, () => {
  console.log(`Server Started at  http://localhost:${port}`);
});
