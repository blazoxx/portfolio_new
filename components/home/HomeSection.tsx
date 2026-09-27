type HomeSectionProps = {
  id: string;
  children: React.ReactNode;
  className?: string;
};

export default function HomeSection({
  id,
  children,
  className = "",
}: HomeSectionProps) {
  return (
    <section
      id={id}
      className={`min-h-screen scroll-snap-align-start ${className}`}
    >
      <div className="mx-auto flex min-h-screen w-full max-w-7xl items-center px-6">
        {children}
      </div>
    </section>
  );
}