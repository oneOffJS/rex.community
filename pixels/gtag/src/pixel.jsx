import h, { render } from '@rex/h'
import gtag from './gtag'
import schema from './schema.json'

gtag('js', new Date())
gtag('config', schema.id)

window.addEventListener('DOMContentLoaded', () =>
  render(document.head, <script src={`https://www.googletagmanager.com/gtag/js?id=${schema.id}`} async />))
