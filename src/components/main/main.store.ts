import {Module} from 'vuex';
import {AppState} from '../../store.d';
import {MainState} from './main.store.d';
import {ProjectsMetadata} from '../../metadata/projects-metadata.d';
import {PROJECTS_METADATA} from '../../metadata/projects-metadata.const';

export default {
  state: {
    projects: PROJECTS_METADATA,
  },
  getters: {
    availableProjects(state: MainState): ProjectsMetadata {
      return state.projects;
    },
  },
  strict: true,
  namespaced: true,
} as Module<MainState, AppState>;
