import React from 'react'
import { FaMapLocationDot } from 'react-icons/fa6'

const GoogleMap = () => {
    return (
        <section className="lg:py-20 py-12 bg-gradient-to-b from-warm/10 to-transparent">
            <div className="container">
                <div className="text-center mb-10">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-primary rounded-full mb-4">
                        <FaMapLocationDot className="text-3xl text-cream-foreground" />
                    </div>
                    <h2 className="text-3xl lg:text-4xl font-bold mb-3">Find Us on the Map</h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Conveniently located in Porur, Chennai. Drop by for a visit or consultation
                    </p>
                </div>

                <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-warm/20">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248632.3981323451!2d80.0441998555664!3d13.047861500000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265ea4f7d3361%3A0x6e61a70b6863d433!2sChennai%2C%20Tamil%20Nadu%2C%20India!5e0!3m2!1sen!2sus!4v1678376335944!5m2!1sen!2sus"
                        width="100%"
                        height="500"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Thalir Manam Location Map"
                    ></iframe>
                </div>

                {/* Business Hours Section */}
                <div className="mt-12 bg-background rounded-2xl shadow-xl p-8 border border-warm/20">
                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="text-2xl font-bold mb-4">Business Hours</h3>
                            <div className="space-y-3">
                                <div className="flex justify-between py-2 border-b border-warm/20">
                                    <span className="font-semibold">Monday - Friday</span>
                                    <span className="text-muted-foreground">9:00 AM - 6:00 PM</span>
                                </div>
                                <div className="flex justify-between py-2 border-b border-warm/20">
                                    <span className="font-semibold">Saturday</span>
                                    <span className="text-muted-foreground">9:00 AM - 2:00 PM</span>
                                </div>
                                <div className="flex justify-between py-2">
                                    <span className="font-semibold">Sunday</span>
                                    <span className="text-red-600 font-medium">Closed</span>
                                </div>
                            </div>
                        </div>
                        <div className="bg-warm/10 rounded-xl p-6 flex items-center">
                            <div>
                                <h4 className="text-xl font-bold mb-3">Need Directions?</h4>
                                <p className="text-muted-foreground mb-4">
                                    We're located on Kundrathur Main Road, easily accessible from all parts of Chennai.
                                </p>
                                <a
                                    href="https://www.google.com/maps/dir//Chennai,+Tamil+Nadu,+India"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 bg-primary text-cream-foreground px-6 py-3 rounded-full font-semibold hover:bg-primary/90 transition-colors"
                                >
                                    <FaMapLocationDot />
                                    Get Directions
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default GoogleMap