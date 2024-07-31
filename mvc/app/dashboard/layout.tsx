export default function DashboardLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <>
        <div style={{height: 1, backgroundColor: 'red'}}></div>
        {children}
      </>
    );
  }