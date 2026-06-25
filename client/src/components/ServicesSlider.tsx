import React from 'react';
import { useState, useEffect, memo, useMemo } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useSite } from '@/contexts/SiteContext';
import OptimizedImage from './OptimizedImage';
interface Service {
 icon: string;
 title: string;
 description: string;
 image: string;
}
export function ServicesSlider() {
 const { config } = useSite();
 const [currentSlide, setCurrentSlide] = useState(0);
 const [touchStart, setTouchStart] = useState(0);
 const [touchEnd, setTouchEnd] = useState(0);
 const isPlumbing = config.name === 'norte-reparos';
 const services: Service[] = useMemo(() => isPlumbing ? [
 {
 icon: '🔧',
 title: 'Ferramentas Hilti e Bosch',
 description: 'Equipamento profissional de última geração',
 image: 'https://private-us-east-1.manuscdn.com/sessionFile/RsLgvajqRJaxpcBIQSqPn3/sandbox/yEILT6e5vYHZPIaCO8mEe5-img-1_1770645659000_na1fn_cGx1bWJpbmctd3JlbmNoLXRvb2xz.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvUnNMZ3ZhanFSSmF4cGNCSVFTcVBuMy9zYW5kYm94L3lFSUxUNmU1dllIWlBJYUNPOG1FZTUtaW1nLTFfMTc3MDY0NTY1OTAwMF9uYTFmbl9jR3gxYldKcGJtY3RkM0psYm1Ob0xYUnZiMnh6LmpwZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=Hc~5RYB41oZTI77kLCEjEWm2FAkijz9rq8NoaQdFLAol~ga-MlZwfnM-~2EHY5JF3jr2J7snJn26x--ZhVwQN7riIv717TNFqLWkMxevI4vAGShyIfNZJXA6zRv2i98Jbqth5jYZiZsMpN4YKEYPy4qt7H2etCiB~l-C63o5ZrEtmtYzJ94IjIfROIIu7tqRbb2J8aDLYYNqN6hETZBooCPwFKo77TwfzvNpX~OBH2DPqV3ut4sp1Q3EqQSpDxlH-CvMSzOmbbW3dKppIF8lWe8WLBo0bhMw~Lu5Lb6udMOJfH-Lpgw7R9m4JSd16iOWwOgqtokgbyW3dLp0eg~bvQ__'
 },
 {
 icon: '👷',
 title: 'Canalizadores Certificados',
 description: 'Profissionais com experiência com equipamento profissional',
 image: 'https://private-us-east-1.manuscdn.com/sessionFile/RsLgvajqRJaxpcBIQSqPn3/sandbox/yEILT6e5vYHZPIaCO8mEe5-img-2_1770645652000_na1fn_cGx1bWJlci1maXhpbmctc2luaw.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvUnNMZ3ZhanFSSmF4cGNCSVFTcVBuMy9zYW5kYm94L3lFSUxUNmU1dllIWlBJYUNPOG1FZTUtaW1nLTJfMTc3MDY0NTY1MjAwMF9uYTFmbl9jR3gxYldKbGNpMW1hWGhwYm1jdGMybHVhdy5qcGc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=tkqQQm1AMXjf3C1pjeaWwZBJch33oXYSrmx0ojouK8FlgaqJwjFBJ9dnio7P2GZ5umPZtvOzPAvIZpiKpPYeS18yB8xJI2KxlBEtNqP3kwWTTqN0Ctnp-LbDQ0SymXcqs1sM5Xpvf0v-WW7IdFJLINIqlv1ytA3xEoNoBMowqLhSTqw9VyQOCSp2ZfWItiYQ1eQcMIcV7M8n6T~jzk1Pnlf5~Rf7ZPnc9DluG0beXs4r4xg72s~biss7JqHETuv1SQmOTTqF6s9s1wgfxBKlFggoLHzgR~wpDKHgpwNfpSSV9ptTHxn~e0gIUHE7Pk7g9YQAam7tZ8eDD2EfUYQ6CA__'
 },
 {
 icon: '🚐',
 title: 'Frota Equipada',
 description: 'Viaturas com todo o material necessário para qualquer intervenção',
 image: 'https://private-us-east-1.manuscdn.com/sessionFile/RsLgvajqRJaxpcBIQSqPn3/sandbox/yEILT6e5vYHZPIaCO8mEe5-img-3_1770645657000_na1fn_cGx1bWJpbmctdmFuLXRvb2xz.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvUnNMZ3ZhanFSSmF4cGNCSVFTcVBuMy9zYW5kYm94L3lFSUxUNmU1dllIWlBJYUNPOG1FZTUtaW1nLTNfMTc3MDY0NTY1NzAwMF9uYTFmbl9jR3gxYldKcGJtY3RkbUZ1TFhSdmIyeHouanBnP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=ipV2C-RN4gG0MTJ9VPA4zNQetkAfO36OGjVGIvYDTWvUwuxLir2ERtJzvVzXwUU5xFUk9nj0Dp3vJcfZRwRauf4ulqz0~tqn0clEwoGP~3JJwYlhA1N28YvPdnx03VhVwvGnhrCU3FJJ7r-UUKsHbrT47btrcoWSfWw79~EWRTS1YMYaKo0GCRDC2rOby74MFz-dtBdwHxM5ADQ9OGkf0-bq0VL6bTbgdbjFiaH9ibjGpD8gs7Zl2aI-N7UalEEud0dYV6dwA6pLUbPzDdMGGHCzmi9Pd4agP6K2UvL08OeAOqDkCCYxZknUs0e1XHj~1b-u8z8Malx3WTHsFsJbdg__'
 },
 {
 icon: '💧',
 title: 'Disponível 24h/7d',
 description: 'Confirmamos a deslocação por telefone antes de intervir',
 image: 'https://private-us-east-1.manuscdn.com/sessionFile/RsLgvajqRJaxpcBIQSqPn3/sandbox/yEILT6e5vYHZPIaCO8mEe5-img-4_1770645649000_na1fn_cGx1bWJlci1iYXRocm9vbS1yZXBhaXI.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvUnNMZ3ZhanFSSmF4cGNCSVFTcVBuMy9zYW5kYm94L3lFSUxUNmU1dllIWlBJYUNPOG1FZTUtaW1nLTRfMTc3MDY0NTY0OTAwMF9uYTFmbl9jR3gxYldKbGNpMWlZWFJvY205dmJTMXlaWEJoYVhJLmpwZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=tkWv2-hMxcQczSIKGmNuG6cYMCTxfRF3EhDe8GwoZSpgtUx4~txVXNde4tHFgvecRSW3I5akmWffGEozX-auigAx0mqU5X1RNQeQD5Mbm9B58G4~ADldkmzV4nl2SWlI5MgrdZstxl3-N3CRFvhXN0iDkLqyGCrfBo-rpqYRx79rUJJvU8c6fJ97HiwF~M8kQ6WkwosS0oB4Cncliu2DXjwToo0xymHAFB12uY6QnGlgtRt9lI5Fs8qnYZA7ddukwWQZnal7mKasBFVDlBIC0UrQ3Ddhmx7~XsG5FivLv2NpUS06RN12VSHQVv2r2bc8~HVBo4mY0v~w1C4~Ojv3xg__'
 }
 ] : [
 {
 icon: '⚡',
 title: 'Equipamento Fluke',
 description: 'Multímetros e testadores Fluke profissionais',
 image: 'https://private-us-east-1.manuscdn.com/sessionFile/RsLgvajqRJaxpcBIQSqPn3/sandbox/cGarJCzSXRwXZJiJ3R4476-img-2_1770610666000_na1fn_c2xpZGVyLWVsZWN0cmljYWwtZmx1a2U.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvUnNMZ3ZhanFSSmF4cGNCSVFTcVBuMy9zYW5kYm94L2NHYXJKQ3pTWFJ3WFpKaUozUjQ0NzYtaW1nLTJfMTc3MDYxMDY2NjAwMF9uYTFmbl9jMnhwWkdWeUxXVnNaV04wY21sallXd3RabXgxYTJVLmpwZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=fqRuW~w-rZ4effYafa0WCHscHJakKQk8dvoSs6tp2uuqVjbT~3v44nXdNnbBq1w1CYYEPsvd0~da0kdXnsWqLQWdlZ7KFJVrjPuIlflK0wmA-3H~RqVXu8O5yjUl0t-dT1WcO-h-U~cTeSCoHyB1-Acpxp4thgIwux0eHjRTJeqocpKNPV-1flk-nF3Hz-tO94xBJdnCOcqeZz~ne-Sq2r5EuQ5veb37I6ZXHYx92QQrcSjBYwHoz2I10MQ8VzPBTPX4FdzEAFS~q5YC5jqh8Vy~GJlfa6pOw~7goj0am1rBTcN8Y~SIAsrcgqujDoqlGV1Wt6YIyVXZxx9SQ61VBQ__'
 },
 {
 icon: '👷',
 title: 'Eletricistas Certificados',
 description: 'Profissionais com experiência com formação adequada',
 image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80'
 },
 {
 icon: '🚐',
 title: 'Frota Equipada',
 description: 'Viaturas com todo o material necessário para qualquer intervenção',
 image: 'https://private-us-east-1.manuscdn.com/sessionFile/RsLgvajqRJaxpcBIQSqPn3/sandbox/cGarJCzSXRwXZJiJ3R4476-img-3_1770610657000_na1fn_c2xpZGVyLXNlcnZpY2UtdmFu.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvUnNMZ3ZhanFSSmF4cGNCSVFTcVBuMy9zYW5kYm94L2NHYXJKQ3pTWFJ3WFpKaUozUjQ0NzYtaW1nLTNfMTc3MDYxMDY1NzAwMF9uYTFmbl9jMnhwWkdWeUxYTmxjblpwWTJVdGRtRnUuanBnP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=OE-sZzCVjZp579aEUVBI2sfgOy15pwwxWAxhggWBeZUMzlgncXX~x-s3NjAi2eTuO-iI0M7B~dtjTFyvjajEnmb7K6WVNsxYE~X3y6WbZriVWVAUgOfVY9Yk5DCbRHF4-yPaF5DFF2VVURrrfdVTYQkydV9hJwjHWMLeijqTxEA9xCXMECpdSzc0N7tLN-VDo1P7sySWRuuxVeI1mylg74So2RixfLlf1478SCo4j7BjI7ZW52Is7C-vCb3vDeYFogWQZJ3dkQhjRBu5Q3oKfiEUl2cjEkcKXLhF~dELxuAHuc5ogrZkQN9YG7~Fsq7gGvCz3CDHkXkEOKMiXSsOTA__'
 },
 {
 icon: '🔌',
 title: 'Disponível 24h/7d',
 description: 'Confirmamos a deslocação por telefone antes de intervir',
 image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&q=80'
 }
 ], [isPlumbing]);
 // Auto-play
 useEffect(() => {
 const timer = setInterval(() => {
 setCurrentSlide((prev) => (prev + 1) % services.length);
 }, 5000);
 return () => clearInterval(timer);
 }, [services.length]);
 const nextSlide = () => {
 setCurrentSlide((prev) => (prev + 1) % services.length);
 };
 const prevSlide = () => {
 setCurrentSlide((prev) => (prev - 1 + services.length) % services.length);
 };
 // Touch handlers for mobile swipe
 const handleTouchStart = (e: React.TouchEvent) => {
 setTouchStart(e.targetTouches[0].clientX);
 };
 const handleTouchMove = (e: React.TouchEvent) => {
 setTouchEnd(e.targetTouches[0].clientX);
 };
 const handleTouchEnd = () => {
 if (touchStart - touchEnd > 75) {
 nextSlide();
 }
 if (touchStart - touchEnd < -75) {
 prevSlide();
 }
 };
 return (
 <div className="relative w-full max-w-4xl mx-auto">
 {/* Slider Container */}
 <div
 className="relative overflow-hidden rounded-2xl shadow-2xl"
 onTouchStart={handleTouchStart}
 onTouchMove={handleTouchMove}
 onTouchEnd={handleTouchEnd}
 >
 <div
 className="flex transition-transform duration-500 ease-out"
 style={{ transform: `translateX(-${currentSlide * 100}%)` }}
 >
 {services.map((service, index) => (
 <div key={index} className="min-w-full relative">
 {/* Background Image with Overlay */}
 <div className="relative h-80 md:h-96">
 <OptimizedImage
 src={service.image}
 alt={`${service.title} - ${service.description}`}
 className="w-full h-full"
 objectFit="cover"
 priority={index === 0}
 width={1200}
 height={400}
 sizes="100vw"
 />
 <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
 {/* Content */}
 <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
 <div className="text-5xl mb-4">{service.icon}</div>
 <h3 className="text-3xl font-bold mb-3">{service.title}</h3>
 <p className="text-lg text-white/90 max-w-2xl">{service.description}</p>
 </div>
 </div>
 </div>
 ))}
 </div>
 {/* Navigation Arrows */}
 <button
 onClick={prevSlide}
 className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-200 group focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
 aria-label="Slide anterior"
 >
 <ChevronLeft className="w-6 h-6 text-white group-hover:scale-110 transition-transform" aria-hidden="true" />
 </button>
 <button
 onClick={nextSlide}
 className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-200 group focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
 aria-label="Próximo slide"
 >
 <ChevronRight className="w-6 h-6 text-white group-hover:scale-110 transition-transform" aria-hidden="true" />
 </button>
 </div>
 {/* Dots Indicator */}
 <div className="flex justify-center gap-2 mt-6">
 {services.map((_, index) => (
 <button
 key={index}
 onClick={() => setCurrentSlide(index)}
 className={`transition-all duration-300 rounded-full ${
 index === currentSlide
 ? 'w-8 h-3 bg-primary'
 : 'w-3 h-3 bg-gray-300 hover:bg-gray-400'
 }`}
 aria-label={`Ir para slide ${index + 1}`}
 />
 ))}
 </div>
 </div>
 );
}
export default React.memo(ServicesSlider);
