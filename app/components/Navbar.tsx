import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className='flex gap-5 p-5 bg-gray-900 text-white'>
      <Link href="/" className='hover:text-blue-500'>Home</Link>
      <Link href="/podcasts" className='hover:text-blue-500'>Podcasts</Link>
      <Link href="/about" className='hover:text-blue-500'>About</Link>
    </nav>
  );
};

export default Navbar;