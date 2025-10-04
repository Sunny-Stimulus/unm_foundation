import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/components/ui/use-toast";
import banner from "@/assets/images/Contact_banner.jpg";
import emailjs from "@emailjs/browser";

const contactInfo = [
  {
    icon: MapPin,
    title: "Office Address",
    details: [
      '"UNM Foundation",',
      "104,South Tower, \"ONE42\",",
      "Ambli-Bopal Road,",
      "Ahmedabad-380058",
      "India"
    ],
    color: "bg-blue-500"
  },
  {
    icon: Phone,
    title: "Phone",
    details: ["+91 7926628000"],
    color: "bg-green-500"
  },
  {
    icon: Mail,
    title: "Email",
    details: ["jyuthika@unmfoundation.com"],
    color: "bg-purple-500"
  },
];

export default function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    console.log('ENV CHECK:', serviceID, templateID, publicKey);

    const templateParams = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      subject: formData.subject,
      message: formData.message,
      submission_date: new Date().toLocaleString(),
    };

    emailjs
      .send(serviceID, templateID, templateParams, publicKey)
      .then(() => {
        toast({
          title: "Message sent successfully!",
          description: "We'll get back to you within 24 hours.",
        });

        // Reset form state------
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      })
      .catch((error) => {
        console.error("EmailJS error:", error);
        toast({
          title: "Failed to send message",
          description: "Please try again later.",
          variant: "destructive",
        });
      });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 text-white flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${banner})` }}
      >
        {/* Overlay for better text visibility */}
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mt-4 animate-fade-in-down">
            Contact Us
          </h1>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Get In Touch</h2>
          </div>
          <div className="flex flex-wrap justify-center gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <Card
                key={info.title}
                className="text-center hover:shadow-lg transition-smooth animate-fade-in-up w-72 flex flex-col"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-4 flex flex-col justify-start h-full">
                  <div className="flex flex-col items-center">
                    <div className={`inline-flex items-center justify-center w-14 h-14 rounded-full ${info.color} text-white mb-4`}>
                      <info.icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-lg font-semibold mb-3 text-primary">{info.title}</h3>
                    <div className="space-y-1 text-sm text-muted-foreground leading-relaxed">
                      {info.details.map((detail, i) => (
                        <p key={i}>{detail}</p>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      {/* Contact Form & Map */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Contact Us</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Have a question or want to discuss a partnership? Fill out the form or check our location on the map.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-12">
            {/* Contact Form */}
            <div className="flex-1 animate-fade-in-up">
              <Card className="h-full">
                <CardContent className="p-8">
                  <h3 className="text-2xl md:text-3xl font-bold text-primary mb-6">Send us a Message</h3>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => handleInputChange('name', e.target.value)}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="subject">Subject *</Label>
                        <Select value={formData.subject} onValueChange={(value) => handleInputChange('subject', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a subject" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="general">General Inquiry</SelectItem>
                            <SelectItem value="partnership">Partnership Opportunity</SelectItem>
                            <SelectItem value="volunteer">Volunteer Interest</SelectItem>
                            <SelectItem value="donation">Donation Query</SelectItem>
                            <SelectItem value="media">Media & Press</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => handleInputChange('message', e.target.value)}
                        placeholder="Please share your message, questions, or how you'd like to get involved..."
                        className="min-h-32"
                        required
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full md:w-auto">
                      Send Message
                      <Send className="ml-2 h-4 w-4" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Map */}
            <div className="flex-1 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <Card className="h-full overflow-hidden">
                <CardContent className="p-0 h-full">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5432.713544202347!2d72.48975880708966!3d23.033333333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9b6f0e1b5c2d%3A0xabc1234567890!2sUNM%20Foundation!5e0!3m2!1sen!2sin!4v1696254300000!5m2!1sen!2sin"
                    className="w-full h-full border-0 rounded-2xl shadow-lg"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}