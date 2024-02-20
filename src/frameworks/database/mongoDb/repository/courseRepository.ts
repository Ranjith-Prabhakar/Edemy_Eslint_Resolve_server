import { ICourseRepository } from "../../../../useCasese/interface/repository/courseRepository";
import { IModuleVideoBody } from "../../../../useCasese/interface/request/course";
import { ICourseResponse } from "../../../../useCasese/interface/request_And_Response/course";

import {
  getCourseInProgress,
  addCourseData,
  updateCourse,
  addModuleVideos,
  findByName,
  getCourses,
  getCoursesInRequest,
  approveOrRejectVideo,
} from "./courseRepository/index";

export class CourseRepository implements ICourseRepository {
  constructor() {}
  async getCourseInProgress(instructor: string): Promise<ICourseResponse> {
    try {
      return await getCourseInProgress(instructor);
    } catch (error: any) {
      throw error;
    }
  }
  // 88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
  async addCourseData(courseData: ICourseRepository): Promise<ICourseResponse> {
    try {
      return await addCourseData(courseData);
    } catch (error: any) {
      throw error;
    }
  }
  // 88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888

  async updateCourse(
    instructor: string,
    datum: { [key: string]: string }
  ): Promise<ICourseResponse> {
    try {
      return await updateCourse(instructor, datum);
    } catch (error: any) {
      throw error;
    }
  }
  // 88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
  async addModuleVideos(
    data: IModuleVideoBody,
    instructor: string
  ): Promise<ICourseResponse> {
    try {
      return await addModuleVideos(data, instructor);
    } catch (error: any) {
      throw error;
    }
  }
  // 88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
  async findByName(courseName: string): Promise<string | void> {
    try {
      return await findByName(courseName);
    } catch (error: any) {
      throw error;
    }
  }
  // 88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
  async getCourses(): Promise<void | ICourseResponse> {
    try {
      return await getCourses();
    } catch (error: any) {
      throw error;
    }
  }

  // 88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
  async getCoursesInRequest(): Promise<void | ICourseResponse> {
    try {
      return await getCoursesInRequest();
    } catch (error: any) {
      throw error;
    }
  }
  // 88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
  async approveOrRejectVideo(courseId: string, action: string): Promise<void | ICourseResponse> {
    try {
      return await approveOrRejectVideo(courseId, action);
    } catch (error:any) {
      throw error
    }
  }
}
