import {Module} from 'vuex';
import {AppState} from '../../store.d';
import {MainState} from './main.store.d';
import {Projects} from '../projects/projects.d';
import {PROJECTS} from '../projects/projects.const';

export default {
  state: {
    projects: PROJECTS,
  },
  getters: {
    availableProjects(state: MainState): Projects {
      return state.projects;
    },
  },
  strict: true,
  namespaced: true,
} as Module<MainState, AppState>;
