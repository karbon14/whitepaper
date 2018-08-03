import React from 'react'
import fs from 'fs'
import path from 'path'
import ReactPDF from '@react-pdf/react-pdf'
import { Karbon14Whitepaper } from './whitepaper/whitepaper'
import config from './config.json'

const { langs, outputDir, whitepaper_name } = config

const createDistFolder = () => {
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir)
  }
}

const getDistPath = () => path.join(__dirname, '..', outputDir)

createDistFolder()

langs.forEach((lang, key) => {
  ReactPDF.render(<Karbon14Whitepaper key={key} lang={lang} />, `${getDistPath()}/${whitepaper_name}_${lang}.pdf`)
})
