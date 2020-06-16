
import { localStorageService } from './localStorage.service';

const setSelectedCourse = (course) => {
    localStorageService.setObject('courseSelected', course);
}

const getSelectedCourse = () => {
    return localStorageService.getObject('courseSelected');
}

const setSelectedTheme = (theme) => {
    localStorageService.setObject('themeSelected', theme);
}

const getSelectedThem = () => {
    return localStorageService.getObject('themeSelected');
}

export const sessionService = {
    setSelectedCourse,
    getSelectedCourse,
    setSelectedTheme,
    getSelectedThem
}