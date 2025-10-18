import React from 'react'
import PageTitle from '@/components/sections/pageTitle'
import ServiceArtical from '@/components/sections/services/serviceArtical'
import Sidebar from '@/components/sections/sidebar/sidebar'

const ServiceDetails = () => {
  return (
    <>
      <main>
        <PageTitle pageName="Service Details" />
        <div className="container py-16">
          <div className="grid lg:grid-cols-3 grid-cols-1 gap-7.5">
            <div className="lg:col-span-2">
              <ServiceArtical />
            </div>
            <div>
              <Sidebar />
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default ServiceDetails