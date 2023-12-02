//import { GeistSans } from "geist/font/sans"

export default function CTA() {
    return (
      <div className=" rounded-md max-w-6xl mx-auto bg-blue-700" style={{fontFamily:'GeistSans, sans-serif'}}>
        <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            <span className="block">Are you ready to give SiteGenie a try?</span>
          </h2>
          <p className="mt-4 text-lg leading-6 text-white">
            Find out if a personalized AI support chatbot is a good fit for you in just a few hours.
          </p>
          <a
            href="#"
            className="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-white hover:bg-indigo-50 sm:w-auto"
          >
            Start a free trial
          </a>
          <div className="ml-3 inline-flex">
            <a
              href="#"
              className="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border text-base font-medium rounded-md text-white hover:bg-indigo-50 sm:w-auto"
            >
              Book a demo
            </a>
          </div>
        </div>
      </div>
    )
  }