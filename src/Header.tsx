import Link from 'next/link'
 
export default function Header() {
  return (
    <header>
        <ul>
      <li>
        <Link href="/">Homepage</Link>
      </li>
      <li>
        <Link href="/server">Server Component</Link>
      </li>
      <li>
        <Link href="/gallery">Photos</Link>
      </li>
    </ul>
    </header>
  )
}