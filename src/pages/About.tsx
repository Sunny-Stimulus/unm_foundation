import { Heart, Target, Eye, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import banner from "@/assets/images/banner.png";
import structure from "@/assets/images/UNMFoundationStructure.jpg";
import founder from "@/assets/images/unm-founder.jpg";

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 text-white flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${banner})` }}
      >
        {/* Overlay for better text visibility */}
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in-down">
            About UNM Foundation
          </h1>
        </div>
      </section>


      {/* Our Story Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 text-center">Our Story</h2>

            <div className="prose prose-lg max-w-none text-muted-foreground">
              <h3>UNM Foundation, named after Shri UN Mehta, the Founder of Torrent Group, is a non profit organisation. The UNM Foundation carries out Social and Philanthropic activities, with focus on Community Healthcare, Education & Knowledge Enhancement, Arts & Culture and Ecology. UNM Foundation strives to ensure that the aggregate impact of its initiatives bring about lasting improvements in society.</h3>
              <p className="text-lg text-black leading-relaxed mb-6 mt-8">
                Key Priorities of UNM Foundation
              </p>
              <li>Community Healthcare
                REACH – Reach Each Child program (details appended hereunder).
                UN Mehta Institute of Cardiology and Research Centre – a 1200 bed state-of-the-art cardiac facility; established in 1996 with support of Govt. of Gujarat</li>
              <li>Education & Knowledge Enhancement:
                Shikshasetu – an initiative to enhance learning of school children and also upgrade infrastructure in identified schools. A total of 117 schools providing education to more than 30,000 students annually are covered under this initiative.
              </li>
              <li>
                Arts & Culture:
                Abhivyakti–a unique city arts project that promotes Visual Arts, Theatre, Dance & Music. In the recently concluded 6th edition, over 3.24 lac people visited and enjoyed the 140 Performances and 47 Visual Art works presented by 96 artists.
              </li>
              <li>
                Ecology:
                Pratiti – an initiative to restore old and create new Gardens and Lakes. So far, a total of 15 Gardens and 2 Lakes across 2 cities have been restored / built at par with international standards. Reflecting their popularity within the community, the Parks and Lakes receive annual footfalls of more than 56 lacs.
                Ecological restoration of Shetrunjay Hills, Palitana (Gujarat). As part of this challenging project, UNM Foundation endeavours to restore the Shetrunjay Hills, an extremely important ecological and religious site, to its lost glory.
              </li>
              <p className="text-lg text-black leading-relaxed mb-6 mt-4">
                By constantly refining its approach, the UNM Foundation strives to ensure that the aggregate power of its initiatives bring about lasting improvements in society.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Image Section */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="relative rounded-lg overflow-hidden shadow-lg">
              <img
                src={structure}
                alt="UNM Foundation Structure"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="text-center mt-6">
              <a
                href="https://unmfoundation.com/tpl/r/unm/site/home"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-primary hover:text-primary/80 font-medium text-lg transition-smooth"
              >
                Shardashish Scholarship is live, Click here to apply
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">What we Stand for</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            <Card className="text-center animate-fade-in-up">
              <CardContent className="p-12">
                {/* <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-red-100 text-red-600 mb-6">
                  <Heart className="h-10 w-10" />
                </div> */}
                <h3 className="text-2xl font-semibold mb-4">Our Philosophy</h3>
                <p className="text-muted-foreground text-lg">
                  "Think of others also, when you think about yourself". With this philosophy of Founder Chairman Shri U. N. Mehta, Torrent Group, makes concentrated efforts through its CSR activities to positively impact the society. Torrent strongly believes that the sustainability of any business is directly related to the well-being and development of the society in which it is embedded.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <CardContent className="p-12">
                {/* <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-blue-100 text-blue-600 mb-6">
                  <Target className="h-10 w-10" />
                </div> */}
                <h3 className="text-2xl font-semibold mb-4">Our Guiding Principle</h3>
                <p className="text-muted-foreground text-lg">
                  The Group channelizes its CSR activities in light of its guiding principle as enumerated by its founder - Shri U. N. Mehta: "Giving back to the society, for all the years of care, support and nurturance that is being bestowed upon the organization."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Shri U N Mehta section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Shri U N Mehta - Founder</h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
              {/* Image Column */}
              <div className="lg:col-span-1">
                <div className="bg-white rounded-lg shadow-md p-6 sticky top-8">
                  <img
                    src={founder}
                    alt="Person Name"
                    className="w-full h-full rounded-lg"
                  />
                </div>
              </div>

              {/* Content Column */}
              <div className="lg:col-span-2 space-y-6 text-justify">

                <p className="leading-relaxed">
                  Shri Uttambhai Nathalal Mehta. Words alone will not suffice to describe the Founder- Chairman of the Torrent Group, who was a great businessman, a philanthropist and above all, a noble human being. For this moving spirit behind the Rs. 41,000 Crore Torrent Group, the immense contribution to the corporate landscape of Gujarat was a culmination of years of grit, perseverance and hard work.
                </p>
                <p>
                  With his Gandhian approach to business management, he was a rare potent mix of empathy and benevolence that blurs the horizon between business and community service.
                </p>
                <p>
                  The journey of Shri U. N. Mehta, from being a medical representative with Sandoz, back in the 1940s, to laying the foundation of a diversified conglomerate, is a long yet rewarding one. Understanding the pulse of the medical fraternity, he identified and realized the ways in which they could be served best. He pioneered the concept of niche marketing at a time when others focused on the masses.
                </p>
                <p>
                  Despite the initial failures and setbacks, he never let his morale down and persisted in his efforts. His philosophy in life was "It is pardonable to aim high and miss, but it is not pardonable to aim low."
                </p>
                <p>
                  Shri U. N. Mehta was one of those rare corporate leaders in Gujarat, who also understood the importance of having a good interface between business and community service. Perhaps that explains Shri Mehta’s endeavours to establish and maintain robust relationship with the society.
                </p>
                <p>
                  Besides the Torrent Group, he is also the guiding force behind many institutions that works for the betterment of the society at large.
                  Conferred with numerous felicitations, including the ‘Business Man of the Year’ award in 1996-97, Shri Mehta is a personality that is nothing short of inspirational.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}