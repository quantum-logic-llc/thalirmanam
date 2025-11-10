"use client"
import React from 'react'
import { FaMapLocationDot, FaRoute, FaSquareParking, FaTrain } from 'react-icons/fa6'

const GoogleMapNew = () => {
    return (
        <section className="lg:py-20 py-12" style={{ backgroundColor: '#eff6ff' }}>
            <div className="container">
                {/* Header */}
                <div className="text-center mb-12">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-primary rounded-2xl mb-4 transform rotate-12 hover:rotate-0 transition-transform duration-300">
                        <FaMapLocationDot className="text-3xl text-white" />
                    </div>
                    <h2 className="text-4xl lg:text-5xl font-bold mb-4">Find Us on the Map</h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Conveniently located in Porur, Chennai. Easy to reach from all parts of the city.
                    </p>
                </div>

                {/* Map Container */}
                <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-primary/10 mb-12">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.5982387842516!2d80.14892197484969!3d13.035776987290045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5261a8c8e2e8e9%3A0x1234567890abcdef!2sKundrathur%20Main%20Rd%2C%20MS%20Nagar%2C%20Porur%2C%20Chennai%2C%20Tamil%20Nadu%20600125!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                        width="100%"
                        height="500"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Thalir Manam Location Map"
                        className="grayscale hover:grayscale-0 transition-all duration-500"
                    ></iframe>
                </div>

                {/* Location Details Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-primary/20">
                        <div className="w-14 h-14 rounded-xl bg-blue-500/10 flex items-center justify-center mb-4">
                            <FaMapLocationDot className="text-2xl text-blue-500" />
                        </div>
                        <h4 className="font-bold text-lg mb-2 text-gray-800">Address</h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                            No. 13, Kundrathur Main Rd, MS Nagar, Porur
                        </p>
                    </div>

                    <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-primary/20">
                        <div className="w-14 h-14 rounded-xl bg-green-500/10 flex items-center justify-center mb-4">
                            <FaRoute className="text-2xl text-green-500" />
                        </div>
                        <h4 className="font-bold text-lg mb-2 text-gray-800">Easy Access</h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                            Well connected by road from all parts of Chennai
                        </p>
                    </div>

                    <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-primary/20">
                        <div className="w-14 h-14 rounded-xl bg-purple-500/10 flex items-center justify-center mb-4">
                            <FaSquareParking className="text-2xl text-purple-500" />
                        </div>
                        <h4 className="font-bold text-lg mb-2 text-gray-800">Parking</h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                            Ample parking space available for visitors
                        </p>
                    </div>

                    <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-primary/20">
                        <div className="w-14 h-14 rounded-xl bg-orange-500/10 flex items-center justify-center mb-4">
                            <FaTrain className="text-2xl text-orange-500" />
                        </div>
                        <h4 className="font-bold text-lg mb-2 text-gray-800">Public Transport</h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                            Close to Porur bus stops and metro stations
                        </p>
                    </div>
                </div>

                {/* Directions CTA */}
                <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-8 lg:p-12 text-center text-white shadow-2xl">
                    <h3 className="text-3xl lg:text-4xl font-bold mb-4">Need Directions?</h3>
                    <p className="text-lg mb-8 text-white/90 max-w-2xl mx-auto">
                        Get turn-by-turn directions to our center from your current location using Google Maps
                    </p>
                    <a
                        href="https://maps.google.com/?q=No.+13,+Kundrathur+Main+Rd,+MS+Nagar,+Porur,+Chennai,+Tamil+Nadu+600125"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 bg-white text-primary px-8 py-4 rounded-full font-bold text-lg hover:bg-white/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                    >
                        <FaMapLocationDot className="text-2xl" />
                        Get Directions on Google Maps
                    </a>
                </div>
            </div>
        </section>
    )
}

export default GoogleMapNew
