import h, { render } from '@kuba/h'
import * as f from '@kuba/f'
import agent from '@kuba/agent'
import env from '@kuba/env'
import settings from './settings'

f.and(agent.isUser, env.isProd) && (
  render(document.head, <script data-ad-client={settings.adClient} src='https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js' async />)
)