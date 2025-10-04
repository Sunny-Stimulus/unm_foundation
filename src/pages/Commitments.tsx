import { Heart, GraduationCap, Users, TreePine, Stethoscope, Palette } from "lucide-react";
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
        details: "U.N. Mehta Institute of Cardiology and Research Centre (UNMICRC)– Established in 1996 along with Govt. of Gujarat it has been serving the needy for more than 27 years. Started from 75 IPD beds in 1996 to 1200 IPD beds in 2023 it Conducts 2,50,000+ OPDs, 40,000+ IPDs and 6,000+ surgeries each year. UNMICRC is a state-of-the-art cardiac hospital at Ahmedabad (Gujarat) where treatment is rendered to all patients, particularly the economically disadvantaged. Free Cardiac treatment is provided to Gujarat domiciled children and patients from the weaker strata.Apart from Hospital Infrastructure development, Torrent's Patient Care Initiative Programme at UNMICRC has resulted in effective service delivery and better hospital management."
      },
      {
        name: "REACH - Reach Each Child",
        description: "A Child Healthcare Centric Initiative,",
        details: "In February 2014, a Committee was formed, which decided that the Social initiatives of the group will focus on ‘Child Healthcare’. Twenty leading pediatricians across India were invited for the meeting at Ahmedabad to have understanding of the issues pertaining to the health of children. The meeting was followed by visits by the committee members to some of the leading child care facilities in India and also visited several leading pediatric hospitals in UK, USA and Canada to get a first-hand understanding of the healthcare facilities being provided to the children."
      },
      {
        name: "Activities under REACH",
        description: "Grass Root Interventions",
        details: "",
        listItems: ["Conducting focused camps and spreading awareness about Child healthcare",
          "During outreach activities, children needing clinical interventions are referred to our nearest Pediatric Primary Healthcare Centers (PPHCs) and subsequently, if required, they are then taken to the UNM Children Hospital for secondary and tertiary treatment",
          "Identifying cases of malnutrition & anemia and distributing nutritional supplements and iron supplements",
          "More than 1,990 villages have been covered",
          "1.8 lakh children screened and more than 72,500 children have been successfully brought out of malnutrition and anemia with focused efforts and rigorous monitoring.",
        ]
      },
      {
        name: "Activities under REACH",
        description: "UNM Children Hospital",
        // details: "The Hospital has been operational since 2020 and provides Secondary and Tertiary treatment to children",
        listItems: ["150 beds",
          "3 Operation Theatres",
          "20 bed NICU; 17 bed PICU",
          "2 lacs+ OPDs till now",
          "1900+ Surgeries conducted till now, including complex / critical / life-saving surgeries",
          "NABH Certified Hospital",
          "Patients from different parts of the country are coming for treatment"
        ],
        // details1: "UNM Children Hospital",
        // details2: "Sumangal"
      },
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
        details: "The Foundation advances education through Shardashish schools and the Shiksha Setu programme. Shardashish has built or upgraded 6 schools with 141 classrooms and modern facilities, benefiting 4,000+ students. Shiksha Setu, launched in 2011, reaches 117 schools across 112+ villages, impacting 30,000+ students, 250+ teachers, and 3,500+ parents. The programme focuses on student learning assessment, teacher training, ICT tools, and community awareness. Phase II adds smart digital classrooms, expanded tablet learning, and enhanced soft skills for teachers and parents."
      },
      {
        name: "Shardashish Scholarship Programme",
        // description: "Global educational opportunities for economically challenged students",
        details: "Shardashish Scholarships provide financial aid to students from economically weaker sections of Gujarat aspiring for higher studies in US universities, including $50,000 annual support for select Columbia University courses. The programme aims to open global opportunities for bright, committed students. Scholars are encouraged to push boundaries, excel, and pay it forward by enabling others. Applications, along with required documents, can be emailed to shardashish@unmfoundation.com. The last date for submission is 31st May, 2025.",
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
        details: "Initiated by the UNM Foundation, Abhivyakti showcases original, multi-disciplinary art that has shaped Ahmedabad’s cultural scene and provides a platform for local creative talent. Aiming to make art accessible to all, it breaks the notion that art is a privilege. Covering dance, music, painting, photography, installations, and theatre, Abhivyakti brings international-quality art to the public free of cost, fostering dialogue and creative expression.",
        link2: "https://abhivyaktiart.org/"
      },
      {
        name: "Ujaas",
        // description: "The City Arts Project",
        details: "Ujaas is an initiative by UNM Foundation to support and improve the lives of senior citizens in old age homes. It aims to provide quality care, companionship, emotional support, and recreational activities to ensure dignity and well-being. Since its launch in August 2023, Ujaas has reached 106 old age homes, benefiting over 5,000 residents through 1,000+ visits by more than 1,100 volunteers."
      },
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
        details: "City parks are vital for the social, economic, and physical wellbeing of urban communities, providing spaces for recreation, interaction, and healthy lifestyles. The UNM Foundation, along with LEAF and Ahmedabad Municipal Corporation, launched ‘Pratiti’ to develop and maintain parks across varied neighborhoods. So far, 15 beautifully landscaped gardens in Ahmedabad, Surat, and Daman have been completed, featuring lawns, plants, walkways, exercise equipment, inclusive entrances, and sustainable water systems. Several parks are refurbished, and more are planned, including in underprivileged areas. Additionally, two lakes have been restored to international standards. UNM Foundation is also undertaking the ecological restoration of Shetrunjay Hills, Palitana, preserving an important ecological and religious site."
      },
      {
        name: "Green Cover",
        // description: "Large-scale tree plantation across multiple states",
        details: "Over 43% of SUGEN and 40% of DGEN Plant areas are under green cover, exceeding statutory norms. At SUGEN, over 1,28,000 trees have been planted, including 893 transplanted with a 77% success rate, and mangroves have been planted on 50 hectares near DGEN to prevent soil erosion. Green periphery plantations, rainwater harvesting, and sustainable bio-waste management enhance environmental sustainability. The Urja Dweep residential complex at SUGEN is fully self-energizing using green power and a bio-gas plant. All manufacturing and research facilities are zero-discharge sites, and income from plantations benefits local communities. Additional infrastructure upgrades are planned at Dahej, Vizag, and Pithampur locations."
      }
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
              Torrent Group concentrates its efforts diligently in the areas of:
            Community Health care, Sanitation and Hygiene ,Education and Knowledge Enhancement, Arts, Culture and Wellbeing, Ecology
            The CSR activities are mainly confined at the places where Group’s headquarters are situated and locations in and around its operations so that the twin objectives of service to the neighbourhood & the community along with involving the individual & collective will and efforts of the Torrent Family can be achieved.</p>
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
                <Stethoscope className="h-8 w-8" />
              </div>
              <div className="text-3xl font-bold text-primary mb-2">6.2L+</div>
              <div className="text-muted-foreground font-medium">OPDs Conducted</div>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-600 mb-4">
                <GraduationCap className="h-8 w-8" />
              </div>
              <div className="text-3xl font-bold text-primary mb-2">117+</div>
              <div className="text-muted-foreground font-medium">Schools Covered</div>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-purple-100 text-purple-600 mb-4">
                <Palette className="h-8 w-8" />
              </div>
              <div className="text-3xl font-bold text-primary mb-2">700+</div>
              <div className="text-muted-foreground font-medium">Artists Supported</div>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mb-4">
                <TreePine className="h-8 w-8" />
              </div>
              <div className="text-3xl font-bold text-primary mb-2">15</div>
              <div className="text-muted-foreground font-medium">Gardens Restored</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}