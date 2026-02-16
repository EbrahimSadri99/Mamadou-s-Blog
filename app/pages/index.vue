<template>
    <div class="relative">
        <!-- Hero Section with Geometric Overlays -->
        <section class="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
            <!-- Animated geometric background -->
            <div
                class="absolute inset-0 bg-linear-to-br from-emerald-50 via-white to-teal-50 dark:from-slate-950 dark:via-slate-900 dark:to-emerald-950/30">
                <!-- Floating geometric shapes -->
                <div
                    class="absolute top-20 left-10 w-32 h-32 bg-emerald-200/20 dark:bg-emerald-800/20 rounded-full blur-3xl animate-float">
                </div>
                <div
                    class="absolute top-40 right-20 w-40 h-40 bg-teal-200/20 dark:bg-teal-800/20 rounded-full blur-3xl animate-float-delayed">
                </div>
                <div
                    class="absolute bottom-20 left-1/4 w-48 h-48 bg-cyan-200/20 dark:bg-cyan-800/20 rounded-full blur-3xl animate-float">
                </div>

                <!-- Geometric grid overlay -->
                <div class="absolute inset-0 pattern-islamic-star opacity-[0.03] dark:opacity-[0.05]"></div>
            </div>

            <!-- Decorative geometric elements -->
            <div
                class="absolute top-1/4 left-10 w-16 h-16 border-2 border-emerald-300/30 dark:border-emerald-700/30 rotate-45 animate-rotate-slow">
            </div>
            <div
                class="absolute top-1/3 right-16 w-20 h-20 border-2 border-teal-300/30 dark:border-teal-700/30 rounded-full animate-pulse-slow">
            </div>
            <div
                class="absolute bottom-1/4 right-1/4 w-12 h-12 bg-linear-to-br from-emerald-400/10 to-teal-400/10 dark:from-emerald-600/10 dark:to-teal-600/10 rotate-45">
            </div>

            <!-- Hero Content -->
            <div class="container mx-auto px-4 py-20 relative z-10">
                <div class="max-w-5xl mx-auto text-center space-y-8 animate-fade-in">
                    <!-- Geometric title decoration -->
                    <div class="flex justify-center items-center gap-4 mb-6">
                        <div class="flex gap-1">
                            <div class="w-3 h-3 bg-emerald-500 dark:bg-emerald-400 rotate-45 animate-pulse"></div>
                            <div class="w-3 h-3 bg-teal-500 dark:bg-teal-400 rotate-45 animate-pulse"
                                style="animation-delay: 0.2s;"></div>
                        </div>
                        <div class="h-px w-16 bg-linear-to-r from-transparent via-emerald-400 to-transparent"></div>
                        <div class="w-4 h-4 border-2 border-emerald-500 dark:border-emerald-400 rotate-45"></div>
                        <div class="h-px w-16 bg-linear-to-r from-transparent via-emerald-400 to-transparent"></div>
                        <div class="flex gap-1">
                            <div class="w-3 h-3 bg-teal-500 dark:bg-teal-400 rotate-45 animate-pulse"
                                style="animation-delay: 0.4s;"></div>
                            <div class="w-3 h-3 bg-emerald-500 dark:bg-emerald-400 rotate-45 animate-pulse"
                                style="animation-delay: 0.6s;"></div>
                        </div>
                    </div>

                    <h1 class="font-cormorant text-6xl md:text-7xl lg:text-8xl font-bold leading-tight">
                        <span
                            class="bg-linear-to-r from-emerald-700 via-teal-600 to-cyan-700 dark:from-emerald-400 dark:via-teal-400 dark:to-cyan-400 bg-clip-text text-transparent">
                            Mamadou Diallo</span>'s
                        <br>
                        <span class="text-slate-800 dark:text-slate-200">
                            Reflections
                        </span>
                    </h1>

                    <div class="max-w-3xl mx-auto">
                        <p class="font-lora text-xl md:text-2xl leading-relaxed text-slate-700 dark:text-slate-300">
                            A space for contemplation and growth, exploring teachings of the Quran and Sunnah.
                        </p>
                    </div>

                    <!-- CTA with geometric button -->
                    <div class="flex justify-center pt-6">
                        <a href="#articles"
                            class="group relative inline-flex items-center gap-3 px-8 py-4 bg-linear-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-lora font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/30">
                            <span class="relative z-10">Explore Posts</span>
                            <svg class="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform"
                                fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                            <div
                                class="absolute inset-0 bg-linear-to-r from-emerald-700 to-teal-700 opacity-0 group-hover:opacity-100 transition-opacity">
                            </div>
                        </a>
                    </div>
                </div>
            </div>

            <!-- Bottom wave transition -->
            <div class="absolute bottom-0 left-0 right-0">
                <svg class="w-full h-24 fill-current text-white dark:text-slate-950" preserveAspectRatio="none"
                    viewBox="0 0 1200 120" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0,0 C300,80 600,80 900,40 C1050,20 1150,10 1200,0 L1200,120 L0,120 Z"></path>
                </svg>
            </div>
        </section>

        <!-- Featured Content Section -->
        <section class="container mx-auto px-4 py-20" id="articles">
            <!-- Section Header with Geometric Accents -->
            <div class="max-w-4xl mx-auto mb-16 text-center space-y-6">
                <div class="flex justify-center items-center gap-4">
                    <div class="w-12 h-px bg-linear-to-r from-transparent via-emerald-400 to-transparent"></div>
                    <div class="flex gap-2">
                        <div class="w-2 h-2 bg-emerald-500 dark:bg-emerald-400 rotate-45"></div>
                        <div class="w-2 h-2 bg-teal-500 dark:bg-teal-400 rounded-full"></div>
                        <div class="w-2 h-2 bg-cyan-500 dark:bg-cyan-400 rotate-45"></div>
                    </div>
                    <div class="w-12 h-px bg-linear-to-r from-transparent via-emerald-400 to-transparent"></div>
                </div>

                <h2 class="font-cormorant text-5xl md:text-6xl font-bold text-slate-800 dark:text-slate-200">
                    Read Posts
                </h2>

                <p class="font-lora text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                    Read all of Mamadou Diallo's latest posts.
                </p>
            </div>

            <!-- Blog Posts Grid -->
            <div class="max-w-7xl mx-auto">
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <NuxtLink v-for="(post, index) in posts" :key="post.id" :to="`/blog/${post.source_id}`"
                        class="group relative bg-white dark:bg-slate-900 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 hover:border-emerald-300 dark:hover:border-emerald-700 transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-500/10 hover:-translate-y-2"
                        :style="{ animationDelay: `${index * 0.1}s` }">

                        <!-- Geometric corner accent -->
                        <div class="absolute top-0 right-0 w-20 h-20 overflow-hidden">
                            <div
                                class="absolute top-0 right-0 w-16 h-16 bg-linear-to-br from-emerald-500/10 to-teal-500/10 dark:from-emerald-600/20 dark:to-teal-600/20 rotate-45 translate-x-8 -translate-y-8 group-hover:translate-x-6 group-hover:-translate-y-6 transition-transform duration-300">
                            </div>
                        </div>

                        <!-- Card content -->
                        <div class="relative p-8 space-y-4">
                            <!-- Title -->
                            <h3
                                class="font-cormorant text-2xl font-bold text-slate-800 dark:text-slate-200 leading-tight group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition-colors">
                                {{ truncateTitle(post.title) }}
                            </h3>

                            <!-- Metadata -->
                            <div class="flex flex-wrap gap-4 text-sm text-slate-600 dark:text-slate-400 font-lora">
                                <div class="flex items-center gap-2">
                                    <svg class="w-4 h-4 text-emerald-500 dark:text-emerald-400" fill="none"
                                        viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                    <span>{{ formatDate(post.last_edit) }}</span>
                                </div>
                                <div class="flex items-center gap-2">
                                    <svg class="w-4 h-4 text-teal-500 dark:text-teal-400" fill="none"
                                        viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                    </svg>
                                    <span>{{ post.no_of_words }} words</span>
                                </div>
                                <!-- //asdasdasdasdasd  -->

                                <!-- Approx reading time -->
                                <div class="flex items-center gap-2">
                                    <svg class="w-4 h-4 text-teal-600 dark:text-teal-400" fill="none"
                                        viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                    </svg>
                                    <span> {{ Math.ceil(post.no_of_words / 200) }} min read </span>
                                </div>

                            </div>

                            <!-- Tag with geometric shape -->
                            <div class="flex items-center gap-2">
                                <div class="flex flex-wrap gap-2">
                                    <span v-for="(tag, i) in parseTags(post.tag)" :key="i"
                                        class="px-3 py-1 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 text-sm font-lora font-medium rounded-full">
                                        {{ tag }}
                                    </span>
                                </div>
                            </div>


                            <!-- Read more indicator -->
                            <div
                                class="pt-4 flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-lora font-semibold opacity-100 transition-opacity">
                                <div class="w-2 h-2 bg-emerald-500 dark:bg-emerald-400 rotate-45"></div>
                                <span>Read Post</span>
                                <svg class="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none"
                                    viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M9 5l7 7-7 7" />
                                </svg>
                            </div>
                        </div>

                        <!-- Bottom geometric accent -->
                        <div
                            class="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-emerald-500 via-teal-500 to-cyan-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left">
                        </div>
                    </NuxtLink>
                </div>
            </div>
        </section>

        <!-- Newsletter/CTA Section -->
        <section class="relative py-24 overflow-hidden">
            <div
                class="absolute inset-0 bg-linear-to-br from-emerald-600 to-teal-700 dark:from-emerald-900 dark:to-teal-950">
            </div>
            <div class="absolute inset-0 pattern-islamic-geometry opacity-10"></div>

            <!-- Floating geometric shapes -->
            <div class="absolute top-10 left-20 w-24 h-24 border-2 border-white/20 rounded-full animate-float"></div>
            <div class="absolute bottom-10 right-20 w-32 h-32 border-2 border-white/20 rotate-45 animate-float-delayed">
            </div>
            <div class="absolute top-1/2 left-10 w-16 h-16 bg-white/5 rotate-45"></div>

            <div class="container mx-auto px-4 relative z-10">
                <div class="max-w-3xl mx-auto text-center space-y-8 text-white">
                    <div class="flex justify-center gap-2 mb-4">
                        <div class="w-3 h-3 bg-white/60 rotate-45"></div>
                        <div class="w-3 h-3 bg-white/40 rounded-full"></div>
                        <div class="w-3 h-3 bg-white/60 rotate-45"></div>
                    </div>

                    <h2 class="font-cormorant text-4xl md:text-5xl font-bold">
                        Stay Connected
                    </h2>

                    <p class="font-lora text-xl leading-relaxed text-white/90">
                        Subscribe to my YouTube channel.
                    </p>

                    <div class="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                        <button @click="openExternal"
                            class="px-8 py-4 bg-white text-emerald-700 font-lora font-semibold rounded-lg hover:bg-white/90 transition-all hover:scale-105 hover:shadow-xl">
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>

