import { Link } from 'react-router-dom';
import { Blockquote } from 'flowbite-react';
import './public.css'

function Public() {
    const publicContent = (
        <section id="unblockMe-public" className="bg-amber-50">
            <header className='text-center'>
                <h1 id='unblockMe--public-title' className="unblockMe--public-title">
                    <span className='unblockMe--public-title unblockMe--public-title-word-1'>
                        un
                    </span>
                    <span className='unblockMe--public-title unblockMe--public-title-word-2'>
                        block
                    </span>
                    <span className='unblockMe--public-title unblockMe--public-title-word-3'>
                        Me
                    </span>
                </h1>
            </header>
            <main className="text-center">
            <Blockquote className="mb-4">
                The collaborative writing app built to help you beat your writer's block
            </Blockquote>
                <span>
                    <p className="font-sans">
                        Need an Account? 
                    </p>
                    <p className="font-semibold mb-4 text-gray-900 hover:text-gray-600 hover:underline decoration-double"> 
                        <Link to="/sign-up"> Click here to get unblocked!</Link>
                    </p>
                </span>
                <span>
                    <p className="font-sans">
                        Already a member? 
                    </p>  
                    <p className="font-semibold text-gray-900 hover:text-gray-600 hover:underline decoration-double">    
                        <Link to="/login">Click here to Login</Link>
                    </p>
                </span>
            </main>
        </section>
    )
    return publicContent
  }
  
  export default Public;