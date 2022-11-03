import Head from 'next/head';
import { useRef } from 'react';
import emailjs from '@emailjs/browser'
import {BsFillMoonFill} from 'react-icons/bs';
import {AiFillGithub, AiFillLinkedin} from "react-icons/ai";
import {SiLeetcode, } from "react-icons/si";
import { useState } from 'react';

export default function Home() {
  const[darkMode, setDarkMode] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();


    emailjs.sendForm('service_gflnnfz', 'template_y8e8qxf', form.current, 'qiTtlWWdhV7BKXMon')
    .then((result) => {
        console.log(result.text);
        alert("Message Sent");
    }, (error) => {
        console.log(error.text);
    });

};

  return (
    <div className={darkMode ? "dark" : "" }>
      <Head>
        <title>BotsheloT</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/webfavicon.ico" />
      </Head>

      <main className='bg-white dark:bg-gray-900'>
        <section className='min-h-screen px-10'>

          <nav className='pt-4 mb-3 flex justify-between'>
            <h1 className='text-xl font-sans font-semibold font dark:text-white'>Botshelo T</h1>
            <ul className='flex items-center'>
              <li> <BsFillMoonFill className='cursor-pointer text-2xl dark:text-white' onClick={() => setDarkMode(!darkMode)}/> </li>
              <li> <a href="docs/CV.pdf" className='bg-blue-500 px-3 py-1 rounded-md text-white ml-8 font-medium' download>My CV</a> </li>
            </ul>
          </nav>

          <div className='text-center p-10'>
            <h2 className='text-5xl font-medium text-blue-500'>Botshelo Tlhabanyane</h2>
            <h3 className='font-medium text-2xl dark:text-white'>Software Developer</h3>
            <br/>
            <div className='text-lg text-gray-700 dark:text-gray-300'>
              <p>Ambitious career-focused Computer Science Student based in Johannesburg.</p>
              <p>Frontend Developement is what interests me the most. I also dabble in Backend Developement.</p>
            </div>
                        
          </div>

          <div className='text-4xl text-gray-500'>
            <ul className='flex justify-center gap-9 hover'>
              <li className='hover:text-black dark:hover:text-white'> <a href='https://github.com/BotsheloT' target={'_blank'}><AiFillGithub/></a></li>
              <li className='hover:text-black dark:hover:text-white'> <a href='https://leetcode.com/BotsheloT/' target={'_blank'}><SiLeetcode/></a> </li>
              <li className='hover:text-black dark:hover:text-white'> <a href='https://www.linkedin.com/in/botshelo-tlhabanyane-36b573210/' target={'_blank'}><AiFillLinkedin/></a></li>              
            </ul>
          </div>

          <div className='relative mx-auto bg-gradient-to-b from-blue-500 w-80 h-80 rounded-full mt-5'>
            
          </div>

          <div className='py-10 text-center'>
            <h3 className='font-medium text-2xl pb-3 dark:text-white'>About Me</h3>
            <div className='text-lg text-gray-700 dark:text-gray-300'>
              <p>Design and my sense of aesthetics are reflected in all areas of my daily life.</p>
              <p>I personally believe that everyone has a unique characteristic to them and that it can only be</p>
              <p></p>
              <br/>
              <p>At the begining of my second year in Varsity, I was not too sure what I wanted to do with my degree. I knew that I enjoyed</p>       
              <p> coding, but I was not sure which IT position would accommodate my creativity. In March that year, I took part in a Hackathon </p>
              <p>with my friends that opened my perspective. We designed a website that made accommodations for at-home-voters using React.</p>
              <p>Even though our team did not win, that experience ignited the love and interest I have for Javascript Frameworks and Design today</p>              
            </div>
            

          </div>

          <div className='py-10 text-center'>
          <h3 className=' font-medium text-2xl pb-3 dark:text-white'>Why SovTech?</h3>

          <div className='text-lg text-gray-700 dark:text-gray-300'>
            <p>Ever since I was introduced to SovTech, my interest for the company has grown.
            Through SovTech's Social Media, I have witnessed how seriously they take technology and its potential.            
            I truly believe that with working at SovTech, I will be surrounded by like-minded developers who will allow me to advance in the IT fraternity of SovTech.</p>            
            <br/>
            <p>The inclusive and innovative nature of SovTech makes it the perfect environment for me to showcase and expand my knowledge
              of JavaScript, React, Swift, and other technologies that interest me. With my creative mind, desire for growth and discipline,
              I am positive that I will be a valuable employee at SovTech.              
            </p>            
          </div>
                      
        </div>
        </section>

      <section className='px-10'>

        <div className='text-center py-10'>
          <h3 className=' font-medium text-2xl dark:text-white'>Skills</h3>

          <div id="accordion-collapse" data-accordion="open">

            <h2 id="accordion-collapse-heading-1">
            <button type="button" class="flex items-center justify-between w-full p-5 font-medium text-left border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 hover:bg-gray-100 bg-gray-100 text-black text-lg dark:bg-gray-700 dark:border-gray-500 dark:text-white" data-accordion-target="#accordion-collapse-body-1" aria-expanded="true" aria-controls="accordion-collapse-body-1">
              <span>Frontend</span>
              <svg data-accordion-icon="" class="w-6 h-6 shrink-0 text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </button>
            </h2>
            <div id="accordion-collapse-body-1" class="hidden" aria-labelledby="accordion-collapse-heading-1">
            <div class="p-5 font-light border border-b-0 border-gray-200">
              <p class="mb-2 text-gray-500 dark:text-gray-400">HTML</p>          
            </div>
            <div class="p-5 font-light border border-b-0 border-gray-200">
              <p class="mb-2 text-gray-500 dark:text-gray-400">CSS</p>  
            </div>
            <div class="p-5 font-light border border-b-0 border-gray-200">
              <p class="mb-2 text-gray-500 dark:text-gray-400">ReactJS</p>      
            </div>
            <div class="p-5 font-light border border-b-0 border-gray-200">
              <p class="mb-2 text-gray-500 dark:text-gray-400">Angular</p>      
            </div>
            </div>

            <h2 id="accordion-collapse-heading" data-accordion="open" >
            <button type="button" class="flex items-center justify-between w-full p-5 font-medium text-left border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 hover:bg-gray-100 bg-gray-100 text-black text-lg dark:bg-gray-700 dark:border-gray-500 dark:text-white" data-accordion-target="#accordion-collapse-body-2" aria-expanded="false" aria-controls="accordion-collapse-body-2">
            <span>Backend</span>
            <svg data-accordion-icon="" class="w-6 h-6 shrink-0 text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </button>
            </h2>
            <div id="accordion-collapse-body-2" class="hidden" aria-labelledby="accordion-collapse-heading-2">
            <div class="p-5 font-light border border-b-0 border-gray-200">
            <p class="mb-2 text-gray-500 dark:text-gray-400">NodeJS</p>      
            </div>
            <div class="p-5 font-light border border-b-0 border-gray-200">
            <p class="mb-2 text-gray-500 dark:text-gray-400">MongoDB</p>      
            </div>
            <div class="p-5 font-light border border-b-0 border-gray-200">
            <p class="mb-2 text-gray-500 dark:text-gray-400">FireBase</p>      
            </div>
            </div>

            <h2 id="accordion-collapse-heading-3">
            <button type="button" class="flex items-center justify-between w-full p-5 font-medium text-left border border-b-0 border-gray-200 rounded-b-xl focus:ring-4 focus:ring-gray-200 hover:bg-gray-100 bg-gray-100 text-black text-lg dark:bg-gray-700 dark:border-gray-500 dark:text-white" data-accordion-target="#accordion-collapse-body-3" aria-expanded="false" aria-controls="accordion-collapse-body-3">
            <span>Design</span>
            <svg data-accordion-icon="" class="w-6 h-6 shrink-0 text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </button>
            </h2>
            <div id="accordion-collapse-body-3" class="hidden" aria-labelledby="accordion-collapse-heading-3">
            <div class="p-5 font-light border border-t-0 border-gray-200">
            <p class="mb-2 text-gray-500 dark:text-gray-400">Adobe XD</p>            
            </div>
            <div class="p-5 font-light border border-t-0 border-gray-200">
            <p class="mb-2 text-gray-500 dark:text-gray-400">Adobe Illustrator</p>            
            </div>
            </div>
          </div>

        </div>
        
          <div className='w-auto h-auto bg-gray-100 rounded-lg bg-center text-center my-10 dark:bg-gray-600'>

            <h3 className='font-medium text-2xl pb-4 py-5 dark:text-white'>Contact Me</h3>

            <div>
              <div className='flex flex-col justify-center items-center py-5'>
            
                <form ref={form} onSubmit={sendEmail}>
                <input type={'text'} placeholder = 'Name' name='user_name' className='bg-white w-96 h-9 rounded-md mb-5 placeholder: pl-2 dark:bg-gray-400 dark:placeholder:text-gray-100' required/>
                <br/>
                <input type={'email'} placeholder = 'Email Address' name='user_email' className='bg-white w-96 h-9 rounded-md mb-5 placeholder: pl-2 dark:bg-gray-400 dark:placeholder:text-gray-100' required/>
                <br/>
                <textarea type={'text'} placeholder = 'Message' name='message' className='bg-white w-96 h-56 rounded-md mb-5 placeholder: pl-2 pt-1 dark:bg-gray-400 dark:placeholder:text-gray-100' required/>
                <br/>
                <button type="submit"  value={"Send"}  className='bg-blue-500 px-3 py-1 rounded-md text-white text-lg font-medium w-96 h-9'> Send Message </button>
                </form>
                
            </div>
            
          </div>          
          
        </div>        

        
      </section>

      <section>

        <footer className='w-full h-72 bg-blue-500 px10 items-center text-center'>
          <h1 className='text-xl text-white pt-10 pb-1 font-medium'>Botshelo T</h1>
          <h2 className='text-base text-white pb-10 font-normal'>Software Developer</h2>

          <a href='docs/CV.pdf' className='border-solid rounded-md border-white text-white mb-10 w-20 h-10'>Download CV</a>
          
          <div className='text-white flex justify-center gap-10 text-4xl py-10'>
          <a href='https://github.com/BotsheloT' target={'_blank'} className= "hover:text-gray-300"><AiFillGithub/></a>
          <a href='https://leetcode.com/BotsheloT/' target={'_blank'} className= "hover:text-gray-300"><SiLeetcode/></a>
          <a href='https://www.linkedin.com/in/botshelo-tlhabanyane-36b573210/' target={'_blank'} className= "hover:text-gray-300"><AiFillLinkedin/></a>
          </div>          
                    
        </footer>

      </section>
      
      
      </main>

    </div>
  )
}