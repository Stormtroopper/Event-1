import React from "react";
import { Link } from "react-router-dom";

const ExtractionHistory = () => {
  const extractions = [
    {
      id: "1",
      fileName: "invoice.pdf",
      extractedAt: "12 June 2026",
      status: "Completed",
    },
    {
      id: "2",
      fileName: "resume.pdf",
      extractedAt: "10 June 2026",
      status: "Completed",
    },
    {
      id: "3",
      fileName: "report.pdf",
      extractedAt: "08 June 2026",
      status: "Completed",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white px-6 py-10">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-3xl font-bold text-blue-400">
              Extraction History
            </h1>
            <p className="mt-2 text-slate-400">
              View all your previously uploaded PDFs and extracted text results.
            </p>
          </div>

          <Link
            to="/upload"
            className="inline-flex items-center justify-center px-5 py-3 font-medium bg-blue-600 rounded-lg hover:bg-blue-700 transition"
          >
            Upload New PDF
          </Link>
        </div>

        {/* History Table */}
        <div className="mt-8 overflow-hidden border border-slate-800 rounded-xl bg-slate-900">
          <table className="w-full text-left">
            <thead className="bg-slate-800 text-slate-300">
              <tr>
                <th className="px-6 py-4 text-sm font-semibold">File Name</th>
                <th className="px-6 py-4 text-sm font-semibold">
                  Extracted At
                </th>
                <th className="px-6 py-4 text-sm font-semibold">Status</th>
                <th className="px-6 py-4 text-sm font-semibold text-right">
                  Action
                </th>
              </tr>
            </thead>

            <tbody>
              {extractions.map((item) => (
                <tr
                  key={item.id}
                  className="border-t border-slate-800 hover:bg-slate-800/60 transition"
                >
                  <td className="px-6 py-4 font-medium">{item.fileName}</td>

                  <td className="px-6 py-4 text-slate-400">
                    {item.extractedAt}
                  </td>

                  <td className="px-6 py-4">
                    <span className="inline-flex px-3 py-1 text-xs font-semibold text-green-400 bg-green-950 border border-green-800 rounded-full">
                      {item.status}
                    </span>
                  </td>

                  <td className="px-6 py-4 text-right">
                    <Link
                      to={`/extraction/${item.id}`}
                      className="text-sm font-medium text-blue-400 hover:text-blue-300"
                    >
                      View Details
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Empty State Example */}
        {extractions.length === 0 && (
          <div className="mt-10 text-center border border-slate-800 rounded-xl bg-slate-900 p-10">
            <h2 className="text-xl font-semibold">No extractions found</h2>
            <p className="mt-2 text-slate-400">
              Upload your first PDF to start extracting text.
            </p>

            <Link
              to="/upload"
              className="inline-block mt-5 px-5 py-3 font-medium bg-blue-600 rounded-lg hover:bg-blue-700 transition"
            >
              Upload PDF
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default ExtractionHistory;