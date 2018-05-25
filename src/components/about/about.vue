<template>
  <div class="about-container">
    <main-toolbar mode="about"/>

    <div class="about-content">
      <div class="background-image"></div>
      <el-row>
        <el-col
          :offset="6"
          :span="12">
          <el-card class="about-content__card">
            <div class="portrait">
              <el-row class="portrait-placeholder-top">
                <h1>Jae Hyun Choe</h1>
              </el-row>
              <el-row>
                <el-col
                  class="portrait-placeholder-left"
                  :span="8"/>
                <el-col :span="8">
                  Portrait
                </el-col>
                <el-col
                  class="portrait-placeholder-right"
                  :span="8"/>
              </el-row>
              <el-row class="portrait-placeholder-bottom"/>
            </div>
            <div
              class="about-me-content"
              v-html="compiledMarkdown"/>
          </el-card>
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
                :key="item.id">
                <template slot="title">
                  <span class="section-item-label">
                    {{item.label}}
                  </span>
                  <span class="resume-section-item-at">
                    <a :href="item.link">{{item.at}}</a>
                  </span>
                  <span class="resume-section-item-time">
                    {{item.time}} <sub>{{item.duration}}</sub>
                  </span>
                </template>
                <resume-section-item :content="item.content"/>
              </el-collapse-item>
            </el-collapse>
          </el-card>
          <el-card class="about-section">
            <div class="section-title">
              Social Media
            </div>
            <el-row class="social-media">
              <el-button circle>
                <a
                  href="https://www.linkedin.com/in/jae-hyun-choe-8693b83b/"
                  target="_blank">
                  <img src="../static/social-media-logo-linkedin.svg"/>
                </a>
              </el-button>
              <el-button circle>
                <a
                  href="https://www.facebook.com/choejaehyun"
                  target="_blank">
                  <img src="../static/social-media-logo-facebook.svg"/>
                </a>
              </el-button>
              <el-button circle>
                <a
                  href="https://www.instagram.com/choe_jaehyun/"
                  target="_blank">
                  <img src="../static/social-media-logo-instagram.svg"/>
                </a>
              </el-button>
              <el-button circle>
                <a
                  href="https://www.youtube.com/channel/UC4UqN1QOEYDGr9rTMhIM-Aw"
                  target="_blank">
                  <img src="../static/social-media-logo-youtube.svg"/>
                </a>
              </el-button>
              <el-button circle>
                <a
                  href="https://plus.google.com/u/0/+JaeHyunChoe"
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
import {markdownWriter} from '../../services';
import aboutMe from './about-me';
import resume from './resume';
import resumeSectionItem from './resume-section-item.vue';

@Component({
  components: {
    mainToolbar,
    resumeSectionItem,
  },
})
export default class About extends Vue {
  private get resume() {
    return resume;
  }

  private get compiledMarkdown(): string {
    return markdownWriter.render(aboutMe);
  }
}
</script>

<style lang="scss">
// @import '../../style/constants/toolbar';

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
      height: 100%;
      background: #0b0a08 url('../static/background-image.jpg') no-repeat center;
      z-index: -1;
    }

    .about-content__card {
      background-color: rgba(255, 255, 255, 0);

      .el-card__body {
        padding: 0;
      }

      .portrait {
        .portrait-placeholder-top {
          text-align: center;
        }

        .portrait-placeholder-top {
          height: 100px;
          background-color: #fff;
        }

        .portrait-placeholder-left, .portrait-placeholder-right {
          height: 350px;
          background-color: #fff;
        }

        .portrait-placeholder-bottom {
          height: 50px;
          background-color: #fff;
        }
      }

      .about-me-content {
        padding: 20px;
        background-color: #fff;
      }
    }

    .about-section {
      margin: 20px 0 10px;

      .section-title {
        margin-bottom: 10px;
      }

      .section-item-label {
        font-size: 15px;
        font-weight: bold;
      }

      .social-media {
        .el-button {
          padding: 0;

          img {
            width: 40px;
            height: 40px;
          }
        }
      }
    }
  }
}
</style>
