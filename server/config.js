import 'dotenv/config'

const config = {
  hostName: 'localhost',
  port: parseInt(process.env.port) || 3000,
  maintenenceMode: false
}

export default config
