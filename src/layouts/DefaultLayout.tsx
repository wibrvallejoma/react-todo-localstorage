import { Header } from '@/components/header';
import { Footer } from '@/components/Footer';
import { Outlet } from 'react-router';

export function DefaultLayout() {
  return (
    <>
      <Header />

      <Outlet />

      <Footer />
    </>
  )
}