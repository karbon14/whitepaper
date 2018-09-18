import React from 'react'
import fs from 'fs'
import path from 'path'
import { Karbon14Whitepaper } from './whitepaper/whitepaper'
import template from './app/template'
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
  const whitepaperHTMLSecond = renderToString(<Karbon14Whitepaper key={key} lang={lang} />)
  const whitepaperHTML = template({
    body: whitepaperHTMLSecond,
    title: 'Karbon14 - Whitepaper',
  })
  
  wkhtmltopdf(whitepaperHTML, { 
    output: `${getDistPath()}/${whitepaper_name}_${lang}.pdf`,
    marginTop: '0px',
    marginBottom: '0px',
    marginLeft: '0px',
    marginRight: '0px',
    pageWidth: '290px',
    pageHeight: '419px',
  })
})
