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
                <div class="portrait-header">
                  <div class="portrait-header-logo">
                    <img src="../static/portrait-logo.jpg"/>
                  </div>
                  <div class="portrait-header-label">
                    <div class="portrait-header-id">
                      jae hyun choe
                    </div>
                    <div class="portrait-header-name">
                      jaehyun00917@gmail.com
                    </div>
                  </div>
                </div>
              </el-row>
              <el-row>
                <el-col
                  class="portrait-placeholder-left"
                  :span="4"/>
                <el-col :span="16"/>
                <el-col
                  class="portrait-placeholder-right"
                  :span="4"/>
              </el-row>
              <el-row class="portrait-placeholder-bottom">
                <el-row>
                  <el-button @click="toggleLike">
                    <img
                      v-if="liked"
                      src="./static/instagram-like-filled-icon.svg"/>
                    <img
                      v-else
                      src="./static/instagram-like-outlined-icon.svg"/>
                  </el-button>
                  <el-button
                    class="portrait-comment-button"
                    title="jaehyun00917@gmail.com">
                    <a
                      href="mailto:jaehyun00917@gmail.com"
                      target="_top">
                      <img src="./static/instagram-comment-icon.svg"/>
                    </a>
                  </el-button>
                </el-row>
                <el-row>
                  <span class="portrait-likes">
                    {{likes}} likes
                  </span>
                </el-row>
              </el-row>
            </div>
            <el-row class="about-me-container">
              <span class="about-me-id">
                choe_jaehyun
              </span>
              <span class="about-me-content">
                {{aboutMe}}
              </span>
              <br/>.
              <br/>.
              <br/>.
              <br/>
              <span class="about-me-filter">
                <a
                  role="button"
                  v-for="filter in filters"
                  :key="filter"
                  @click="applyFilter(filter)">
                  #{{filter}}
                </a>
              </span>
            </el-row>
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
                :key="item.id"
                v-if="!filterBy || (filterBy && item.topic.indexOf(filterBy) >= 0)">
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
  private liked = false;
  private likes = 99;

  private aboutMe = aboutMe;

  private filterBy = '';
  private filters = ['all', 'tech', 'finance', 'education', 'math', 'health'];

  private applyFilter(filterBy: string) {
    if (filterBy === 'all') {
      this.filterBy = '';
    } else {
      this.filterBy = filterBy;
    }
  }

  private toggleLike() {
    this.liked = !this.liked;
    this.liked ? this.likes++ : this.likes--;
  }

  private get resume() {
    return resume;
  }
}
</script>

<style lang="scss">
// @import '../../style/constants/toolbar';

// TODO: move these to global style
%portrait-text {
  font-size: 14px;
  color: #262626;
}

%borderless-button {
  border: 0;

  &:hover, &:focus {
    color: #606266;
    background-color: #fff;
  }
}

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
      background: #0b0a08 url('./static/background-image.jpg') no-repeat center;
      z-index: -1;
    }

    .about-content__card {
      margin-top: 40px;
      background-color: rgba(255, 255, 255, 0);

      .el-card__body {
        padding: 0;
      }

      .portrait {
        .portrait-placeholder-top {
          height: 60px;
          background-color: #fff;

          .portrait-header {
            padding: 16px;

            .portrait-header-logo {
              width: 30px;
              height: 30px;
              float: left;

              img {
                width: 100%;
                height: 100%;
                border-radius: 50%;
              }
            }

            .portrait-header-label {
              margin-left: 12px;
              float: left;
            }

            .portrait-header-id {
              @extend %portrait-text;
              font-weight: 600;
            }

            .portrait-header-name {
              @extend %portrait-text;
              font-size: 12px;
            }
          }
        }

        .portrait-placeholder-left, .portrait-placeholder-right {
          height: 350px;
          background-color: #fff;
        }

        .portrait-placeholder-right {
          float: right;
        }

        .portrait-placeholder-bottom {
          padding: 0 16px;
          background-color: #fff;

          .el-button {
            @extend %borderless-button;
            width: 40px;
            height: 40px;
            margin: 0;
            padding: 8px;
            vertical-align: baseline;

            img {
              width: 24px;
              height: 24px;
            }
          }

          .portrait-comment-button {
            margin-left: -8px;
          }

          .portrait-likes {
            @extend %portrait-text;
            margin-left: 8px;
            font-weight: 600;
            vertical-align: baseline;
          }
        }
      }

      .about-me-container {
        padding: 8px 24px;
        background-color: #fff;

        .about-me-id {
          @extend %portrait-text;
          margin-right: .3em;
          font-weight: 600;
        }

        .about-me-content {
          font-size: 14px;
          font-weight: 400;
        }

        .about-me-filter {
          font-size: 14px;
          font-weight: 400;

          a {
            color: #003569;
            text-decoration: none;
            cursor: pointer;
          }
        }
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
