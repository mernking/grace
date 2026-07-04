import Link from "next/link";

export default function CoreServices() {
  return (
    <section
      id="coreservices"
      className="px-4 py-24 w-full flex flex-col justify-center items-center"
    >
      <div className="max-w-5xl mx-auto w-full">
        {/* Title Block matching your style framework */}
        <div className="max-w-3xl mb-16">
          <span className="inline-flex items-center rounded-md px-3 py-1 text-sm font-medium text-white ring-1 ring-inset mb-4">
            Core Specialization
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Two Ways We Move Your Business Forward
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-400">
            We don't just write code. We eliminate structural friction so your
            software responds instantly and your business runs on autopilot.
          </p>
        </div>

        {/* The Two Core Services Grid built with your glass architecture */}
        <div className="mx-auto max-w-none grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
          {/* Focus 1: Technical Application Performance */}
          <div className="flex flex-col glass-strong rounded-2xl p-8 w-full border border-[rgba(255,255,255,0.05)] hover:border-[rgba(147,51,234,0.4)] card-hover shadow-premium group hover:scale-[1.01] transition-all duration-300">
            <dt className="text-xl font-bold leading-7 text-white flex items-center gap-x-3">
              {/* Custom indicator using your brand purple */}
              <h3>Application Performance Optimization</h3>
            </dt>
            <dd className="mt-4 flex flex-col flex-auto text-sm sm:text-base leading-7 text-gray-400">
              <p className="flex-auto">
                Slow interfaces directly impact retention and processing
                workflows. We review and reconstruct your underlying engineering
                across{" "}
                <strong>
                  web solutions, mobile builds, and desktop platforms
                </strong>
                . By optimizing asset delivery, streamlining system memory use,
                and tuning UI rendering pipelines, we guarantee fluid software
                performance even under constrained hardware resources.
              </p>
              <div className="mt-6 border-t border-[rgba(255,255,255,0.08)] pt-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Focus: Desktop application performance, memory management
                optimization, Web Vitals, native UI responsiveness, legacy
                refactoring.
              </div>
            </dd>
            <div className="w-full flex flex-col md:flex-row gap-3 mt-6 justify-center items-center">
              <div className="w-full md:w-auto hover:scale-105 active:scale-95 transition-transform duration-200">
                <Link
                  className="w-full md:w-auto block px-8 py-3 rounded-xl text-center font-semibold bg-primary hover:bg-primary-dark shadow-premium-lg hover-glow transition-all"
                  href="/contact?service=application-performance"
                >
                  Application Performance Optimization
                </Link>
              </div>
            </div>
          </div>

          {/* Focus 2: Custom Process Automation */}
          <div className="flex flex-col bg-slate-900/40 glass-strong rounded-2xl p-8 w-full border border-[rgba(255,255,255,0.05)] hover:border-[rgba(147,51,234,0.4)] card-hover shadow-premium group hover:scale-[1.01] transition-all duration-300">
            <dt className="text-xl font-bold leading-7 text-white flex items-center gap-x-3">
              <h3>Business Process Automation Systems</h3>
            </dt>
            <dd className="mt-4 flex flex-col flex-auto text-sm sm:text-base leading-7 text-gray-400">
              <p className="flex-auto">
                Repetitive manual tasks stall overall business velocity and
                introduce human error vectors. We design secure,
                custom-engineered background automation systems and robust
                internal pipelines that process operational tasks autonomously,
                instantly replacing manual file structures and administrative
                friction.
              </p>
              <div className="mt-6 border-t border-[rgba(255,255,255,0.08)] pt-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Focus: Custom B2B automation tools, backend data pipeline
                engineering, enterprise systems integration, workflow velocity
                tools.
              </div>
            </dd>
            <div className="w-full flex flex-col md:flex-row gap-3 mt-6 justify-center items-center">
              <div className="w-full md:w-auto hover:scale-105 active:scale-95 transition-transform duration-200">
                <Link
                  className="w-full md:w-auto block px-8 py-3 rounded-xl text-center font-semibold bg-primary hover:bg-primary-dark shadow-premium-lg hover-glow transition-all"
                  href="/contact?service=business-process"
                >
                  Business Process Automation Systems
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
