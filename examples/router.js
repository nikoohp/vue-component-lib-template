import Vue from 'vue';
import Router from 'vue-router';
import hljs from 'highlight.js';
import NAV_CONF from './nav.config.json';

const navConf = NAV_CONF.nav;

Vue.use(Router);

let routes = [{
    path: '/',
    redirect: {
        name: 'introduce'
    }
}];

navConf.forEach(item => {
    if (item.groups) {
        item.groups.forEach(group => {
            routes = routes.concat(group.list);
        });
    } else {
        routes = routes.concat(item.children);
    }
});

const addComponent = route => {
    route.forEach(route => {
        if (route.items) {
            addComponent(route.items);
            routes = routes.concat(route.items);
        } else {
            if (route.name === 'site-index') {
                route.component = r => require.ensure([], () => r(require('./docs/introduce.md')));
            } else {
                route.component = r => require.ensure([], () => r(require(`./docs/${route.name}.md`)));
            }
        }
    });
};

addComponent(routes);

const availableRoutes = routes.filter(item => item.path);

const router = new Router({
    routes: availableRoutes
});

router.afterEach(() => {
    Vue.nextTick(() => {
        const blocks = document.querySelectorAll('pre code:not(.hljs)');
        Array.prototype.forEach.call(blocks, hljs.highlightBlock);
    });
});

export default router;
