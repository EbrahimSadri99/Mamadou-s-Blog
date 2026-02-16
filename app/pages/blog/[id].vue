<template>
  <div class="relative">
    <!-- Hero Section for Blog Post -->
    <section v-if="post"
      class="relative py-20 overflow-hidden bg-linear-to-br from-emerald-50 via-white to-teal-50 dark:from-slate-950 dark:via-slate-900 dark:to-emerald-950/30">
      <!-- Geometric background -->
      <div class="absolute inset-0 pattern-islamic-star opacity-[0.03] dark:opacity-[0.05]"></div>

      <!-- Floating geometric shapes -->
      <div
        class="absolute top-10 right-20 w-24 h-24 border-2 border-emerald-300/20 dark:border-emerald-700/20 rotate-45 animate-rotate-slow">
      </div>
      <div
        class="absolute bottom-20 left-10 w-32 h-32 bg-teal-200/10 dark:bg-teal-800/10 rounded-full blur-2xl animate-float">
      </div>

      <div class="container mx-auto px-4 relative z-10">
        <div class="max-w-4xl mx-auto">
          <!-- Back Button -->
          <NuxtLink to="/"
            class="group inline-flex items-center gap-2 px-4 py-2 mb-8 text-slate-700 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
            <svg class="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24"
              stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <span class="font-lora font-medium">Back to Articles</span>
          </NuxtLink>

          <!-- Category Badge with Geometric Accent -->
          <div class="flex items-center gap-3 mb-6 animate-fade-in">
            <div class="flex gap-1">
              <div class="w-2 h-2 bg-emerald-500 dark:bg-emerald-400 rotate-45"></div>
              <div class="w-2 h-2 bg-teal-500 dark:bg-teal-400 rounded-full"></div>
            </div>
            <span v-for="(tag, i) in parseTags(post.tag)" :key="i"
              class="px-4 py-1.5 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 text-sm font-lora font-semibold rounded-full border border-emerald-200 dark:border-emerald-800">
              {{ tag }}
            </span>
          </div>

          <!-- Title -->
          <h1
            class="font-cormorant text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8 text-slate-900 dark:text-slate-100 animate-fade-in"
            style="animation-delay: 0.1s">
            {{ post.title }}
          </h1>

          <!-- Metadata -->
          <div class="flex flex-wrap gap-6 text-slate-600 dark:text-slate-400 font-lora animate-fade-in"
            style="animation-delay: 0.2s">
            <div class="flex items-center gap-2">
              <div class="w-8 h-8 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center">
                <svg class="w-4 h-4 text-emerald-600 dark:text-emerald-400" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <div class="text-xs text-slate-500 dark:text-slate-500">
                  Last Updated
                </div>
                <div class="text-sm font-medium">
                  {{ formatDate(post.last_edit) }}
                </div>
              </div>
            </div>

            <div class="flex items-center gap-2">
              <div class="w-8 h-8 rounded-full bg-teal-100 dark:bg-teal-900/30 flex items-center justify-center">
                <svg class="w-4 h-4 text-teal-600 dark:text-teal-400" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <div>
                <div class="text-xs text-slate-500 dark:text-slate-500">
                  Reading Time
                </div>
                <div class="text-sm font-medium">
                  {{ Math.ceil(post.no_of_words / 200) }} min read
                </div>
              </div>
            </div>

            <div class="flex items-center gap-2">
              <div class="w-8 h-8 rounded-full bg-cyan-100 dark:bg-cyan-900/30 flex items-center justify-center">
                <svg class="w-4 h-4 text-cyan-600 dark:text-cyan-400" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div>
                <div class="text-xs text-slate-500 dark:text-slate-500">
                  Word Count
                </div>
                <div class="text-sm font-medium">
                  {{ post.no_of_words }} words
                </div>
              </div>
            </div>
          </div>

          <!-- Decorative divider -->
          <div class="flex items-center gap-4 my-12 animate-fade-in" style="animation-delay: 0.3s">
            <div
              class="flex-1 h-px bg-linear-to-r from-transparent via-emerald-300 dark:via-emerald-700 to-transparent">
            </div>
            <div class="flex gap-2">
              <div class="w-2 h-2 bg-emerald-500 dark:bg-emerald-400 rotate-45"></div>
              <div class="w-2 h-2 bg-teal-500 dark:bg-teal-400 rounded-full"></div>
              <div class="w-2 h-2 bg-cyan-500 dark:bg-cyan-400 rotate-45"></div>
            </div>
            <div
              class="flex-1 h-px bg-linear-to-r from-transparent via-emerald-300 dark:via-emerald-700 to-transparent">
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Main Content -->
    <main class="container mx-auto px-4 py-16">

      <!-- Post Loading State -->
      <div v-if="isLoading" class="max-w-2xl mx-auto text-center py-20">
        <div class="mb-8">
          <div
            class="w-24 h-24 mx-auto bg-linear-to-br from-emerald-100 to-teal-100 dark:from-emerald-900/30 dark:to-teal-900/30 rounded-full flex items-center justify-center">
            <svg class="w-12 h-12 text-emerald-600 dark:text-emerald-400" fill="none" viewBox="0 0 24 24"
              stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
        </div>
        <h2 class="font-cormorant text-4xl font-bold mb-4 text-slate-900 dark:text-slate-100">
          Article Loading..
        </h2>
        <p class="font-lora text-lg text-slate-600 dark:text-slate-400 mb-8">
          The article is loading...
        </p>
        <NuxtLink to="/"
          class="inline-flex items-center gap-2 px-8 py-4 bg-linear-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-lora font-semibold rounded-lg transition-all hover:scale-105">
          <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
          <span>Return Home</span>
        </NuxtLink>
      </div>

      <!-- Post Not Found State -->
      <div v-else-if="showError" class="max-w-2xl mx-auto text-center py-20">
        <div class="mb-8">
          <div
            class="w-24 h-24 mx-auto bg-linear-to-br from-emerald-100 to-teal-100 dark:from-emerald-900/30 dark:to-teal-900/30 rounded-full flex items-center justify-center">
            <svg class="w-12 h-12 text-emerald-600 dark:text-emerald-400" fill="none" viewBox="0 0 24 24"
              stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
        </div>
        <h2 class="font-cormorant text-4xl font-bold mb-4 text-slate-900 dark:text-slate-100">
          Article Not Found.
        </h2>
        <p class="font-lora text-lg text-slate-600 dark:text-slate-400 mb-8">
          The article has either been deleted or moved.
        </p>
        <NuxtLink to="/"
          class="inline-flex items-center gap-2 px-8 py-4 bg-linear-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-lora font-semibold rounded-lg transition-all hover:scale-105">
          <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
          <span>Return Home</span>
        </NuxtLink>
      </div>

      <div v-else class="max-w-4xl mx-auto">
        <!-- Blog Content -->
        <article class="relative">
          <!-- Decorative corner elements -->
          <div
            class="absolute -top-4 -left-4 w-16 h-16 border-l-2 border-t-2 border-emerald-200 dark:border-emerald-800 rounded-tl-2xl">
          </div>
          <div
            class="absolute -top-4 -right-4 w-16 h-16 border-r-2 border-t-2 border-emerald-200 dark:border-emerald-800 rounded-tr-2xl">
          </div>

          <div
            class="relative bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 p-8 md:p-12 lg:p-16">
            <!-- Content with proper typography -->
            <div
              class="text-wrap! prose prose-lg md:prose-xl max-w-[70ch] mx-auto blog-content prose-headings:font-cormorant prose-headings:font-bold prose-headings:text-slate-900 dark:prose-headings:text-slate-100 prose-headings:tracking-tight prose-p:font-lora prose-p:text-slate-700 dark:prose-p:text-slate-300 prose-p:leading-relaxed prose-a:text-emerald-600 dark:prose-a:text-emerald-400 prose-a:no-underline hover:prose-a:underline prose-strong:text-slate-900 dark:prose-strong:text-slate-100 prose-blockquote:border-l-4 prose-blockquote:border-emerald-500 prose-blockquote:pl-4 prose-blockquote:italic prose-img:rounded-lg prose-img:my-8"
              v-html="htmlContent"></div>
          </div>

          <!-- Decorative bottom corner elements -->
          <div
            class="absolute -bottom-4 -left-4 w-16 h-16 border-l-2 border-b-2 border-emerald-200 dark:border-emerald-800 rounded-bl-2xl">
          </div>
          <div
            class="absolute -bottom-4 -right-4 w-16 h-16 border-r-2 border-b-2 border-emerald-200 dark:border-emerald-800 rounded-br-2xl">
          </div>
        </article>

        <!-- Tags Section -->
        <div
          class="mt-16 p-8 bg-linear-to-br from-emerald-50 to-teal-50 dark:from-slate-900 dark:to-emerald-950/20 rounded-2xl border border-emerald-200 dark:border-emerald-900">
          <div class="flex items-center gap-3 mb-4">
            <div
              class="w-8 h-8 bg-emerald-500 dark:bg-emerald-600 rounded-lg rotate-45 flex items-center justify-center">
              <svg class="w-4 h-4 text-white -rotate-45" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
              </svg>
            </div>
            <h3 class="font-cormorant text-2xl font-bold text-slate-800 dark:text-slate-200">
              Topics
            </h3>
          </div>
          <div class="flex flex-wrap gap-2">
            <span v-for="(tag, i) in parseTags(post.tag)" :key="i"
              class="px-4 py-2 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-full text-sm font-lora border border-emerald-200 dark:border-emerald-800">
              {{ tag }}
            </span>
          </div>
        </div>

        <!-- Navigation Footer -->
        <div class="mt-16 text-center">
          <div class="flex justify-center gap-2 mb-6">
            <div class="w-2 h-2 bg-emerald-500 dark:bg-emerald-400 rotate-45"></div>
            <div class="w-2 h-2 bg-teal-500 dark:bg-teal-400 rounded-full"></div>
            <div class="w-2 h-2 bg-cyan-500 dark:bg-cyan-400 rotate-45"></div>
          </div>
          <NuxtLink to="/"
            class="group inline-flex items-center gap-3 px-8 py-4 bg-linear-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-lora font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/30">
            <svg class="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24"
              stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <span>Explore More Articles</span>
          </NuxtLink>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>

