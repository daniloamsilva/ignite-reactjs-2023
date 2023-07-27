import { Outlet } from 'react-router-dom'

export function DefaultLayout() {
  return (
    <>
      <h1>Coffee Delivery</h1>
      <Outlet />
    </>
  )
}
