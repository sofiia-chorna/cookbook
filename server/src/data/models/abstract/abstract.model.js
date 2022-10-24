import { Model } from 'objection';

class Abstract extends Model {
  static get jsonSchema() {
    return {
      type: 'object',
      properties: {
        id: { type: 'string' },
        created_at: { type: 'string' },
        updated_at: { type: 'string' }
      }
    };
  }

  $beforeInsert() {
    const date = new Date().toISOString();
    this.created_at = date;
    this.updated_at = date;
  }

  $beforeUpdate() {
    this.updated_at = new Date().toISOString();
  }
}

export { Abstract };
