import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { IUser } from '../models/IUser';
import { deleteCookie } from '../servers/utilServer';
import NavBar from '../components/NavBar';
export default function DashboardLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {

    let user: IUser
    const cookie = cookies().get('session')?.value
    if (cookie) {
      try {
        user = JSON.parse(cookie) as IUser
      } catch (err) {
        console.log("this line")
        // cookie delete
        redirect('/') 
      } 
    }else {
      redirect('/')
    }

    return (
      <>
        { user && <NavBar item={user} /> } 
        <div style={{height: 1, backgroundColor: 'red'}}></div>
        {children}
      </>
    );
  }