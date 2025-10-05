import { useState } from "react";
import { Heart, Users, Briefcase, Gift, Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/components/ui/use-toast";
import banner from "@/assets/images/banner.png";

export default function Join() {
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
            Join Us
          </h1>
        </div>
      </section>


      {/* Join Us */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8">Join Us</h2>

            <div className="bg-secondary/10 rounded-2xl p-8 mb-8">
              <h3 className="text-2xl font-bold text-primary mb-4">
                Grow, Learn, and Make an Impact with UNM Foundation
              </h3>
              <p className="text-lg text-muted-foreground mb-4">
                Any Organization's growth depends upon the dedication and synergy of its employees with its vision and mission. At UNM Foundation, this is the core philosophy drives all our employee oriented activities and initiatives.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground mb-4">
                Aspects like right exposure, freedom at work and the opportunity to grow at a rapid pace help us to unleash the full potential of our employees. Opportunity to interact and work closely with senior professionals enable the budding talent to get a hands on experience on work related matters. Every employee is entrusted with challenging, interesting and motivating assignments that make them think out of the box.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground mb-4">
                Holistic development of our employees is of prime importance for us. We believe that to perform to perfection one needs to enjoy what he is doing. Hence we create an encouraging and conducive work environment for the employees that keeps the zeal to perform alive.
              </p>
              <h3 className="text-xl font-medium mt-4">
                Submit your resume for future reference to "Jalasmi.hathi@unmfoundation.com"
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      {/* <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-muted-foreground">
              Quick answers to common questions about UNM Foundation
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            <Card className="animate-fade-in-up">
              <CardContent className="p-6">
                <h4 className="text-lg font-semibold text-primary mb-3">How can I volunteer with UNM Foundation?</h4>
                <p className="text-muted-foreground">
                  We welcome volunteers across all our programs. You can apply through our Join Us page or contact us directly to discuss current opportunities that match your skills and interests.
                </p>
              </CardContent>
            </Card>

            <Card className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <CardContent className="p-6">
                <h4 className="text-lg font-semibold text-primary mb-3">What areas do you work in?</h4>
                <p className="text-muted-foreground">
                  Our work spans across health, education, arts & culture, and environmental conservation. We operate in 34 locations across Gujarat, Maharashtra, Uttar Pradesh, and Union Territories.
                </p>
              </CardContent>
            </Card>

            <Card className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <CardContent className="p-6">
                <h4 className="text-lg font-semibold text-primary mb-3">How can organizations partner with you?</h4>
                <p className="text-muted-foreground">
                  We collaborate with corporates, NGOs, educational institutions, and government bodies. Partnership opportunities include program funding, employee volunteering, skill-based support, and joint initiatives.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section> */}
    </div>
  );
}