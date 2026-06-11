import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ACTIVE_CONFIG } from "../../../shared/serviceConfig";
import { useSEO } from "@/hooks/useSEO";
import { trpc } from "@/lib/trpc";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { NORTE_REPAROS_TESTIMONIALS, _TESTIMONIALS, type Testimonial } from "@/data/testimonialsData";
import { CheckCircle } from "lucide-react";
export default function Testemunhos() {
 const config = ACTIVE_CONFIG;
 const [showForm, setShowForm] = useState(false);
 const [showSuccess, setShowSuccess] = useState(false);
 const [rating, setRating] = useState(0);
 const [hoverRating, setHoverRating] = useState(0);
 const [formData, setFormData] = useState({
 name: "",
 email: "",
 city: "",
 comment: "",
 serviceType: ""});
 const { data: dbReviews = [], isLoading, refetch } = trpc.reviews.list.useQuery();
 
 // Combiner témoignages statiques + base de données
 const is = config.type === 'electricite';
 const staticTestimonials = is ? _TESTIMONIALS : NORTE_REPAROS_TESTIMONIALS;
 
 // Convertir témoignages statiques au format reviews
 const staticReviews = staticTestimonials.map(t => ({
 id: `static-${t.id}`,
 name: t.name,
 city: t.city,
 rating: t.rating,
 comment: t.text,
 serviceType: t.service,
 createdAt: new Date(t.date),
 verified: t.verified
 }));
 
 // Combiner et trier par date
 const reviews = [...staticReviews, ...dbReviews].sort((a, b) => 
 new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
 );
 const createReview = trpc.reviews.create.useMutation({
 onSuccess: () => {
 setShowSuccess(true);
 setShowForm(false);
 setFormData({ name: "", email: "", city: "", comment: "", serviceType: "" });
 setRating(0);
 setTimeout(() => setShowSuccess(false), 5000);
 refetch();
 }});
 useSEO({
 title: `Testemunhos de Clientes | ${config.businessName}`,
 description: `Veja o que os nossos clientes dizem sobre os serviços de ${config.name.toLowerCase()}. Centenas de clientes satisfeitos em todo o distrito de Bragança.`,
 canonical: `https://${config.domain}/testemunhos`});
 const handleSubmit = (e: React.FormEvent) => {
 e.preventDefault();
 if (rating === 0) {
 alert("Por favor, selecione uma classificação");
 return;
 }
 createReview.mutate({
 ...formData,
 rating});
 };
 const averageRating = reviews.length > 0 
 ? (reviews.reduce((acc, r) => acc + r.rating, 0) / reviews.length).toFixed(1)
 : "0.0";
 const StarRating = ({ rating: r, interactive = false, onRate }: { rating: number; interactive?: boolean; onRate?: (r: number) => void }) => {
 return (
 <div className="flex gap-1">
 {[1, 2, 3, 4, 5].map((star) => (
 <button
 key={star}
 type="button"
 onClick={() => interactive && onRate && onRate(star)}
 onMouseEnter={() => interactive && setHoverRating(star)}
 onMouseLeave={() => interactive && setHoverRating(0)}
 className={`text-3xl ${interactive ? 'cursor-pointer hover:scale-110 transition-transform' : ''}`}
 disabled={!interactive}
 >
 <span className={star <= (interactive ? (hoverRating || r) : r) ? 'text-yellow-400' : 'text-gray-300'}>
 ★
 </span>
 </button>
 ))}
 </div>
 );
 };
 return (
 <>
 <Header />
{/* Hero Section */}
 <section className="bg-gradient-to-r from-red-50 to-red-100 py-16">
 <div className="container">
 <div className="max-w-4xl mx-auto text-center">
 <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
 Testemunhos de Clientes
 </h1>
 <p className="text-xl text-gray-700 mb-8">
 Veja o que os nossos clientes dizem sobre os nossos serviços
 </p>
 
 {/* Rating Summary */}
 <div className="bg-white rounded-lg p-6 inline-block shadow-md">
 <div className="flex items-center gap-4">
 <div className="text-5xl font-bold text-red-600">{averageRating}</div>
 <div className="text-left">
 <div className="flex gap-1 mb-1">
 {[...Array(5)].map((_, i) => (
 <span key={i} className="text-yellow-400 text-2xl">★</span>
 ))}
 </div>
 <p className="text-gray-600">Baseado em {reviews.length} avaliações</p>
 </div>
 </div>
 </div>
 <div className="mt-8">
 <Button
 onClick={() => setShowForm(!showForm)}
 className="bg-red-600 hover:bg-red-700 text-lg px-8 py-6"
 >
 {showForm ? "Cancelar" : "Deixar Avaliação"}
 </Button>
 </div>
 </div>
 </div>
 </section>
 {/* Success Message */}
 {showSuccess && (
 <div className="container max-w-3xl mt-8">
 <div className="bg-green-50 border border-green-200 text-green-800 px-6 py-4 rounded-lg">
 <h3 className="font-semibold">Obrigado pela sua avaliação!</h3>
 <p>O seu testemunho será publicado após aprovação.</p>
 </div>
 </div>
 )}
 {/* Review Form */}
 {showForm && (
 <section className="py-8 bg-white">
 <div className="container max-w-3xl">
 <Card>
 <CardHeader>
 <CardTitle>Deixe a sua Avaliação</CardTitle>
 </CardHeader>
 <CardContent>
 <form onSubmit={handleSubmit} className="space-y-6">
 <div>
 <Label>Classificação *</Label>
 <StarRating rating={rating} interactive onRate={setRating} />
 </div>
 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
 <div>
 <Label htmlFor="name">Nome *</Label>
 <Input
 id="name"
 value={formData.name}
 onChange={(e) => setFormData({ ...formData, name: e.target.value })}
 required
 />
 </div>
 <div>
 <Label htmlFor="email">Email (opcional)</Label>
 <Input
 id="email"
 type="email"
 value={formData.email}
 onChange={(e) => setFormData({ ...formData, email: e.target.value })}
 />
 </div>
 </div>
 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
 <div>
 <Label htmlFor="city">Cidade *</Label>
 <Input
 id="city"
 value={formData.city}
 onChange={(e) => setFormData({ ...formData, city: e.target.value })}
 required
 />
 </div>
 <div>
 <Label htmlFor="serviceType">Tipo de Serviço (opcional)</Label>
 <Input
 id="serviceType"
 value={formData.serviceType}
 onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
 />
 </div>
 </div>
 <div>
 <Label htmlFor="comment">Comentário *</Label>
 <Textarea
 id="comment"
 value={formData.comment}
 onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
 rows={4}
 required
 minLength={10}
 placeholder="Conte-nos sobre a sua experiência..."
 />
 </div>
 <Button
 type="submit"
 className="w-full bg-red-600 hover:bg-red-700 text-lg py-6"
 disabled={createReview.isPending}
 >
 {createReview.isPending ? "A enviar..." : "Enviar Avaliação"}
 </Button>
 </form>
 </CardContent>
 </Card>
 </div>
 </section>
 )}
 {/* Reviews List */}
 <section className="py-16 bg-gray-50">
 <div className="container max-w-5xl">
 {isLoading ? (
 <div className="text-center py-12">
 <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-red-600"></div>
 <p className="mt-4 text-gray-600">A carregar avaliações...</p>
 </div>
 ) : reviews.length === 0 ? (
 <div className="text-center py-12">
 <p className="text-gray-600 text-lg">Ainda não há avaliações. Seja o primeiro a avaliar!</p>
 </div>
 ) : (
 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
 {reviews.map((review) => (
 <Card key={review.id} className="hover:shadow-lg transition-shadow">
 <CardContent className="pt-6">
 <div className="flex items-start justify-between mb-4">
 <div>
 <div className="flex items-center gap-2">
 <h3 className="font-bold text-lg text-gray-900">{review.name}</h3>
 {('verified' in review && review.verified) && (
 <CheckCircle className="h-5 w-5 text-green-600" />
 )}
 </div>
 <p className="text-sm text-gray-500">📍 {review.city}</p>
 </div>
 <StarRating rating={review.rating} />
 </div>
 <p className="text-gray-700 mb-4">{review.comment}</p>
 <div className="flex items-center justify-between text-sm text-gray-500">
 {review.serviceType && (
 <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full font-semibold">
 {review.serviceType}
 </span>
 )}
 <span>{new Date(review.createdAt).toLocaleDateString('pt-PT')}</span>
 </div>
 </CardContent>
 </Card>
 ))}
 </div>
 )}
 </div>
 </section>
 <Footer />
 </>
 );
}
