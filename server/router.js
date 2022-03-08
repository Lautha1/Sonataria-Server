import config from './config.js'
import express from 'express'
import fs from 'fs'
import path from 'path'

const router = new express.Router()

// Return status information to default route
router.get('/', (req, res) => {
  // Send back the config file
  res.json(config)
})

router.get('/checkUpdate', (req, res) => {
  const directoryPath = path.join('public', 'binaryUpdates')
  // passsing directoryPath and callback function
  fs.readdir(directoryPath, (err, files) => {
    // handling error
    if (err) {
      console.error(err)
      return res.status(500).json({ error: 'Failed to get update path' })
    }
    // listing all files using forEach
    for (let i = 0; i < files.length; i++) {
      const file = files[i]
      if (file.toLowerCase().includes('.zip')) {
        return res.json({ version: path.basename(file, '.zip'), link: `binaryUpdates/${file}` })
      }
    }
    res.status(404).json({ error: 'Update not found' })
  })
})

export default router
