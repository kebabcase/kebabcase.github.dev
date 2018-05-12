<template>
  <el-tabs
    v-if="currentImageName && currentImageName.length"
    v-model="activeTab">
    <el-tab-pane
      v-for="(filterMetadata, filterType) in FILTER_METADATA"
      :key="filterType"
      :label="filterMetadata.label"
      :name="filterType">
      <el-slider
        class="slider-editor__slider"
        v-model="currentFilters[filterType]"
        :min="filterMetadata.range.min"
        :max="filterMetadata.range.max"
        :format-tooltip="formatTooltip(filterType)"
        @change="onFilterChanged(filterType)"
        show-input/>
    </el-tab-pane>
  </el-tabs>
</template>

<script lang="ts">
import * as _ from 'lodash';
import {Vue, Component} from 'vue-property-decorator';
import {Mutation, Getter, namespace} from 'vuex-class';
import {ImageFilter} from '../filters/filters.d';
import {FILTER_METADATA} from '../filters/filter.const';
import {Filters} from '../filters/filters';

const ImageFilterMutation = namespace('imageFilter', Mutation);
const ImageFilterGetter = namespace('imageFilter', Getter);

@Component
export default class SliderEditor extends Vue {
  private FILTER_METADATA = FILTER_METADATA;

  private activeTab = '';

  private currentImageName = '';
  private currentFilters = this.getDefaultFilters();

  @ImageFilterMutation('updateFilter')
  private updateFilter: (payload: {filterType: string, filterValue: number, imageName: string}) => void;
  @ImageFilterGetter('selectedImage') private selectedImage: File;
  @ImageFilterGetter('filters') private filters: {[key: string]: Filters};

  private mounted() {
    this.$store.subscribe((mutation) => {
      if (mutation.type === 'imageFilter/selectImage') {
        this.init(mutation.payload);
      }
    });
  }

  private init(image: File | undefined) {
    if (image && image.name) {
      this.activeTab = 'blur';
      this.currentImageName = image.name;

      if (this.filters[image.name]) {
        this.currentFilters = this.filters[image.name].getValues();
      } else {
        this.currentFilters = this.getDefaultFilters();
      }
    }
  }

  private formatTooltip(type: string) {
    return (value: number) => value;
  }

  private onFilterChanged(filterType: string) {
    this.updateFilter({
      filterType,
      filterValue: this.currentFilters[filterType],
      imageName: this.currentImageName,
    });
  }

  private getDefaultFilters(): ImageFilter {
    return new Filters().getValues();
  }
}
</script>

<style>
.slider-editor__slider {
  margin: 0 20px;
}
</style>
