export default function ProfileLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
    return (
      <section>
        <div>Header</div>
        {/* Include shared UI here e.g. a header or sidebar */}
        <nav></nav>
        {children}
      </section>
    )
  }