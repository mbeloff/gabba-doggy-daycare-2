<template>
    <div>
        <section-hero></section-hero>

        <section-cards></section-cards>
        <div class="relative bg-gray-900">
            <section-slider
                class="transition-opacity duration-1000 gallery"
                :class="{ 'opacity-0': this.disabled }"
                :key="this.rand"
            ></section-slider>
        </div>

        <div class="py-32 bg-gray-100 section tile bg-opacity-30">
            <title-block class="text-center">
                <template #small>A home away from home</template>
                <template #big>Dogs Love it Here</template>
            </title-block>
            <div
                class="container grid max-w-screen-lg grid-cols-1 px-2 mx-auto lg:gap-10 md:grid-cols-2 gap-y-10 gap-x-2"
            >
                <div
                    class="flex flex-col justify-between order-2 col md:order-1"
                >
                    <ul class="text-left list-disc list-outside">
                        <li
                            class="grid w-full mb-2"
                            v-for="(item, i) in features"
                            :key="i"
                        >
                            <template
                                v-if="
                                    item.limit == getRegion() ||
                                    item.limit == null
                                "
                            >
                                <div class="flex flex-col items-center gap-3">
                                    <icon-stack :icon="item.icon"></icon-stack>
                                    <p
                                        class="self-center font-bold text-blue-700"
                                    >
                                        {{ item.title }}
                                        <span
                                            class="font-normal text-blue-400 capitalize"
                                            v-if="item.limit"
                                            >- {{ item.limit }} only</span
                                        >
                                    </p>
                                </div>
                                <p class="text-sm text-center">
                                    {{ item.desc }}
                                    <router-link
                                        v-if="item.title == 'Grooming'"
                                        class="link-pink"
                                        :to="{
                                            name: item.title,
                                            params: { region: item.limit },
                                        }"
                                        >find out more</router-link
                                    >
                                    <button
                                        v-if="item.title == 'Pet Taxi'"
                                        class="link-pink"
                                        @click="showTaxi"
                                    >
                                        find out more
                                    </button>
                                </p>
                            </template>
                        </li>
                    </ul>
                </div>
                <div
                    class="order-1 bg-cover rounded-sm rounded-lg shadow-xl md:order-2 photo1 aspect-w-6 aspect-h-6"
                ></div>
            </div>
            <div
                class="flex flex-col max-w-screen-lg px-2 mx-auto mt-10 text-center sm:flex-row sm:flex-wrap gap-x-2 gap-y-5"
            >
                <router-link
                    :to="{ name: 'Daycare', params: { region: getRegion() } }"
                    class="flex-grow text-sm btn-blue"
                    >Daycare Prices</router-link
                >
                <router-link
                    v-show="getRegion() == 'brisbane'"
                    :to="{ name: 'Explore', params: { region: getRegion() } }"
                    class="flex-grow text-sm btn-blue"
                    >Take a Tour</router-link
                >
                <router-link
                    :to="{ name: 'Sign-up', params: { region: getRegion() } }"
                    class="flex-grow text-sm btn-blue"
                    >Create Account</router-link
                >
            </div>
        </div>
        <section-reviews></section-reviews>
    </div>
</template>

<script>
import SectionHero from '@/components/SectionHero.vue'
import SectionCards from '@/components/SectionCards.vue'
import SectionSlider from '@/components/SectionSlider.vue'
import SectionReviews from '@/components/SectionReviews.vue'
export default {
    components: {
        SectionHero,
        SectionCards,
        SectionSlider,
        SectionReviews,
    },
    metaInfo: {
        title: 'Home',
        meta: [
            {
                name: 'description',
                content:
                    "Your best friends' new favourite place. A fun place for your dog to play and meet new friends.",
                vmid: 'description',
            },
        ],
        jsonld: {
            '@context': 'http://schema.org',
            '@type': 'LocalBusiness',
            name: 'Gabba Doggy Daycare',
            image: 'https://res.cloudinary.com/dg5ybbkbh/image/upload/v1607553601/gddc/photos/03.jpg',
            logo: 'https://www.gabbadoggydaycare.com/img/gddc-logo.02c7187e.svg',
            aggregateRating: {
                '@type': 'AggregateRating',
                ratingValue: '5',
                reviewCount: '6',
            },
            telephone: '0450 927 302',
            email: 'woof@gabbadoggydaycare.com',
            url: 'https://www.gabbadoggydaycare.com',
            address: {
                '@type': 'PostalAddress',
                streetAddress: '46 Deshon st',
                addressLocality: 'Woolloongabba',
                addressRegion: 'QLD',
                postalCode: '4102',
            },
            openingHoursSpecification: {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: {
                    '@type': 'DayOfWeek',
                    name: 'Mo-Fr 06:00-18:30',
                },
            },
        },
    },
    methods: {
        showTaxi() {
            this.$modal.show('taxi-modal')
        },
        ranNum() {
            let x = Math.random() * 30 - 15
            return x
        },
        refreshSlider() {
            this.disabled = true
            this.rand = Math.floor(Math.random() * Math.floor(100))
            setTimeout(() => {
                this.disabled = false
            }, 750)
        },
    },
    computed: {
        data() {
            return this.$store.state[this.$store.state.region].contact
        },
    },
    data() {
        return {
            disabled: false,
            rand: 0,
            features: [
                {
                    title: 'Easy Online Bookings',
                    icon: 'calendar-day',
                    desc: 'Sign up online to conveniently manage your bookings, update your information or purchase our discount daycare packages.',
                },
                {
                    title: 'Dogs of all Shapes and Sizes',
                    icon: 'paw',
                    desc: "With dedicated areas for both older dogs and puppies, and play areas separated by size and temperament. There's a place for everyone at GDDC.",
                },
                {
                    title: 'Sunshine and Grass',
                    icon: 'sunglasses',
                    desc: 'Stimulating environment with spacious indoor areas, and huge outdoor play areas with grass, pools and sand pits.',
                },
                {
                    title: 'Pet Taxi',
                    icon: 'taxi',
                    desc: 'Save yourself some running around - our pet taxi is available for local pickup and dropoff.',
                },
                {
                    title: 'Grooming',
                    icon: 'bath',
                    desc: 'Basic washes, nail clips and ear cleans available through the week, so you can have you pup coming home fresh and clean.',
                },
            ],
        }
    },
    mounted() {
        if (this.$route.name === 'Question') {
            this.$modal.show('contact-modal')
        }
    },
}
</script>

<style lang="scss">
.photo1 {
    background-position: 50% 30%;
    background-image: url('https://res.cloudinary.com/dg5ybbkbh/image/upload/c_scale,w_500,q_auto,f_auto/v1/gddc/photos/update/0001.jpg');

    @media only screen and (max-width: 767px) {
        background-image: url('https://res.cloudinary.com/dg5ybbkbh/image/upload/c_fill,w_400/q_auto,f_auto/v1/gddc/photos/update/0001.jpg');
    }
}
</style>
