import { BaseSeeder } from '@adonisjs/lucid/seeders'
import db from '@adonisjs/lucid/services/db'

export default class extends BaseSeeder {
  async run() {
    await db
      .table('genres')
      .knexQuery.insert([
        { id: 1, name: 'Pop' },
        { id: 2, name: 'Rock' },
        { id: 3, name: 'Hard Rock' },
        { id: 4, name: 'Heavy Metal' },
        { id: 5, name: 'Hip-Hop/Rap' },
        { id: 6, name: 'Dance' },
        { id: 7, name: 'Electronica' },
        { id: 8, name: 'Alternative' },
        { id: 9, name: 'Indie' },
        { id: 10, name: 'Punk' },
        { id: 11, name: 'Rhythm & Blues' },
        { id: 12, name: 'Soul' },
        { id: 13, name: 'Disco' },
        { id: 14, name: 'Funk' },
        { id: 15, name: 'Latin' },
        { id: 16, name: 'Country' },
        { id: 17, name: 'Reggae' },
        { id: 18, name: 'Blues' },
        { id: 19, name: 'Folk' },
        { id: 20, name: 'Jazz' },
        { id: 21, name: 'Classical' },
        { id: 22, name: 'Opera' },
        { id: 23, name: 'Christian/Gospel' },
        { id: 24, name: "Children's Music" },
        { id: 25, name: 'Christmas' },
        { id: 26, name: 'World' },
        { id: 27, name: 'Soundtrack' },
        { id: 28, name: 'Movie Scene' },
        { id: 29, name: 'TV Show' },
        { id: 30, name: 'Others' },
      ])
      .onConflict('id')
      .merge()
  }
}
