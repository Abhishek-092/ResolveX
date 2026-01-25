import { Link } from "react-router-dom";
import Navbar from "../../components/common/Navbar";

const Landing = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-semibold text-[#1F3A5F]">
          Campus issues. Clearly reported. Transparently resolved.
        </h1>

        <p className="mt-6 text-lg max-w-3xl mx-auto text-gray-600">
          ResolveX is a centralized platform for reporting, tracking, and resolving
          campus infrastructure issues with accountability and visibility.
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <Link
            to="/register"
            className="px-6 py-3 rounded-md bg-[#1F3A5F] text-white font-medium hover:opacity-90"
          >
            Get Started
          </Link>

          <Link
            to="/login"
            className="px-6 py-3 rounded-md border border-[#1F3A5F] text-[#1F3A5F] font-medium hover:bg-[#1F3A5F]/5"
          >
            Login
          </Link>
        </div>

        <p className="mt-6 text-sm text-gray-500">
          Designed for universities and institutional campuses.
        </p>
      </section>

      {/* Why ResolveX Exists */}
      <section className="bg-white py-20">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-2xl font-semibold text-[#1F3A5F]">
            Why ResolveX Exists
          </h2>

          <p className="mt-4 text-gray-600 leading-relaxed">
            Campus infrastructure issues often go unresolved due to fragmented
            reporting, lack of ownership, and limited visibility. ResolveX replaces
            informal complaint channels with a structured, transparent system where
            every issue is tracked from report to closure.
          </p>

          <ul className="mt-6 list-disc list-inside space-y-2 text-gray-600">
            <li>No clear status updates after reporting</li>
            <li>Duplicate complaints without coordination</li>
            <li>Delayed resolutions with no accountability</li>
            <li>No data to identify recurring infrastructure issues</li>
          </ul>
        </div>
      </section>

      {/* How ResolveX Works */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-semibold text-center text-[#1F3A5F]">
            A Structured Resolution Process
          </h2>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                title: "Report",
                desc: "Students submit issues with category, priority, and location details.",
              },
              {
                title: "Assign",
                desc: "Management reviews and assigns issues to responsible staff.",
              },
              {
                title: "In Progress",
                desc: "Updates and remarks are added as work progresses.",
              },
              {
                title: "Resolve & Close",
                desc: "Issues are resolved, closed, and archived for analysis.",
              },
            ].map((step, index) => (
              <div
                key={index}
                className="bg-white border rounded-lg p-6 shadow-sm"
              >
                <h3 className="text-lg font-semibold text-[#1F3A5F]">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm text-gray-600">{step.desc}</p>
              </div>
            ))}
          </div>

          <p className="mt-8 text-center text-sm text-gray-500">
            Each issue follows a defined lifecycle with timestamps and full
            visibility.
          </p>
        </div>
      </section>

      {/* Who It’s For */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-semibold text-center text-[#1F3A5F]">
            Built for Campus Communities
          </h2>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border rounded-lg p-6">
              <h3 className="text-lg font-semibold text-[#1F3A5F]">
                Students
              </h3>
              <ul className="mt-4 space-y-2 text-gray-600 list-disc list-inside">
                <li>Report infrastructure issues easily</li>
                <li>Track progress and resolution timelines</li>
                <li>View public issues and official announcements</li>
                <li>Add constructive comments to public issues</li>
              </ul>
            </div>

            <div className="border rounded-lg p-6">
              <h3 className="text-lg font-semibold text-[#1F3A5F]">
                Campus Management
              </h3>
              <ul className="mt-4 space-y-2 text-gray-600 list-disc list-inside">
                <li>Centralized oversight of all reported issues</li>
                <li>Clear assignment and accountability</li>
                <li>Emergency issue prioritization</li>
                <li>Data-driven infrastructure insights</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-[#1F3A5F] text-white text-center">
        <h2 className="text-2xl font-semibold">
          Start Resolving Issues the Right Way
        </h2>

        <p className="mt-4 text-gray-200">
          Access ResolveX to report issues or manage campus infrastructure
          effectively.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <Link
            to="/register"
            className="px-6 py-3 rounded-md bg-white text-[#1F3A5F] font-medium hover:opacity-90"
          >
            Get Started
          </Link>

          <Link
            to="/login"
            className="px-6 py-3 rounded-md border border-white text-white font-medium hover:bg-white/10"
          >
            Login
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center text-sm text-gray-500 bg-gray-100">
        © ResolveX
      </footer>
    </div>
  );
};

export default Landing;
