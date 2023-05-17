import { connect } from 'mongoose'
import { DB_URL } from '../environments/Database.env'

export default async function connectionDB(): Promise<void> {
  try {
    const connection = await connect(DB_URL)
    console.log(`\n👾 Connected to mongose db: ${connection.connect.name} 👾\n`)
  } catch (error) {
    console.log('\n❌ Not connect to mongose db ❌\n')
  }
}
