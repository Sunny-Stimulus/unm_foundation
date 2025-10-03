import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Camera, Users, GraduationCap, Heart, TreePine } from "lucide-react";
import banner from "@/assets/images/courosal2.jpg"

import health1 from "@/assets/images/gallery/health1.png";
import health2 from "@/assets/images/gallery/health2.jpg";
import health3 from "@/assets/images/gallery/health3.png";
import ecology1 from "@/assets/images/gallery/ecology1.png";
import ecology2 from "@/assets/images/gallery/ecology2.png";
import edu1 from "@/assets/images/gallery/education1.jpg";
import edu2 from "@/assets/images/gallery/education2.jpg";
import Photo4 from "@/assets/images/gallery/Photo4.png";
// import Photo5 from "@/assets/images/gallery/Photo5.png";
import Photo6 from "@/assets/images/gallery/Photo6.png";
import art1 from "@/assets/images/gallery/art1.jpg";
import art2 from "@/assets/images/gallery/art2.jpg";

const galleryCategories = [
  { id: "all", name: "All", icon: Camera },
  { id: "health", name: "Health", icon: Heart },
  { id: "education", name: "Education", icon: GraduationCap },
  { id: "arts", name: "Arts & Culture", icon: Users },
  { id: "environment", name: "Environment", icon: TreePine },
];

const galleryItems = [
  {
    id: 1,
    title: "UNM Children's Hospital",
    category: "health",
    description: "Hospitals providing advanced pediatric care to underprivileged children",
    image: health1,
  },
  {
    id: 2,
    title: "UNMICRC",
    category: "health",
    description: "UNMICRC: Leading cardiac care since 1996, free for the underprivileged.",
    image: health2,
  },
  {
    id: 3,
    title: "REACH Health Camps",
    category: "health",
    description: "Modern healthcare access for underserved communities",
    image: health3,
  },
  {
    id: 4,
    title: "Other health camp",
    category: "health",
    description: "Children health camp at UNM Children's Hospital",
    image: Photo4,
  },
  {
    id: 5,
    title: "Ujaas",
    category: "arts",
    description: "Art and cultural festival for community engagement",
    image: art2,
  },
  {
    id: 6,
    title: "Abhivyakti Art Program",
    category: "arts",
    description: "Abhivyakti: Empowering underprivileged youth through art",
    image: art1,
  },
  {
    id: 7,
    title: "Shikshasetu",
    category: "education",
    description: "Empowering educators with modern teaching methods",
    image: edu1,
  },
  {
    id: 8,
    title: "Pratiti",
    category: "environment",
    description: "Enhancing urban green spaces for community wellbeing",
    image: ecology1,
  },
  {
    id: 9,
    title: "Green Cover",
    category: "environment",
    description: "Green cover and ecological restoration initiatives",
    image: ecology2,
  },
  {
    id: 10,
    title: "Shardashish Scholarship",
    category: "education",
    description: "Empowering students from underprivileged backgrounds",
    image: edu2,
  },
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredItems = activeCategory === "all"
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory);

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
            Gallery
          </h1>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {galleryCategories.map((category) => (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? "default" : "outline"}
                onClick={() => setActiveCategory(category.id)}
                className="flex items-center gap-2"
              >
                <category.icon className="h-4 w-4" />
                {category.name}
              </Button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item, index) => (
              <Card
                key={item.id}
                className="group overflow-hidden hover:shadow-lg transition-smooth animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-smooth"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-primary/90 text-primary-foreground">
                      {galleryCategories.find(cat => cat.id === item.category)?.name}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-smooth">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Our Visual Story</h2>
            <p className="text-lg text-muted-foreground">
              Every image tells a story of hope, transformation, and community impact
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-muted-foreground">Photos Captured</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">34</div>
              <div className="text-muted-foreground">Locations Documented</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">15</div>
              <div className="text-muted-foreground">Programs Featured</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">10K+</div>
              <div className="text-muted-foreground">Lives Captured</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}