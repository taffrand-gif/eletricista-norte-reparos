import { Link } from 'wouter';
import { SERVICES, SERVICE_CATEGORIES } from '../data/servicesData';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Phone, MessageCircle, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { ACTIVE_CONFIG } from '@/../../shared/serviceConfig';
export default function Services() {
 const [selectedCategory, setSelectedCategory] = useState<string>('Todos');
 const filteredServices = selectedCategory === 'Todos'
 ? SERVICES
 : SERVICES.filter(service => 
 service.title.toLowerCase().includes(selectedCategory.toLowerCase()) ||
 service.description.toLowerCase().includes(selectedCategory.toLowerCase())
 );
 const phoneDisplay = ACTIVE_CONFIG.phone.replace('+351', '');
 const phoneLink = ACTIVE_CONFIG.phone;
 const whatsappLink = `https://wa.me/${ACTIVE_CONFIG.whatsappNumber}?text=${encodeURIComponent("Olá, preciso de um eletricista em Trás-os-Montes. Podem dar-me um orçamento?")}`;
 return (
 <div className="min-h-screen">
 {/* Hero Section */}
 <section className="bg-gradient-to-br from-red-600 to-red-700 text-white py-20">
 <div className="container text-center">
 <h1 className="text-4xl md:text-5xl font-bold mb-6">
 Nossos Serviços
 </h1>
 <p className="text-xl text-red-100 max-w-3xl mx-auto mb-8">
 Soluções completas em Trás-os-Montes. Equipa qualificada, equipamento profissional e garantia de qualidade.
 </p>
 <div className="flex flex-wrap justify-center gap-4">
 <a href={`tel:${phoneLink}`}>
 <Button size="lg" className="bg-white text-red-600 hover:bg-red-50">
 <Phone className="mr-2 h-5 w-5" />
 {phoneDisplay}
 </Button>
 </a>
 <a 
 href={`${whatsappLink}?text=Olá!%20Preciso%20de%20um%20orçamento`}
 target="_blank"
 rel="noopener noreferrer"
 >
 <Button size="lg" variant="outline" className="bg-green-700 text-white border-green-700 hover:bg-green-800">
 <MessageCircle className="mr-2 h-5 w-5" />
 WhatsApp
 </Button>
 </a>
 </div>
 </div>
 </section>
 {/* Filter Categories */}
 <section className="py-8 border-b">
 <div className="container">
 <div className="flex flex-wrap gap-2 justify-center">
 <Button
 variant={selectedCategory === 'Todos' ? 'default' : 'outline'}
 onClick={() => setSelectedCategory('Todos')}
 className={selectedCategory === 'Todos' ? 'bg-red-600 hover:bg-red-700' : ''}
 >
 Todos
 </Button>
 {SERVICE_CATEGORIES.map((category) => (
 <Button
 key={category}
 variant={selectedCategory === category ? 'default' : 'outline'}
 onClick={() => setSelectedCategory(category)}
 className={selectedCategory === category ? 'bg-red-600 hover:bg-red-700' : ''}
 >
 {category}
 </Button>
 ))}
 </div>
 </div>
 </section>
 {/* Services Grid */}
 <section className="py-16">
 <div className="container">
 <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
 {filteredServices.map((service) => (
 <Card key={service.id} className="hover:shadow-xl transition-all duration-300 group">
 <CardHeader>
 <div className="flex items-start justify-between mb-4">
 <span className="text-5xl group-hover:scale-110 transition-transform">
 {service.icon}
 </span>
 <div className="text-right">
 <p className="text-sm text-muted-foreground">A partir de</p>
 <p className="text-2xl font-bold text-red-600">{service.price}</p>
 </div>
 </div>
 <CardTitle className="text-2xl group-hover:text-red-600 transition-colors">
 {service.title}
 </CardTitle>
 <CardDescription className="text-base">
 {service.description}
 </CardDescription>
 </CardHeader>
 <CardContent>
 <div className="space-y-3">
 <Link href={`/servicos/${service.slug}`}>
 <Button className="w-full bg-red-600 hover:bg-red-700 group">
 Saber Mais
 <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
 </Button>
 </Link>
 <div className="flex gap-2">
 <a href={`tel:${phoneLink}`} className="flex-1">
 <Button variant="outline" className="w-full">
 <Phone className="mr-2 h-4 w-4" />
 Ligar
 </Button>
 </a>
 <a 
 href={`${whatsappLink}?text=${encodeURIComponent(`Olá! Preciso de ${service.title}`)}`}
 target="_blank"
 rel="noopener noreferrer"
 className="flex-1"
 >
 <Button variant="outline" className="w-full bg-green-50 hover:bg-green-100">
 <MessageCircle className="mr-2 h-4 w-4 text-green-600" />
 WhatsApp
 </Button>
 </a>
 </div>
 </div>
 </CardContent>
 </Card>
 ))}
 </div>
 {filteredServices.length === 0 && (
 <div className="text-center py-12">
 <p className="text-xl text-muted-foreground">
 Nenhum serviço encontrado nesta categoria.
 </p>
 </div>
 )}
 </div>
 </section>
 {/* CTA Section */}
 <section className="bg-gradient-to-br from-red-50 to-red-100 py-16">
 <div className="container text-center">
 <h2 className="text-3xl font-bold mb-4">
 Não encontrou o que procura?
 </h2>
 <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
 Contacte-nos! Temos soluções personalizadas para qualquer problema.
 </p>
 <div className="flex flex-wrap justify-center gap-4">
 <a href={`tel:${phoneLink}`}>
 <Button size="lg" className="bg-red-600 hover:bg-red-700">
 <Phone className="mr-2 h-5 w-5" />
 Ligar Agora
 </Button>
 </a>
 <Link href="/#contactos">
 <Button size="lg" variant="outline">
 Formulário de Contacto
 </Button>
 </Link>
 </div>
 </div>
 </section>
 </div>
 );
}
