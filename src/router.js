import { createRouter, createWebHistory } from 'vue-router'
import PhotoApp from './components/PhotoApp.vue'
import PhotoView from './components/PhotoView.vue'
export const router = createRouter({
    history:createWebHistory(),
    routes:[
        {
            path:'/',
            redirect:'albums/1',
            component:PhotoApp,
            children: [{
                path:'albums/:id',
                component: PhotoView
            }
            ]
        }
    ]
})