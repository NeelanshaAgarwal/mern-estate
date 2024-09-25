import {FaSearch} from 'react-icons/fa'
import {Link} from 'react-router-dom';
import{useSelector} from 'react-redux';

export default function Header() {
  const {currentUser} = useSelector(state => state.user)
  return (
    <header className='bg-customDarkPurple shadow-md p-2'>
        <div className='flex justify-between items-center max-w-6xl mx-auto px-3'>
        <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
        <span className='text-customGrey'>Estate</span>
        <span className='text-customPurple'>Galaxy</span>
      </h1>
      <form className='bg-customBgSearch p-2 rounded-lg flex items-center'>
        <input type='text' placeholder='Search...' className='bg-transparent focus:outline-none w-24 sm:w-64 text-white placeholder-customSearchIcon'/>
        <FaSearch className='text-customSearchIcon' />
      </form>
      <ul className='flex gap-4'>
        <Link to='/'>
        <li className='hidden sm:inline text-customSearchIcon hover:underline font-semibold'>Home</li>
        </Link>
        <Link to = '/about'>
        <li className='hidden sm:inline text-customSearchIcon hover:underline font-semibold'>About</li> 
        </Link> 
        <Link to = '/profile'>
        {currentUser?(
          <img className='rounded-full h-7 w-7 object-cover' src={currentUser.avatar} alt="profile"/>
        ):(
        <li className='text-customSearchIcon hover:underline font-semibold'>Sign in</li>
        )}  
      </Link>    
      </ul>     
      </div>
    </header>
  )
}
