import HeaderTwo from '../../src/components/sections/headers/headerTwo'
import FooterTwo from '../../src/components/sections/footers/footerTwo'
import HomeTwo from '../../src/pages/home-2'

export const metadata = {
  title: 'Ascent - Childcare & Kids School || Home Two',
  description: 'Ascent - Childcare & Kids School React.js and Tailwind CSS Template',
}

export default function HomeTwoPage() {
  return (
    <>
      <HeaderTwo />
      <HomeTwo />
      <FooterTwo />
    </>
  )
}