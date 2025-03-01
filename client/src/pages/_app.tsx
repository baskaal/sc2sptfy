import type { AppProps } from 'next/app'
import dynamic from 'next/dynamic'
import { comp, CSSProvider, RootStyle, ResetStyle } from 'csscomp'
import ReactGA from 'react-ga4'
import { Layout } from '@/components'
import { THEME, LocalGlobalStyle } from '@/style'

import 'reset-css/reset.css'
import '../fonts.css'

ReactGA.initialize('G-07YK46QS69', {
  testMode: process.env.NODE_ENV !== 'production'
})

export const SApp = comp.div({
  fontFamily: 'base',
  width: '100%',
  height: '100%',
  backgroundColor: 'background',
  color: 'color'
})

const NonSSRWrapper = ({ children }: any) => (
  <>{children}</>
)

const DynamicWrapper = dynamic(() => Promise.resolve(NonSSRWrapper), {
  ssr: false
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CSSProvider theme={THEME}>
      <DynamicWrapper>
        <SApp>
          <ResetStyle />
          <RootStyle rootFontSizes={['10px', '14px', '16px']} />
          <LocalGlobalStyle />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </SApp>
      </DynamicWrapper>
    </CSSProvider>
  )
}
