<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
    <div class="container mx-auto px-4 py-12">
      <section class="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
        <!-- En-tête avec effet de dégradé -->
        <header class="bg-gradient-to-r from-primary-600 to-primary-800 px-8 py-12 relative">
          <div class="absolute inset-0 bg-black opacity-10 pattern-grid-lg"></div>
          <h1 class="text-4xl font-bold text-white text-center relative z-10">Mentions Légales</h1>
          <p class="text-primary-100 text-center mt-2 relative z-10">Informations légales et conditions d'utilisation
          </p>
        </header>

        <div class="p-8 space-y-12">
          <!-- Propriétaire -->
          <div class="transition-all duration-300 hover:bg-gray-50 p-6 rounded-xl border border-gray-100">
            <div class="flex items-center mb-4">
              <div class="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center mr-4">
                <svg class="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h2 class="text-2xl font-bold text-gray-800">Propriétaire du site</h2>
            </div>
            <div class="ml-14 space-y-2">
              <p class="text-gray-600">Maël Laroque</p>
              <p class="text-gray-600 flex items-center">
                <svg class="w-5 h-5 text-gray-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                22 Rue Jules Verne, 14000 Caen
              </p>
              <p class="text-gray-600 flex items-center">
                <svg class="w-5 h-5 text-gray-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:contact@maellaroque.fr"
                  class="text-primary-600 hover:text-primary-800 transition-colors duration-200">
                  contact@maellaroque.fr
                </a>
              </p>
            </div>
          </div>

          <!-- Hébergeur -->
          <div class="transition-all duration-300 hover:bg-gray-50 p-6 rounded-xl border border-gray-100">
            <div class="flex items-center mb-4">
              <div class="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center mr-4">
                <svg class="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                    d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                </svg>
              </div>
              <h2 class="text-2xl font-bold text-gray-800">Hébergeur</h2>
            </div>
            <div class="ml-14 space-y-2">
              <p class="text-gray-600">Contabo GmbH</p>
              <p class="text-gray-600 flex items-center">
                <svg class="w-5 h-5 text-gray-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                Aschauer Str. 32a, 81549 Munich, Allemagne
              </p>
              <p class="text-gray-600 flex items-center">
                <svg class="w-5 h-5 text-gray-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                    d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
                <a href="https://contabo.com" target="_blank" rel="noopener"
                  class="text-primary-600 hover:text-primary-800 transition-colors duration-200">
                  www.contabo.com
                </a>
              </p>
            </div>
          </div>

          <!-- Collecte de données -->
          <div class="transition-all duration-300 hover:bg-gray-50 p-6 rounded-xl border border-gray-100">
            <div class="flex items-center mb-4">
              <div class="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center mr-4">
                <svg class="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h2 class="text-2xl font-bold text-gray-800">Collecte de données</h2>
            </div>
            <div class="ml-14 space-y-4">
              <p class="text-gray-600">
                Ce site utilise Google Analytics pour analyser le trafic et améliorer l'expérience utilisateur. Des
                informations anonymes sur les visiteurs sont collectées, comme le type de navigateur, l'origine
                géographique, et les pages visitées.
              </p>
              <p class="text-gray-600">
                Pour en savoir plus sur la gestion des données collectées par Google Analytics, vous pouvez consulter
                <a href="https://policies.google.com/privacy" target="_blank" rel="noopener"
                  class="text-primary-600 hover:text-primary-800 transition-colors duration-200">
                  la politique de confidentialité de Google
                </a>.
              </p>
            </div>
          </div>

          <!-- Responsabilité -->
          <div class="transition-all duration-300 hover:bg-gray-50 p-6 rounded-xl border border-gray-100">
            <div class="flex items-center mb-4">
              <div class="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center mr-4">
                <svg class="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <h2 class="text-2xl font-bold text-gray-800">Responsabilité</h2>
            </div>
            <div class="ml-14">
              <p class="text-gray-600">
                Maël Laroque ne peut être tenu responsable des dommages directs ou indirects causés au matériel de
                l'utilisateur lors de l'accès au site.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>