import React from 'react'
import Image from 'next/image'
import AboutOne from '@/components/sections/abouts/aboutOne'
import VisionMission from '@/components/sections/visionMission'
import Teams from '@/components/sections/teams/teams'
import Testimonial from '@/components/sections/testimonial'
import SlideUp from '@/lib/animations/slideUp'
import { Button } from '../ui/button'
import { FaHeart, FaUsers, FaLightbulb, FaStar } from 'react-icons/fa'
import { FaPhone } from 'react-icons/fa6'
import Link from 'next/link'

const AboutUs = () => {
  const features = [
    {
      icon: FaHeart,
      title: 'Compassionate Care',
      description: 'Individualized attention with empathy and understanding',
      color: 'pink',
    },
    {
      icon: FaUsers,
      title: 'Expert Team',
      description: 'Highly qualified developmental specialists',
      color: 'green',
    },
    {
      icon: FaLightbulb,
      title: 'Innovation',
      description: 'Evidence-based therapeutic interventions',
      color: 'blue',
    },
    {
      icon: FaStar,
      title: 'Proven Results',
      description: 'Track record of successful outcomes',
      color: 'purple',
    },
  ]

  const achievements = [
    'Over 10+ Years of Excellence',
    'Expert Team of Specialists',
    'Evidence-Based Approaches',
    'Family-Centered Care',
    'Comprehensive Support Services',
  ]

  return (
    <>
      <main>
        {/* Hero Banner Section */}
        <AboutOne isAboutpage={true} />

        {/* Vision & Mission Section */}
        <VisionMission />

        {/* What Makes Us Special */}
        <section className="py-16 lg:py-20" style={{ backgroundColor: '#eff6ff' }}>
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <SlideUp>
                <div className="text-center mb-12 lg:mb-16">
                  <h2 className="text-[#73BE48] text-2xl lg:text-3xl font-bold uppercase mb-4">
                    What Makes Us Special
                  </h2>
                  <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                    Excellence in Every Aspect
                  </h3>
                  <div className="w-20 h-1 bg-gradient-to-r from-pink-500 to-green-500 mx-auto"></div>
                </div>
              </SlideUp>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {features.map((feature, index) => (
                  <SlideUp key={index} delay={index * 2}>
                    <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
                      <div
                        className={`w-24 h-24 bg-gradient-to-br from-${feature.color}-100 to-${feature.color}-200 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl`}
                      >
                        <feature.icon className={`text-${feature.color}-600 text-4xl`} />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                    </div>
                  </SlideUp>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section - Tight Spacing */}
        <div className="-mt-12 relative z-5">
          <Testimonial />
        </div>

        {/* Meet Our Founder Section - Tight Spacing */}
        <div className="-mt-12 relative z-5">
          <Teams />
        </div>

        {/* Contact CTA with Background Image */}
      <section className="relative w-full overflow-hidden py-12 mt-12">
  {/* Background image */}
  <div className="absolute inset-0 -z-10">
    <Image
      src="data:image/webp;base64,UklGRgwOAABXRUJQVlA4IAAOAACwYACdASrjALQAPp1InEwlpCKoJHXL+QATiWU7TAkLhYAtHMhmVRi7HLtz+jbb0+ZvzqfSf/h9+Kde4VY7tVKfiPqPcgHrLf7Xlv+senL9gn7Xe0AVFKj//NOJyTKyWK8behheHHxDG83Erf637U3wtXiSioi0EtuSPaMNURdMTNexiCIIpcJ9WVzcJg5os2th7pVq1iwg9+rvqyOqRXwUbKRFoX2mtCRSK7pxKHW+Heo7f0rEwGLYQBYHrs7EMEH9QAKZcYfTdWjswF7h7ciahrWXg4s87Yz9tBHm0AnYKiFxrZxoKgSChhXMlrHcxvjWO18Q5jjWvFW4AnKRoAe2LKW/r2ydrsiHx9SfZDUkp7Tj5+lItkL9Ja7/67smx6z6Icbz+9zwkYSAaeouoIhbp/nv9JUw95u+DAx/eRHXQlHEP6TGsTZ7U/xA2uzoLFlK8r/uHV2FmGVd8tZctfBJH8/t69Jfdo/ieeetoubOZcR5s6AL2XivjVOuCyshMclArWvN0dLc8ll3grcnzpj6N58pjdFFbIuAVgAjB3klHwpwYvsAzIYp2dGws5QcHpp/px3AX8Bxl0d+fDzIIF5ilN7ai+qJwbiiGMBUvcYar9NqcWN4fVqx/xh22hmXPlLn0JmPjlPM++HAHgu9hEZEGt1yqNohg97cAuzb58bBWFlC+ZvHzVXOHBi8CCi+nykBGBD4oi9ZMDP7FjrsFWeLaYTmjYOXazgEjt9ttm0g0gyvAbTgZrMSPssExkC98Fd2uovZBKOFoARBG4F3Dy7R87Erb3WGYyc79uDeYHyqqOf3d/Tvf4ONCo4BDkKs8m0hRISmrjnA6y195Ukm3IhwTIkRNHhq57SXdMKxC+UoBZ8k1qvIHhA7fIOGsw1I3sLkAFWvJD/8hqxhKmCxGSDrOECHGAWl+tOmlpWyab4M48+nnZz1Db+S0hmU/QfKoYYwzKXLwt5Lvu8Pysezp9nvHiYXOMOPwJS2/7grtuJV5DJaZtU6Zp+QWjX06kzLoBibvux8ZAP1k3+xwIXGgAD++qkZn+vPXnHANCJ7yR7LD26NEWDGZ0SlIkSxROa4QES189BAg/I28tT5hIi00POfwPZZ03GQ3Z42rMAy+QRIOm+QJtpgP3mp0/zbFulqH3j7fk/dOjROwFyQzN5oRghqiuY0rl+NgyVGz4QfgjpFftaOGKbqBfdTYQiu7+gbp6EGNKN2DxKlYSOhdtNqgVfIEo1Vg8agNj6j6EI4UD+HJ9d6qnFHdCVsw4Tea2bOpu5g241eypa0CDROPVElVz63ZEUYy2iz0XT3SA6OLyusxFHff9lbLJ8n4fEtKSVtqbRasANR/2Bm77OGUxhYpaKM5EMQZTNkiYVlwVW0XQivy2iltyJ3fRscGb7JqYuVMlHlGjC8ivK2smw6CWuK0uQl10GxONnao1r9R2QUMvLu80/yv4MN9nDBdaX/ODn8ePMrjBY820tensJLmXfgCNLO/+nvv20Y9RvIawYzo4qKgkV5JcWgpg/k5YQ9C9vGBEbd+fz1L0o6/mBYl36abadvaOYKf2EGeD1niti7bd0B4WKZbLhwnMuz2Y+ScrQC0oOP5zZbxJ8uBPyTLvCaLhXOJGZi+yZCGzsiAcmMuOTnT7iryumh1Nm5i89k62jaVkiHI/KmcI9iPGw4xPUTGhdiAOKS7ALUhxG+920bJsOtmnvMbaxzUBy6g40oVdh7+nUKNuwj7u6UTBGNWXYgs/u2XAbD5bjQfoCDMK3jTfogE+TCI1tL4qIiYw1+ZfqZeb8EjohFWh5exgZ0IWn2WuA6HE6B+ezlpEXIzDbI9DVyiLJKrSTECM3ONjT8oPk8eiwQK2djVC83tNIFVU9sj0oZL/49iqjHSvW9g5lqyuwGPWLpp3j4IunKKRhWyL6SZZtWr23ePgESM5ZHP72KluiCsNpioObNHd/ioRwVdRW6+qxWkPCZD+e5Yiw0l7MTVvwMWI6qWoMDa06RO8LcNNhi/ZGSrlqsK4W99kyq7ojer9wJ8KIXx+BQChKly/yeahfVYD4UGI676wXMItPDEr0Bi4NSmf/Mq1Iine2lxJxRltui0632LbGyjXa3xv5lKWEAMTdah0OlXrwovEUQUpi2KReAnWC5MVyyDvvYkfhPEj2ovqwMDFZAQG6crGfrrZMWr3CR4DJf7g3pMw/kqzUUo5DSB8IXr92H3XM60NTyAK+EXwZXJqBkOONDE2OvuBC8wx7zoQyzXMhOkJfjMkhk5BRaBfJj1riq1xdHncx9JiIIt6K0UZk9JLfscwSBZ/PF6k1PItuwcu3ECmS9jBZLhS0654E+CUhR6PTBd1IHRzTVKEgnI9Oywtd2eCYIQERhIrrpz2uRbsrav5/coXpAiOfKVSLTyhgJkWZQ1iNxzIeNg4JeJUU3oobvf1dmLnXAs47cW4Dk4vRtjBlP0lLqio1AQSiMHRS9k12Q7v/QLDBJM0JJsLWtkM3ZaIE4TuIpf7hfzaU0MheFOlfz7J+vAXDawkj8UACYo5oDp3bwYgXsy9A8OxlyRzhoExd5ayCO2tJBq7l6RWWBuYeQTooDbvfviv9h7V1JYbQ0yxAWzn71ARWgzM3ifGP6i/btLTsCeeXiRdwid8w/Svn4bIjf4C6xCu0/e/zAkzJRrEmDdgYypDf7UL9ihn6T9yGEB7KVX6liQEBj4V5HnsajeXNlUQflT7xEFJK8fIEi+BFVh+r11G4NfCpezrArnxXDdV3FfwNg7AGeEHL/BPoqPg8edEdiZAeZQv0/7lpF7oPcQbI/VG1oWKkdUg83FVK3YE8sjtv1Dvv1vKmV77Kb9LntM3obod8bO/Y1/ZexCmno1zJlO5v7DZHP/qHxnvH2Xr9ygmEIlhQ/ANKUA+X50PvHFS3P7J06dGPT2SuWwZ6cH0kGVpL3qlTL7NaQRxF/Yf+OGIJszaNvAi1k27NJfcl3i5NAW/DnLTOdVyoLKrWbdrlQBE0evIko4uARJ0lQiZUKR/oOSyF1C0xP1NTHrNPT8xLMAuS6dS6ukHQYwSVdJdvI7o6i+XqDH1WelCxJd3imd07uO0XfPmsCH7pO42L0pT7C440WKDaV9HyRBq7f0o0FarLNdLeyOI7JuVvckJfYpTwl5HO35p7DqOl30ECzN2O9huTeqDXDsy7p1wnX4XuXvF1qPqOL6r4ECA1MKiJ+bit0BbIs/pRNS57Ywa2upVp2WsDs3n9TIi7HqwJCYvjSvDUpMmPsTiI+QzGqanurcN0U/pl79p8+S6qdjzdBeLaLPDc14NffDTQJt/TawI26u0ikqbi9seDFoQpOApyPYVlx7GtTkUQywj83/0IFgVx/TbDl1GbjginN4n7pxj7dUiN49QB2DL/9v2+aPw3cMlq8u+8ajxOmHMsiVthcnT86+DUWedkaGHksVfayXlk0VxK+yznGFtbaddHMcQSunwy1tjwe3y37QjMa7WevGfdk4iwzmGp5BGyByTeMt4euMRc1dAWPDeZ7g57zB/5l5clEv6coMr34Jqx1P5PVs37m8UWdTvkt04/6QM12IdeDQ0bO8Rm81yqpy1+vcCiRCfIMHhiTTh8DgfSv7j+pJlxR5/RKhYzfMO3tUxji4HdJRGKlKrC0FDZriuAoVhiz8ABLDE+ASbQU31HRBlZQoRniQfslZnTPTCJtKa7rMRZORNEOlrIVYpiDrT2lVZTyGMYkpsYG6o0MYuOgEF2YFTIHyI0Dw9yoS5Rgtm8atPkyjXueMTiUWWGQYVkaVYFicr3d+M05tlhkulPOUVXipug1iUvJacO0F40shYm82Iu9Ut8YYQ/r+89l4kR4/PvyfRYVjGn/ldB/fnGvZBPvHynvuszjgNq1NWHjVmzvHJVEgaODtFJXkvgQBaGhHTXI6UwRXNfJDS+w+aEasJRtxZL1G/6tkzvUr+N7fzzbHT1Ar0JMdQ1Y122KIqaOmGqRQyDXr1VjZI5T8FSbCbhpJLKlr889mzHWLl4v7lDB3dghURKPcokqQb5H1pANIpUsTObaB5BY+5IFQiDWZIsGF/Qf5U/Jn1x6HRfGgdHOTG/8O2PXjaDPIHwj24utuR0MbvGWn5LsTFTDaviqLpj1FvznE/GI3DqbbZeQ0jDxv0PUDZUtm6hA/itEr1qejgpoXXN2Xgw/4eYndDElKT5TBZA/vMPRDkyhi0OG5SmSr8V/M9cg1thFlNMZk2xjYlpxHwa2BJS5udsTnaj70EvRFT3zFPnuanIphPQmMXf6y1bWIoVRcSCJPladLWlNGmmTss9kiSyPvnheJ27aVahq47nxGFRhVq2qGh/mhUGT3939y/vMOZYUop/Z7P8BO5swaAhpBG7WjHSAxW+Dim1XdUDnUe2e8x4GH3hR+SwMrhmabporV6CfUk05s4v7RkPz5o/7r/KPuEmDIfw/+z9zLYIClmIzPiC4ht6G6HSIeB/id4myXZQNfCgG3UjKRaOTceYjncuZEUzkwaKLCIg/UZj9HvwRgg62LyIQ6Qe0IDEUJwwO51brpMsqPbwdhli1QgNpaKTPKj4ivCl6Jw7I8hb/xenTXT4Xr5/MVj3nuhxygISadiPcQ0b58pVnWMqobgS+0C/GkOPe5S/gSB0eDOkl+SYExJakcVKnruisZuUTRwB6acBRhCZ+FPZZA9K9h9JAa80tB2Jm61eF+/FFYjo0BRSNxiQHiENKuioC5N7Uw0jeto1rbcssCr+OWjouBvC8kKwERd1n7DaJOB9RdgAIcr3S6J7+cDwRQAAAAA=="
      alt="Contact background"
      fill
      className="object-cover object-center"
      priority
    />
    <div className="absolute inset-0 bg-black/40" />
  </div>

  {/* Content */}
  <div className="container mx-auto px-4 flex flex-col items-center text-center gap-4">
    <h1 className="text-white text-2xl lg:text-3xl font-bold max-w-3xl">
      Noticing developmental concerns in your child or teenager?
    </h1>

    <p className="text-white/90 max-w-3xl text-base lg:text-lg leading-relaxed">
      Noticing delays or changes in your child or teenager’s growth, learning, behavior, or emotions?
      Early support and guidance can make a meaningful difference in their development and well-being.
    </p>

    <Button
      asChild
      size="lg"
      className="mt-2 bg-green-600 hover:bg-green-700 text-white font-semibold text-base sm:text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
    >
      <Link href="/contact-us" className="inline-flex items-center gap-3">
        <FaPhone className="text-lg sm:text-xl" />
        <span>Click to contact with us.</span>
      </Link>
    </Button>
  </div>
</section>

      </main>
    </>
  )
}

export default AboutUs