const route = useRoute();
const postId = route.params.id;

const post = ref(null);
const htmlContent = ref("");
const isLoading = ref(true)
const showError = ref(false)
const allowErrorDisplay = ref(false)


const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

function removeInlineStyles(htmlString) {
  if (!htmlString || typeof htmlString !== "string") {
    return htmlString;
  }

  const parser = new DOMParser();
  const doc = parser.parseFromString(htmlString, "text/html");

  // Elements allowed to keep inline styles
  const allowed = new Set([
    "TABLE", "THEAD", "TBODY", "TFOOT",
    "TR", "TD", "TH", "IMG"
  ]);

  // Regex to detect Arabic characters
  const arabicRegex = /[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF]/;

  // Remove inline styles except allowed elements
  const elementsWithStyle = doc.querySelectorAll("[style]");
  elementsWithStyle.forEach(el => {
    if (!allowed.has(el.tagName)) {
      el.removeAttribute("style");
    }
  });

  // Force RTL for Arabic content
  const allElements = doc.body.querySelectorAll("*");

  allElements.forEach(el => {
    // Skip tables/images (layout should not be flipped)
    if (allowed.has(el.tagName)) return;

    if (arabicRegex.test(el.textContent)) {
      el.setAttribute("dir", "rtl");
      el.setAttribute("lang", "ar");
    }

    // Split long sequences of underscores (>50) by adding a space
    el.innerHTML = el.innerHTML.replace(/_{6,}/g, match => {
      return match.replace(/(.{6})/g, "$1 ");
    });
  });

  return doc.body.innerHTML;
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

const loadPost = async () => {
  isLoading.value = true
  showError.value = false

  // allow error display only after 5 seconds
  setTimeout(() => {
    allowErrorDisplay.value = true
    if (!htmlContent.value) {
      showError.value = true
    }
  }, 5000)

  try {
    const supabase = useSupabase()

    const { data, error } = await supabase
      .from('MainDB')
      .select('*')
      .eq('source_id', postId)
      .single()

    if (error || !data?.source_id) {
      throw error || new Error('No source_id found')
    }

    post.value = data

    const githubURL =
      `https://raw.githubusercontent.com/EbrahimSadri/MamadouBlogDatabase/refs/heads/main/${postId}.html`

    const response = await fetch(githubURL)

    if (!response.ok) {
      throw new Error('Failed to fetch HTML from Github')
    }

    const html = await response.text()

    const parser = new DOMParser()
    const doc = parser.parseFromString(html, 'text/html')

    const cleanedHtml = removeInlineStyles(doc.body.innerHTML)

    htmlContent.value = cleanedHtml
  } catch (err) {
    console.error('Error loading post:', err)

    // do not immediately show error
    if (allowErrorDisplay.value) {
      showError.value = true
    }
  } finally {
    isLoading.value = false
  }
}

onMounted(async () => {
  await loadPost()
})

useHead(() => ({
  title: post.value
    ? `${post.value.title} - Islamic Reflections`
    : "Islamic Reflections",
  meta: [
    {
      name: "description",
      content: post.value
        ? `Read ${post.value.title} | Mamadou Diallo\'s Blog`
        : "Islamic reflections and teachings",
    },
    {
      name: "keywords",
      content: post.value
        ? `${post.value.tag}, Islam, Islamic blog, Quran, Hadith`
        : "Islam, Islamic blog",
    },
  ],
}));
</script>

<style scoped>
/* Arabic text inside prose */
.prose :where(:lang(ar)) {
  direction: rtl !important;
  text-align: right !important;

  /* slightly larger for readability */
  font-size: var(--text-3xl)
    /* 1.25rem = 20px */
    !important;
  line-height: var(--tw-leading, var(--text-3xl--line-height)
      /* calc(1.75 / 1.25) ≈ 1.4 */
    ) !important;
  --tw-leading: var(--leading-loose)
    /* 2 */
    !important;
  line-height: var(--leading-loose)
    /* 2 */
    !important;
  font-family: var(--font-amiri);
  word-break: normal !important;
}

/* Arabic headings */
.prose :where(h1:lang(ar),
  h2:lang(ar),
  h3:lang(ar),
  h4:lang(ar)) {
  direction: rtl !important;
  text-align: right !important;
  font-family: var(--font-amiri)
}

:dir(rtl) .sidebar {
  float: right;
  font-size: var(--text-3xl);
  word-break: normal !important;
  line-height: var(--tw-leading, var(--text-3xl--line-height)
      /* calc(1.75 / 1.25) ≈ 1.4 */
    ) !important;
}

img {
  width: 80vw !important;
  margin: auto !important;
  object-fit: cover !important;
}
</style>
