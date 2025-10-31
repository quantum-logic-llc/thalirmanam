import React from 'react'
import SlideUp from '@/lib/animations/slideUp'

const ServiceArtical = ({ service }) => {
    if (!service || !service.content) {
        return (
            <section className="lg:pt-15 pt-10">
                <div className="container">
                    <div className="text-center py-20">
                        <h2 className="text-3xl font-bold text-gray-600">Service information not available</h2>
                        <p className="mt-4 text-gray-500">Please check back later for updates.</p>
                    </div>
                </div>
            </section>
        )
    }

    return (
        <section className="lg:pt-15 pt-10">
            <div className="container">
                <SlideUp>
                    <div
                        className="prose prose-lg max-w-none
                        prose-headings:font-nunito prose-headings:text-gray-900
                        prose-h2:text-3xl prose-h2:font-bold prose-h2:mb-6 prose-h2:mt-8
                        prose-h3:text-2xl prose-h3:font-semibold prose-h3:mb-4 prose-h3:mt-6
                        prose-h4:text-xl prose-h4:font-semibold prose-h4:mb-3 prose-h4:mt-4
                        prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-4
                        prose-ul:list-disc prose-ul:pl-6 prose-ul:mb-4 prose-ul:space-y-2
                        prose-ol:list-decimal prose-ol:pl-6 prose-ol:mb-4 prose-ol:space-y-2
                        prose-li:text-gray-700
                        prose-strong:text-gray-900 prose-strong:font-semibold"
                        dangerouslySetInnerHTML={{ __html: service.content }}
                    />
                </SlideUp>

                <SlideUp delay={2}>
                    <div className="mt-12 bg-green-50 rounded-xl p-8 border-l-4 border-green-600">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4 font-nunito">
                            Ready to Get Started?
                        </h3>
                        <p className="text-gray-700 mb-6">
                            If you have concerns about your child&rsquo;s development or would like to learn more about our {service.service_name} services, we&rsquo;re here to help.
                        </p>
                        <a
                            href="/contact-us"
                            className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
                        >
                            Make an Appointment
                        </a>
                    </div>
                </SlideUp>
            </div>
        </section>
    )
}

export default ServiceArtical
