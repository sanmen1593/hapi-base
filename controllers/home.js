//var Boom = require('boom');
//var Joi = require('joi')

//var repos = require('../repositories');

module.exports = [
  {
    method: 'GET',
    path: '/api/v1/home',
    handler: (req, reply) => {
      reply(['hello world']);
    }
  },
  {
    method: 'GET',
    path: '/api/v1/home/{id}',
    handler: (req, reply) => {
      reply({});
    }
  }
//,
// {
//   method: 'GET',
//   path: '/api/v1/home/{db}',
//   handler: (req, reply) => {
//     repos.home.findAll().then(response => {
//       reply(response.data);
//     }).catch(err => {
//       console.log(err);
//       Boom.badImplementation('terrible implementation');
//     });
//   }
// },
// {
//   method: 'POST',
//   path: '/api/v1/home',
//   handler: (req, reply) => {
//     const payload = req.payload;
//     reply(payload.id + ' - ' + payload.text)
//   },
//   config: {
//     validate:{
//       payload: {
//         id: Joi.number().required(),
//         text: Joi.string().required(),
//         email: Joi.string().email().required()
//       }
//     }
//   }
];