const { getAllRecords } = useTable()

const posts = await getAllRecords('MainDB')
const error = ref(null)

const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    })
}

const parseTags = (tagString) => {
    try {
        return Array.isArray(tagString)
            ? tagString
            : JSON.parse(tagString || '[]')
    } catch {
        return []
    }
}

const truncateTitle = (title) => {
  if (!title) return ''
  return title.length > 120
    ? title.slice(0, 100) + '...'
    : title
}

function openExternal() {
  window.open('https://www.youtube.com/@noteandregister7494?sub_confirmation=1', '_blank', 'noopener,noreferrer')
}

useHead({
    title: 'Islamic Reflections - مدونة إسلامية',
    meta: [
        { name: 'description', content: 'Explore Islamic wisdom through thoughtful reflections on the Quran and Hadith.' },
        { name: 'keywords', content: 'Islam, Islamic blog, Quran, Hadith, Islamic teachings, faith, Muslim, Islamic wisdom' }
    ]
})

onMounted(async () => {
    try {
        posts.value = await getSupabaseData()
    } catch (err) {
        error.value = err
    }
})

</script>

<style scoped>
@keyframes float-delayed {

    0%,
    100% {
        transform: translateY(0px);
    }

    50% {
        transform: translateY(-30px);
    }
}

.animate-float-delayed {
    animation: float-delayed 8s ease-in-out infinite;
    animation-delay: 1s;
}

.animate-fade-in {
    animation: fadeIn 1s ease-out;
}

@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(20px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}
</style>