import Header from "./(components)/header/header";
import AboutSection from "./(sections)/aboutSection";
import ClientSection from "./(sections)/clientSection";
import PortfolioSection from "./(sections)/portfolioSection";
import PriceSection from "./(sections)/priceSection";
import ServicesSection from "./(sections)/servicesSection";
import TeamSection from "./(sections)/teamSection";


export default function Home() {
  return (
    <>
      <Header />
      <ServicesSection/>
      <AboutSection/>
      <PortfolioSection/>
      <TeamSection/>
      <PriceSection/>
      <ClientSection/>
    </>

  )
}
