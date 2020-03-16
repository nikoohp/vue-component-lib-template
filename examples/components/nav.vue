<template>
  <div class="page-nav">
    <div class="group-container" v-for="(nav, idx) in navs" :key="idx">
      <p class="page-nav-title">{{nav.name}}</p>

      <template v-if="nav.children">
        <div
          class="page-nav-items"
          v-for="(child, index) in nav.children"
          :key="index"
        >
          <template v-if="child.desc">
            <router-link
              v-if="child.name"
              :class="$route.name === child.name ? 'active' : ''"
              :to="{name: child.name}"
            >{{child.desc}}</router-link>
          </template>
        </div>
      </template>

      <template v-else-if="nav.groups">

        <div class="group-list" v-for="(group, gindex) in nav.groups" :key="gindex">
          <p class="group-name">{{group.groupName}}</p>

          <div
            class="page-nav-items"
            v-for="(item, index) in group.list"
            :key="index"
          >
            <template v-if="item.desc">
              <router-link
                v-if="item.name"
                :class="$route.name === item.name ? 'active' : ''"
                :to="{name: item.name}"
              >{{item.desc}}</router-link>
            </template>
          </div>
        </div>
      </template>

    </div>
  </div>
</template>

<script>
import navConf from "@/nav.config.json";
export default {
  data() {
    return {
      navs: navConf.nav
    };
  }
};
</script>

<style lang="scss">
.page-nav {
  display: inline-block;
  margin: 32px 0;
  padding: 0;
  color: #333;
  background-color: #fff;
  z-index: 99;
  .group-container {
    margin-bottom: 32px;
  }
  .page-nav-title {
    font-size: 16px;
    line-height: 40px;
    font-weight: bold;
  }
  .page-nav-items {
    font-size: 14px;
    font-weight: normal;
    line-height: 1.8;
    a {
      display: block;
      position: relative;
      padding: 8px 24px;
      color: #333;
      font-weight: normal;
      line-height: 1.5;
      transition: .15s ease-out;
      cursor: pointer;
      &:hover {
        color: #2888fb;
      }
      &.active,
      &:active {
        color: #3274e6;
      }
    }
  }
  .group-name {
    font-size: 12px;
    color: #999;
    line-height: 26px;
    margin-top: 15px;
    padding: 0 24px;
  }
}
</style>
