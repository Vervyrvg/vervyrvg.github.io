---
// Importaciones
import { Button } from "./ui/button";
import LinkedIn from "./icons/LinkedIn.astro";
import DownloadArrow from "./icons/DownloadArrow.astro";
import { ME } from '@/config.ts';

const resume = "/" + ME.contactInfo.resumeDoc;
const carta = "/" + ME.contactInfo.cartaDoc;
const { linkedin, email, github, whatsapp } = ME.contactInfo;
---

<section class="hero-section min-h-screen flex items-center justify-center px-4 py-16">
    <div class="container max-w-4xl mx-auto text-center">
        
        <!-- Foto de perfil -->
        <div class="profile-image-container mb-8">
            <div class="relative inline-block">
                <img 
                    src="/profile-photo.jpg" 
                    alt="Víctor Eduardo Resendiz Villegas"
                    class="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-full object-cover border-4 border-primary-light dark:border-primary-dark shadow-xl mx-auto"
                />
                <div class="absolute inset-0 rounded-full bg-gradient-to-tr from-primary-light/20 to-primary-dark/20"></div>
            </div>
        </div>

        <!-- Nombre principal -->
        <h1 class="hero-title text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-n700 dark:text-light-theme mb-4 leading-tight">
            Víctor Eduardo
            <span class="block text-primary-light dark:text-primary-dark">
                Resendiz Villegas
            </span>
        </h1>

        <!-- Especialidad -->
        <h2 class="hero-subtitle text-xl md:text-2xl lg:text-3xl font-medium text-n500 dark:text-n200 mb-6 max-w-3xl mx-auto">
            Especialista en Administración e Implementación de Soluciones en 
            <span class="text-primary-light dark:text-primary-dark font-semibold">
                Ciberseguridad
            </span>
            <span class="block mt-2 text-lg md:text-xl font-normal">
                SOC Senior
            </span>
        </h2>

        <!-- Estadísticas rápidas -->
        <div class="stats-row flex flex-wrap justify-center gap-6 md:gap-12 mb-12 text-center">
            <div class="stat-item">
                <div class="text-2xl md:text-3xl font-bold text-primary-light dark:text-primary-dark">8+</div>
                <div class="text-sm md:text-base text-n500 dark:text-n200">Años de Experiencia</div>
            </div>
            <div class="stat-item">
                <div class="text-2xl md:text-3xl font-bold text-primary-light dark:text-primary-dark">34+</div>
                <div class="text-sm md:text-base text-n500 dark:text-n200">Proyectos Culminados</div>
            </div>
            <div class="stat-item">
                <div class="text-2xl md:text-3xl font-bold text-primary-light dark:text-primary-dark">43+</div>
                <div class="text-sm md:text-base text-n500 dark:text-n200">Clientes</div>
            </div>
        </div>

        <!-- Botones de acción principales -->
        <div class="action-buttons flex flex-col sm:flex-row gap-4 justify-center mb-12 max-w-md mx-auto">
            <Button
                data-cv={resume}
                id="cvBtn"
                size="lg"
                className="flex-1 h-14 px-6 text-n700 bg-primary-light dark:bg-primary-dark hover:bg-primary-hover-light dark:hover:bg-primary-hover-dark font-semibold transition-all duration-300 group">
                Descargar CV
                <DownloadArrow width={20} height={20} class="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button
                data-carta={carta}
                id="cartaBtn"
                size="lg"
                className="flex-1 h-14 px-6 text-n700 bg-primary-light dark:bg-primary-dark hover:bg-primary-hover-light dark:hover:bg-primary-hover-dark font-semibold transition-all duration-300 group">
                Carta Presentación
                <DownloadArrow width={20} height={20} class="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
        </div>

        <!-- Redes sociales -->
        <div class="social-links">
            <p class="text-sm md:text-base text-n500 dark:text-n200 mb-6">
                Conecta conmigo en:
            </p>
            
            <div class="social-buttons flex justify-center gap-4 flex-wrap">
                <!-- LinkedIn -->
                <Button 
                    size="icon" 
                    className="h-12 w-12 bg-[#0077B5] hover:bg-[#005885] text-white transition-all duration-300 hover:scale-110 shadow-lg">
                    <a href={linkedin} aria-label="LinkedIn" target="_blank" rel="noopener noreferrer" class="flex items-center justify-center w-full h-full">
                        <LinkedIn width={20} height={20} />
                    </a>
                </Button>

                <!-- Email -->
                <Button 
                    size="icon" 
                    className="h-12 w-12 bg-[#EA4335] hover:bg-[#C5221F] text-white transition-all duration-300 hover:scale-110 shadow-lg">
                    <a href={`mailto:${email}`} aria-label="Email" class="flex items-center justify-center w-full h-full">
                        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                            <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                        </svg>
                    </a>
                </Button>

                <!-- GitHub -->
                {github && (
                    <Button 
                        size="icon" 
                        className="h-12 w-12 bg-[#333] hover:bg-[#24292e] text-white transition-all duration-300 hover:scale-110 shadow-lg">
                        <a href={github} aria-label="GitHub" target="_blank" rel="noopener noreferrer" class="flex items-center justify-center w-full h-full">
                            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                            </svg>
                        </a>
                    </Button>
                )}

                <!-- WhatsApp -->
                {whatsapp && (
                    <Button 
                        size="icon" 
                        className="h-12 w-12 bg-[#25D366] hover:bg-[#128C7E] text-white transition-all duration-300 hover:scale-110 shadow-lg">
                        <a href={`https://wa.me/${whatsapp}`} aria-label="WhatsApp" target="_blank" rel="noopener noreferrer" class="flex items-center justify-center w-full h-full">
                            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.485 3.488"/>
                            </svg>
                        </a>
                    </Button>
                )}
            </div>
        </div>
    </div>
</section>

<script>
    // Manejo de botones de descarga
    const cvBtn = document.getElementById('cvBtn') as HTMLButtonElement;
    const cartaBtn = document.getElementById('cartaBtn') as HTMLButtonElement;
    
    if (cvBtn) {
        const resume = cvBtn.dataset.cv;
        cvBtn.addEventListener('click', () => {
            if (resume) window.open(resume, '_blank');
        });
    }
    
    if (cartaBtn) {
        const carta = cartaBtn.dataset.carta;
        cartaBtn.addEventListener('click', () => {
            if (carta) window.open(carta, '_blank');
        });
    }
</script>

<style>
    .hero-section {
        background: linear-gradient(135deg, rgba(251, 209, 68, 0.05) 0%, rgba(255, 224, 113, 0.05) 100%);
    }
    
    .profile-image-container {
        animation: float 6s ease-in-out infinite;
    }
    
    @keyframes float {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-10px); }
    }
    
    .hero-title {
        animation: slideInUp 0.8s ease-out;
    }
    
    .hero-subtitle {
        animation: slideInUp 0.8s ease-out 0.2s both;
    }
    
    .stats-row {
        animation: slideInUp 0.8s ease-out 0.4s both;
    }
    
    .action-buttons {
        animation: slideInUp 0.8s ease-out 0.6s both;
    }
    
    .social-links {
        animation: slideInUp 0.8s ease-out 0.8s both;
    }
    
    @keyframes slideInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
</style>
