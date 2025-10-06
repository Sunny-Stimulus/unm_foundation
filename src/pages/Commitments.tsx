import { Heart, GraduationCap, Users, TreePine, Stethoscope, Palette,House } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import banner from "@/assets/images/UN_Mehta_Institute_of_Cardiology.jpg";

const commitments = [
  {
    category: "Community Health Care",
    icon: Heart,
    color: "bg-red-500",
    initiatives: [
      {
        name: "UNMICRC",
        description: "U.N. Mehta Institute of Cardiology and Research Centre",
        details: "UNMICRC in Ahmedabad is a 1,251-bed cardiac hospital offering free, world-class treatment to economically weaker sections, with 95,000+ surgeries and global recognition for excellence. Sumangal in Surat is a multidisciplinary clinic providing comprehensive care across 15 specialties to over 1.4 lakh patients. Sankalan in Ahmedabad is a Neuro Rehabilitation Centre combining advanced diagnostics, robotics, and therapy to restore independence and confidence in patients recovering from neurological conditions."
      },
      {
        name: "REACH - Reach Each Child",
        description: "A Child Healthcare Centric Initiative,",
        details: "The UNM Children Hospital in Kamrej, Surat, is a 150-bed hub providing advanced paediatric and surgical care, having served over 1.8 lakh patients and conducted 4,300+ surgeries. It is supported by 17 Paediatric Primary Healthcare Centres (PPHCs) across Gujarat and Uttar Pradesh that have facilitated 7 lakh+ consultations, delivering free medical care, tests, and medicines to rural communities. Village-level screening camps have identified and treated over 1.8 lakh children for malnutrition and anaemia, with a 70% recovery rate. Awareness drives on nutrition and hygiene have reached 1 lakh+ beneficiaries, while the Muskaan menstrual wellness initiative has empowered 1 lakh+ adolescent girls in 1,700+ villages through health education and eco-friendly sanitary pad distribution."
      },
      // {
      //   name: "Activities under REACH",
      //   description: "Grass Root Interventions",
      //   details: "",
      //   listItems: ["Conducting focused camps and spreading awareness about Child healthcare",
      //     "During outreach activities, children needing clinical interventions are referred to our nearest Pediatric Primary Healthcare Centers (PPHCs) and subsequently, if required, they are then taken to the UNM Children Hospital for secondary and tertiary treatment",
      //     "Identifying cases of malnutrition & anemia and distributing nutritional supplements and iron supplements",
      //     "More than 1,990 villages have been covered",
      //     "1.8 lakh children screened and more than 72,500 children have been successfully brought out of malnutrition and anemia with focused efforts and rigorous monitoring.",
      //   ]
      // },
      // {
      //   name: "Activities under REACH",
      //   description: "UNM Children Hospital",
      //   // details: "The Hospital has been operational since 2020 and provides Secondary and Tertiary treatment to children",
      //   listItems: ["150 beds",
      //     "3 Operation Theatres",
      //     "20 bed NICU; 17 bed PICU",
      //     "2 lacs+ OPDs till now",
      //     "1900+ Surgeries conducted till now, including complex / critical / life-saving surgeries",
      //     "NABH Certified Hospital",
      //     "Patients from different parts of the country are coming for treatment"
      //   ],
      //   // details1: "UNM Children Hospital",
      //   // details2: "Sumangal"
      // },
    ]
  },
  {
    category: "Education",
    icon: GraduationCap,
    color: "bg-green-500",
    initiatives: [
      {
        name: "Shikshasetu",
        // description: "Comprehensive education program for rural and urban communities",
        details: "UNM Foundation’s education initiatives under Shiksha Setu aim to enhance learning quality, reduce educational gaps, and build employability for underserved communities. The Learning Enhancement Programme has benefitted 29,000+ students across 117 rural schools through digital and remedial learning, while Balvatika supports early education for 1,100+ children in 15 schools. SuGanitam promotes hands-on math learning in 25 schools, and the Second Chance Programme helps school dropouts complete Class 10 through NIOS. The initiative now targets 35,000+ students in 150+ government schools to ensure 100% school completion."
      },
      {
        name: "Shardashish Scholarship Programme",
        // description: "Global educational opportunities for economically challenged students",
        details: "The Shardashish School Initiative develops and upgrades school infrastructure to provide safe, modern learning environments. Seven schools serving around 5,000 students have been enhanced, including new buildings, labs, libraries, and playgrounds. Notable projects include campuses in Chhapi, Indrad, Memadpur, Akhakhol, and Sabarmati. Additionally, the Shardashish Scholarship supports over 55 students pursuing higher education in the U.S. with $10,000 each.",
        link: "https://unmfoundation.com/tpl/r/unm/site/home"
      }
    ]
  },
  {
    category: "Art, Culture and Wellbeing",
    icon: Users,
    color: "bg-blue-500",
    initiatives: [
      {
        name: "Abhivyakti",
        // description: "Garden and lake restoration initiative",
        details: "The Abhivyakti City Arts Project makes art accessible to all, uniting artists and communities through free, inclusive creative experiences. Launched in 2018, it showcases emerging and established artists across dance, music, theatre, and visual arts. Selected projects receive mentorship, developmental support, and financial assistance before being presented at a 15-day annual event in Ahmedabad. As of November 2024, over 600 artists have participated in 400+ performances, reaching more than 6 lakh attendees.",
        link2: "https://abhivyaktiart.org/"
      },
      // {
      //   name: "Ujaas",
      //   // description: "The City Arts Project",
      //   details: "Ujaas is an initiative by UNM Foundation to support and improve the lives of senior citizens in old age homes. It aims to provide quality care, companionship, emotional support, and recreational activities to ensure dignity and well-being. Since its launch in August 2023, Ujaas has reached 106 old age homes, benefiting over 5,000 residents through 1,000+ visits by more than 1,100 volunteers."
      // },
    ]
  },
  {
    category: "Ecology",
    icon: TreePine,
    color: "bg-emerald-500",
    initiatives: [
      {
        name: "Pratiti",
        // description: "Shetrunjay Hills, Palitana restoration project",
        details: "The Pratiti Programme transforms neglected urban parks and public spaces into sustainable ecological zones for recreation, play, cultural events, and reflection. Initiated in 1995 with Parimal Garden and formalized in 2016 as a PPP, it now manages 8.44 lakh sq. metres, including 17 parks, 2 lakes, an urban forest, and Shentrunjay Hills afforestation, benefiting over 60 lakh people annually. Key redevelopments include parks in Ahmedabad, Surat, and Daman. The initiative is now expanding to Mumbai. The programme also enhances biodiversity, air quality, carbon absorption, and rainwater collection.",
        details2:"IMPACT",
        listItems: [
          "8L + OPDs conducted",
          "117+ schools covered",
          "600+ artists supported",
          "844000 square metres green area restored"]
      },
      // {
      //   name: "Green Cover",
      //   // description: "Large-scale tree plantation across multiple states",
      //   details: "Over 43% of SUGEN and 40% of DGEN Plant areas are under green cover, exceeding statutory norms. At SUGEN, over 1,28,000 trees have been planted, including 893 transplanted with a 77% success rate, and mangroves have been planted on 50 hectares near DGEN to prevent soil erosion. Green periphery plantations, rainwater harvesting, and sustainable bio-waste management enhance environmental sustainability. The Urja Dweep residential complex at SUGEN is fully self-energizing using green power and a bio-gas plant. All manufacturing and research facilities are zero-discharge sites, and income from plantations benefits local communities. Additional infrastructure upgrades are planned at Dahej, Vizag, and Pithampur locations."
      // }
    ]
  }
];

