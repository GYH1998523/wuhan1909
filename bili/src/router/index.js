import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
import Guide from "@/views/Guide.vue"

const routes = [
  {
    path: "/",
    redirect: {
      name: "guide"
    }
  }, {
    path: "/guide",
    name: "guide",
    component: Guide
  },
  {
    path: "/main",
    name: "main",
    component:() => import("@/views/Main.vue"),
    children: [
      {
        path: "",
        redirect: {
          name: "movie"
        },
      },
      {
        path: "/movie",
        name: "movie",
        component: ()=>import("@/views/Movie")
      },
      {
        path: "/cinema",
        name: "cinema",
        component: ()=>import("@/views/Cinema.vue")
      },
      {
        path: "/good",
        name: "good",
        component: ()=>import("@/views/Good.vue")
      },
      {
        path: "/mine",
        name: "mine",
        component: ()=>import("@/views/Mine.vue")
      },
      {
        path: "/video",
        name: "video",
        component: ()=>import("@/views/Video.vue")
      },
      {
        path: "*",
        redirect: {
          name: "movie"
        }
      }
    ],
  },
  {
    path: "/login",
    name: "login",
    component:  ()=>import("@/views/Login.vue")
  },
  {
    path: "/changepwd",
    name: "changepwd",
    component:  ()=>import("@/views/Changepwd.vue")
  },
  {
    path: "/city",
    name: "city",
    component:  ()=>import("@/views/City.vue")
  },
  {
    path: "/shopcar",
    name: "shopcar",
    component:  ()=>import("@/views/Shopcar.vue")
  },
  {
    path: "/search",
    name: "search",
    component:  ()=>import("@/views/Search.vue")
  },
  {
    path: "/Searchinfo",
    name: "Searchinfo",
    component:  ()=>import("@/views/Searchinfo.vue")
  },
  {
    path: "*",
    redirect: { name: "guide" }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
