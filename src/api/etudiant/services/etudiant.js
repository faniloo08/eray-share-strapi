'use strict';

/**
 * etudiant service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::etudiant.etudiant');