export default function Commitments() {
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
            Our Commitments
          </h1>
        </div>
      </section>

      {/* Commitments Overview */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Our Commitments</h2>
            <p>
              Inspired by Shri U. N. Mehta and Shrimati Shardaben Mehta's strong belief in giving back to society, the Foundation builds on their legacy of meaningful contributions in education, healthcare, and well – being of society. The Foundation is currently active in Gujarat, Uttar Pradesh, and Maharashtra, positively impacting the lives of over 10 million people. With a clear vision and committed action, UNM aims to strengthen its impact in the years ahead.
            </p>
          </div>

          <div className="space-y-16">
            {commitments.map((commitment, categoryIndex) => (
              <div key={commitment.category} className={`animate-fade-in-up`} style={{ animationDelay: `${categoryIndex * 0.2}s` }}>
                {/* Category Header */}
                <div className="flex items-center justify-center mb-12">
                  <div className={`inline-flex items-center ${commitment.color} text-white px-6 py-3 rounded-full`}>
                    <commitment.icon className="h-6 w-6 mr-3" />
                    <h3 className="text-xl font-semibold">{commitment.category}</h3>
                  </div>
                </div>

                {/* Initiatives Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {commitment.initiatives.map((initiative, initiativeIndex) => (
                    <Card key={initiative.name} className="h-full hover:shadow-lg transition-smooth" style={{ animationDelay: `${(categoryIndex * 0.2) + (initiativeIndex * 0.1)}s` }}>
                      <CardContent className="p-8">
                        <div className="flex items-start justify-between mb-4">
                          <h4 className="text-2xl font-bold text-primary">{initiative.name}</h4>
                          <Badge variant="outline" className="ml-4 shrink-0">
                            {commitment.category}
                          </Badge>
                        </div>

                        <p className="text-lg text-foreground mb-6 font-medium">
                          {initiative.description}
                        </p>

                        <p className="text-muted-foreground leading-relaxed">
                          {initiative.details}
                        </p>
                        
                        {initiative.listItems && Array.isArray(initiative.listItems) && (
                          <ul className="list-disc list-inside mt-4 space-y-2">
                            {initiative.details2 && (
                              <h5 className="text-lg text-primary mb-2">{initiative.details2}:</h5>
                            )}
                            {initiative.listItems.map((item: string, index: number) => (
                              <li key={index} className="text-muted-foreground">
                                {item}
                              </li>
                            ))}
                          </ul>
                        )} <br />

                        {initiative.link && (
                          <div className="mt-6">
                            <a
                              href={initiative.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center text-primary hover:text-primary/80 font-medium transition-smooth"
                            >
                              Click here to apply →
                            </a>
                          </div>
                        )}
                        {initiative.link2 && (
                          <div className="mt-6">
                            <a
                              href={initiative.link2}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center text-primary hover:text-primary/80 font-medium transition-smooth"
                            >
                              To read More →
                            </a>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Impact Numbers */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Our Impact</h2>
            {/* <p className="text-lg text-muted-foreground">Measurable change across all our focus areas</p> */}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-100 text-red-600 mb-4">
                <House className="h-8 w-8" />
              </div>
              <div className="text-3xl font-bold text-primary mb-2">3762+</div>
              <div className="text-muted-foreground font-medium">Villages served</div>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-600 mb-4">
                <GraduationCap className="h-8 w-8" />
              </div>
              <div className="text-3xl font-bold text-primary mb-2">164+</div>
              <div className="text-muted-foreground font-medium">Schools Covered</div>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-purple-100 text-purple-600 mb-4">
                <Palette className="h-8 w-8" />
              </div>
              <div className="text-3xl font-bold text-primary mb-2">600+</div>
              <div className="text-muted-foreground font-medium">Artists Supported</div>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mb-4">
                <TreePine className="h-8 w-8" />
              </div>
              <div className="text-3xl font-bold text-primary mb-2">844000sqft</div>
              <div className="text-muted-foreground font-medium">Garden Area Restored</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}