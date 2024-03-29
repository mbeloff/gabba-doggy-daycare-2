<template>
    <div class="container mx-auto max-w-screen-xl py-20 px-2">
        <title-block>
            <template #small>New to Doggy Daycare?</template>
            <template #big>Here's what to Expect</template>
        </title-block>
        <div class="mb-3">
            <h2 class="font-bold text-xl mb-3 text-purple-600">
                Before Daycare
            </h2>
            <ul class="list-inside list-none flex flex-col gap-3">
                <li>
                    <span class="font-bold">Book Online -</span> You can
                    schedule daycare quickly and easily. As long as we have
                    availability your booking will be instantly confirmed :)
                </li>
                <li>
                    <span class="font-bold">Buy a Package -</span> We have
                    discounted packages available. To save time at dropoff, you
                    can buy these online. If you forget to pay beforehand, we
                    can also accept credit card payments in-store.
                </li>
                <li>
                    <span class="font-bold">Food -</span> If your pup usually
                    eats lunch and you would like us to feed them, we do charge
                    a $5 feeding fee. Please provide your dog's usual food,
                    labelled with their name on it.
                </li>
                <li>
                    <span class="font-bold">Medication / Allergies -</span> If
                    your dog requires any medication, please ensure you provide
                    instructions of how and when it should be administered.
                    Also, let us know if your pup has any food allergies or is
                    not allowed treats.
                </li>
                <li>
                    <span class="font-bold">Extra Care -</span> If your dog is
                    recovering from an injury or otherwise might need a bit of
                    extra care and attention, don't hesitate to let us know; our
                    daycare team will be happy to accommodate wherever possible.
                </li>
            </ul>
        </div>
        <div class="mb-3">
            <h2 class="font-bold text-xl mb-3">During Daycare</h2>
            <ul class="list-inside list-none flex flex-col gap-3">
                <li>
                    <span class="font-bold">Socialisation -</span> Your dog will
                    have a great chance to socialise, mingle and play with new
                    dogs and humans! We separate dogs based on their size and
                    temperament and do our best to ensure dogs are with others
                    that they will get along with.
                </li>
                <li>
                    <span class="font-bold">Exercise -</span> Daycare gives your
                    dog the best opportunity to expend energy! At GDDC our
                    guests have plenty of space to run around, play, and enjoy
                    being a dog! If you live in an apartment, have a highly
                    energetic pooch, or your pup doesn't get adequate exercise
                    then daycare could be a terrific option.
                </li>
                <li>
                    <span class="font-bold">Photos/Videos -</span> We do our
                    best to post photos and videos each day! Our main focus,
                    however, is on giving your pups the best possible experience
                    at daycare and this may not always be possible. For daily
                    updates, please keep an eye on our
                    <a
                        target="_blank"
                        rel="noopener"
                        href="https://www.instagram.com/gabbadoggydaycare/"
                        aria-label="Find us on Instagram"
                        title="Find us on Instagram"
                        class="link-pink"
                        >Instagram</a
                    >.
                </li>
            </ul>
        </div>
        <div class="mb-3">
            <h2 class="font-bold text-xl mb-3">After Daycare</h2>
            <ul class="list-inside list-none flex flex-col gap-3">
                <li>
                    <span class="font-bold">Picking Up -</span> Please note that
                    we close at {{ this.closeTime }}. We kindly ask that you aim
                    to pick up a little earlier to account for any delays (e.g.
                    traffic). If you are running late, please let us know
                    straight away.
                </li>
                <li>
                    <span class="font-bold">Boo-boos/scratches -</span> We do
                    our absolute best to monitor all dogs throughout the day and
                    make sure everyone gets along, but dogs can be unpredictable
                    and may occasionally nip, bite, or scratch each other during
                    play. We treat any small injuries on-site where possible and
                    will inform you at pickup, or straight away if necessary.
                    However, while we do provide the utmost care and attention
                    to our doggy guests, sometimes scrapes or scratches can go
                    unnoticed.
                </li>
                <li>
                    <span class="font-bold">Extra Food and Rest -</span> As your
                    dog is likely to be more active at daycare than at home, you
                    may find that they need a bit more food than usual. Though
                    we do provide nap time during the day, not all dogs will
                    rest during this time. Your dog may like to take it easy or
                    have a big snooze after their exciting daycare adventure.
                </li>
            </ul>
        </div>
        <router-link
            class="btn-blue inline-block my-5"
            :to="{ name: 'Sign-up', params: { region: getRegion() } }"
            >Sign me up!</router-link
        >
    </div>
</template>

<script>
export default {
    computed: {
        closeTime() {
            return this.$store.state[this.getRegion()].contact.closeTime
        },
    },
}
</script>

<style></style>
