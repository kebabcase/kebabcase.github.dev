<template>
  <div class="about-container">
    <main-toolbar mode="about"/>

    <div class="about-content">
      <div class="background-image"></div>
      <el-row
        type="flex"
        justify="center">
        <el-col
          :sm="24"
          :md="18"
          :lg="12">
          <about-portrait :filter-by.sync="filterBy"/>
          <el-card
            class="about-section"
            v-for="section in resume"
            :key="section.id">
            <div class="section-title">
              {{section.label}}
            </div>
            <el-collapse>
              <el-collapse-item
                v-for="item in section.content"
                :key="item.id"
                v-if="!filterBy || (filterBy && (filterBy === 'all' || item.topic.indexOf(filterBy) >= 0))">
                <template slot="title">
                  <span class="section-item-label">
                    {{item.label}}
                  </span>
                  <span class="hidden-sm-and-down resume-section-item-at">
                    <a :href="item.link">{{item.at}}</a>
                  </span>
                  <span
                    class="hidden-sm-and-down resume-section-item-time"
                    v-if="item.time && item.duration">
                    {{item.time}} • {{item.duration}}
                  </span>
                </template>
                <el-row class="hidden-md-and-up resume-section-item-at-time-mobile">
                  <span class="hidden-md-and-up resume-section-item-at">
                    <a :href="item.link">{{item.at}}</a>
                  </span>
                  <span
                    class="resume-section-item-time"
                    v-if="item.time && item.duration">
                    {{item.time}} • {{item.duration}}
                  </span>
                </el-row>
                <resume-section-item :content="item.content"/>
              </el-collapse-item>
            </el-collapse>
          </el-card>
          <el-card class="about-section">
            <div class="section-title">
              More About Me
            </div>
            <el-row class="social-media">
              <el-button circle>
                <a
                  href="https://www.linkedin.com/in/jae-hyun-choe-8693b83b/"
                  role="button"
                  target="_blank">
                  <img src="../static/social-media-logo-linkedin.svg"/>
                </a>
              </el-button>
              <el-button circle>
                <a
                  href="https://www.facebook.com/choejaehyun"
                  role="button"
                  target="_blank">
                  <img src="../static/social-media-logo-facebook.svg"/>
                </a>
              </el-button>
              <el-button circle>
                <a
                  href="https://www.instagram.com/choe_jaehyun/"
                  role="button"
                  target="_blank">
                  <img src="../static/social-media-logo-instagram.svg"/>
                </a>
              </el-button>
              <el-button circle>
                <a
                  href="https://www.youtube.com/channel/UC4UqN1QOEYDGr9rTMhIM-Aw"
                  role="button"
                  target="_blank">
                  <img src="../static/social-media-logo-youtube.svg"/>
                </a>
              </el-button>
              <el-button circle>
                <a
                  href="https://plus.google.com/u/0/+JaeHyunChoe"
                  role="button"
                  target="_blank">
                  <img src="../static/social-media-logo-googleplus.svg"/>
                </a>
              </el-button>
            </el-row>
          </el-card>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script lang="ts">
import {Vue, Component} from 'vue-property-decorator';
import mainToolbar from '../toolbar/toolbar.vue';
import resume from './resume';
import aboutPortrait from './portrait/portrait.vue';
import resumeSectionItem from './resume-section-item.vue';

@Component({
  components: {
    mainToolbar,
    aboutPortrait,
    resumeSectionItem,
  },
})
export default class About extends Vue {
  private filterBy = 'all';

  private mounted() {
    this.$message({
      message: 'Website under construction. More content will be added soon :)',
      type: 'warning',
      duration: 5000,
    });
  }

  private get resume() {
    return resume;
  }
}
</script>

<style lang="scss">
// @import '../../style/constants/toolbar';
@import '../../style/button/button';

.about-container {
  height: 100%;

  .about-content {
    height: 100%;
    // margin-top: $toolbarHeight;

    .background-image {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 1000px;
      background: #0b0a08 url('./static/background-image.jpg') no-repeat center;
      z-index: -1;
    }

    .resume-section-item-time {
      float: right;
      margin-right: 8px;
    }

    .resume-section-item-at-time-mobile {
      margin-bottom: 8px;
    }

    .about-section {
      margin: 24px 0 8px;

      .section-title {
        margin-bottom: 8px;
      }

      .section-item-label {
        font-size: 14px;
        font-weight: bold;
      }

      .social-media {
        .el-button {
          @extend %borderless-button;
          width: 40px;
          height: 40px;
          padding: 8px;

          img {
            width: 24px;
            height: 24px;
          }
        }
      }
    }
  }
}
</style>
