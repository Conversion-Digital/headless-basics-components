
import React from "react"
import { demoVariantData } from "./data/demoVariantData"

export default function DemoVariant(props) {
  return (
    <section className="p-5 bg-white text-center">
      <h2 className="text-2xl font-bold mb-3">{demoVariantData.title}</h2>
      <p className="mb-5">{demoVariantData.subtitle}</p>
      <div className="flex flex-col items-center justify-center space-y-2">
        <div>Phone: {demoVariantData.phone}</div>
        <div>Fax: {demoVariantData.fax}</div>
        <div>Email: {demoVariantData.email}</div>
        <div>Office: {demoVariantData.officeLocation}</div>
      </div>
      <div className="my-4">
        <a 
          href={demoVariantData.bookButtonLink} 
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-md"
        >
          {demoVariantData.bookButtonLabel}
        </a>
      </div>
    </section>
  )
}
