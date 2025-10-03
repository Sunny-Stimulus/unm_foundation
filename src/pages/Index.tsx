import { ArrowRight, Users, GraduationCap, TreePine, Heart, MapPin, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Slider images
import slide1 from "@/assets/images/courosal1.jpg";
import slide2 from "@/assets/images/courosal2.jpg";
import slide3 from "@/assets/images/courosal3.jpg";
import slide4 from "@/assets/images/courosal4.jpg";
import slide5 from "@/assets/images/courosal5.jpg";
import slide6 from "@/assets/images/courosal6.jpg";

// cards images
import unm from "@/assets/images/home/UNMChildrenhospital.png"
import reach from "@/assets/images/home/reach-logo.png";
import shikshasetu from "@/assets/images/home/shikshasetu-logo.png";
import pratiti from "@/assets/images/home/Pratiti.png";
import abhivyakti from "@/assets/images/home/abhivyakti.png";
import ujaas from "@/assets/images/home/UJAAS.png";
import { useNavigate } from "react-router-dom";

const initiatives = [
  {
    img: unm
  },
  {
    img: reach
  },
  {
    img: shikshasetu
  },
  {
    img: pratiti
  },
  {
    img: abhivyakti
  },
  {
    img: ujaas
  },
];

const quickFacts = [
  {
    number: "198,000+",
    label: "Children reached",
    icon: Users,
  },
  {
    number: "30,000+",
    label: "Students covered",
    icon: GraduationCap,
  },
  {
    number: "128,000+",
    label: "Trees Planted",
    icon: TreePine,
  },
  {
    number: "3,600+",
    label: "Surgeries Conducted",
    icon: Heart,
  },
  {
    number: "34",
    label: "Locations Covered",
    icon: MapPin,
  },
];

const newsEvents = [
  {
    title: "Abhivyakti Registration",
    date: "20th May 2024",
    location: "Ahmedabad",
    description: "Artists Application Call For Edition-6 Is Now Open",
    link: "https://abhivyaktiart.org/",
  },
  {
    title: "Abhivyakti returns to Surat",
    date: "5th April 2024",
    location: "Surat",
    link: "https://apps.torrentpower.com/unmfoundation/web/images/cms/PressRelease_ENG_Abhivyakti_Surat_05042024.pdf"
  },
  {
    title: "Torrent Group celebrates UNM Birth Centenary",
    date: "31st March, 2024",
    location: "Ahmedabad",
    link: "https://apps.torrentpower.com/unmfoundation/web/images/cms/PressRelease_Eng_UNM_BirtCentenary31032024.pdf"
  },
  {
    title: "Victoria Garden tops City Beauty Competition",
    date: "11th March, 2024",
    location: "Ahmedabad",
    link: "https://apps.torrentpower.com/unmfoundation/web/images/cms/MediaRelease_VictoriaGarden_AMC_UNM%20Foundation.pdf"
  },
  {
    title: "UNM Foundation Brings Abhivyakti to Rajkot",
    date: "13th March, 2024",
    location: "Rajkot",
    link: "https://apps.torrentpower.com/unmfoundation/web/images/cms/AbhivyaktiRajkotEditionPressRelease_Eng_130324.pdf"
  },
  {
    title: "Abhivyakti's 5th Edition in Ahmedabad",
    date: "23rd November, 2023",
    location: "Ahmedabad",
    link: "https://apps.torrentpower.com/unmfoundation/web/images/cms/AbhivyaktiEdition5%20aunchresseleaseEnglishNew.pdf"
  }
];

export default function Index() {

  const navigate = useNavigate();

  return (
    <>
      <div className="min-h-screen">

        {/* Slider--section */}
        <section className="relative w-full h-[70vh] md:h-[80vh]">
          <Swiper
            spaceBetween={0}
            centeredSlides
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            loop
            navigation
            pagination={{ clickable: true }}
            modules={[Autoplay, Pagination, Navigation]}
            className="w-full h-full"
          >
            {/* Slide 1 */}
            <SwiperSlide>
              <div className="relative w-full h-full">
                <img
                  src={slide1}
                  alt="Child Health Initiative"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex flex-col justify-center px-8 md:px-20 mt-56">
                  <h3 className="text-white text-lg md:text-2xl font-semibold leading-snug">
                    UNM Foundation
                  </h3>
                </div>
              </div>
            </SwiperSlide>

            {/* Slide 2 */}
            <SwiperSlide>
              <div className="relative w-full h-full">
                <img
                  src={slide2}
                  alt="Education Initiative"
                  className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 flex flex-col justify-center px-8 md:px-20 mt-52">
                  <h3 className="text-white text-lg md:text-xl font-semibold mb-2">
                    UNM Children Hospital
                  </h3>
                  <h2 className="text-white text-2xl md:text-4xl font-bold leading-snug">
                    Creating an Inclusive and Healthy Society
                  </h2>
                </div>
              </div>
            </SwiperSlide>

            {/* Slide 3 */}
            <SwiperSlide>
              <div className="relative w-full h-full">
                <img
                  src={slide3}
                  alt="Community Service"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex flex-col justify-center px-8 md:px-20 mt-32">
                  <h3 className="text-white text-lg md:text-xl font-semibold mb-2">
                    Reach
                  </h3>
                  <h2 className="text-white text-2xl md:text-4xl font-bold leading-snug">
                    A Child Health Centric Initiative
                  </h2>
                </div>
              </div>
            </SwiperSlide>

            {/* Slide 4 */}
            <SwiperSlide>
              <div className="relative w-full h-full">
                <img
                  src={slide4}
                  alt="Arts and Culture"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex flex-col justify-center px-8 md:px-20 mt-32">
                  <h3 className="text-white text-lg md:text-xl font-semibold mb-2">
                    Sikshasetu
                  </h3>
                  <h2 className="text-white text-2xl md:text-4xl font-bold leading-snug">
                    Enhancing Quality of Education
                  </h2>
                </div>
              </div>
            </SwiperSlide>

            {/* Slide 5 */}
            <SwiperSlide>
              <div className="relative w-full h-full">
                <img
                  src={slide5}
                  alt="Environmental Conservation"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex flex-col justify-center px-8 md:px-20 mt-32">
                  <h3 className="text-white text-lg md:text-xl font-semibold mb-2">
                    Abhivyakti
                  </h3>
                  <h2 className="text-white text-2xl md:text-4xl font-bold leading-snug">
                    Promoting Arts and Culture
                  </h2>
                </div>
              </div>
            </SwiperSlide>

            {/* Slide 6 */}
            <SwiperSlide>
              <div className="relative w-full h-full">
                <img
                  src={slide6}
                  alt="Healthcare Services"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex flex-col justify-center px-8 md:px-20 mt-32">
                  <h3 className="text-white text-lg md:text-xl font-semibold mb-2">
                    Pratiti
                  </h3>
                  <h2 className="text-white text-2xl md:text-4xl font-bold leading-snug">
                    Preserving Flora and Fauna
                  </h2>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </section>

        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 gradient-hero opacity-90"></div>
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20"></div>

          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-5xl mx-auto">
              <h3 className="text-4xl md:text-6xl lg:text font-bold text-white mb-6 animate-fade-in-down">
                Think of others also,<br />
                <span className="text-secondary-light">when you think about yourself</span>
              </h3>

              <p className="text-lg md:text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in-up">
                Torrent Group has always been committed to the cause of social service and has repeatedly channelized a part of its resources and activities, such that it positively affects the society socially, ethically and also environmentally. The Group has taken up various Corporate Social Responsibility (CSR) initiatives and enhanced value in the society under the aegis of specially established not-for-profit entity, viz. UNM Foundation.
              </p>
            </div>
          </div>
        </section>

        {/* Our Initiatives Section */}
        <section className="py-16 lg:py-24 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Our Initiatives</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 bg-white justify-items-center">
              {initiatives.map((initiative, index) => (
                <img
                  key={index}
                  src={initiative.img}
                  className="h-20 md:h-24 lg:h-28 object-contain transition-transform duration-300 hover:scale-110"
                />
              ))}
            </div>
          </div>
        </section>

        {/* Quick Facts Section */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Quick Facts</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
              {quickFacts.map((fact, index) => (
                <div key={fact.label} className="text-center animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary/10 text-secondary mb-4">
                    <fact.icon className="h-8 w-8" />
                  </div>
                  <div className="text-3xl font-bold text-primary mb-2">{fact.number}</div>
                  <div className="text-muted-foreground font-medium">{fact.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Impact Stories Section */}
        <section className="py-16 lg:py-24 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Impact Stories</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card className="animate-fade-in-up">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    <GraduationCap className="h-8 w-8 text-green-500 mr-3" />
                    <h3 className="text-2xl font-bold text-primary">Education</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    In a span of 12 years, through the Sikshasetu programme, we have reached 117+ primary schools in 40+ villages across Gujarat, 1030+ teachers and more than 30000 students and 3500+ parents from economically disadvantaged sections of the rural communities and urban slums.
                    Through the Shardashish Scholarship Programme, we provide global educational opportunities to bright and committed students, who are economically challenged.
                  </p>
                </CardContent>
              </Card>

              <Card className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    <Heart className="h-8 w-8 text-red-500 mr-3" />
                    <h3 className="text-2xl font-bold text-primary">Health Care</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    Under the Reach Initiative we have conducted health screening camps in more than 1992 villages and screened more than 1.8 lakh children in Gujarat, Maharashtra, Uttar Pradesh and Union Territories like Diu, Daman & Dadra Nagar Haveli. About 72,500 children were brought to their normal state from malnourishment and Anaemic conditions identified during screening camps. This is achieved by providing “Mauji” biscuits to malnourished children and Iron supplements to Anaemic Children completely free of cost.
                  </p>
                </CardContent>
              </Card>

              <Card className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    <Users className="h-8 w-8 text-purple-500 mr-3" />
                    <h3 className="text-2xl font-bold text-primary">Arts, Culture and Wellbeing</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    Through 6 editions of Abhivyakti – The City Arts Project, we have curated 700+ upcoming artists and provided them a platform to showcase their creativity and reached out to an audience of more than 6,00,000 people who have enjoyed various art forms absolutely free.
                    In the recently concluded 6th edition, over 3.24 lac people visited and enjoyed the 140 Performances, 47 Visual Art works presented by 96 artists.
                  </p>
                </CardContent>
              </Card>

              <Card className="animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    <TreePine className="h-8 w-8 text-emerald-500 mr-3" />
                    <h3 className="text-2xl font-bold text-primary">Ecology</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    Through Pratiti – an initiative to restore old and create new Gardens and Lakes, so far, a total of 15 Gardens and 2 Lakes across 2 cities have been restored / built at par with international standards. Reflecting their popularity within the community, the Parks and Lakes receive annual footfalls of more than 56 lacs.
                    Ecological restoration of Shetrunjay Hills, Palitana (Gujarat) - As part of this challenging project, UNM Foundation endeavours to restore the Shetrunjay Hills, an extremely important ecological and religious site, to its lost glory.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* News & Events Section */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">News & Events</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {newsEvents.map((event, index) => (
                <Card key={event.title} className="group hover:shadow-lg transition-smooth animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <Calendar className="h-4 w-4 text-secondary" />
                      <span className="text-sm text-secondary font-medium">{event.date}</span>
                      <Badge variant="outline" className="ml-auto">{event.location}</Badge>
                    </div>
                    <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-smooth">{event.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{event.description}</p>
                    <a
                      href={event.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-primary hover:text-primary/80 font-medium transition-smooth"
                    >
                      Click to know more →
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Our location */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section title */}
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Our Location
              </h2>
            </div>

            {/* Two-column layout with custom widths */}
            <div className="grid grid-cols-1 lg:grid-cols-[40%_60%] gap-8 items-start">
              {/* Left: Office Address */}
              <div className="pr-6">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Office Address
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  <span className="font-semibold">"UNM Foundation"</span><br />
                  104, "ONE42", South Tower,<br />
                  Opp. Jayantilal Park BRTS,<br />
                  Ambli-Bopal Road,<br />
                  Ahmedabad-380058
                </p>
              </div>

              {/* Right: Map */}
              <div className="w-full h-[450px] lg:h-[500px] shadow-lg rounded-2xl overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5432.713544202347!2d72.48975880708966!3d23.033333333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9b6f0e1b5c2d%3A0xabc1234567890!2sUNM%20Foundation!5e0!3m2!1sen!2sin!4v1696254300000!5m2!1sen!2sin"
                  className="border-0 w-full h-full rounded-2xl"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Join our Mission Section */}
        <section className="py-16 lg:py-24 gradient-secondary text-secondary-foreground">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Mission</h2>
            <p className="text-lg text-secondary-foreground/90 mb-8 max-w-2xl mx-auto">
              Be part of creating positive change in communities across India. Together, we can make a lasting impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary-light"
                onClick={() => navigate('/contact')}
              >
                Contact Us
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}