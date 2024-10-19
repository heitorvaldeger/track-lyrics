import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'videos'

  async up() {
    this.schema.alterTable(this.tableName, (table) => {
      table.string('release_year', 4).alter()
    })
  }
}
