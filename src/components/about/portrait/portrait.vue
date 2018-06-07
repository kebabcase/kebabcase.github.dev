<template>
  <el-card class="about-portrait__card">
    <div class="portrait">
      <el-row class="portrait-placeholder-top">
        <div class="portrait-header">
          <div class="portrait-header-logo">
            <img src="../../static/portrait-logo.jpg"/>
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
      <el-row @dblclick.native="toggleLike">
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
              src="../static/instagram-like-filled-icon.svg"/>
            <img
              v-else
              src="../static/instagram-like-outlined-icon.svg"/>
          </el-button>
          <el-button
            class="portrait-comment-button"
            title="jaehyun00917@gmail.com">
            <a
              href="mailto:jaehyun00917@gmail.com"
              target="_top">
              <img src="../static/instagram-comment-icon.svg"/>
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
          @click="$emit('update:filterBy', filter)">
          #{{filter}}
        </a>
      </span>
    </el-row>
  </el-card>
</template>

<script lang="ts">
import {Vue, Component, Prop} from 'vue-property-decorator';
import aboutMe from './about-me';

@Component
export default class AboutPortrait extends Vue {
  @Prop({default: 'all'}) private filterBy: string;

  private aboutMe = aboutMe;

  private filters = ['all', 'tech', 'finance', 'education', 'math', 'health'];

  private liked = false;
  private likes = 99;

  private toggleLike() {
    this.liked = !this.liked;
    this.liked ? this.likes++ : this.likes--;
  }
}
</script>

<style lang="scss">
@import '../../../style/button/button';
@import '../../../style/text/text';

.about-portrait__card {
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
</style>
