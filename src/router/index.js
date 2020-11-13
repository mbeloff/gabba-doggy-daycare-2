import Vue from "vue";
import VueRouter from "vue-router";
const Privacy = () => import("../views/Privacy.vue")
const Daycare = () => import("../views/Daycare.vue")
const SignUp = () => import("../views/SignUp.vue")
const NotFound = () => import("../views/NotFound.vue")
const Contact = () => import("../views/Contact.vue")
const Vax = () => import("../views/Vax.vue")
import Home from '../views/Home.vue'

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact
  },
  {
    path: "/register",
    name: "Register",
    component: Home
  },
  {
    path: "/vaccinations",
    name: "Vaccinations",
    component: Vax
  },
  {
    path: "/sign-up",
    name: "Sign-up",
    component: SignUp
  },
  {
    path: "/daycare",
    name: "Daycare",
    component: Daycare
  },
  {
    path: "/privacy",
    name: "Privacy",
    component: Privacy
  },
  {
    path:"/*",
    name: "NotFound",
    component: NotFound
  }
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return { selector: to.hash };
    }
    if (savedPosition) {
      return savedPosition;
    }
    return { x: 0, y: 0 };
  }
});

export default router;