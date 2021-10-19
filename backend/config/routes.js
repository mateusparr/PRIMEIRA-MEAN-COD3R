const express = require('express');

module.exports = function(server) {
  // API DE ROTAS
  const router = express.Router()
  server.use('/api', router)

  // rotas da API

  const billingCycleService = require('../api/billingCycle/billingCycleService');
  billingCycleService.register(router, '/billingCycles')

  const billingSummaryService = require('../api/billingSumary/billingSumaryService');
  router.route('/billingSummary').get(billingSummaryService.getSumary);
}