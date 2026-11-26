export function AnswerBox({ children }: { children: string }) {
  return (
    <aside
      data-answer
      className="max-w-3xl mx-auto border-l-4 border-primary bg-slate-50 px-5 py-4"
    >
      <p className="text-lg leading-relaxed text-slate-800">{children}</p>
    </aside>
  );
}
