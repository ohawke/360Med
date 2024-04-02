import { getUserSession } from './session'

export default async function Home() {
  const user = await getUserSession()
  return <main className="">{JSON.stringify(user)}</main>
}