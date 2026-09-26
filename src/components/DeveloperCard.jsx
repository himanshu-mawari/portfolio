const DeveloperCard = () => {
  return (
    <div className="w-full max-w-md mx-auto my-8 overflow-hidden rounded-xl border border-slate-800 bg-[#0B0C10] font-mono text-sm shadow-2xl">
      <div className="flex items-center gap-2 border-b border-slate-800/80 bg-[#12131A] px-4 py-3 text-slate-400">
        <span className="text-purple-400 font-semibold">&lt;/&gt;</span>
        <span className="text-xs text-slate-300">developer.js</span>
      </div>

      <div className="p-5 overflow-x-auto text-slate-200 leading-relaxed">
        <pre>
          <code>
            <span className="text-purple-400">const</span>{" "}
            <span className="text-cyan-400">himanshu</span> = &#123;{"\n"}
            {"  "}
            <span className="text-emerald-400">role</span>:{" "}
            <span className="text-amber-300">"Full-Stack Developer"</span>,
            {"\n"}
            {"  "}
            <span className="text-emerald-400">skills</span>: [
            <span className="text-amber-300">"MongoDB"</span>,{" "}
            <span className="text-amber-300">"Express"</span>,{" "}
            <span className="text-amber-300">"React"</span>,{" "}
            <span className="text-amber-300">"Node"</span>],{"\n\n"}
            {"  "}
            <span className="text-emerald-400">projects</span>: [{"\n    "}
            <span className="text-amber-300">
              "DevTinder — networking + real-time chat"
            </span>
            ,{"\n    "}
            <span className="text-amber-300">
              "Forever — e-commerce + admin dashboard"
            </span>
            {"\n  "}]{"\n"}
            &#125;;{"\n\n"}
            <span className="text-purple-400">export default</span>{" "}
            <span className="text-cyan-400">himanshu</span>;
          </code>
        </pre>
      </div>
    </div>
  );
};

export default DeveloperCard;
