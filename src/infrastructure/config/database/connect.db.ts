import { connect } from 'mongoose'
import { DB_URL } from '../environments/Database.env'

export default async function connectionDB(): Promise<void> {
  try {
    await connect(DB_URL)
    console.log('\n---> 👾 Connected to mongose db 👾\n <---')
  } catch (error) {
    console.log('\n---> ❌ Not connect to mongose db ❌\n <---')
  }
}
