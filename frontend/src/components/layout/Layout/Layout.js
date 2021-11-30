import Head from '@/components/layout/Head'
import PropTypes from 'prop-types'
import Navigation from '@/components/layout/Navigation'

export default function Layout({
  generalSettings,
  link,
  menuItems,
  seo,
  children,
}) {
  return (
    <>
      <Head seo={seo} link={link} generalSettings={generalSettings} />

      <Navigation menuItems={menuItems} generalSettings={generalSettings} />

      {children}
    </>
  )
}

Head.propTypes = {
  generalSettings: PropTypes.object,
  link: PropTypes.string,
  menuItems: PropTypes.array,
  seo: PropTypes.object,
}
