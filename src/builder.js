import React from 'react'
import fs from 'fs'
import path from 'path'
import { Karbon14Whitepaper } from './whitepaper/whitepaper'
import config from './config.json'
import { renderToString } from 'react-dom/server'
import wkhtmltopdf from 'wkhtmltopdf'

const { langs, outputDir, whitepaper_name } = config

const createDistFolder = () => {
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir)
  }
}

const getDistPath = () => path.join(__dirname, '..', outputDir)

createDistFolder()

langs.forEach((lang, key) => {
  const whitepaperHTML = renderToString(<Karbon14Whitepaper key={key} lang={lang} />)
  wkhtmltopdf(whitepaperHTML, { output: `${getDistPath()}/${whitepaper_name}_${lang}.pdf` })
  // `${getDistPath()}/${whitepaper_name}_${lang}.pdf`
})
