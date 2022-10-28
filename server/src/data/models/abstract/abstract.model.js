import { generateUUID } from '../../../helpers/helpers.js';
import { Model } from 'objection';

class Abstract extends Model {
  static get jsonSchema() {
    return {
      type: 'object',
      properties: {
        id: { type: 'string' },
        createdAt: { type: 'string' },
        updatedAt: { type: 'string' }
      }
    };
  }

  $beforeInsert() {
    const date = new Date().toISOString();
    this.id = generateUUID();
    this.createdAt = date;
    this.updatedAt = date;
  }

  $beforeUpdate() {
    this.updatedAt = new Date().toISOString();
  }
}

export { Abstract };
