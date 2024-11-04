import './App.css'
import { FAQs, Footer, Hero, Nav, Projects, Services, Strategy, Team, Testimonials } from './components'

export default function App() {

    return (
        <>
            <main>
                <Nav/>
                <Hero/>
                <Services />
                <Strategy/>
                <Team/>
                <Projects/>
                <Testimonials/>
                <FAQs/>
            </main>
            <Footer />
        </>
    )
}
