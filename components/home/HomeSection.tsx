type HomeSectionProps = {
  id: string;
  children: React.ReactNode;
};

export default function HomeSection({
  id,
  children,
}: HomeSectionProps) {
  return (
    <section
      id={id}
      className="flex min-h-screen items-center justify-center"
    >
      <div className="w-full max-w-7xl px-6">
        {children}
      </div>
    </section>
  );
}