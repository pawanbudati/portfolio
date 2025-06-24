import { useEffect, useState } from 'react'
import NotFound from './components/NotFound/NotFound'
import { BrowserRouter, Routes, Route  } from 'react-router-dom'
import Footer from './components/Footer/Footer'
import About from './components/About/About'
import Hero from './components/Hero/Hero'
import ScrollToTop from "./helper/scroll-to-top";
import { ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";
import Experience from './components/Experience/Experience'
import Skills from './components/Skills/Skills'
import Projects from './components/Projects/Projects'
import Header from './components/Header/Header'
import Education from './components/Education/Education'
import Contact from './components/Contact/Contact'

function App() {

  useEffect(() => {
    document.title = "Pavan Budati - Software Developer Portfolio",
    document.description = "This is the portfolio of Pavan Budati. I am a full stack developer and a self taught developer. I love to learn new things and I am always open to collaborating with others. I am a quick learner and I am always looking for new challenges."
  }, [])
  

  return (
	<main className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white">
		<ToastContainer />
		<Header />
		<Hero />
		<About />
		<Experience />
		<Skills />
		<Projects />
		{/* <Education /> */}
		<Contact />
		{/* <BrowserRouter>
			<Routes>
				<Route path="/" >
					<Route path="/" element={<></>} />
					<Route path="*" element={<NotFound />} />
				</Route>
			</Routes>
		</BrowserRouter> */}
		<Footer />
		<ScrollToTop />
      </main>
  )
}

export default App
