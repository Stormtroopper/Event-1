import { extractionOptions } from "@/options/extraction_options";
import React from "react";
import { Link } from "react-router-dom";

const ExtractionDetails = () => {
  

  return (
    <div className="min-h-screen bg-slate-950 text-white px-6 py-8">
      <div className="max-w-6xl mx-auto">
        {/* Back to Home */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-slate-400 hover:text-blue-400 transition"
        >
          <span className="text-2xl">←</span>
          <span className="text-sm font-medium">Back to Home</span>
        </Link>

        {/* Header */}
        <div className="mt-10 text-center">
          <h1 className="text-4xl font-bold text-blue-400">
            Choose Extraction Type
          </h1>
          <p className="max-w-2xl mx-auto mt-4 text-slate-400">
            Select the type of file you want to process and extract text from.
          </p>
        </div>

        {/* Carousel Cards */}
        <div className="mt-12 overflow-x-auto pb-6">
          <div className="flex gap-6 min-w-max px-2">
            {extractionOptions.map((option) => (
              <div
                key={option.id}
                className="w-80 shrink-0 bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-lg hover:border-blue-500 hover:-translate-y-1 transition"
              >
                <div className="flex items-center justify-center w-16 h-16 text-3xl bg-slate-800 rounded-xl">
                  {option.icon}
                </div>

                <h2 className="mt-6 text-2xl font-bold text-white">
                  {option.title}
                </h2>

                <p className="mt-3 text-slate-400 leading-relaxed">
                  {option.description}
                </p>

                <Link
                  to={option.path}
                  className="inline-flex items-center justify-center w-full mt-6 px-5 py-3 font-semibold bg-blue-600 rounded-lg hover:bg-blue-700 transition"
                >
                  Select Option
                </Link>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default ExtractionDetails;